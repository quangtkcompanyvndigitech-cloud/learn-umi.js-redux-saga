import { Link, Outlet } from "umi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/slices/authSlice";

export default function ClientLayout() {
  const { user, token } = useSelector((s: any) => s.auth); // useSelector để lấy state từ reducer
  const dispatch = useDispatch(); // dùng để dispatch action, tức là gửi action đến reducer

  return (
    <div style={{ padding: 16, fontFamily: "system-ui" }}>
      <nav style={{ display: "flex", gap: 12, marginBottom: 16 }}>
        <Link to="/">Trang chủ</Link>
        {!user && <Link to="/auth/login">Đăng nhập</Link>}
        {!user && <Link to="/auth/register">Đăng ký</Link>}
        {user && (
          <button type="button" onClick={() => dispatch(logout())}>
            Đăng xuất
          </button>
        )}
      </nav>
      {user && (
        <p style={{ marginBottom: 8 }}>
          {user.name} ({user.email}) — <code>{token}</code>
        </p>
      )}
      <Outlet />
    </div>
  );
}
