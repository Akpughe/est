"use client";
import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import { ChevronRight } from "@/assets/icon";
import { getBooks, getCategories, getSubCategories } from "@/services/get";

const books = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    rating: 4.5,
    image:
      "https://res.cloudinary.com/ddl5axvxx/image/upload/v1717947040/Atomic_Habits637787834236534288_cover_l1l47f.jpg",
  },
  {
    title: "Rework",
    author: "Jason Fried, David Heinemeier",
    rating: 4.0,
    image:
      "https://res.cloudinary.com/ddl5axvxx/image/upload/v1717947082/Rework637788248065589110_cover_obnltw.jpg",
  },
  // Add more book objects here
];

const Explore = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  const getAllCategories = async () => {
    const allCategories: any = await getCategories();
    setCategories(allCategories);
  };
  const getAllSubCategories = async () => {
    const allSubCategories: any = await getSubCategories();
    setSubCategories(allSubCategories);
  };

  useEffect(() => {
    getAllCategories();
    getAllSubCategories();
  }, []);

  const getAllBooks = async () => {
    const data: any = await getBooks();
    setAllBooks(data);
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  const groupedCategories = categories.map((category: any) => {
    return {
      ...category,
      subCategories: subCategories.filter(
        (subCategory: any) => subCategory.category === category.id
      ),
    };
  });
  console.log("allBooks", allBooks);

  return (
    <Layout>
      {/* search form */}
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto px-4 py-4 flex justify-center items-center">
          <input
            type="search"
            placeholder="Search for titles & authors"
            className="border border-gray-300 rounded-md py-3 px-4 w-full max-w-xl font-sans outline-none"
          />
          <button className=" bg-toukhan-orange py-4 px-8 rounded-md h-full flex justify-center items-center ">
            <svg
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              height="16px">
              <path
                fill="white"
                d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"></path>
            </svg>
          </button>
        </div>

        <main className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap -mx-4">
            <aside className="w-full lg:w-1/4 px-4">
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-4">Categories</h2>
                <ul className="flex flex-col gap-4">
                  {groupedCategories.map((category: any) => (
                    <li key={category.id} className="mb-4">
                      <div className="">
                        <a className="text-black text-xl font-openSans font-medium capitalize flex items-center justify-between">
                          {category.name} <ChevronRight />
                        </a>
                      </div>
                      <ul className="ml-4 mt-2">
                        {category.subCategories.map((subCategory: any) => (
                          <li key={subCategory.id} className="mb-2">
                            <a className="text-black font-openSans font-medium capitalize flex items-center justify-between">
                              {subCategory.name}
                              <ChevronRight />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="w-full lg:w-3/4 px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {allBooks.map((book: any, index) => (
                  <div key={index} className="">
                    <Image
                      src={book.cover_image}
                      alt={book.title}
                      width={150}
                      height={200}
                      className="w-full h-[200px] object-cover rounded-md"
                    />
                    <h3 className="mt-4 text-lg font-semibold font-openSans">
                      {book.title}
                    </h3>
                    <p className="text-gray-600 text-xs font-openSans">
                      {book.author}
                    </p>
                    {/* <p className="mt-2 text-yellow-500">{book.rating}</p> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Explore;
