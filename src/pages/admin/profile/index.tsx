import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/admin/ui/input";
import { Button } from "@/components/admin/ui/button";
import { Calendar } from "@/components/admin/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/admin/ui/popover";

const profileSchema = z.object({
  ho: z.string().min(1, "Vui lòng nhập họ"),
  ten: z.string().min(1, "Vui lòng nhập tên"),
  ngaySinh: z.date({ message: "Vui lòng chọn ngày sinh" }),
  diaChi: z.string().min(1, "Vui lòng nhập địa chỉ"),
});

const securitySchema = z
  .object({
    matKhauHienTai: z.string().min(1, "Vui lòng nhập mật khẩu hiện tại"),
    matKhauMoi: z
      .string()
      .min(8, "Mật khẩu mới tối thiểu 8 ký tự")
      .refine((v) => {
        const groups = [
          /\d/.test(v),
          /[a-z]/.test(v),
          /[A-Z]/.test(v),
          /[^A-Za-z0-9]/.test(v),
        ].filter(Boolean).length;
        return groups >= 3;
      }, "Mật khẩu phải có ít nhất 3 loại ký tự: số, chữ thường, chữ hoa, ký tự đặc biệt"),
    xacNhanMatKhau: z.string().min(1, "Vui lòng xác nhận mật khẩu"),
  })
  .refine((v) => v.matKhauMoi === v.xacNhanMatKhau, {
    message: "Xác nhận mật khẩu không khớp",
    path: ["xacNhanMatKhau"],
  });

