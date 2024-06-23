"use client"
import { useState } from "react";
export default function Cart () {
    const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
    return (
        <div className="flex-none gap-2 ml-1">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle hover:bg-transparent"
              onClick={toggleDropdown}
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-stone-800 dark:text-zinc-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item bg-stone-800 dark:bg-stone-500 text-zinc-200">
                  0
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-zinc-200 dark:bg-stone-800  shadow"
            >
              {isOpen && (
                <div className="card-body">
                  <span className="text-stone-800 dark:text-zinc-200 font-bold text-lg">
                    0 Productos
                  </span>
                  <span className="text-green-600 font-semibold">
                    Subtotal: $000
                  </span>
                  <div className="card-actions">
                    <button aria-label="Carrito de compras" className="btn bg-green-400 text-stone-800 hover:bg-green-300 duration-500 btn-block active:!bg-green-500 active:!text-stone-900">
                      Ver Carrito
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
    );
}