import { defineConfig } from "umi";

export default defineConfig({
  npmClient: "yarn",
  routes: [
    {
      path: "/",
      component: "@/layouts/client/index.tsx",
      routes: [{ path: "", component: "index.tsx" }],
    },
    {
      path: "/auth",
      component: "@/layouts/client/auth.tsx",
      routes: [
        { path: "login", component: "auth/login.tsx" },
        { path: "register", component: "auth/register.tsx" },
      ],
    },
    { path: "*", component: "@/pages/404.tsx" },
  ],
});
