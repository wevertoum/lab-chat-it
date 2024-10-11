import React from "react";
import ArrowIcon from "./icons/ArrowIcon";

interface Props {
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  itens: PageCarousel[];
  theme?: string;
}

const NavigationOnboarding: React.FC<Props> = ({
  current,
  setCurrent,
  itens,
  theme,
}) => {
  const isPrevDisabled = current === 0;
  const isNextDisabled = current === itens.length - 1;

  return (
    <div className="flex items-center justify-around mt-6 w-[154px] h-[64px] shadow-lg py-2 px-4 rounded-[16px] bg-white dark:bg-laborit-navigator-dark">
      <button
        onClick={() => setCurrent(current - 1)}
        disabled={isPrevDisabled}
        aria-label="left arrow"
      >
        <ArrowIcon direction="left" disabled={isPrevDisabled} theme={theme} />
      </button>
      <div className="h-6 w-px bg-laborit-separator dark:laborit-separator-dark"></div>
      <button
        onClick={() => setCurrent(current + 1)}
        disabled={isNextDisabled}
        aria-label="right arrow"
      >
        <ArrowIcon direction="right" disabled={isNextDisabled} theme={theme} />
      </button>
    </div>
  );
};

export default NavigationOnboarding;
