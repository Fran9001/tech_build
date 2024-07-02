"use client";
import { useState } from "react";
import Image from "next/image";
export default function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex-none hidden sm:inline-block">
      <div className="dropdown dropdown-end duration-300">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
          onClick={toggleDropdown}
        >
          <div className="w-8 rounded-full">
            <Image
              width={32}
              height={32}
              alt="Imagen de perfil"
              src="/images/Profile.jpg"
            />
          </div>
        </div>
        {isOpen && (
          <ul
            tabIndex={0}
            className="menu menu-sm font-semibold dropdown-content z-[1] p-2 mt-1 shadow text-stone-900 bg-zinc-200 dark:bg-stone-700 dark:text-zinc-200 rounded-box rounded-t-none w-52"
          >
            <li className="mb-2 hover:text-stone-900 hover:bg-green-300 duration-300 rounded-lg">
              <a className="active:!bg-green-200 active:!text-stone-900 focus:bg-stone-700 focus:text-zinc-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                    clipRule="evenodd"
                  />
                </svg>
                Cerrar Sesión
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
