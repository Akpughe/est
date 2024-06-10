import { supabase } from "@/lib/supabase-client";

export const addCategory = async (categoryData: any) => {
  try {
    const { name } = categoryData;

    const { data, error } = await supabase
      .from("category")
      .insert({
        name: name,
      })
      .select()
      .maybeSingle();

    if (error) {
      throw new Error("Failed to add category");
    }

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const addSubCategory = async (categoryData: any) => {
  try {
    const { category, name } = categoryData;

    const { data, error } = await supabase
      .from("sub_category")
      .insert({
        category: category,
        name,
      })
      .select()
      .maybeSingle();

    if (error) {
      throw new Error("Failed to add category");
    }

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
