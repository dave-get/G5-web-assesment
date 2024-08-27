import Image from "next/image";
import React from "react";

const RelatedBlogCard = () => {
  return (
    <div className="space-y-3 border border-slate-50 rounded-lg shadow-md pb-6">
      <Image
        src="/images/singlecard.png"
        alt=""
        width={100}
        height={100}
        className="w-full h-1/2"
      />
      <div className="px-3 space-y-3">
        <p className="text-[#5E5873]">
          Design Liberalized Exchange Rate Management
        </p>
        <div className="flex">
          <Image src="" alt="" />
          <p>By</p>
          <p>Fred Boone</p>
          <p>Jan 10, 2020</p>
        </div>
        <div className="flex space-x-2">
          <button className="border rounded-2xl bg-slate-100 text-[#6E6B7B] text-xs px-2 py-1">
            UI/UX
          </button>
          <button className="border rounded-2xl bg-slate-100 text-[#6E6B7B] text-xs px-2 py-1">
            Development
          </button>
        </div>
        <p className="text-[#6E6B7B] text-sm">
          A little personality goes a long way, especially on a business blog.
          So don’t be afraid to let loose.
        </p>
      </div>
      <div className="flex justify-between px-2">
        <p>2.3k Likes</p>
        <p>Read More</p>
      </div>
    </div>
  );
};

export default RelatedBlogCard;
