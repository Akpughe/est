import { supabase } from "@/lib/supabase-client";

export const addBooks = async (bookData: any) => {
  try {
    const {
      title,
      authors,
      description,
      category,
      cover_image,
      sub_category,
      book_url,
    } = bookData;

    const { data, error } = await supabase
      .from("books")
      .insert({
        title,
        authors,
        description,
        category,
        cover_image,
        sub_category,
        book_url,
      })
      .select()
      .maybeSingle();

    if (error) {
      throw new Error("Failed to add book");
    }

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
