import { useEffect, useState } from "react";
import { Link, history } from "umi";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "@/store/slices/authSlice";
import "./style.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch<any>();
  const { loading, error, user } = useSelector((s: any) => s.auth);

  useEffect(() => {
    if (user) history.push("/");
  }, [user]);

  return (
    <div className="auth-page page-content bg-light">
      <section className="px-3">
        <div className="row align-center-center">
          <div className="col-xxl-6 col-xl-6 col-lg-6 start-side-content">
            <div className="dz-bnr-inr-entry">
              <h1 className="auth-page-heading">Login</h1>
              <nav
                aria-label="breadcrumb text-align-start"
                className="breadcrumb-row"
              >
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/"> Home</a>
                  </li>
                  <li className="breadcrumb-item">Login</li>
                </ul>
              </nav>
            </div>
            <div className="registration-media">
              <img src="/client/images/registration/pic3.png" alt="/" />
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 end-side-content">
            <div className="login-area">
              <h2 className="auth-section-title text-secondary text-center">
                Login
              </h2>
              <p className="auth-body-text text-center m-b30">
                welcome please login to your account
              </p>
              <form>
                <div className="m-b30">
                  <label className="label-title auth-label">Email Address</label>
                  <input
                    name="dzName"
                    required
                    className="form-control auth-input"
                    placeholder="Email Address"
                    type="email"
                  />
                </div>
                <div className="m-b15">
                  <label className="label-title auth-label">Password</label>
                  <div className="secure-input ">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      className="form-control dz-password auth-input"
                      placeholder="Password"
                    />
                    <button
                      type="button"
                      className="show-pass border-0 bg-transparent"
                      onClick={() => setShowPassword((prev) => !prev)}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      <i
                        className={`fa-regular ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                      />
                    </button>
                  </div>
                </div>
                <div className="form-row d-flex justify-content-between m-b30">
                  <div className="form-group">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="basic_checkbox_1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="basic_checkbox_1"
                      >
                        Remember Me
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <a className="text-primary" href="forget-password.html">
                      Forgot Password
                    </a>
                  </div>
                </div>
                <div className="text-center">
                  <a
                    href="account-dashboard.html"
                    className="btn btn-secondary btnhover text-uppercase me-2 sign-btn"
                  >
                    Sign In
                  </a>
                  <a
                    href="registration.html"
                    className="btn btn-outline-secondary btnhover text-uppercase"
                  >
                    Register
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
