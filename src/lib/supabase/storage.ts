import { supabase } from "@/lib/supabase/client";
import { File } from "expo-file-system";

export const uploadProfileImage = async (
  userId: string,
  imageUri: string
): Promise<string | undefined> => {
  try {
    const fileExtension = imageUri.split(".").pop() || "jpg";
    const fileName = `${userId}/profile.${fileExtension}`;

    // ✅ Yeni Expo File API
    const file = new File(imageUri);

    // 👇 en önemli kısım
    const arrayBuffer = await file.arrayBuffer();

    const { error } = await supabase.storage
      .from("profiles")
      .upload(fileName, arrayBuffer, {
        contentType: `image/${fileExtension}`,
        upsert: true,
      });

    if (error) throw error;

    const { data } = supabase.storage
      .from("profiles")
      .getPublicUrl(fileName);

    return data.publicUrl;
  } catch (error) {
    console.error("Error uploading profile image:", error);
    throw error;
  }
};

export const uploadPostImage = async (
  userId: string,
  imageUri: string
): Promise<string | undefined> => {
  try {
    const fileExtension = imageUri.split(".").pop() || "jpg";
    const timestamp = Date.now();
    const fileName = `${userId}/posts/${timestamp}.${fileExtension}`;

    const file = new File(imageUri);
    const arrayBuffer = await file.arrayBuffer();

    const { error } = await supabase.storage
      .from("posts")
      .upload(fileName, arrayBuffer, {
        contentType: `image/${fileExtension}`,
      });

    if (error) throw error;

    const { data } = supabase.storage.from("posts").getPublicUrl(fileName);

    return data.publicUrl;
  } catch (error) {
    console.error("Error uploading post image:", error);
    throw error;
  }
};
