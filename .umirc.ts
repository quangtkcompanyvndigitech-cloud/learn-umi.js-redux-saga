import { defineConfig } from "umi";

export default defineConfig({
  npmClient: "yarn",
  routes: [
    {
      path: "/",
      component: "@/layouts/index.tsx",
      routes: [
        { path: "", component: "index.tsx" },
        { path: "auth/login", component: "auth/login.tsx" },
        { path: "auth/register", component: "auth/register.tsx" },
      ],
    },
    { path: "*", component: "@/pages/404.tsx" },
  ],
});
