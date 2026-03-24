import { Link, useLocation } from "umi";
import AdminHeaderUserProfile from "./AdminHeaderUserProfile";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  useSidebar,
} from "@/components/admin/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/admin/ui/tooltip";

export default function Sider() {
  const { toggleSidebar, state } = useSidebar();
  const location = useLocation();
  const isCollapsed = state === "collapsed";
  const isActive = location.pathname === "/admin/dashboard";

  return (
    <Sidebar
      collapsible="icon"
      className="flex h-[100vh] flex-col bg-[#F0F2F5] duration-300"
    >
      <SidebarHeader className="border-b bg-white px-2 py-4 ">
        {!isCollapsed ? (
          <div className="mx-auto flex w-[140px] flex-col">
            <img
              src="https://digiai.vndigitech.com/Logo-Digitech.png"
              alt="logo"
              className="w-full h-auto"
            />
            <span className="mt-2 text-center text-[12px] font-semibold uppercase text-[#FF6B35] text-nowrap">
              Digitech Solution
            </span>
          </div>
        ) : (
          <div className="mx-auto w-10 rounded-xl bg-[#111] text-white flex items-center justify-center h-[27px]">
            <i className="fa-solid fa-briefcase" />
          </div>
        )}
      </SidebarHeader>

      <SidebarContent className="flex-1 bg-[#E4F4F4] p-2">
        <nav>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to="/admin/dashboard"
                className={`flex h-11 items-center rounded-xl px-3 no-underline transition ${
                  isCollapsed ? "justify-center" : "gap-2"
                } ${
                  isActive
                    ? "bg-[#0ea5ad] text-white"
                    : "text-[#1f2937] hover:bg-[#d6ecee]"
                }`}
              >
                <i className="fa-solid fa-house text-[14px]" />
                {!isCollapsed ? (
                  <span className="text-[13px] font-semibold uppercase">
                    Dashboard
                  </span>
                ) : null}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              side="right"
              align="center"
              hidden={!isCollapsed}
              className="border-none bg-[#111827] text-white"
            >
              Dashboard
            </TooltipContent>
          </Tooltip>
        </nav>
      </SidebarContent>
      <SidebarFooter className="px-2 pb-2">
        <div className="my-2 h-px w-full bg-gray-300"></div>
        <div className="flex flex-col gap-y-2 md:hidden">
          <AdminHeaderUserProfile />
        </div>
        <button
          type="button"
          onClick={toggleSidebar}
          className={`flex w-full cursor-pointer rounded-xl border-none bg-transparent py-3 text-[#1f2937] hover:bg-[#d6ecee] ${
            isCollapsed ? "justify-center" : "px-3"
          }`}
        >
          <i className="fa-solid fa-outdent text-[16px]" />
        </button>
      </SidebarFooter>
    </Sidebar>
  );
}
