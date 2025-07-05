import {
  useDeleteBookMutation,
  useGetBooksQuery,
  useUpdateBookMutation,
  useBorrowBookMutation,
} from "@/app/features/books/bookApi";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import CreateBookModal from "./CreateBookModal";
import EditBookModal from "./EditBookModal";
import BorrowBookModal from "./BorrowBookModal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { toast } from "sonner";

export interface Book {
  _id?: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description?: string;
  copies: number;
  available?: boolean;
}

export default function Books() {
  const { data: books, isLoading, refetch } = useGetBooksQuery();
  const [deleteBook] = useDeleteBookMutation();
  const [updateBook] = useUpdateBookMutation();
  const [borrowBook] = useBorrowBookMutation();

  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [borrowBookSelected, setBorrowBookSelected] = useState<Book | null>(null);

  // Delete confirmation dialog state
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [bookToDelete, setBookToDelete] = useState<Book | null>(null);

  if (isLoading) return <p className="text-gray-900 dark:text-gray-100">Loading...</p>;
  if (!books?.length) return <p className="text-gray-900 dark:text-gray-100">No books found.</p>;

  function handleDeleteClick(book: Book) {
    setBookToDelete(book);
    setDeleteDialogOpen(true);
  }

  async function confirmDelete() {
    if (bookToDelete?._id) {
      await deleteBook(bookToDelete._id);
      toast.success(`"${bookToDelete.title}" deleted successfully.`);
      setDeleteDialogOpen(false);
      setBookToDelete(null);
      refetch();
    }
  }

  return (
    <div className="p-6 text-gray-900 dark:text-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">📚 All Books</h1>
        <CreateBookModal onSuccess={refetch} />
      </div>

      <div className="overflow-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 shadow border border-gray-200 dark:border-gray-700 rounded-md">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="p-2 text-left">Title</th>
              <th className="p-2 text-left">Author</th>
              <th className="p-2 text-left">Genre</th>
              <th className="p-2 text-left">ISBN</th>
              <th className="p-2 text-left">Copies</th>
              <th className="p-2 text-left">Available</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr
                key={book._id}
                className="border-t border-gray-200 dark:border-gray-700"
              >
                <td className="p-2">{book.title}</td>
                <td className="p-2">{book.author}</td>
                <td className="p-2">{book.genre}</td>
                <td className="p-2">{book.isbn}</td>
                <td className="p-2">{book.copies}</td>
                <td className="p-2">{book.available ? "✅" : "❌"}</td>
                <td className="p-2 space-x-2 flex flex-wrap gap-2">
                  <EditBookModal
                    book={book}
                    updateBook={updateBook}
                    onOpen={() => setSelectedBook(book)}
                  />
                  <BorrowBookModal
                    book={book}
                    borrowBook={borrowBook}
                    onOpen={() => setBorrowBookSelected(book)}
                  />
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDeleteClick(book)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[400px] bg-white dark:bg-gray-800 rounded-md shadow-lg">
          <DialogHeader>
            <DialogTitle className="text-gray-900 dark:text-gray-100">Confirm Delete</DialogTitle>
          </DialogHeader>
          <p className="mb-4 text-gray-900 dark:text-gray-100">
            Are you sure you want to delete <strong>{bookToDelete?.title}</strong>?
          </p>
          <DialogFooter className="space-x-2">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button variant="destructive" onClick={confirmDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
