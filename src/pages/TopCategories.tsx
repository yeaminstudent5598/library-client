import React from "react";

interface TopCategoriesProps {
  categories: string[];
  onSelectCategory: (category: string) => void;
  selectedCategory: string | null;
}

export default function TopCategories({
  categories,
  onSelectCategory,
  selectedCategory,
}: TopCategoriesProps) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold mb-8 text-center">Top Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => onSelectCategory(category)}
                className={`rounded-lg shadow-md p-6 text-center cursor-pointer transition
                  ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-indigo-400"
                      : "bg-white text-gray-700 hover:bg-indigo-100"
                  }
                `}
                aria-pressed={isActive}
              >
                <span className="block text-xl font-medium capitalize">{category.replace(/_/g, " ")}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
