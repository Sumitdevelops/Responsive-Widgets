import React, { useState } from "react";

const ImageUpload = ({ onUploadSuccess }) => {
const [loading, setLoading] = useState(false);

const handleFileChange = async (e) => {
const file = e.target.files[0];
if (!file) return;

const formData = new FormData();
formData.append("image", file);

setLoading(true);
try {
  const res = await fetch("https://responsive-widgets-backend.onrender.com", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  if (data.success) onUploadSuccess(data.imageUrl);
} catch (err) {
  console.error(err);
} finally {
  setLoading(false);
}
};

return (
<label
className="relative inline-flex items-center justify-center px-4 py-2
  bg-[#272B30] hover:bg-[#32363B] text-white rounded-full 
  shadow-[0_2px_6px_rgba(0,0,0,0.3)] 
  hover:shadow-[0_0_10px_rgba(255,255,255,0.15)] 
  cursor-pointer transition-all"
>
  {loading ? "Uploading..." : "+ Add Image"}
  <input
    type="file"
    accept="image/*"
    onChange={handleFileChange}
    className="hidden"
  />
</label>
);
};

export default ImageUpload;