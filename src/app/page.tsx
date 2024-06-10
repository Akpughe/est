"use client";
import Image from "next/image";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <section className="pb-40 px-10 md:px-24 lg:px-40 xl:px-44 pt-64">
        <div className="max-w-7xl mx-auto">
          <div className="flex sm:flex-row flex-col items-center sm:space-y-0 space-y-5">
            <div className="flex-1">
              <h1 className="sm:text-5xl text-2xl font-semibold font-poppins sm:leading-[68px] leading-8 max-w-sm">
                Knowledge at your reach
              </h1>
              <p className="font-openSans sm:text-xl text-base text-[#686868] leading-9 max-w-md pt-6">
                Toukhan is building the best digital Library in Africa; A
                One-Stop Shop for all your Books, Academic Texts and Articles:
                Rent, Subscribe, Buy.
              </p>
            </div>
            <div className="flex-1">
              <Image
                width={591}
                height={300}
                src="https://res.cloudinary.com/ddl5axvxx/image/upload/v1717942317/image1_nbxqed.png"
                alt="image-1"
                className="w-[591px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="sm:py-40 py-20 px-10 md:px-24 lg:px-40 xl:px-44">
        <div className="max-w-7xl mx-auto">
          <div className="flex sm:flex-row flex-col items-center sm:space-y-0 space-y-5">
            <div className="flex-1">
              <h1 className="sm:text-[32px] text-2xl font-semibold font-poppins leading-[48px] max-w-sm">
                Reading Made More
              </h1>
              <h1 className="sm:text-[32px] text-2xl font-semibold font-poppins leading-[48px] max-w-sm flex items-center">
                Accessible
                <p className="sm:h-6 h-5 w-32 ml-4 border border-black rmma_bg"></p>
              </h1>

              <ul className="rmma_list ml-8 text-[#686868] sm:text-xl text-base space-y-5 pt-6 max-w-sm">
                <li className="-indent-8 sm:leading-9 leading-6 font-openSans">
                  Gain Access to your Academic texts
                </li>
                <li className="-indent-8 sm:leading-9 leading-6 font-openSans">
                  Entertain and inform yourself with a wide range of
                  non-Academic Books
                </li>
                <li className="-indent-8 sm:leading-9 leading-6 font-openSans">
                  Access to documents and articles
                </li>
                <li className="-indent-8 sm:leading-9 leading-6 font-openSans">
                  Audio Books: Listen to any text read to you in any language of
                  your choice using our A.I tool.
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <Image
                width={891}
                height={400}
                src="https://res.cloudinary.com/ddl5axvxx/image/upload/v1717942317/image-2_ypkx2n.png"
                alt="image-2"
                className="w-[891px]"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto w-full h-px border-[0.5px] border-[#B3B3B3] my-0"></div>

      <section className="py-32 px-10 md:px-24 lg:px-40 xl:px-44">
        <div className="max-w-7xl mx-auto">
          <div className="">
            <h3 className="font-poppins font-semibold sm:text-[32px] text-xl text-[#1C1C1C] sm:leading-[48px] leading-8 text-center max-w-3xl mx-auto flex flex-col items-center">
              Introducing a simple system to make reading more accessible:
              <div className="h-6 w-56 ml-4 rmma_bg mt-6"></div>
            </h3>
          </div>

          <div className="grid sm:grid-cols-3 grid-cols-1 grid-rows-auto gap-x-8 gap-y-8 mx-auto max-w-7xl sm:mt-10 mt-16">
            <div className="flex flex-col items-center justify-center">
              <div>
                <Image
                  width={305}
                  height={225}
                  src="https://res.cloudinary.com/ddl5axvxx/image/upload/v1717942285/1_kobuoq.png"
                  alt="1"
                  className="w-[305px] h-[225px]"
                />
              </div>
              <div className="max-w-xs pt-8">
                <h4 className="text-[#686868] font-openSans font-bold text-lg">
                  Rent, Read, Return:
                </h4>
                <p className="text-[#686868] font-openSans font-normal text-lg">
                  Your Smart Choice for E-books, Academic texts, Documents and
                  Audio Books.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div>
                <Image
                  width={305}
                  height={225}
                  src="https://res.cloudinary.com/ddl5axvxx/image/upload/v1717942290/2_j9vc7e.png"
                  alt="2"
                  className="w-[305px] h-[225px]"
                />
              </div>
              <div className="max-w-xs pt-8">
                <p className="text-[#686868] font-openSans font-normal text-lg pt-3">
                  <span className="font-bold">Gain unlimited access</span> to
                  all your favorite texts with subscriptions.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div>
                <Image
                  width={205}
                  height={225}
                  src="https://res.cloudinary.com/ddl5axvxx/image/upload/v1717942285/3_cybps5.png"
                  alt="3"
                  className="w-[305px] h-[225px]"
                />
              </div>
              <div className="max-w-xs pt-8">
                <p className="text-[#686868] font-openSans font-normal text-lg pt-3">
                  <span className="font-bold">Secure Ownership</span> of all
                  your preferred texts through an outright Purchase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto w-full h-px border-[0.5px] border-[#B3B3B3] my-0"></div>

      <section id="join" className="py-32 px-10 md:px-24 lg:px-40 xl:px-44">
        <div className="max-w-7xl mx-auto">
          <div className="">
            <h3 className="font-poppins font-semibold sm:text-[32px] text-xl text-[#1C1C1C] sm:leading-[48px] leading-8 text-center max-w-3xl mx-auto flex flex-col items-center">
              Be the first to know when we kick off
            </h3>
          </div>

          <form
            className="flex items-center max-w-md mx-auto mt-6"
            onSubmit={(e: any) => e.preventDefault()}>
            <label htmlFor="user-email" className="sr-only">
              Email
            </label>
            <div className="relative w-full">
              <input
                type="email"
                id="user-email"
                className="bg-gray-50 border border-black text-gray-900 text-base font-openSans rounded-[18px] block w-full pl-5 p-2.5 h-[60px] focus:outline-[#E94E1B]"
                placeholder="What's your email"
                required
              />
            </div>
            <button
              type="submit"
              className="p-2.5 z-30 -ml-16 h-[60px] w-[92px] text-sm font-medium text-white bg-[#E94E1B] rounded-[18px] border flex justify-center items-center">
              <svg
                width="25"
                height="20"
                viewBox="0 0 25 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.21716 10.5324H18.8517C18.1951 11.1891 17.5385 11.8457 16.6629 12.7212L13.5986 15.7854L14.9119 17.0986L22.1348 9.65695L14.9119 2.21519L13.5986 3.52845L16.6629 6.59269C17.3196 7.24932 18.1951 8.12482 18.8517 8.78145L2.21716 8.78143V10.5324Z"
                  fill="#F6F6F6"
                />
              </svg>

              <span className="sr-only">Submit</span>
            </button>
          </form>
          <div id="toast"></div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto py-40 px-5">
        <div className="max-w-6xl mx-auto sm:h-96 h-[504px] w-full border-2 border-[#0F4B23] rounded-[40px] sm:p-20 p-0 sm:px-20 px-6 sm:py-20 py-10 relative">
          <div className="flex justify-between">
            <div className="flex-1">
              <h4 className="text-toukhan-green font-poppins font-semibold sm:text-[40px] text-2xl">
                Come join us
              </h4>
              <p className="sm:text-2xl text-sm font-openSans font-extralight sm:leading-9 leading-6 max-w-sm">
                Join us in building Africa&apos;s biggest Web3 learning
                community
              </p>

              <a
                href="#"
                className="p-2.5 h-[60px] w-48 sm:mt-10 mt-5 bg-[#E94E1B] rounded-3xl border flex justify-center items-center">
                <span className="text-sm font-openSans font-semibold text-white uppercase">
                  join community
                </span>
              </a>
            </div>
            <div className="flex-1 z-40 absolute right-10 sm:-top-10 sm:bottom-0 -bottom-10">
              <Image
                width={451}
                height={200}
                src="https://res.cloudinary.com/ddl5axvxx/image/upload/v1717942320/Saly-1_o37stt.png"
                alt=""
                className="w-[451px]"
              />
            </div>
          </div>
          <div className="absolute bottom-0 right-0">
            <Image
              width={680}
              height={300}
              src="https://res.cloudinary.com/ddl5axvxx/image/upload/v1717942296/frame_cucp4v.png"
              alt=""
              className="w-[600px]"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
