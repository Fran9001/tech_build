import Link from "next/link";
import Categories from "@/components/Categories";
import Cart from "@/components/Cart";
import ThemeToggle from "@/components/ThemeToggle";
import Profile from "@/components/Profile";
import MobileProfile from "@/components/MobileProfile";

export default function Navbar() {

  return (
    <nav className="navbar flex-col p-0 fixed top-0 z-[100]">
      {/* Top navbar */}
      <div className="navbar bg-zinc-300 dark:bg-stone-900 flex justify-between sm:justify-center">
        {/* Name/Logo */}
        <div>
          <a
            href="#"
            className="px-0 mr-2 sm:px-2 btn btn-ghost text-xl text-stone-800 hover:bg-transparent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.0"
              viewBox="0 0 300.000000 226.000000"
              preserveAspectRatio="xMidYMid meet"
              className="h-12 text-stone-900 dark:text-zinc-200"
            >
              <g
                transform="translate(0.000000,226.000000) scale(0.100000,-0.100000)"
                fill="currentColor"
                stroke="currentColor"
              >
                <path d="M230 2157 c-24 -12 -25 -16 -28 -130 l-3 -117 -69 0 c-77 0 -100 -13 -100 -59 0 -43 30 -62 105 -68 l65 -6 0 -808 c0 -796 0 -809 20 -829 23 -23 58 -26 85 -6 14 10 20 30 23 80 l4 66 49 0 49 0 0 -63 c0 -71 17 -97 62 -97 48 0 58 26 58 145 l0 108 45 48 45 48 0 83 0 83 117 -2 c65 -1 121 -2 126 -3 4 0 7 -42 7 -94 0 -108 -2 -106 96 -106 l64 0 0 100 0 100 80 0 80 0 0 -95 c0 -69 3 -95 13 -96 6 0 21 -2 32 -4 11 -2 37 -2 57 2 l37 5 3 96 3 96 30 0 30 0 3 -97 3 -97 504 0 504 0 3 96 3 96 207 -1 c221 -2 259 4 299 51 18 20 19 53 19 718 0 687 0 698 -20 723 -12 15 -38 31 -58 37 -59 16 -2620 13 -2652 -3z m318 -154 l-3 -38 -57 -3 -58 -3 -2 -332 -3 -332 -45 0 -45 0 -3 373 -2 372 110 0 111 0 -3 -37z m2292 -600 l0 -638 -1103 0 c-875 0 -1102 3 -1101 13 1 6 2 293 3 637 l1 625 1100 0 1100 0 0 -637z m-2410 -438 l0 -205 -50 0 -50 0 0 205 0 205 50 0 50 0 0 -205z m5 -361 c30 -33 32 -63 4 -98 -52 -66 -144 6 -105 83 25 48 65 54 101 15z m1855 -14 l0 -40 -410 0 -410 0 0 33 c0 19 3 37 7 40 3 4 188 7 410 7 l403 0 0 -40z" />
                <path d="M1780 2014 c-260 -30 -486 -180 -594 -397 -60 -119 -75 -210 -57 -335 21 -149 111 -304 233 -401 l63 -50 450 -1 451 0 70 72 c88 92 111 123 165 228 43 84 43 86 47 207 4 131 -4 175 -55 278 -63 127 -193 255 -330 324 -109 54 -316 90 -443 75z m625 -639 l0 -350 -22 -3 -23 -3 0 349 c0 192 3 352 7 356 4 4 14 5 23 4 13 -3 15 -45 15 -353z m-985 245 l0 -100 -30 0 -30 0 0 100 0 100 30 0 30 0 0 -100z m654 90 c48 -11 115 -58 138 -97 22 -36 37 -203 19 -203 -6 0 -11 7 -11 15 0 21 -45 92 -84 133 -70 76 -208 115 -323 93 -115 -22 -193 -83 -249 -193 -51 -101 -31 -250 48 -352 68 -89 162 -130 283 -124 159 9 271 96 330 257 13 34 14 30 14 -67 1 -92 -2 -108 -21 -135 -31 -43 -56 -65 -103 -87 -35 -17 -63 -20 -237 -20 -226 0 -253 7 -325 81 -64 67 -83 137 -83 302 0 86 5 150 14 181 31 101 112 190 197 214 43 13 341 14 393 2z m-106 -229 c131 -67 146 -228 29 -315 -41 -30 -163 -30 -204 0 -66 49 -96 137 -73 211 33 102 153 152 248 104z m-548 -301 l0 -150 -30 0 -30 0 0 150 0 150 30 0 30 0 0 -150z" />
                <path d="M2636 1939 c-54 -42 -19 -149 49 -149 37 0 73 27 80 61 18 82 -65 138 -129 88z" />
                <path d="M757 1883 c-4 -3 -7 -33 -7 -65 l0 -58 110 0 110 0 0 59 c0 44 -4 60 -16 65 -21 8 -189 8 -197 -1z" />
                <path d="M763 1603 c-9 -3 -13 -26 -13 -63 0 -59 0 -59 33 -64 26 -5 91 -3 175 3 19 2 16 117 -4 125 -19 7 -173 7 -191 -1z" />
                <path d="M763 1323 c-9 -3 -13 -26 -13 -63 0 -59 0 -59 33 -65 17 -3 66 -5 107 -3 l75 3 3 58 c3 54 1 58 -23 67 -27 10 -160 13 -182 3z" />
                <path d="M752 978 l3 -63 105 0 105 0 3 63 3 62 -111 0 -111 0 3 -62z" />
                <path d="M2619 981 c-38 -38 -37 -71 2 -110 34 -35 63 -39 99 -14 34 23 40 33 40 71 0 23 -8 40 -26 57 -37 34 -78 33 -115 -4z" />
                <path d="M710 295 c0 -20 5 -25 25 -25 26 0 25 2 30 -85 4 -77 3 -77 33 -73 27 3 27 4 30 81 3 74 4 77 27 77 20 0 25 5 25 25 0 25 -1 25 -85 25 -84 0 -85 0 -85 -25z" />
                <path d="M959 313 c-1 -4 -2 -52 -3 -105 l-1 -98 78 0 c70 0 77 2 77 20 0 17 -7 20 -50 20 -43 0 -50 3 -50 20 0 17 7 20 40 20 33 0 40 3 40 20 0 16 -7 20 -35 20 -28 0 -35 4 -35 19 0 16 8 20 43 23 34 2 42 7 42 23 0 18 -8 20 -72 23 -40 2 -74 -1 -74 -5z" />
                <path d="M1219 291 c-57 -58 -27 -169 51 -186 30 -7 100 10 100 24 0 16 -38 43 -45 32 -21 -34 -75 7 -75 57 0 37 28 56 69 47 39 -8 64 21 36 41 -10 8 -39 14 -63 14 -35 0 -49 -6 -73 -29z" />
                <path d="M1450 216 l0 -106 30 0 c28 0 30 2 30 40 0 39 1 40 35 40 34 0 35 -1 35 -40 0 -36 3 -40 25 -40 l25 0 0 105 c0 105 0 105 -24 105 -22 0 -25 -5 -28 -42 -3 -40 -5 -43 -33 -43 -27 0 -30 3 -35 40 -4 35 -9 40 -32 43 l-28 3 0 -105z" />
                <path d="M1840 215 l0 -105 75 0 c63 0 76 3 85 19 12 24 13 68 1 75 -5 3 -6 26 -4 51 5 41 4 45 -21 55 -15 5 -52 10 -82 10 l-54 0 0 -105z m105 35 c0 -23 -49 -20 -53 3 -3 15 2 18 25 15 17 -2 28 -9 28 -18z m0 -75 c0 -22 -31 -33 -47 -17 -17 17 -1 44 24 40 15 -2 23 -10 23 -23z" />
                <path d="M2100 241 c0 -70 3 -83 24 -108 20 -23 32 -28 70 -28 71 0 88 24 94 130 l5 85 -32 0 -31 0 0 -64 c0 -83 -6 -96 -40 -96 -34 0 -40 13 -40 96 0 62 -1 64 -25 64 -25 0 -25 -1 -25 -79z" />
                <path d="M2380 215 l0 -105 25 0 25 0 0 105 0 105 -25 0 -25 0 0 -105z" />
                <path d="M2530 216 l0 -106 75 0 c68 0 75 2 75 20 0 17 -7 20 -45 20 l-44 0 -3 83 c-3 81 -3 82 -30 85 l-28 3 0 -105z" />
                <path d="M2750 215 l0 -105 64 0 c59 0 67 3 95 31 24 23 31 40 31 68 0 69 -53 111 -140 111 l-50 0 0 -105z m112 38 c20 -18 24 -63 6 -81 -7 -7 -22 -12 -35 -12 -21 0 -23 4 -23 55 0 60 15 71 52 38z" />
              </g>
            </svg>
          </a>
        </div>

        {/* Search bar */}
        <div className="h-10 ml-2 sm:ml-0 flex w-4/5 sm:w-2/5">
          <input
            type="text"
            placeholder="Buscar productos o marcas"
            className="input bg-zinc-300 dark:bg-stone-800 border-stone-500 placeholder:text-stone-400 text-stone-800 dark:text-zinc-200 w-full h-full rounded-e-none focus:outline-0 focus:border-stone-500"
          />
          <button className="btn bg-stone-800 dark:bg-zinc-200 pl-2 pr-2 min-h-1 h-full rounded-s-none border-none hover:bg-stone-700 dark:hover:bg-stone-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-6 text-zinc-200 dark:text-stone-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>

        {/* Cart */}
        <Cart />
        <ThemeToggle />
      </div>

      {/* Bottom navbar */}
      <div className="navbar min-h-14 h-14 bg-stone-900 dark:bg-stone-700 flex justify-between">
        <div>
          {/* Categories */}
          <Categories />
          <Link
            href="/"
            className="hidden sm:inline-flex btn m-1 bg-stone-900 hover:bg-stone-900 dark:bg-stone-700 dark:hover:bg-stone-700 text-zinc-200 text-base border-none"
          >
            Inicio
          </Link>
          <Link
            href="/about"
            className="hidden sm:inline-flex btn m-1 bg-stone-900 hover:bg-stone-900 dark:bg-stone-700 dark:hover:bg-stone-700 text-zinc-200 text-base border-none"
          >
            Sobre Nosotros
          </Link>
          <Link
            href="/contact"
            className="hidden sm:inline-flex btn m-1 bg-stone-900 hover:bg-stone-900 dark:bg-stone-700 dark:hover:bg-stone-700 text-zinc-200 text-base border-none"
          >
            Contáctanos
          </Link>
        </div>

        <Profile />
        {/* Mobile Profile */}
        <MobileProfile />
      </div>
    </nav>
  );
}
