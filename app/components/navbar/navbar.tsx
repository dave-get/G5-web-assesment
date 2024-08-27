import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="z-20 flex fixed top-0 w-full justify-between items-center p-3 bg-white shadow-sm">
      <div className="logo">
        <Image
          src="/images/headerlogo.png"
          alt=""
          width={100}
          height={100}
          className="w-28 h-8"
        />
      </div>
      <div className="flex pages space-x-10 items-center text-sm text-txtgray">
        <Link href="">Home</Link>
        <Link href="">Teams</Link>
        <Link href="">Success Stories</Link>
        <Link href="">About Us</Link>
        <Link href="">Blogs</Link>
        <Link href="">Get Involved</Link>
      </div>
      <div className="flex space-x-2 items-center">
        <Link className="text-txtdark2" href="">
          Log in
        </Link>
        <button className="text-white bg-myblue px-3 py-1 rounded-lg">
          Donate
        </button>
      </div>
    </div>
  );
};

export default Navbar;
