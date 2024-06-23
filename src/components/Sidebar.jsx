import React from "react";

const Sidebar = () => {
  return (
    <div className="hidden sm:block p-4 w-64 text-stone-900 border border-zinc-300 dark:border-zinc-400 rounded-lg mt-24 dark:bg-stone-300">
      <div className="mb-6">
        <h3 className="font-bold mb-2">BRANDS</h3>
        <div>
          <label className="block mb-2">
            <input type="checkbox" className="mr-2" />
            Apple
          </label>
          <label className="block mb-2">
            <input type="checkbox" className="mr-2" />
            Samsung
          </label>
          <label className="block mb-2">
            <input type="checkbox" className="mr-2" />
            Motorola
          </label>
          <label className="block mb-2">
            <input type="checkbox" className="mr-2" />
            Xiaomi
          </label>
          <label className="block mb-2">
            <input type="checkbox" className="mr-2" />
            LG
          </label>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-bold mb-2">PRICE</h3>
        <div className="flex space-x-2">
          <input
            type="number"
            placeholder="min"
            className="w-full border rounded p-1"
          />
          <input
            type="number"
            placeholder="max"
            className="w-full border rounded p-1"
          />
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-bold mb-2">SIZE</h3>
        <div className="flex space-x-2">
          <button className="border rounded p-1 w-8">XS</button>
          <button className="border rounded p-1 w-8">S</button>
          <button className="border rounded p-1 w-8">M</button>
          <button className="border rounded p-1 w-8">L</button>
          <button className="border rounded p-1 w-8">XL</button>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-bold mb-2">COLOR</h3>
        <div className="flex space-x-2">
          <div className="w-6 h-6 bg-red-500 border rounded"></div>
          <div className="w-6 h-6 bg-black border rounded"></div>
          <div className="w-6 h-6 bg-white border rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
