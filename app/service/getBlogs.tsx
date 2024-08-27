import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BlogPost } from "../types/types";

export const Blogs = createApi({
  reducerPath: "blogs",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://a2sv-backend.onrender.com/api",
  }),
  endpoints: (builder) => ({
    getAllBlogs: builder.query<BlogPost[], void>({
      query: () => `/blogs`,
    }),
    getAllBlogsById: builder.query<BlogPost, string>({
      query: (id) => `/blogs/${id}`,
    }),
  }),
});

export const { useGetAllBlogsQuery, useGetAllBlogsByIdQuery } = Blogs;
