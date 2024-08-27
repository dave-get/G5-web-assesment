import Image from "next/image";
import React from "react";

const Contacts = () => {
  return (
    <>
      <footer
        className="flex pt-2 mb-10 space-y-5 justify-center shadow-[5px_5px_10px_10px_rgb(250,250,250)]"
        id="contacts"
      >
        <div className="flex">
          <Image
            src="/images/footerimage.png"
            alt=""
            width={100}
            height={100}
            className="h-full w-1/2"
          />
          <div className="flex flex-col p-3 items-center space-y-10 mt-10">
            <p className="font-bold">
              Get involved in improving tech education in Africa!
            </p>
            <button className="w-40 px-6 py-1 bg-myblue rounded-lg">
              Support us
            </button>
          </div>
        </div>
        <div className="w-64 pt-4 space-y-4">
          <p className="font-Inter text-lg font-bold">Link</p>
          <ul className="space-y-2">
            <li className="">Home</li>
            <li className="">Success Stories</li>
            <li className="">About us</li>
            <li className="">Get Invoved</li>
          </ul>
        </div>
        <div className="w-64 pt-4 space-y-4">
          <p className="font-Inter text-lg font-bold">Teams</p>
          <ul className="space-y-2 ">
            <li>Board Members</li>
            <li>Advisors/Mentors</li>
            <li>Executives</li>
            <li>Staffs</li>
          </ul>
        </div>
        <div className="w-64 pt-4 space-y-4">
          <p className="f text-lg font-bold">Blogs</p>
          <ul className="space-y-2">
            <li className="">Recent Blogs</li>
            <li className="">New Blog</li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Contacts;
