

import { useState } from "react";
import { Input } from "@/components/admin/ui/input";
import { Button } from "@/components/admin/ui/button";
import { Calendar } from "@/components/admin/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/admin/ui/popover";

export default function Profile() {
  const [tab, setTab] = useState<"profile" | "security">("profile");
  const [dob, setDob] = useState<Date | undefined>();

  return (
    <div className="space-y-4">
      {/* <div className="text-sm text-slate-500">Dashboard / /accounts/profile</div> */}

      <div className="rounded-sm border border-slate-200 bg-white p-5">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="w-full border-r border-slate-200 pr-4 md:w-[250px]">
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
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_280px]">
                <div className="space-y-4">
                  <h2 className="text-3xl font-semibold text-slate-800">Thông tin hồ sơ</h2>
                  <div className="space-y-1">
                    <label className="text-sm text-slate-700">
                      <span className="text-red-500">*</span> Họ
                    </label>
                    <Input />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm text-slate-700">
                      <span className="text-red-500">*</span> Tên
                    </label>
                    <Input />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm text-slate-700">
                      <span className="text-red-500">*</span> Email
                    </label>
                    <Input
                      value="admin@gmail.com"
                      readOnly
                      disabled
                      className="bg-slate-100 text-slate-600"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm text-slate-700">Số điện thoại</label>
                    <Input disabled className="bg-slate-100 text-slate-600" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm text-slate-700">Ngày sinh</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="ghost"
                          className="w-full justify-start font-normal outline-gray-200 outline-[1px]"
                        >
                          {dob ? dob.toLocaleDateString("vi-VN") : "Chọn ngày sinh"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={dob}
                          defaultMonth={dob}
                          captionLayout="dropdown"
                          onSelect={setDob}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm text-slate-700">Địa chỉ</label>
                    <Input />
                  </div>
                  <div className="pt-1">
                    <Button className="bg-[#0ea5ad] hover:bg-[#0b97a0]">Cập nhật</Button>
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
              </div>
            ) : (
              <div className="max-w-[620px] rounded-sm border border-slate-200 p-6">
                <h2 className="mb-4 text-3xl font-semibold text-slate-800">Bảo mật</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-[170px_1fr]">
                    <label className="text-sm text-slate-700">
                      <span className="text-red-500">*</span> Mật khẩu hiện tại
                    </label>
                    <Input type="password" />
                  </div>
                  <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-[170px_1fr]">
                    <label className="text-sm text-slate-700">
                      <span className="text-red-500">*</span> Mật khẩu mới
                    </label>
                    <Input type="password" />
                  </div>
                  <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-[170px_1fr]">
                    <label className="text-sm text-slate-700">
                      <span className="text-red-500">*</span> Xác nhận mật khẩu
                    </label>
                    <Input type="password" />
                  </div>
                  <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-[170px_1fr]">
                    <span className="text-sm text-slate-700">Hành động</span>
                    <Button className="w-fit bg-[#0ea5ad] hover:bg-[#0b97a0]">Đổi mật khẩu</Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}