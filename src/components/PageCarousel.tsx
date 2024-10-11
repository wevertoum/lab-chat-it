"use client";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
  itens: PageCarousel[];
  navigateToChat: () => void;
}

const PageCarousel: React.FC<Props> = ({ itens, navigateToChat }) => {
  const [current, setCurrent] = useState(0);

  const RenderDots = () => {
    return (
      <div className="flex justify-center mt-4">
        {itens.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 mx-2 rounded-full cursor-pointer ${
              current === index ? "bg-green-500" : "bg-green-200"
            }`}
          />
        ))}
      </div>
    );
  };

  const Navigation = () => {
    return (
      <div className="flex justify-between mt-4">
        <button
          className="bg-green-500 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCurrent(current - 1)}
          disabled={current === 0}
        >
          Anterior
        </button>
        <button
          className="bg-green-500 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCurrent(current + 1)}
          disabled={current === itens.length - 1}
        >
          Próximo
        </button>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Image
        src={itens[current].image}
        alt={itens[current].title}
        width={200}
        height={200}
      />

      <RenderDots />
      <h1 className="text-2xl font-bold text-center text-laborit-text-gray-title">
        {itens[current].title}
      </h1>
      <p className="text-center text-laborit-text-gray-title">
        {itens[current].description}
      </p>

      <Navigation />
    </div>
  );
};

export default PageCarousel;
