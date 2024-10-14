import React from "react";
import ChevronIcon from "./icons/ChevronIcon";
import MenuIcon from "./icons/MenuIcon";
import { useRouter } from "next/navigation";

interface Props {
  title: string;
  showMenu?: boolean;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

const PageContainer: React.FC<Props> = ({
  title,
  showMenu = false,
  children,
  footer,
}) => {
  const router = useRouter();

  return (
    <div className="h-screen flex justify-center">
      <div className="flex flex-col h-full w-[100%] sm:w-[60%] lg:w-[40%]">
        <div className="w-full flex justify-center">
          <header className="flex items-center justify-between mt-[45px] mb-[16px] w-[450px] h-[48px] py-4 px-6">
            <button
              onClick={() => router.back()}
              className="flex items-center justify-center w-10 h-10 rounded-lg shadow-back-button dark:bg-laborit-navigator-dark dark:shadow-transparent"
            >
              <ChevronIcon size={8} />
            </button>

            <h1 className="font-medium text-[23px] text-center text-laborit-dark-gray dark:text-white flex-1">
              {title}
            </h1>

            <button
              onClick={() => router.push("/profile")}
              className={`flex items-center justify-center w-10 h-10 ${
                showMenu ? "" : "invisible"
              }`}
            >
              <MenuIcon />
            </button>
          </header>
        </div>
        <main className="flex-1 overflow-y-auto">{children}</main>
        {footer && <footer className="w-full">{footer}</footer>}
      </div>
    </div>
  );
};

export default PageContainer;
