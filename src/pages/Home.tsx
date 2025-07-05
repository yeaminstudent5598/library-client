import React, { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Banner from "./Banner";

interface Book {
  _id: string;
  title: string;
  author: string;
  genre: string;
}

const categories = ["All", "FICTION", "NON_FICTION", "SCIENCE", "HISTORY"];

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/books");
        const json = await res.json();
        setBooks(json.data); // Your API returns { success, message, data: [...] }
      } catch (error) {
        console.error("Failed to fetch books", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const filteredBooks =
    selectedCategory === "All"
      ? books
      : books.filter((book) => book.genre === selectedCategory);

  return (
    <div>
      <Banner />

      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold mb-6 text-center">Top Categories</h2>

        <Tabs
          defaultValue="All"
          value={selectedCategory}
          onValueChange={(val) => setSelectedCategory(val)}
        >
          <TabsList className="grid grid-cols-5 gap-4 mb-8">
            {categories.map((cat) => (
              <TabsTrigger key={cat} value={cat} className="capitalize">
                {cat.replace("_", " ")}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={selectedCategory}>
            {loading ? (
              <p className="text-center">Loading...</p>
            ) : filteredBooks.length === 0 ? (
              <p className="text-center text-gray-500 dark:text-gray-400">
                No books found.
              </p>
            ) : (
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBooks.map((book) => (
                  <li
                    key={book._id}
                    className="border rounded p-4 shadow hover:shadow-lg transition bg-white dark:bg-gray-800"
                  >
                    <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">
                      {book.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Author: {book.author}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Genre: {book.genre.replace("_", " ")}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
