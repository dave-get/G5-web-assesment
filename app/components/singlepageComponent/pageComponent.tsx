"use client";
import React from "react";
import RelatedBlogCard from "./relatedBlog";
import Image from "next/image";
import { useGetAllBlogsByIdQuery } from "@/app/service/getBlogs";

const SinglePage = ({ id }: { id: string }) => {
  let { data } = useGetAllBlogsByIdQuery(id);
  console.log(data);

  return (
    <div className="">
      <div className="flex flex-col py-20 px-40 space-y-4 items-center">
        <div className="flex flex-col items-center">
          <p className="text-3xl">{data?.title}</p>
          <p>Programming, tech | 6 min Read</p>
        </div>
        <div className="w-full">
          <Image
            src="/images/image.png"
            alt=""
            width={1000}
            height={1000}
            className="w-full "
          />
        </div>
        <div className="flex flex-col space-y-3 items-center">
          <div className="flex flex-col space-y-1 items-center">
            <Image
              src="/images/second.png"
              alt=""
              width={100}
              height={100}
              className="w-20"
            />
            <p>chaltu kebede | software engineer</p>
            <p>@chaltu_kebede</p>
          </div>
          <div className="space-y-10">
            <p dangerouslySetInnerHTML={{ __html: data?.description || "" }} />
          </div>
        </div>
        <div className="flex space-x-3">
          <RelatedBlogCard />
          <RelatedBlogCard />
          <RelatedBlogCard />
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
