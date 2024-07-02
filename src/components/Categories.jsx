"use client";
import Link from "next/link";
import { useState } from "react";

export default function Categories() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const categories = [
    { name: 'Electronics', id: 'electronics' },
    { name: 'Jewelery', id: 'jewelery' },
    { name: "Men's clothing", id: "men's clothing" },
    { name: "Women's clothing", id: "women's clothing" }
  ];

  return (
    <div className="dropdown">
      <div
        tabIndex={0}
        role="button"
        aria-label="Categorías"
        className="btn m-1 bg-stone-900 focus:bg-transparent hover:bg-stone-900 dark:bg-stone-700 dark:hover:bg-stone-700 text-zinc-200 text-base border-none"
        onClick={toggleDropdown}
      >
        Categorías{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      {isOpen && (
        <ul
          tabIndex={0}
          className="flex justify-around w-[40vw] sm:w-[70vw] lg:w-[50vw] max-h-[60dvh] flex-col sm:flex-row dropdown-content z-[1] menu p-2 shadow text-stone-900 bg-zinc-200 dark:bg-stone-700 rounded-box rounded-t-none"
        >
          {categories.map(category => (
            <li key={category.id} className="w-1/5 sm:w-1/5 mb-1 font-semibold dark:text-zinc-200 hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
              <Link
                href={`/category/${category.id}`}
                className="active:!bg-green-200 active:!text-stone-900 focus:text-stone-900 focus:bg-zinc-200 dark:focus:bg-stone-700 dark:focus:text-zinc-200"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
