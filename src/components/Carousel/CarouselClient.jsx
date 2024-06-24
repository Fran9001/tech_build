"use client";
import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-prev-arrow`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-next-arrow`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

const CarouselClient = ({ initialItems, title }) => {
  const [items, setItems] = useState(initialItems);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const Skeleton = () => (
    <Slider {...settings}>
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className="p-4 dark:bg-stone-300 dark:border-b-zinc-100 dark:border-b-4"
        >
          <div className="shadow-2xl rounded-lg overflow-hidden animate-pulse">
            <div className="relative w-full h-72 bg-stone-100 dark:bg-stone-500" />
            <div className="flex flex-col justify-between p-3 h-32 bg-stone-100 dark:bg-stone-600">
              <div className="h-4 bg-stone-200 dark:bg-stone-700 rounded w-3/4 mb-2" />
              <div className="h-6 bg-stone-200 dark:bg-stone-700 rounded w-1/4 mb-4" />
              <div className="h-8 bg-stone-200 dark:bg-stone-700 rounded w-1/2" />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );

  if (error) return <h1>Failed to load items</h1>;

  return (
    <div className="container mx-auto mt-16 md:mt-20 px-10 sm:px-14">
      <h2 className="text-center gap-2 pl-0 py-2 md:pl-4 md:py-4 rounded-t-2xl text-stone-700 text-3xl font-bold bg-gradient-to-r from-green-400 via-green-300 to-green-400 dark:from-green-700 dark:via-green-400 dark:to-green-700">
        {title}
      </h2>
      {loading ? (
        <Skeleton />
      ) : (
        <Slider {...settings}>
          {items.map((item, index) => (
            <div
              key={index}
              className="p-4 dark:bg-stone-300 dark:border-b-zinc-100 dark:border-b-4"
            >
              <div className="shadow-2xl rounded-lg overflow-hidden">
                <div className="relative w-full h-72 bg-white">
                  <Image
                    src={item.pictures.grid.normal}
                    alt={item.pictures.grid.tags.alt}
                    fill
                    objectFit="contain"
                  />
                </div>
                <div className="flex flex-col justify-between p-3 h-32 bg-stone-200 dark:bg-stone-600">
                  <h3 title={item.title} className="text-sm font-semibold text-stone-600 dark:text-white">
                    {item.title.slice(0, 35) + "..."}
                  </h3>
                  <div title={"Agregar al carrito"} className="flex justify-between items-end">
                    <p className="text-lg font-bold text-green-900 dark:text-green-300">
                      ${item.price.amount}
                    </p>
                    <button aria-label="Agregar al carrito" className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded">
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
          ))}
        </Slider>
      )}
    </div>
  );
};

export default CarouselClient;
