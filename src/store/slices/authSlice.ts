import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  user: null as any,
  token: null as string | null,
  loading: false,
  error: null as string | null,
  registerOk: null as string | null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest(state, _) { // dấu _ tức là không dùng action
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    loginFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    registerRequest(state, _) {
      state.loading = true;
      state.error = null;
      state.registerOk = null;
    },
    registerSuccess(state, action: PayloadAction<string>) {
      state.loading = false;
      state.registerOk = action.payload;
    },
    registerFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.user = null;
      state.token = null;
    },
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  registerRequest,
  registerSuccess,
  registerFailure,
  logout,
} = authSlice.actions;
