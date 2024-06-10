import { supabase } from "@/lib/supabase-client";

export const getBooks = async () => {
  try {
    const { data, error } = await supabase.from("books").select();

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getCategories = async () => {
  try {
    const { data, error } = await supabase.from("category").select();

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getSubCategories = async () => {
  try {
    const { data, error } = await supabase.from("sub_category").select();

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
