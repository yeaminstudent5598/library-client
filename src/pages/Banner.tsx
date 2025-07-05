import React from "react";

export default function Banner() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Discover Your Next Favorite Book
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-md">
            Explore thousands of books across all genres. Borrow, read, and get inspired.
          </p>
          <div>
            <a
              href="#books"
              className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-md shadow-md hover:bg-gray-100 transition"
            >
              Browse Books
            </a>
          </div>
        </div>

        {/* Image or Illustration */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80"
            alt="Bookshelf"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
