"use client";

import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { useRouter } from "next/navigation";
import { addCategory, addSubCategory } from "@/services/add-category";
import { getCategories, getSubCategories } from "@/services/get";

const Category = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([] as any);
  const [subCategories, setSubCategories] = useState([] as any);
  const [showInput, setShowInput] = useState(null);
  const [newSubCategory, setNewSubCategory] = useState("");

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const data = await addCategory({ name });
    console.log(data);
    getAllCategories();
    getAllSubCategories();
    setName("");
    setLoading(false);
  };

  const handleAddSubCategory = async (categoryId: any) => {
    console.log(categoryId);
    await addSubCategory({ category: categoryId, name: newSubCategory });
    await getAllSubCategories();
    setNewSubCategory("");
    setShowInput(null);
  };

  const groupedCategories = categories.map((category: any) => {
    return {
      ...category,
      subCategories: subCategories.filter(
        (subCategory: any) => subCategory.category === category.id
      ),
    };
  });
  return (
    <Layout>
      <div className="min-h-screen max-w-6xl mx-auto p-5">
        <div className="flex justify-end w-full">
          <button
            onClick={() => router.push("/add/book")}
            className="px-8 py-4 bg-toukhan-green text-white rounded">
            add book
          </button>
        </div>

        <main className="container mx-auto px-4 py-8">
          <div className="flex flex-row flex-wrap -mx-4">
            <aside className="w-full lg:w-1/4 px-4">
              <div className="bg-white p-4 rounded-md shadow-md">
                <h2 className="text-lg font-semibold mb-4">Categories</h2>
                <ul>
                  {groupedCategories.map((category: any) => (
                    <li key={category.id} className="mb-4">
                      <div className="text-blue-500 font-bold">
                        {category.name}{" "}
                        <button
                          onClick={() => setShowInput(category.id)}
                          className="text-blue-500">
                          +
                        </button>
                      </div>
                      <ul className="ml-4 mt-2">
                        {category.subCategories.map((subCategory: any) => (
                          <li key={subCategory.id} className="mb-2">
                            <span className="text-gray-600">
                              {subCategory.name}
                            </span>
                          </li>
                        ))}
                        {showInput === category.id && (
                          <li className="mt-2">
                            <input
                              type="text"
                              value={newSubCategory}
                              onChange={(e) =>
                                setNewSubCategory(e.target.value)
                              }
                              placeholder="New Subcategory"
                              className="border border-gray-300 rounded-md py-1 px-2 w-full"
                            />
                            <button
                              onClick={() => handleAddSubCategory(category.id)}
                              className="bg-blue-500 text-white rounded-md py-1 px-2">
                              Add
                            </button>
                          </li>
                        )}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="w-full lg:w-3/4 px-4">
              <div className="">
                <h2 className="text-3xl font-openSans font-semibold text-toukhan-orange">
                  Add a category
                </h2>

                <form
                  onSubmit={handleSubmit}
                  className="pt-10 flex flex-col gap-5 max-w-sm">
                  <div className="flex flex-col">
                    <label htmlFor="name" className=" font-openSans ">
                      Name
                    </label>
                    <input
                      name="name"
                      value={name}
                      onChange={(e: any) => setName(e.target.value)}
                      type="text"
                      className="border border-gray-300 rounded-md py-3 px-4 w-full max-w-xl font-sans outline-none"
                    />
                  </div>
                  <div className="flex justify-end w-full pt-5">
                    <button className="px-8 py-4 bg-toukhan-green text-white rounded w-full">
                      {loading ? "Loading..." : "Add Category"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Category;
