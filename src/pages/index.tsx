import { Link } from "umi";
import { useSelector } from "react-redux";

export default function HomePage() {
  const { user } = useSelector((s: any) => s.auth);

  return (
    <div>
      <h1>Umi + Saga</h1>
      {!user && (
        <p>
          <Link to="/auth/login">Đăng nhập</Link> · <Link to="/auth/register">Đăng ký</Link>
        </p>
      )}
      {user && <p>Đã đăng nhập: {user.name}</p>}
    </div>
  );
}
