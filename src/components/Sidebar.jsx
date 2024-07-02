import React from "react";

const Sidebar = () => {
  return (
    <div className="hidden sm:block p-4 w-64 h-[32rem] text-stone-900 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-400 rounded-lg dark:bg-stone-600 bg-stone-200">
      <div className="mb-6">
        <h3 className="font-bold mb-2">MARCA</h3>
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
        <h3 className="font-bold mb-2">PRECIO</h3>
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
    </div>
  );
};

export default Sidebar;
