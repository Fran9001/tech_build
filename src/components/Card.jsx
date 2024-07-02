import Image from "next/image";

export default function Card({ product }) {
  return (
    <div className="m-2 md:m-6 dark:bg-stone-300 rounded-lg border border-zinc-300">
      <div className="shadow-2xl rounded-lg overflow-hidden">
        <div className="relative w-full h-72 bg-white">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(100vw - 2rem) 20rem, 20rem"
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
        <div className="flex flex-col justify-between p-3 h-32 bg-zinc-200 dark:bg-stone-600">
          <h3
            title={product.title}
            className="text-sm font-semibold text-stone-600 dark:text-white"
          >
            {product.title}
          </h3>
          <div className="flex justify-between items-end">
            <p className="text-lg font-bold text-green-600 dark:text-green-300">
              $ {product.price}
            </p>
            <button
              title="Agregar al carrito"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-stone-800 dark:text-zinc-100"
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
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
