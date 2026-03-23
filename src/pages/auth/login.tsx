import { useEffect, useState } from "react";
import { Link, history } from "umi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "@/store/slices/authSlice";
import { loginSchema, type LoginValues } from "./schemas";
import "./style.css";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch<any>();
  const { loading, error, user } = useSelector((s: any) => s.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  useEffect(() => {
    if (user) history.push("/");
  }, [user]);

  const onSubmit = (data: LoginValues) => {
    dispatch(loginRequest({ email: data.email, password: data.password }));
  };

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
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                {error && (
                  <p className="auth-form-message text-danger" role="alert">
                    {error}
                  </p>
                )}
                <div className="m-b30">
                  <label className="label-title auth-label" htmlFor="login-email">
                    Email Address
                  </label>
                  <input
                    id="login-email"
                    autoComplete="email"
                    className={`form-control auth-input fs-14 ${errors.email ? "is-invalid" : ""}`}
                    placeholder="Email Address"
                    type="email"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="auth-field-error">{errors.email.message}</p>
                  )}
                </div>
                <div className="m-b15">
                  <label className="label-title auth-label" htmlFor="login-password">
                    Password
                  </label>
                  <div className="secure-input ">
                    <input
                      id="login-password"
                      autoComplete="current-password"
                      type={showPassword ? "text" : "password"}
                      className={`form-control dz-password auth-input ${errors.password ? "is-invalid" : ""}`}
                      placeholder="Password"
                      {...register("password")}
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
                  {errors.password && (
                    <p className="auth-field-error">{errors.password.message}</p>
                  )}
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
                        className="form-check-label fs-14"
                        htmlFor="basic_checkbox_1"
                      >
                        Remember Me
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <a className="text-primary fs-14" href="forget-password.html">
                      Forgot Password
                    </a>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-secondary btnhover text-uppercase me-2 sign-btn"
                    disabled={loading}
                  >
                    {loading ? "…" : "Sign In"}
                  </button>
                  <Link
                    to="/auth/register"
                    className="btn btn-outline-secondary btnhover text-uppercase"
                  >
                    Register
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
