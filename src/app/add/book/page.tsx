"use client";

import React, { useState, ChangeEvent, useEffect, useCallback } from "react";
import Layout from "@/components/Layout";
import { ImageUploadSVG, CloseSVG } from "@/assets/icon";
import Image from "next/image";
import { uploadImage } from "@/services/upload-image";
import { addBooks } from "@/services/add-book";
import { getCategories, getSubCategories } from "@/services/get";
import { useRouter } from "next/navigation";

const AddBook = () => {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [selectedBook, setSelectedBook] = useState<File | null>(null);
  const [previewBook, setPreviewBook] = useState<string | null>(null);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [selectCategoryId, setSelectCategoryId] = useState();
  const [selectSubCategoryId, setSelectSubCategoryId] = useState();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    authors: "",
    description: "",
    category: 0,
    sub_category: 0,
    // cover_image: "",
    // book_url: "",
  });
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [bookUrl, setBookUrl] = useState<string | null>(null);

  const { title, authors, description, sub_category } = formData;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    console.log("formData", formData);
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  const selectCategory = (id: any) => {
    setSelectCategoryId(id);
    console.log("selectCategoryId func", selectCategoryId);
  };

  const selectSubCategory = (id: any) => {
    setSelectSubCategoryId(id);
    console.log("selectSubCategoryId func", selectSubCategoryId);
  };

  const getAllSubCategories = useCallback(async () => {
    const allSubCategories: any = await getSubCategories();
    const filteredSubCategories = allSubCategories?.filter(
      (subCategory: any) => subCategory.category === Number(selectCategoryId)
    );
    // console.log("selectCategoryId", selectCategoryId);
    // console.log("allSubCategories", allSubCategories);
    // console.log("filteredSubCategories", filteredSubCategories);
    setSubCategories(filteredSubCategories);
  }, [setSubCategories, selectCategoryId]);

  useEffect(() => {
    getAllSubCategories();
  }, [categories, getAllSubCategories]);

  const getAllCategories = async () => {
    const allCategories: any = await getCategories();
    setCategories(allCategories);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    // console.log("file", file);
    // uploadMutate(file);
    /*@ts-ignore*/
    setSelectedImage(file);

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreviewImage(reader.result as string);

        // console.log("reader.result", reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleBookChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    setFormData({ ...formData, sub_category: Number(selectSubCategoryId) });
    console.log("formData", formData);

    /*@ts-ignore*/
    setSelectedBook(file);

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreviewBook(reader.result as string);
      };
      console.log("previewBook", previewBook);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const bookImage = await uploadImage(selectedImage);
    const bookCopy = await uploadImage(selectedBook);
    console.log("uploadData", bookImage);

    if (bookImage?.error) {
      console.log("uploadDataError", bookImage?.error);
      bookImage.error.message == "The resource already exists" &&
        console.error(
          "This image already exist, rename the image and try again"
        );
    }

    if (bookCopy?.error) {
      console.log("uploadDataError", bookCopy?.error);
      bookCopy.error.message == "The resource already exists" &&
        console.error(
          "This book already exist, rename the image and try again"
        );
    }

    if (bookImage.data?.path && bookCopy.data?.path) {
      const bookCover = bookImage?.url?.publicUrl;
      const bookCopyUrl = bookCopy?.url?.publicUrl;
      setCoverImage(bookCover);
      setBookUrl(bookCopyUrl);
      console.log("bookCover", bookCover);
      console.log("bookCopyUrl", bookCopyUrl);
      setFormData({
        ...formData,
        category: Number(selectCategoryId),
        sub_category: Number(selectSubCategoryId),
      });
      const formFields = {
        ...formData,
        cover_image: bookCover,
        book_url: bookCopyUrl,
      };
      console.log("formData new", formFields);
      await addBooks(formFields);
    }
    setLoading(false);
  };

  return (
    <Layout>
      <div className="min-h-screen max-w-4xl mx-auto p-5">
        <div className="flex justify-end w-full">
          <button
            onClick={() => router.push("/add/category")}
            className="px-8 py-4 bg-toukhan-green text-white rounded">
            add category
          </button>
        </div>

        <div className="pt-8">
          <h2 className="text-3xl font-openSans font-semibold text-toukhan-orange">
            Add a book
          </h2>

          <form
            onSubmit={handleSubmit}
            className="pt-10 flex flex-col gap-5 max-w-xl">
            <div className="flex flex-col">
              <label htmlFor="title" className=" font-openSans ">
                Title
              </label>
              <input
                name="title"
                value={title}
                onChange={handleChange}
                type="text"
                className="border border-gray-300 rounded-md py-3 px-4 w-full max-w-xl font-sans outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="title" className=" font-openSans ">
                Authors
              </label>
              <input
                name="authors"
                value={authors}
                onChange={handleChange}
                type="text"
                className="border border-gray-300 rounded-md py-3 px-4 w-full max-w-xl font-sans outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="title" className=" font-openSans ">
                Description
              </label>
              <textarea
                name="description"
                value={description}
                onChange={(e: any) => handleChange(e)}
                className="border border-gray-300 rounded-md py-3 px-4 w-full max-w-xl font-sans outline-none"></textarea>
            </div>

            <div className="flex flex-col">
              <label htmlFor="title" className=" font-openSans ">
                Category
              </label>
              <select
                name="selectCategoryId"
                value={selectCategoryId}
                onChange={(e) => {
                  selectCategory(e.target.value);
                  setFormData({
                    ...formData,
                    category: Number(e.target.value),
                  });
                  console.log("formData", formData);
                }}
                className="border border-gray-300 rounded-md py-3 px-4 w-full max-w-xl font-sans outline-none">
                <option value="">Select a category</option>
                {categories?.map((cate: any) => {
                  return (
                    <option
                      onClick={() => selectCategory(cate?.id)}
                      key={cate?.id}
                      value={cate?.id}>
                      {cate?.name}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="title" className=" font-openSans ">
                Sub-Category
              </label>
              <select
                name="selectSubCategoryId"
                value={selectSubCategoryId}
                onChange={(e) => {
                  selectSubCategory(e.target.value);
                  setFormData({
                    ...formData,
                    sub_category: Number(e.target.value),
                  });
                  console.log("formData", formData);
                }}
                className="border border-gray-300 rounded-md py-3 px-4 w-full max-w-xl font-sans outline-none">
                <option value="">Select a sub-category</option>
                {subCategories?.map((cate: any) => {
                  return (
                    <option key={cate?.id} value={cate?.id}>
                      {cate?.name}
                    </option>
                  );
                })}
                {/* <option value="">Horror</option>
                <option value="">Mystery</option> */}
              </select>
            </div>

            {/* book */}
            <div className="max-w-xl">
              <span className="mantine-TextInput-label">Upload book</span>

              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="book"
                  className="flex flex-col items-center justify-center w-full h-40 border border-gray-600 border-dashed rounded-lg cursor-pointer bg-gray-50 ">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <ImageUploadSVG />
                    <p className="mb-2 text-sm text-gray-500 ">
                      <span className="font-semibold font-hanken">
                        Click to upload
                      </span>
                    </p>
                    <p className="text-xs font-hanken text-gray-500 ">
                      EPUB, PDF
                    </p>
                  </div>
                  <input
                    id="book"
                    type="file"
                    className="hidden"
                    accept=".pdf, .epub"
                    multiple={false}
                    onChange={handleBookChange}
                  />
                </label>
              </div>
            </div>

            {/* cover image */}
            <div className="max-w-xl">
              <span className="mantine-TextInput-label">Cover Image</span>

              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="images"
                  className="flex flex-col items-center justify-center w-full h-40 border border-gray-600 border-dashed rounded-lg cursor-pointer bg-gray-50 ">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <ImageUploadSVG />
                    <p className="mb-2 text-sm text-gray-500 ">
                      <span className="font-semibold font-hanken">
                        Click to upload
                      </span>
                    </p>
                    <p className="text-xs font-hanken text-gray-500 ">
                      PNG, JPG
                    </p>
                  </div>
                  <input
                    id="images"
                    type="file"
                    className="hidden"
                    accept=".png, .jpg, .jpeg, .webp, .avif"
                    multiple={false}
                    onChange={handleImageChange}
                  />
                </label>
              </div>
            </div>
            {previewImage && (
              <div className="relative w-fit">
                <Image
                  src={previewImage}
                  alt="Uploaded"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div
                  onClick={() => setPreviewImage(null)}
                  className="absolute top-0 right-0 p-1 cursor-pointer">
                  <CloseSVG color="#fff" />
                </div>
              </div>
            )}

            <div className="flex justify-end w-full pt-5">
              <button className="px-8 py-4 bg-toukhan-green text-white rounded w-full">
                {loading ? "Loading..." : "Add Book"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default AddBook;
