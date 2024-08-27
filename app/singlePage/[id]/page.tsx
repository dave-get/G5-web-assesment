"use client";

import SinglePage from "../../components/singlepageComponent/pageComponent";
import { Provider } from "react-redux";
import { store } from "@/app/service/store/store";

const PageComponent = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div className="">
      <Provider store={store}>
        <SinglePage id={id} />
      </Provider>
    </div>
  );
};

export default PageComponent;
