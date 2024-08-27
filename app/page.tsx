"use client";
import { Provider } from "react-redux";
import Blog from "./blogPage/page";
import { store } from "./service/store/store";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <div>
        <Provider store={store}>
          <Blog />
        </Provider>
      </div>
    </div>
  );
}
