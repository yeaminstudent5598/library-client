import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCreateBookMutation } from "@/app/features/books/bookApi";

export default function CreateBook() {
  const [createBook] = useCreateBookMutation();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    author: "",
    genre: "",
    isbn: "",
    description: "",
    copies: 1,
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await createBook({ ...form, copies: Number(form.copies) });
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4">
      <h1 className="text-xl font-semibold">Add Book</h1>
      {Object.entries(form).map(([key, value]) => (
        <input
          key={key}
          name={key}
          value={value}
          onChange={handleChange}
          placeholder={key}
          className="w-full p-2 border"
        />
      ))}
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
}
