import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { Book } from "@/app/features/books/bookApi";
import { toast } from "sonner";

interface EditBookModalProps {
  book: Book;
  updateBook: (args: { id: string; data: Partial<Book> }) => Promise<any>;
  onOpen: () => void;
}

export default function EditBookModal({ book, updateBook, onOpen }: EditBookModalProps) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    title: "",
    author: "",
    genre: "",
    isbn: "",
    copies: 1,
    description: "",
    available: true,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open && book) {
      setForm({
        title: book.title,
        author: book.author,
        genre: book.genre,
        isbn: book.isbn,
        copies: book.copies,
        description: book.description || "",
        available: book.available ?? true,
      });
      onOpen();
    }
  }, [open, book, onOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : (name === "copies" ? Number(value) : value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateBook({
        id: book._id!,
        data: {
          ...form,
          available: form.copies > 0 ? form.available : false,
        },
      });
      toast.success("Book updated successfully");
      setOpen(false);
    } catch (error) {
      toast.error("Failed to update book");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          Edit
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[400px]">
        <form onSubmit={handleSubmit} className="space-y-4">
          <DialogHeader>
            <DialogTitle>Edit Book</DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-2 gap-4">
           <div> <p>Title</p>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Title"
              className="w-full p-2 border rounded"
              required
              disabled={loading}
            /></div>
            <div>
              <p>Author</p>
            <input
              name="author"
              value={form.author}
              onChange={handleChange}
              placeholder="Author"
              className="w-full p-2 border rounded"
              required
              disabled={loading}
            />
            </div>
            <div>
              <p>Genre</p>
            <select
              name="genre"
              value={form.genre}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
              disabled={loading}
            >
              <option value="">Select Genre</option>
              <option value="FICTION">FICTION</option>
              <option value="NON_FICTION">NON_FICTION</option>
              <option value="SCIENCE">SCIENCE</option>
              <option value="HISTORY">HISTORY</option>
              <option value="BIOGRAPHY">BIOGRAPHY</option>
              <option value="FANTASY">FANTASY</option>
            </select>
            </div>
            <div>
              <p>ISBN</p>
            <input
              name="isbn"
              value={form.isbn}
              onChange={handleChange}
              placeholder="ISBN"
              className="w-full p-2 border rounded"
              required
              disabled={loading}
            />
            
            </div>
            <div>
              <p>Copies</p>
            <input
              name="copies"
              type="number"
              min={0}
              value={form.copies}
              onChange={handleChange}
              placeholder="Copies"
              className="w-full p-2 border rounded"
              required
              disabled={loading}
            />
            </div>
            <div>
              <p>Description</p>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Description"
              className="w-full p-2 border rounded"
              rows={4}
              disabled={loading}
            />
            </div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="available"
                checked={form.available}
                onChange={handleChange}
                disabled={loading || form.copies === 0}
              />
              <span>Available</span>
            </label>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="ghost" disabled={loading}>
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" disabled={loading}>
              {loading ? "Saving..." : "Save"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
