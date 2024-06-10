import { supabase } from "../lib/supabase-client";

export const uploadImage = async (imageFile: any) => {
  const reader = new FileReader();
  const buffer: any = await new Promise((resolve, reject) => {
    reader.readAsArrayBuffer(imageFile);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

  // get date and time in unto the millisecond
  const currentDateAndTime = new Date().getTime();

  console.log("currentDate", currentDateAndTime);

  const filePath = "book_images/" + `${currentDateAndTime}_${imageFile.name}`;

  const { data, error } = await supabase.storage
    .from("book_images") // Replace with your bucket name
    .upload(filePath, buffer, {
      contentType: imageFile.type,
    });

  if (error) return { error };

  const { data: publicUrl } = await supabase.storage
    .from("book_images")
    .getPublicUrl(data.path);

  return { data, url: publicUrl };
};
