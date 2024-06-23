"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Card from "@/components/Card";

const PhonesClient = ({ initialPhones }) => {
  const [phones, setPhones] = useState(initialPhones);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchItems = async (page) => {
      setLoading(true);
      try {
        const offset = (page - 1) * 12;
        const res = await fetch(
          `https://mercado-libre4.p.rapidapi.com/search?country=AR&search=smartphones&offset=${offset}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "X-RapidAPI-Key": "d6e6855dcamshc0a9a0baf1edc0fp174196jsnb9de0d5725d7",
              "X-RapidAPI-Host": "mercado-libre4.p.rapidapi.com",
            },
          }
        );
        const data = await res.json();
        setPhones(data.results.slice(0, 12));
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (page === 1) {
      setPhones(initialPhones);
      setLoading(false);
    } else {
      fetchItems(page);
    }
  }, [page, initialPhones]);

  const Skeleton = () => {
    return (
      <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 border border-zinc-300 w-full h-1/2 rounded-lg animate-pulse">
        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            className="m-2 md:m-6 dark:bg-stone-300 rounded-lg border border-zinc-300 animate-pulse"
          >
            <div className="shadow-2xl rounded-lg overflow-hidden animate-pulse">
              <div className="relative w-full h-72 bg-zinc-100 dark:bg-stone-500 animate-pulse" />
              <div className="flex flex-col justify-between p-3 h-32 bg-zinc-200 dark:bg-stone-600">
                <div className="h-4 bg-stone-300 dark:bg-stone-700 rounded w-3/4 mb-2 animate-pulse" />
                <div className="h-6 bg-stone-300 dark:bg-stone-700 rounded w-1/4 mb-4 animate-pulse" />
                <div className="h-8 bg-stone-300 dark:bg-stone-700 rounded w-1/2 animate-pulse" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  if (error) return <h1>Failed to load items</h1>;

  return (
    <div className="mt-[120px] bg-zinc-100 dark:bg-stone-400 w-full flex justify-around items-start min-h-screen">
      <Sidebar />
      {/* CARD CONTAINER*/}
      <div className="flex flex-col justify-center items-center my-24 w-full sm:w-3/4 h-1/2">
        {loading ? (
          <Skeleton />
        ) : (
          <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 border border-zinc-300 w-full h-1/2 rounded-lg">
            {/* CARD */}
            {phones.map((phone) => (
              <Card key={phone.id} product={phone} />
            ))}
          </div>
        )}
        {/* PAGINATION */}
        <div className="flex justify-center mt-4">
          {[1, 2, 3].map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`px-3 py-2 mx-1 bg-green-500 hover:bg-green-600 text-white rounded ${
                page === pageNumber ? "bg-green-700" : ""
              }`}
            >
              {pageNumber}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhonesClient;
