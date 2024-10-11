"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useTheme } from "next-themes";
import ArrowIcon from "./icons/ArrowIcon";
import SelectedDotIcon from "./icons/SelectedDotIcon";
import DefaultDotIcon from "./icons/DefaultDotIcon";

interface Props {
  itens: PageCarousel[];
  navigateToChat: () => void;
}

const PageCarousel: React.FC<Props> = ({ itens }) => {
  const [current, setCurrent] = useState(0);
  const { theme } = useTheme();

  const RenderDots = () => {
    return (
      <div className="flex justify-between my-4 items-center w-[60px]">
        {itens.map((_, index) => (
          <div key={index}>
            {current === index ? (
              <SelectedDotIcon theme={theme} size={17.68} />
            ) : (
              <DefaultDotIcon theme={theme} />
            )}
          </div>
        ))}
      </div>
    );
  };

  const Navigation = () => {
    const isPrevDisabled = current === 0;
    const isNextDisabled = current === itens.length - 1;

    return (
      <div className="flex items-center justify-around mt-4 w-[154px] h-[64px] shadow-lg py-2 px-4 rounded-[16px] bg-white dark:bg-laborit-navigator-dark">
        <button
          onClick={() => setCurrent(current - 1)}
          disabled={isPrevDisabled}
        >
          <ArrowIcon direction="left" disabled={isPrevDisabled} theme={theme} />
        </button>
        <div className="h-6 w-px bg-laborit-separator dark:laborit-separator-dark"></div>
        <button
          onClick={() => setCurrent(current + 1)}
          disabled={isNextDisabled}
        >
          <ArrowIcon
            direction="right"
            disabled={isNextDisabled}
            theme={theme}
          />
        </button>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center h-full">
      <div className="relative  w-[362px] h-[455px] mt-[95px]">
        <Image
          alt={itens[current].title}
          src={itens[current].image}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            borderRadius: "33.05px",
            filter: "drop-shadow(0 0 70px #75717181)",
          }}
          className="px-4 pb-4"
        />
      </div>

      <RenderDots />
      <div className="w-80">
        <h1 className="text-center text-[33.9px] text-laborit-text-title dark:text-white font-bold">
          {itens[current].title}
        </h1>
        <p className="text-center text-[17.68px] text-laborit-text-description mt-4 font-extralight">
          {itens[current].description}
        </p>
      </div>

      <Navigation />
    </div>
  );
};

export default PageCarousel;
