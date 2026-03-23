import { Link, Outlet } from "umi";

export default function AuthLayout() {
  return (
    <div style={{ padding: 16, fontFamily: "system-ui" }}>
      {/* <p>
        <Link to="/">Trang chủ</Link>
      </p> */}
      <Outlet />
    </div>
  );
}
