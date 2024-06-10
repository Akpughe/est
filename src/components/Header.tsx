import React from "react";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <header className="fixed w-full bg-transparent backdrop-blur-lg">
      <nav className="flex justify-between items-center w-full px-14 py-4">
        <div>
          <Link href={`/`}>
            <Image
              src="https://res.cloudinary.com/ddl5axvxx/image/upload/v1717942314/logo_omwtf6.png"
              alt="Toukhan-logo"
              className="w-32"
              width={128}
              height={128}
            />
          </Link>
        </div>
        <div className="hidden md:block lg:block xl:block">
          <a
            href=""
            className="capitalize text-toukhan-green font-semibold font-openSans">
            manifesto
          </a>
        </div>
        <div className="hidden md:block lg:block xl:block">
          <Link
            href="/explore"
            className="py-3 px-6 flex justify-center items-center border border-[#333] rounded-[10px]">
            <span className="capitalize text-[#333] font-medium font-openSans">
              Explore
            </span>
          </Link>
        </div>
        <div className="block md:hidden lg:hidden xl:hidden">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none">
              <g clipPath="url(#clip0_922_33416)">
                <path
                  d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z"
                  fill="#0F4B23"
                />
              </g>
              <defs>
                <clipPath id="clip0_922_33416">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
