"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useTheme } from "next-themes";
import NavigationOnboarding from "./NavigationOnboarding";
import RenderDotsOnboarding from "./RenderDotsOnboarding";

interface Props {
  itens: PageCarousel[];
  navigateToChat: () => void;
}

const PageCarousel: React.FC<Props> = ({ itens }) => {
  const [current, setCurrent] = useState(0);
  const { theme } = useTheme();

  return (
    <div className="flex flex-col items-center h-full">
      <div className="relative w-[362px] h-[455px] mt-[95px]">
        <div className="absolute inset-0 w-full h-full">
          <Image
            alt={`${itens[current].title}-shadow`}
            src={itens[current].image}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
              borderRadius: "33.05px",
              filter: "blur(40px) brightness(0.7)",
            }}
          />
        </div>
        <Image
          alt={itens[current].title}
          src={itens[current].image}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            borderRadius: "33.05px",
          }}
          className="px-4 pb-4"
        />
      </div>

      <RenderDotsOnboarding current={current} itens={itens} theme={theme} />
      <div className="w-80">
        <h1 className="text-center text-[33.9px] text-laborit-text-title dark:text-white font-bold">
          {itens[current].title}
        </h1>
        <p className="text-center text-[17.68px] text-laborit-text-description mt-4 font-extralight">
          {itens[current].description}
        </p>
      </div>

      <NavigationOnboarding
        current={current}
        setCurrent={setCurrent}
        itens={itens}
        theme={theme}
      />
    </div>
  );
};

export default PageCarousel;
