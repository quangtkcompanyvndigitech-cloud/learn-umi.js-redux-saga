import { Button } from "@/components/admin/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/admin/ui/popover";
import { Link } from "umi";

export default function AdminHeaderUserProfile() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex items-center gap-2 hover:bg-gray-200 p-2 rounded-xl cursor-pointer duration-500">
          <div className="w-[40px] h-[40px] bg-[#00999B] rounded-full flex items-center justify-center">
            <i className="fa-solid fa-user text-white text-[14px]"></i>
          </div>
          <div className="flex flex-col gap-y-1 whitespace-nowrap info-user">
            <span className="font-bold text-[16px]">Nguyễn Văn A</span>
            <span className="text-[14px]">nguyenvana@gmail.com</span>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent align="start">
        <nav>
          <ul className="list-none p-0 text-[16px]">
          <li className="w-full flex">
              <Link
                to="/admin/dashboard"
                className="no-underline w-full relative text-[black] duration-500 hover:bg-gray-200 px-5 py-3"
              >
                <i className="fa-solid fa-house"></i>
                <span className="ml-2 whitespace-nowrap my-auto top-1/2 -translate-y-1/2 z-10 left-20 ">
                  Dashboard
                </span>
              </Link>
            </li>
            <li className="w-full flex">
              <Link
                to="/admin/profile"
                className="no-underline w-full relative text-[black] duration-500 hover:bg-gray-200 px-5 py-3"
              >
                <i className="fa-solid fa-user"></i>
                <span className="ml-2 whitespace-nowrap my-auto top-1/2 -translate-y-1/2 z-10 left-20 ">
                  Profile
                </span>
              </Link>
            </li>
            <li className="w-full flex">
              <Link
                to="/admin/dashboard/change-password"
                className="no-underline w-full relative text-[black] duration-500 hover:bg-gray-200 px-5 py-3"
              >
                <i className="fa-solid fa-key"></i>
                <span className="ml-2 whitespace-nowrap my-auto top-1/2 -translate-y-1/2 z-10 left-20 ">
                  Change Password
                </span>
              </Link>
            </li>
            <li className="w-full flex">
              <Link
                to="/admin/logout"
                className="no-underline w-full relative text-[black] duration-500 hover:bg-gray-200 px-5 py-3"
              >
                <i className="fa-solid fa-right-from-bracket"></i>
                <span className="ml-2 whitespace-nowrap my-auto top-1/2 -translate-y-1/2 z-10 left-20 ">
                  Logout
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </PopoverContent>
    </Popover>
  );
}
