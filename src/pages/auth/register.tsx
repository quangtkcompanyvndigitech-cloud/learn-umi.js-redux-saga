import { useState } from "react";
import { Link } from "umi";
import { useDispatch, useSelector } from "react-redux";
import { registerRequest } from "@/store/slices/authSlice";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch(); // dùng để dispatch action, tức là gửi action đến reducer
  const { loading, error, registerOk } = useSelector((s: any) => s.auth); // useSelector để lấy state từ reducer

  return (
    <div>
      <h2>Đăng ký</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(registerRequest({ email, password, name })); // tức là gửi action đến reducer, cụ thể là dispatch(registerRequest({ email, password, name })) sẽ gửi action đến reducer, và reducer sẽ xử lý action đó
        }}
        style={{ display: "grid", gap: 8, maxWidth: 320 }}
      >
        <input value={name} onChange={(e) => setName(e.target.value)} required placeholder="Tên" />
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
          {loading ? "…" : "Đăng ký"}
        </button>
      </form>
      {error && <p style={{ color: "crimson" }}>{error}</p>}
      {registerOk && <p style={{ color: "green" }}>{registerOk}</p>}
      <p>
        <Link to="/auth/login">Đăng nhập</Link>
      </p>
    </div>
  );
}
