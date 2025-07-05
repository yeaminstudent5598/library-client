import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-10 md:space-y-0">
          {/* Brand & Description */}
          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold mb-3 text-white">YourLibrary</h2>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Your go-to place for books, knowledge, and stories. Discover, borrow, and explore our rich collection.
            </p>
            <p className="mt-6 text-sm text-gray-500">© {new Date().getFullYear()} YourLibrary. All rights reserved.</p>
          </div>

          {/* Navigation Links */}
          <nav className="md:w-1/3 grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-white font-semibold mb-3">Explore</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">Home</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">Books</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">Genres</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">Authors</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">About Us</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">Contact</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">FAQs</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </nav>

          {/* Newsletter & Social */}
          <div className="md:w-1/3">
            <h3 className="text-white font-semibold mb-3">Subscribe to our Newsletter</h3>
            <form className="flex flex-col sm:flex-row sm:space-x-3">
              <input
                type="email"
                placeholder="Your email address"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-700 bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3 sm:mb-0"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 rounded-md text-white font-semibold hover:bg-blue-700 transition"
              >
                Subscribe
              </button>
            </form>

            <div className="flex space-x-6 mt-8">
              {/* Social Icon Links */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-400 hover:text-blue-500 transition"
                title="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.514-4.486-10-10-10S2 6.486 2 12c0 5 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54v-2.207c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.463h-1.26c-1.243 0-1.63.772-1.63 1.562v1.877h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 17 22 12z" />
                </svg>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-gray-400 hover:text-blue-400 transition"
                title="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.98-2.48 10.14 10.14 0 01-3.21 1.23 4.52 4.52 0 00-7.72 4.13A12.83 12.83 0 013 4.16a4.52 4.52 0 001.4 6.04 4.5 4.5 0 01-2.05-.57v.06a4.53 4.53 0 003.64 4.43 4.5 4.5 0 01-2.04.08 4.53 4.53 0 004.22 3.14A9 9 0 012 19.54a12.7 12.7 0 006.92 2.02c8.31 0 12.86-6.88 12.86-12.85 0-.2 0-.42-.01-.63A9.2 9.2 0 0023 3z" />
                </svg>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-blue-600 transition"
                title="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5S0 4.881 0 3.5 1.11 1 2.5 1 4.98 2.119 4.98 3.5zM.5 8.5h4.98v11H.5v-11zM9.16 8.5h4.78v1.65h.07c.67-1.27 2.3-2.6 4.74-2.6 5.08 0 6.02 3.34 6.02 7.68v8.27h-5v-7.33c0-1.75-.03-4-2.43-4-2.43 0-2.8 1.9-2.8 3.87v7.46h-5v-11z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
