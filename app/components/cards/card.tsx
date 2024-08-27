import { Author } from "@/app/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({
  id,
  profile,
  image,
  title,
  description,
}: {
  id: string;
  profile: Author;
  image: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="space-y-4">
      <Link href={`/singlePage/${id}`}>
        <div className="flex space-x-2">
          <Image
            src={profile?.image || "/images/profile.png"}
            alt=""
            width={100}
            height={100}
            className="w-16 h-full"
          />
          <div className="space-y-2 my-1">
            <p className="text-black text-[14px] font-extrabold">
              {profile?.name || "Yididiya Kebede"} <span>Apr 16, 2022</span>
            </p>
            <p className="text-txtgray2">
              {profile?.role || "SOFTWARE ENGINEER"}
            </p>
          </div>
        </div>
        <div className="flex space-x-16">
          <div className="w-2/3 space-y-10 pt-5 pl-5">
            <div className="space-y-2">
              <p className="font-extrabold text-2xl">{title}</p>
              <p className="font-extrabold text-2xl">
                Tab System On React : 3 ways to do it.{" "}
              </p>
            </div>
            <p className="text-txtgray3 text-base mt-10">{description}</p>
          </div>
          <Image
            src={image}
            alt=""
            width={1000}
            height={100}
            className="w-1/3 "
          />
        </div>
        <div className="flex space-x-3">
          <button className="border rounded-2xl bg-slate-100 px-5 py-1">
            UI/UX
          </button>
          <button className="border rounded-2xl bg-slate-100 px-5 py-1">
            Development
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Card;
