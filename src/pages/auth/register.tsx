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
  const headingStyle = { fontSize: 26, lineHeight: 1.3 };
  const sectionTitleStyle = { fontSize: 22, lineHeight: 1.35 };
  const bodyTextStyle = { fontSize: 16, lineHeight: 1.5 };
  const labelStyle = { fontSize: 16, lineHeight: 1.4 };
  const inputStyle = { fontSize: 16, lineHeight: 1.5 };
  const buttonTextStyle = { fontSize: 16, lineHeight: 1.4 };

  return (
    // <div>
    //   <h2>Đăng ký</h2>
    //   <form
    //     onSubmit={(e) => {
    //       e.preventDefault();
    //       dispatch(registerRequest({ email, password, name })); // tức là gửi action đến reducer, cụ thể là dispatch(registerRequest({ email, password, name })) sẽ gửi action đến reducer, và reducer sẽ xử lý action đó
    //     }}
    //     style={{ display: "grid", gap: 8, maxWidth: 320 }}
    //   >
    //     <input value={name} onChange={(e) => setName(e.target.value)} required placeholder="Tên" />
    //     <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" />
    //     <input
    //       type="password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //       minLength={3}
    //       required
    //       placeholder="Mật khẩu"
    //     />
    //     <button type="submit" disabled={loading}>
    //       {loading ? "…" : "Đăng ký"}
    //     </button>
    //   </form>
    //   {error && <p style={{ color: "crimson" }}>{error}</p>}
    //   {registerOk && <p style={{ color: "green" }}>{registerOk}</p>}
    //   <p>
    //     <Link to="/auth/login">Đăng nhập</Link>
    //   </p>
    // </div>
    <>
      <div className="page-content bg-light">
        <section className="px-3">
          <div className="row align-center-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6 start-side-content">
              <div className="dz-bnr-inr-entry">
                <h1 style={headingStyle}>Registration</h1>
                <nav aria-label="breadcrumb text-align-start" className="breadcrumb-row">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/"> Home</a></li>
                    <li className="breadcrumb-item">Shop Registration</li>
                  </ul>
                </nav>
              </div>
              <div className="registration-media">
                <img src="/client/images/registration/pic3.png" alt="/" />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 end-side-content">
              <div className="login-area">
                <h2 className="text-secondary text-center" style={sectionTitleStyle}>Registration Now</h2>
                <p className="text-center m-b30" style={bodyTextStyle}>Welcome please registration to your account</p>
                <form>
                  <div className="m-b25">
                    <label className="label-title" style={labelStyle}>Username</label>
                    <input name="dzName" required className="form-control" placeholder="Username" type="text" style={inputStyle} />
                  </div>
                  <div className="m-b25">
                    <label className="label-title" style={labelStyle}>Email Address</label>
                    <input name="dzName" required className="form-control" placeholder="Email Address" type="email" style={inputStyle} />
                  </div>
                  <div className="m-b40">
                    <label className="label-title" style={labelStyle}>Password</label>
                    <div className="secure-input ">
                      <input type="password" name="password" className="form-control dz-password" placeholder="Password" style={inputStyle} />
                      <div className="show-pass">
                        <i className="eye-open fa-regular fa-eye" />
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <a href="registration.html" className="btn btn-secondary btnhover text-uppercase me-2" style={buttonTextStyle}>Register</a>
                    <a href="login.html" className="btn btn-outline-secondary btnhover text-uppercase" style={buttonTextStyle}>Sign In</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
