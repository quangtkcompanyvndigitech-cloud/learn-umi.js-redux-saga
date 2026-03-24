import { defineConfig } from "umi";

export default defineConfig({
  npmClient: "yarn",
  routes: [
    {
      path: "/",
      component: "@/layouts/client/index.tsx",
      routes: [
        { path: "", component: "index.tsx" },
        { path: "auth/login", component: "auth/login.tsx" },
        { path: "auth/register", component: "auth/register.tsx" },
      ],
    },
    {
      path: "/admin",
      component: "@/layouts/admin/index.tsx",
      routes: [
        { path: "dashboard", component: "admin/dashboard/index.tsx" },
        { path: "profile", component: "admin/profile/index.tsx" },
      ],
    },
    { path: "*", component: "@/pages/404.tsx" },
  ],
});