export default function Profile() {
  const [tab, setTab] = useState<"profile" | "security">("profile");
  const [profileOk, setProfileOk] = useState("");
  const [securityOk, setSecurityOk] = useState("");

  const {
    register: registerProfile,
    handleSubmit: submitProfile,
    setValue,
    watch,
    formState: { errors: profileErrors },
  } = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      ho: "",
      ten: "",
      email: "admin@gmail.com",
      soDienThoai: "",
      ngaySinh: undefined,
      diaChi: "",
    } as any,
  });

  const {
    register: registerSecurity,
    handleSubmit: submitSecurity,
    formState: { errors: securityErrors },
  } = useForm({
    resolver: zodResolver(securitySchema),
    defaultValues: {
      matKhauHienTai: "",
      matKhauMoi: "",
      xacNhanMatKhau: "",
    },
  });

  const ngaySinh = watch("ngaySinh") as Date | undefined;

  const onSubmitProfile = (data: any) => {
    setProfileOk("Cập nhật hồ sơ thành công");
    setSecurityOk("");
    console.log("profile-submit", data);
  };

  const onSubmitSecurity = (data: any) => {
    setSecurityOk("Đổi mật khẩu thành công");
    setProfileOk("");
    console.log("security-submit", data);
  };

  return (
    <div className="space-y-4">
      <div className="rounded-sm border border-slate-200 bg-white p-5">
        <div className="flex flex-col xl:flex-row gap-4">
          <div className="border-r border-slate-200 pr-4 flex lg:flex-col">
            <button
              type="button"
              onClick={() => setTab("profile")}
              className={`border-none  mb-2 w-full px-4 py-3 text-left text-sm font-semibold uppercase ${
                tab === "profile" ? "bg-[#d9e9ea] text-slate-800" : "text-slate-700"
              }`}
            >
              Thông tin hồ sơ
            </button>
            <button
              type="button"
              onClick={() => setTab("security")}
              className={`border-none w-full px-4 py-3 text-left text-sm font-semibold uppercase ${
                tab === "security" ? "bg-[#d9e9ea] text-slate-800" : "text-slate-700"
              }`}
            >
              Bảo mật
            </button>
          </div>

          <div className="flex-1">
            {tab === "profile" ? (
              <form
                onSubmit={submitProfile(onSubmitProfile)}
                className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_280px]"
              >
                <div className="space-y-4">
                  <h2 className="text-[25px] mt-0 font-semibold text-slate-800 text-nowrap">Thông tin hồ sơ</h2>
                  <div className="space-y-1 flex flex-col w-full">
                    <label className="text-sm text-slate-700">
                      <span className="text-red-500">*</span> Họ
                    </label>
                    <Input {...registerProfile("ho")} />
                    {profileErrors.ho && (
                      <p className="text-xs text-red-500">{profileErrors.ho.message as any}</p>
                    )}
                  </div>
                  <div className="space-y-1 flex flex-col w-full">
                    <label className="text-sm text-slate-700">
                      <span className="text-red-500">*</span> Tên
                    </label>
                    <Input {...registerProfile("ten")} />
                    {profileErrors.ten && (
                      <p className="text-xs text-red-500">{profileErrors.ten.message as any}</p>
                    )}
                  </div>
                  <div className="space-y-1 flex flex-col w-full">
                    <label className="text-sm text-slate-700">Email</label>
                    <Input
                      value="admin@gmail.com"
                      readOnly
                      disabled
                      className="bg-slate-100 text-slate-600"
                    />
                  </div>
                  <div className="space-y-1 flex flex-col w-full">
                    <label className="text-sm text-slate-700">Số điện thoại</label>
                    <Input disabled className="bg-slate-100 text-slate-600" value="0912345678" />
                  </div>
                  <div className="space-y-1 flex flex-col w-full">
                    <label className="text-sm text-slate-700">
                      <span className="text-red-500">*</span> Ngày sinh
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="ghost"
                          className="w-full justify-start font-normal outline-gray-200 outline-[1px]"
                        >
                          {ngaySinh ? ngaySinh.toLocaleDateString("vi-VN") : "Chọn ngày sinh"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={ngaySinh}
                          defaultMonth={ngaySinh}
                          captionLayout="dropdown"
                          onSelect={(date) =>
                            setValue("ngaySinh", date, { shouldValidate: true })
                          }
                        />
                      </PopoverContent>
                    </Popover>
                    {profileErrors.ngaySinh && (
                      <p className="text-xs text-red-500">
                        {profileErrors.ngaySinh.message as any}
                      </p>
                    )}
                  </div>
                  <div className="space-y-1 flex flex-col w-full">
                    <label className="text-sm text-slate-700">
                      <span className="text-red-500">*</span> Địa chỉ
                    </label>
                    <Input {...registerProfile("diaChi")} />
                    {profileErrors.diaChi && (
                      <p className="text-xs text-red-500">
                        {profileErrors.diaChi.message as any}
                      </p>
                    )}
                  </div>
                  <div className="pt-1 flex items-center gap-3">
                    <Button type="submit" className="bg-[#0ea5ad] hover:bg-[#0b97a0]">
                      Cập nhật
                    </Button>
                    {profileOk && <p className="text-sm text-emerald-600">{profileOk}</p>}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex h-[300px] items-center justify-center border border-slate-300 bg-slate-50 text-sm text-slate-500">
                    Avatar
                  </div>
                  <div className="flex justify-center">
                    <Button variant="outline" className="border-gray-200">
                      Chỉnh sửa ảnh
                    </Button>
                  </div>
                </div>
              </form>
            ) : (
              <form
                onSubmit={submitSecurity(onSubmitSecurity)}
                className="max-w-[620px] rounded-sm border border-slate-200"
              >
                <h2 className="text-nowrap mb-4 text-[25px] font-semibold text-slate-800 mt-0">Bảo mật</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-[170px_1fr]">
                    <label className="text-sm text-slate-700">
                      <span className="text-red-500">*</span> Mật khẩu hiện tại
                    </label>
                    <div>
                      <Input type="password" {...registerSecurity("matKhauHienTai")} />
                      {securityErrors.matKhauHienTai && (
                        <p className="mt-1 text-xs text-red-500">
                          {securityErrors.matKhauHienTai.message as any}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-[170px_1fr]">
                    <label className="text-sm text-slate-700">
                      <span className="text-red-500">*</span> Mật khẩu mới
                    </label>
                    <div>
                      <Input type="password" {...registerSecurity("matKhauMoi")} />
                      {securityErrors.matKhauMoi && (
                        <p className="mt-1 text-xs text-red-500">
                          {securityErrors.matKhauMoi.message as any}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-[170px_1fr]">
                    <label className="text-sm text-slate-700">
                      <span className="text-red-500">*</span> Xác nhận mật khẩu
                    </label>
                    <div>
                      <Input type="password" {...registerSecurity("xacNhanMatKhau")} />
                      {securityErrors.xacNhanMatKhau && (
                        <p className="mt-1 text-xs text-red-500">
                          {securityErrors.xacNhanMatKhau.message as any}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-[170px_1fr]">
                    <span className="text-sm text-slate-700">Hành động</span>
                    <div className="flex items-center gap-3">
                      <Button type="submit" className="w-fit bg-[#0ea5ad] hover:bg-[#0b97a0]">
                        Đổi mật khẩu
                      </Button>
                      {securityOk && <p className="text-sm text-emerald-600">{securityOk}</p>}
                    </div>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}