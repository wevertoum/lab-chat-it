import React from "react";
import SelectedDotIcon from "./icons/SelectedDotIcon";
import DefaultDotIcon from "./icons/DefaultDotIcon";

interface Props {
  current: number;
  itens: PageCarousel[];
  theme?: string;
}

const RenderDotsOnboarding: React.FC<Props> = ({ current, itens, theme }) => {
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

export default RenderDotsOnboarding;
