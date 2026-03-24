import AdminHeaderUserProfile from "./AdminHeaderUserProfile";
import { Button } from "@/components/admin/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/admin/ui/popover";
import { useSidebar } from "@/components/admin/ui/sidebar";

export default function Header() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="flex justify-between items-center px-6 py-0 ">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={toggleSidebar}
          className="cursor-pointer bg-inherit border-none h-full p-5 rounded-xl hover:bg-gray-200 duration-500"
        >
          <i className="fa-solid fa-outdent cursor-pointer text-[18px]"></i>
        </button>
        <h1 className="font-normal text-[18px]">Dashboard</h1>
      </div>

      <div className="items-center gap-5 hidden md:flex">
        <AdminHeaderUserProfile />
        <Popover>
          <PopoverTrigger asChild>
            <div>
              <i className="fa-solid fa-globe text-[14px] opacity-50 hover:opacity-100 cursor-pointer"></i>
            </div>
          </PopoverTrigger>
          <PopoverContent align="start">
            <nav>
              <ul className="list-none p-0 text-[16px]">
                <li className="flex items-center gap-2 px-5 py-3 hover:bg-gray-200 duration-500 cursor-pointer">
                  <span className="fi fi-vn"></span>
                  <span>Tiếng Việt</span>
                </li>
                <li className="flex items-center gap-2 px-5 py-3 hover:bg-gray-200 duration-500 cursor-pointer">
                  <span className="fi fi-us"></span>
                  <span>Tiếng Anh</span>
                </li>
              </ul>
            </nav>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger asChild>
            <div>
              <i className="fa-solid fa-bell text-[14px] opacity-50 hover:opacity-100 cursor-pointer"></i>
            </div>
          </PopoverTrigger>
          <PopoverContent align="start">
            <nav>
              <ul className="list-none p-0 text-[16px]">
                <li className="flex items-center gap-2 px-5 py-3 hover:bg-gray-200 duration-500 cursor-pointer">
                  <span className="fi fi-vn"></span>
                  <span>Digitech Xin Chào!</span>
                </li>
              </ul>
            </nav>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
}
