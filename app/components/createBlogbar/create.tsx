import React from "react";

const Create = () => {
  return (
    <div className="flex justify-between pr-20">
      <p className="font-bold">Blogs</p>
      <div className="space-x-2">
        <input
          type="text"
          placeholder="Search..."
          className="px-5 py-1 border rounded-3xl outline-none"
        />
        <button className="bg-myblue px-5 py-1 rounded-3xl">+ New Blog</button>
      </div>
    </div>
  );
};

export default Create;
