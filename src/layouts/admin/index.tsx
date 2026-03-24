import { Outlet } from "umi";
import "./tailwind.css";
import "./style.css";
import Header from "@/components/admin/Header";
import { SidebarProvider } from "@/components/admin/ui/sidebar";
import { AppSidebar } from "@/components/admin/app-sidebar";

export default function () {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.3.2/css/flag-icons.min.css"
      />
      <link rel="stylesheet" href="/client/icons/fontawesome/css/all.min.css" />
      <SidebarProvider>
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="px-6 py-5 bg-[#F0F2F5] flex-1">
            <Outlet />
          </main>
        </div>
      </SidebarProvider>
    </>
  );
}
