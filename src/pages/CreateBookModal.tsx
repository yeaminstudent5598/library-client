import { useState } from "react";
import { useCreateBookMutation } from "@/app/features/books/bookApi";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

export default function CreateBookModal({ onSuccess }: { onSuccess: () => void }) {
  const [createBook] = useCreateBookMutation();
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    title: "",
    author: "",
    genre: "",
    isbn: "",
    description: "",
    copies: 1,
  });

  const handleChange = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: name === "copies" ? Number(value) : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createBook({ ...form });
    onSuccess();
    setOpen(false);
    setForm({
      title: "",
      author: "",
      genre: "",
      isbn: "",
      description: "",
      copies: 1,
    }); // reset form
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add New Book</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px]">
        <form onSubmit={handleSubmit} className="space-y-4">
          <DialogHeader>
            <DialogTitle>Add New Book</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4">
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Title"
              className="w-full p-2 border rounded"
              required
            />
            <input
              name="author"
              value={form.author}
              onChange={handleChange}
              placeholder="Author"
              className="w-full p-2 border rounded"
              required
            />
            <select
              name="genre"
              value={form.genre}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select Genre</option>
              <option value="FICTION">FICTION</option>
              <option value="NON_FICTION">NON_FICTION</option>
              <option value="SCIENCE">SCIENCE</option>
              <option value="HISTORY">HISTORY</option>
              <option value="BIOGRAPHY">BIOGRAPHY</option>
              <option value="FANTASY">FANTASY</option>
            </select>
            <input
              name="isbn"
              value={form.isbn}
              onChange={handleChange}
              placeholder="ISBN"
              className="w-full p-2 border rounded"
              required
            />
            <input
              name="copies"
              type="number"
              min={1}
              value={form.copies}
              onChange={handleChange}
              placeholder="Copies"
              className="w-full p-2 border rounded"
              required
            />
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Description"
              className="w-full p-2 border rounded"
              rows={4}
            />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
