"use client";
import SinglePage from "../../components/singlepageComponent/pageComponent";

const PageComponent = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div className="">
      <SinglePage id={id} />
    </div>
  );
};

export default PageComponent;
