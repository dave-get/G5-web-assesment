"use client";
import { Provider } from "react-redux";
import { store } from "../service/store/store";
export const StoreProvider = (props: { children: React.ReactNode }) => {
  return <Provider store={store}>{props.children}</Provider>;
};
