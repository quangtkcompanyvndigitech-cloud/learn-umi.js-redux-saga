import { mockRegister } from "./mockAuth";

type RegisterPayload = {
  fullName: string;
  phone?: string;
  email: string;
  password: string;
};

export async function registerApi(payload: RegisterPayload) {
  // Demo fail nhanh: email chứa "fail" sẽ trả lỗi.
  if (payload.email.toLowerCase().includes("fail")) {
    throw new Error("Email đã tồn tại");
  }

  const result = await mockRegister(
    payload.email,
    payload.password,
    payload.fullName,
    payload.phone
  );

  return {
    token: `demo-token-${Date.now()}`,
    message: result.message,
  };
}
