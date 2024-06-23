"use client"
import Link from "next/link";
import { useState } from "react";
export default function Categories() {
    const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
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
                className="flex overflow-y-scroll md:overflow-auto max-h-[60dvh] flex-row justify-start dropdown-content z-[1] menu p-2 shadow text-stone-900 bg-zinc-200 dark:bg-stone-700 rounded-box rounded-t-none w-60 md:w-[96vw]"
              >
                <li className="w-full md:w-1/5 mb-1 font-semibold dark:text-zinc-200 hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <Link
                    href="/products/storage"
                    className="active:!bg-green-200 active:!text-stone-900 focus:text-stone-900 focus:bg-zinc-200 dark:focus:bg-stone-700 dark:focus:text-zinc-200"
                  >
                    Almacenamiento
                  </Link>
                </li>
                <li className="w-full md:w-1/5 mb-1 font-semibold dark:text-zinc-200 hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <a className="active:!bg-green-200 active:!text-stone-900 focus:text-stone-900 focus:bg-zinc-200 dark:focus:bg-stone-700 dark:focus:text-zinc-200">
                    Auriculares y micrófonos
                  </a>
                </li>
                <li className="w-full md:w-1/5 mb-1 font-semibold dark:text-zinc-200 hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <Link href="/categories/phones" className="active:!bg-green-200 active:!text-stone-900 focus:text-stone-900 focus:bg-zinc-200 dark:focus:bg-stone-700 dark:focus:text-zinc-200">
                    Celulares
                  </Link>
                </li>
                <li className="w-full md:w-1/5 mb-1 font-semibold dark:text-zinc-200 hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <a className="active:!bg-green-200 active:!text-stone-900 focus:text-stone-900 focus:bg-zinc-200 dark:focus:bg-stone-700 dark:focus:text-zinc-200">
                    Disipadores
                  </a>
                </li>
                <li className="w-full md:w-1/5 mb-1 font-semibold dark:text-zinc-200 hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <a className="active:!bg-green-200 active:!text-stone-900 focus:text-stone-900 focus:bg-zinc-200 dark:focus:bg-stone-700 dark:focus:text-zinc-200">
                    Fuentes de poder
                  </a>
                </li>
                <li className="w-full md:w-1/5 mb-1 font-semibold dark:text-zinc-200 hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <a className="active:!bg-green-200 active:!text-stone-900 focus:text-stone-900 focus:bg-zinc-200 dark:focus:bg-stone-700 dark:focus:text-zinc-200">
                    Gabinetes
                  </a>
                </li>
                <li className="w-full md:w-1/5 mb-1 font-semibold dark:text-zinc-200 hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <a className="active:!bg-green-200 active:!text-stone-900 focus:text-stone-900 focus:bg-zinc-200 dark:focus:bg-stone-700 dark:focus:text-zinc-200">
                    Memorias ram
                  </a>
                </li>
                <li className="w-full md:w-1/5 mb-1 font-semibold dark:text-zinc-200 hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <a className="active:!bg-green-200 active:!text-stone-900 focus:text-stone-900 focus:bg-zinc-200 dark:focus:bg-stone-700 dark:focus:text-zinc-200">
                    Monitores
                  </a>
                </li>
                <li className="w-full md:w-1/5 mb-1 font-semibold dark:text-zinc-200 hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <a className="active:!bg-green-200 active:!text-stone-900 focus:text-stone-900 focus:bg-zinc-200 dark:focus:bg-stone-700 dark:focus:text-zinc-200">
                    Motherboards
                  </a>
                </li>
                <li className="w-full md:w-1/5 mb-1 font-semibold dark:text-zinc-200 hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <a className="active:!bg-green-200 active:!text-stone-900 focus:text-stone-900 focus:bg-zinc-200 dark:focus:bg-stone-700 dark:focus:text-zinc-200">
                    Notebooks
                  </a>
                </li>
                <li className="w-full md:w-1/5 mb-1 font-semibold dark:text-zinc-200 hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <a className="active:!bg-green-200 active:!text-stone-900 focus:text-stone-900 focus:bg-zinc-200 dark:focus:bg-stone-700 dark:focus:text-zinc-200">
                    Parlantes
                  </a>
                </li>
                <li className="w-full md:w-1/5 mb-1 font-semibold dark:text-zinc-200 hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <a className="active:!bg-green-200 active:!text-stone-900 focus:text-stone-900 focus:bg-zinc-200 dark:focus:bg-stone-700 dark:focus:text-zinc-200">
                    Placas de video
                  </a>
                </li>
                <li className="w-full md:w-1/5 mb-1 font-semibold dark:text-zinc-200 hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <a className="active:!bg-green-200 active:!text-stone-900 focus:text-stone-900 focus:bg-zinc-200 dark:focus:bg-stone-700 dark:focus:text-zinc-200">
                    Procesadores
                  </a>
                </li>
                <li className="w-full md:w-1/5 mb-1 font-semibold dark:text-zinc-200 hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <a className="active:!bg-green-200 active:!text-stone-900 focus:text-stone-900 focus:bg-zinc-200 dark:focus:bg-stone-700 dark:focus:text-zinc-200">
                    Sillas gamer
                  </a>
                </li>
                <li className="w-full md:w-1/5 mb-1 font-semibold dark:text-zinc-200 hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <a className="active:!bg-green-200 active:!text-stone-900 focus:text-stone-900 focus:bg-zinc-200 dark:focus:bg-stone-700 dark:focus:text-zinc-200">
                    Tablets
                  </a>
                </li>
                <li className="w-full md:w-1/5 mb-1 font-semibold dark:text-zinc-200 hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <a className="active:!bg-green-200 active:!text-stone-900 focus:text-stone-900 focus:bg-zinc-200 dark:focus:bg-stone-700 dark:focus:text-zinc-200">
                    Teclados y mouse
                  </a>
                </li>
                <li className="w-full md:w-1/5 font-semibold dark:text-zinc-200 hover:text-stone-900 hover:bg-green-300 duration-300 rounded">
                  <a className="active:!bg-green-200 active:!text-stone-900 focus:text-stone-900 focus:bg-zinc-200 dark:focus:bg-stone-700 dark:focus:text-zinc-200">
                    Volantes
                  </a>
                </li>
              </ul>
            )}
          </div>
    )
}
