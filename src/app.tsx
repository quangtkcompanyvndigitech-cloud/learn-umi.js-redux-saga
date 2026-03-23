import type { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

export function rootContainer(container: ReactNode) {
  return <Provider store={store}>{container}</Provider>;
}
