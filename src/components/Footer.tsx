import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white py-10 border border-[#D2D2D2]">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div>
          <Image
            width={132}
            height={132}
            src="https://res.cloudinary.com/ddl5axvxx/image/upload/v1717942314/logo_omwtf6.png"
            alt="Toukhan-logo"
            className="w-32"
          />
        </div>
        <div>
          <div className="flex space-x-5">
            <a
              href="https://www.instagram.com/toukhanlibrary?igshid=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer">
              <Image
                width={40}
                height={40}
                src="https://res.cloudinary.com/ddl5axvxx/image/upload/v1717942313/ig_uyabaf.png"
                alt=""
                className="w-10"
              />
            </a>
            {/* <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src="./assets/fb.png" alt="" className="w-10" />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src="./assets/lkdn.png" alt="" className="w-10" />
            </a> */}
            <a
              href="https://twitter.com/toukhanlibrary?s=11"
              target="_blank"
              rel="noopener noreferrer">
              <Image
                width={40}
                height={40}
                src="https://res.cloudinary.com/ddl5axvxx/image/upload/v1717942316/x_vslzye.png"
                alt=""
                className="w-10"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
