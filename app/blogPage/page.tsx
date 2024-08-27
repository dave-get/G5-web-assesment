"use client";

import React from "react";
import Card from "../components/cards/card";
import Create from "../components/createBlogbar/create";
import { useGetAllBlogsQuery } from "../service/getBlogs";
import { BlogPost } from "../types/types";

const Blog = () => {
  const { data } = useGetAllBlogsQuery();
  console.log(data);

  return (
    <div className="">
      <div className="z-10 mt-20 px-28 py-10 space-y-10">
        <Create />
        {data?.map((blog: BlogPost) => {
          return (
            <div key={blog._id} className=" border-t pt-10">
              <Card
                id={blog._id}
                profile={blog.author}
                image={blog.image}
                title={blog.title}
                description={blog.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
