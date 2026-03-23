import { useEffect, useState } from "react";
import { Link, history } from "umi";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "@/store/slices/authSlice";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<any>();
  const { loading, error, user } = useSelector((s: any) => s.auth);

  useEffect(() => {
    if (user) history.push("/");
  }, [user]);

  return (
    <div>
      <h2>Đăng nhập</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(loginRequest({ email, password }));
        }}
        style={{ display: "grid", gap: 8, maxWidth: 320 }}
      >
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength={3}
          required
          placeholder="Mật khẩu"
        />
        <button type="submit" disabled={loading}>
          {loading ? "…" : "Đăng nhập"}
        </button>
      </form>
      {error && <p style={{ color: "crimson" }}>{error}</p>}
      <p>
        <Link to="/auth/register">Đăng ký</Link>
      </p>
    </div>
  );
}
