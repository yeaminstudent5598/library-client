import { useEffect, useState } from "react";
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
import { toast } from "sonner";       // <-- import toast here
import type { Book } from "@/app/features/books/bookApi";

export default function BorrowBookModal({
  book,
  borrowBook,
}: {
  book: Partial<Book> | null;
  borrowBook: (data: { book: string; quantity: number; dueDate: string }) => any;
}) {
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    if (book) {
      setQuantity(1);
      setDueDate("");
    }
  }, [book]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!book?._id) return;

    await borrowBook({ book: book._id, quantity, dueDate });
    toast.success("Book borrowed successfully!");  // <-- show toast instead of alert
    setOpen(false);
  };

  if (!book) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">Borrow</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[400px]">
        <form onSubmit={handleSubmit} className="space-y-4">
          <DialogHeader>
            <DialogTitle>Borrow "{book.title}"</DialogTitle>
          </DialogHeader>

          <div>
            <label className="block mb-1 font-medium">Quantity</label>
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Due Date</label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit" className="w-full">Borrow</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
