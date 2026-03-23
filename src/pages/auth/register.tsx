import { useState } from "react";
import { Link, history } from "umi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./schemas";
import "./style.css";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<any>(null);
  const [registerOk, setRegisterOk] = useState<any>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: any) => {
    setLoading(true);
    setSubmitError(null);
    setRegisterOk(null);
    try {
      const user = {
        fullName: data.fullName,
        phone: data.phone,
        email: data.email,
      };
      const userValue = encodeURIComponent(JSON.stringify(user));

      document.cookie = `auth_user=${userValue}; path=/; max-age=604800; samesite=lax`;

      setRegisterOk("Đăng ký thành công");
      history.push("/admin/dashboard");
    } catch (err: any) {
      setSubmitError(err?.message || "Đăng ký thất bại");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page page-content bg-light">
      <section className="px-3">
        <div className="row align-center-center">
          <div className="col-xxl-6 col-xl-6 col-lg-6 end-side-content">
            <div className="login-area">
              <h2 className="auth-section-title text-secondary text-center">
                Registration Now
              </h2>
              <p className="auth-body-text text-center m-b30">
                Welcome please registration to your account
              </p>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                {submitError && (
                  <p className="auth-form-message text-danger" role="alert">
                    {submitError}
                  </p>
                )}
                {registerOk && (
                  <p
                    className="auth-form-message auth-form-message--ok"
                    role="status"
                  >
                    {registerOk}
                  </p>
                )}
                <div className="m-b25">
                  <label className="label-title auth-label" htmlFor="reg-fullName">
                    Full Name
                  </label>
                  <input
                    id="reg-fullName"
                    autoComplete="name"
                    className={`form-control auth-input ${errors.fullName ? "is-invalid" : ""}`}
                    placeholder="Full name"
                    type="text"
                    {...register("fullName")}
                  />
                  {errors.fullName && (
                    <p className="auth-field-error">{errors.fullName.message as any}</p>
                  )}
                </div>
                <div className="m-b25">
                  <label className="label-title auth-label" htmlFor="reg-phone">
                    Phone Number
                  </label>
                  <input
                    id="reg-phone"
                    autoComplete="tel"
                    className={`form-control auth-input ${errors.phone ? "is-invalid" : ""}`}
                    placeholder="E.g. 0912345678"
                    type="tel"
                    inputMode="numeric"
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <p className="auth-field-error">{errors.phone.message as any}</p>
                  )}
                </div>
                <div className="m-b25">
                  <label className="label-title auth-label" htmlFor="reg-email">
                    Email
                  </label>
                  <input
                    id="reg-email"
                    autoComplete="email"
                    className={`form-control auth-input ${errors.email ? "is-invalid" : ""}`}
                    placeholder="Email"
                    type="email"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="auth-field-error">{errors.email.message as any}</p>
                  )}
                </div>
                <div className="m-b25">
                  <label
                    className="label-title auth-label"
                    htmlFor="reg-password"
                  >
                    Password
                  </label>
                  <div className="secure-input ">
                    <input
                      id="reg-password"
                      autoComplete="new-password"
                      type={showPassword ? "text" : "password"}
                      className={`form-control dz-password auth-input ${errors.password ? "is-invalid" : ""}`}
                      placeholder="Password"
                      {...register("password")}
                    />
                    <button
                      type="button"
                      className="show-pass border-0 bg-transparent"
                      onClick={() => setShowPassword((p) => !p)}
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
                    <p className="auth-field-error">
                      {errors.password.message as any}
                    </p>
                  )}
                </div>
                <div className="m-b40">
                  <label
                    className="label-title auth-label"
                    htmlFor="reg-confirm"
                  >
                    Confirm Password
                  </label>
                  <div className="secure-input ">
                    <input
                      id="reg-confirm"
                      autoComplete="new-password"
                      type={showConfirm ? "text" : "password"}
                      className={`form-control dz-password auth-input ${errors.confirmPassword ? "is-invalid" : ""}`}
                      placeholder="Re-enter password"
                      {...register("confirmPassword")}
                    />
                    <button
                      type="button"
                      className="show-pass border-0 bg-transparent"
                      onClick={() => setShowConfirm((p) => !p)}
                      aria-label={
                        showConfirm ? "Hide password" : "Show password"
                      }
                    >
                      <i
                        className={`fa-regular ${showConfirm ? "fa-eye-slash" : "fa-eye"}`}
                      />
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="auth-field-error">
                      {errors.confirmPassword.message as any}
                    </p>
                  )}
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-secondary btnhover text-uppercase me-2"
                    disabled={loading}
                  >
                    {loading ? "…" : "Register"}
                  </button>
                  <Link
                    to="/auth/login"
                    className="btn btn-outline-secondary btnhover text-uppercase"
                  >
                    Sign In
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
