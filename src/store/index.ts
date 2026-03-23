import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { authSlice } from "./slices/authSlice";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: { auth: authSlice.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware), // serializableCheck: false tức là không kiểm tra xem object có thể serialize được không, serialize là chuyển đổi object thành string để lưu vào localStorage, concat(sagaMiddleware) tức là kết hợp sagaMiddleware vào middleware của redux
});

sagaMiddleware.run(rootSaga);