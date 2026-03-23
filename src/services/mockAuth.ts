export async function mockLogin(email: string, password: string) {
  await new Promise((r) => setTimeout(r, 400));
  if (!email || password.length < 3) {
    throw new Error("Invalid email or password");
  }
  return {
    token: `token-${Date.now()}`,
    user: { id: "1", email, name: email.split("@")[0] || "user" },
  };
}

export async function mockRegister(
  email: string,
  password: string,
  name: string,
  phone?: string
) {
  await new Promise((r) => setTimeout(r, 400));
  if (!email || password.length < 3 || !name.trim()) {
    throw new Error("Thiếu thông tin");
  }
  const extra = phone ? ` (${phone})` : "";
  return { message: `Đã tạo tài khoản ${email}${extra}` };
}
