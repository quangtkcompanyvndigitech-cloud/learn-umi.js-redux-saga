import { useEffect, useMemo, useState } from "react";
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

import { MOCK_ACCOUNTS } from "./mockAccounts";

export default function () {
  const typeBadgeClass = (type: string) => {
    if (type === "Khách hàng") return "bg-[#1d9f3a] text-white";
    if (type === "Nhân viên") return "bg-[#3b82f6] text-white";
    if (type === "Quản trị viên") return "bg-[#7c3aed] text-white";
    return "bg-slate-500 text-white";
  };

  const statusBadgeClass = (status: string) => {
    if (status === "Đã kích hoạt") return "bg-[#62c8e8] text-white";
    if (status === "Chưa kích hoạt") return "bg-[#94a3b8] text-white";
    return "bg-slate-500 text-white";
  };

  const [fromDate, setFromDate] = useState<Date | undefined>();
  const [toDate, setToDate] = useState<Date | undefined>();
  const [accountType, setAccountType] = useState<string>("all");
  const [accountStatus, setAccountStatus] = useState<string>("all");
  const [searchText, setSearchText] = useState("");
  const [rows, setRows] = useState(MOCK_ACCOUNTS);

  const filterRows = useMemo(() => {
    const q = searchText.trim().toLowerCase();
    const from = fromDate ? fromDate.getTime() : undefined;
    const to = toDate ? toDate.getTime() : undefined;

    return MOCK_ACCOUNTS.filter((u) => {
      if (accountType !== "all" && u.type !== accountType) return false;
      if (accountStatus !== "all" && u.status !== accountStatus) return false;
      if (from !== undefined && u.createdAt.getTime() < from) return false;
      if (to !== undefined && u.createdAt.getTime() > to) return false;
      if (
        q &&
        !(
          u.name.toLowerCase().includes(q) ||
          u.email.toLowerCase().includes(q)
        )
      )
        return false;
      return true;
    });
  }, [accountStatus, accountType, fromDate, searchText, toDate]);

  const onSubmit = (e: any) => {
    e.preventDefault();
    setRows(filterRows);
  };

  useEffect(() => {
    setRows(filterRows);
    // Chỉ tự áp dụng khi đổi filter (không áp dụng khi đang gõ search)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fromDate, toDate, accountType, accountStatus]);

  const formatDate = (d: Date) => {
    const dd = String(d.getDate()).padStart(2, "0");
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const yyyy = d.getFullYear();
    return `${dd}-${mm}-${yyyy}`;
  };

  return (
    <div className="space-y-4" account-page="">
      <div className="rounded-sm border border-slate-200 bg-white p-4">
        <form
          className="mb-4 flex flex-wrap items-center gap-2"
          filter-account=""
          onSubmit={onSubmit}
        >
          
          <div className="grid grid-cols-2 lg:grid-cols-8 w-full gap-3">
          <div className="w-full lg:w-auto col-span-2">
            <div className="block w-full ">
              <div className="!relative input-search w-full ">
                <input
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="w-max rounded-sm border border-slate-200 px-3 pr-10 text-sm"
                  placeholder="Tìm kiếm..."
                />
                <button type="submit" className="text-slate-400 h-[32px] cursor-pointer px-2 button-search">
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
            <select
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
              className="h-10 rounded-sm border border-slate-200 px-3 text-sm text-slate-500 w-full"
            >
              <option value="all">Tất cả</option>
              <option value="Khách hàng">Khách hàng</option>
              <option value="Nhân viên">Nhân viên</option>
              <option value="Quản trị viên">Quản trị viên</option>
            </select>
            <select
              value={accountStatus}
              onChange={(e) => setAccountStatus(e.target.value)}
              className="h-10 rounded-sm border border-slate-200 px-3 text-sm text-slate-500 w-full"
            >
              <option value="all">Tất cả</option>
              <option value="Đã kích hoạt">Đã kích hoạt</option>
              <option value="Chưa kích hoạt">Chưa kích hoạt</option>
            </select>
            <button
              type="button"
              className="col-span-2 ml-auto bg-[#0ea5ad] px-4 text-sm font-medium text-white text-[14px] rounded-[10px] py-[7px] cursor-pointer button-add-account mt-[10px] lg:mt-0"
            >
            <i className="fa-regular fa-square-plus mr-2 text-[14px]" />
            Thêm tài khoản mới
          </button>
          </div>

          
          
          
        </form>

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
            {rows.map((u, idx) => (
              <TableRow key={u.id}>
                <TableCell className="px-4 py-4 text-center">
                  {idx + 1}
                </TableCell>
                <TableCell className="px-4 py-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-200 text-slate-500">
                    <i className="fa-regular fa-user text-xl" />
                  </div>
                </TableCell>
                <TableCell className="px-4 py-4 z-10 bg-white">
                  <div className="flex flex-col gap-3">
                    <span>{u.name}</span>
                    <span className={`rounded-sm px-2 py-1 text-xs text-nowrap w-max ${typeBadgeClass(u.type)}`}>
                      {u.type}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="px-4 py-4 text-[#1f9ec8]">
                  <i className="fa-regular fa-envelope mr-2 text-slate-500" />
                  {u.email}
                </TableCell>
                <TableCell className="px-4 py-4">
                  <span
                    className={`rounded-sm px-2 py-1 text-xs text-white text-nowrap ${statusBadgeClass(u.status)}`}
                  >
                    {u.status}
                  </span>
                </TableCell>
                <TableCell className="px-4 py-4 text-slate-600">
                  {formatDate(u.createdAt)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
