export const uploadImageToImgBB = async (file: File): Promise<string> => {
  const apiKey = "cf0e8e54e37ee0ede0982ffff36addc4";
  const formData = new FormData();
  formData.append("image", file);

  const res = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  return data.data?.url;
};
