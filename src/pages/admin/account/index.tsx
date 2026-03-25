import { useState } from "react";
import { Button } from "@/components/admin/ui/button";
import { Calendar } from "@/components/admin/ui/calendar";
import "./style.css";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/admin/ui/popover";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/admin/ui/table";

export default function () {
  const [fromDate, setFromDate] = useState<Date | undefined>();
  const [toDate, setToDate] = useState<Date | undefined>();

  return (
    <div className="space-y-4" account-page="">
      <div className="rounded-sm border border-slate-200 bg-white p-4">
        <div
          className="mb-4 flex flex-wrap items-center gap-2"
          filter-account=""
        >
          
          <div className="grid grid-cols-2 lg:grid-cols-8 w-full gap-3">
          <div className="w-full lg:w-auto col-span-2">
            <div className="block w-full ">
              <div className="!relative input-search w-full ">
                <input
                  className="w-max rounded-sm border border-slate-200 px-3 pr-10 text-sm"
                  placeholder="Tìm kiếm..."
                />
                <button className="text-slate-400 h-[32px] cursor-pointer px-2 button-search">
                  <i className="fa-solid fa-magnifying-glass" />
                </button>
              </div>
            </div>
          </div>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="justify-start font-normal">
                  {fromDate ? fromDate.toLocaleDateString("vi-VN") : "Từ ngày"}
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto overflow-hidden p-0"
                align="start"
              >
                <Calendar
                  mode="single"
                  selected={fromDate}
                  defaultMonth={fromDate}
                  captionLayout="dropdown"
                  onSelect={setFromDate}
                />
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="justify-start font-normal">
                  {toDate ? toDate.toLocaleDateString("vi-VN") : "Đến ngày"}
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto overflow-hidden p-0"
                align="start"
              >
                <Calendar
                  mode="single"
                  selected={toDate}
                  defaultMonth={toDate}
                  captionLayout="dropdown"
                  onSelect={setToDate}
                />
              </PopoverContent>
            </Popover>
            <select className="h-10 rounded-sm border border-slate-200 px-3 text-sm text-slate-500 w-full">
            <option>Loại tài khoản</option>
            <option>Khách hàng</option>
            <option>Nhân viên</option>
            <option>Quản trị viên</option>
          </select>
          <select className="h-10 rounded-sm border border-slate-200 px-3 text-sm text-slate-500 w-full">
            <option>Trạng thái</option>
            <option>Đã kích hoạt</option>
            <option>Chưa kích hoạt</option>
          </select>
          <button className="col-span-2 ml-auto bg-[#0ea5ad] px-4 text-sm font-medium text-white text-[14px] rounded-[10px] py-[7px] cursor-pointer button-add-account mt-[10px] lg:mt-0">
            <i className="fa-regular fa-square-plus mr-2 text-[14px]" />
            Thêm tài khoản mới
          </button>
          </div>

          

          
        </div>

        <Table className="min-w-[1000px] whitespace-nowrap">
          <TableHeader className="bg-[#FAFAFA]">
            <TableRow>
              <TableHead className="px-4 py-3 font-semibold text-nowrap">
                Thứ tự
              </TableHead>
              <TableHead className="px-4 py-3 font-semibold text-nowrap">
                Ảnh đại diện
              </TableHead>
              <TableHead className="px-4 py-3 font-semibold text-nowrap">
                Họ và tên
              </TableHead>
              <TableHead className="px-4 py-3 font-semibold text-nowrap">
                Thông tin liên hệ
              </TableHead>
              <TableHead className="px-4 py-3 font-semibold text-nowrap">
                Trạng thái tài khoản
              </TableHead>
              <TableHead className="px-4 py-3 font-semibold text-nowrap">
                Ngày tạo
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="px-4 py-4 text-center">1</TableCell>
              <TableCell className="px-4 py-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-200 text-slate-500">
                  <i className="fa-regular fa-user text-xl" />
                </div>
              </TableCell>
              <TableCell className="px-4 py-4 z-10 bg-white">
                <div className="flex flex-col gap-3">
                  <span className="">Nguyễn Văn A</span>
                  <span className="rounded-sm bg-[#1d9f3a] px-2 py-1 text-xs text-white text-nowrap w-max">
                    Khách hàng
                  </span>
                </div>
              </TableCell>
              <TableCell className="px-4 py-4 text-[#1f9ec8]">
                <i className="fa-regular fa-envelope mr-2 text-slate-500" />
                nghidy@adora.edu.vn
              </TableCell>
              <TableCell className="px-4 py-4">
                <span className="rounded-sm bg-[#62c8e8] px-2 py-1 text-xs text-white text-nowrap">
                  Đã kích hoạt
                </span>
              </TableCell>
              <TableCell className="px-4 py-4 text-slate-600">
                23-03-2026
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="px-4 py-4 text-center">2</TableCell>
              <TableCell className="px-4 py-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-200 text-slate-500">
                  <i className="fa-regular fa-user text-xl" />
                </div>
              </TableCell>
              <TableCell className="px-4 py-4 z-10">
                <div className="flex flex-col gap-3">
                  <span className="">Nguyễn Văn B</span>
                  <span className="rounded-sm bg-[#1d9f3a] px-2 py-1 text-xs text-white text-nowrap w-max">
                    Khách hàng
                  </span>
                </div>
              </TableCell>
              <TableCell className="px-4 py-4 text-[#1f9ec8]">
                <i className="fa-regular fa-envelope mr-2 text-slate-500" />
                nghidy@adora.edu.vn
              </TableCell>
              <TableCell className="px-4 py-4">
                <span className="rounded-sm bg-[#62c8e8] px-2 py-1 text-xs text-white text-nowrap">
                  Đã kích hoạt
                </span>
              </TableCell>
              <TableCell className="px-4 py-4 text-slate-600">
                23-03-2026
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
