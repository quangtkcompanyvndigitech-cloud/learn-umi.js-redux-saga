import { call, put, takeLatest } from "redux-saga/effects";
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  registerRequest,
  registerSuccess,
  registerFailure,
} from "../slices/authSlice";
import { mockLogin, mockRegister } from "@/services/mockAuth";

function* loginWorker({ payload }: any): any {
  try {
    const res: any = yield call(mockLogin, payload.email, payload.password);
    yield put(loginSuccess(res));
  } catch (e: any) {
    yield put(loginFailure(e?.message ?? "Lỗi"));
  }
}

function* registerWorker({ payload }: any): any{
  try {
    const res = yield call(
      mockRegister,
      payload.email,
      payload.password,
      payload.name,
      payload.phone
    );
    yield put(registerSuccess(res.message));
  } catch (e: any) {
    yield put(registerFailure(e?.message ?? "Lỗi"));
  }
}

export default function* rootSaga() {
  yield takeLatest(loginRequest.type, loginWorker); // takeLatest tức là khi action loginRequest được xử lý, thì sẽ chạy hàm loginWorker
  yield takeLatest(registerRequest.type, registerWorker);
}
