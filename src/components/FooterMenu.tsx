import { useState } from "react";
import HouseIcon from "@/components/icons/HouseIcon";
import MenuGroupedIcon from "@/components/icons/MenuGroupedIcon";
import ClockIcon from "@/components/icons/ClockIcon";
import PersonIcon from "@/components/icons/PersonIcon";

interface FooterMenuProps {
  theme?: string;
}

export default function FooterMenu({ theme }: FooterMenuProps) {
  const [currentPage, setCurrentPage] = useState("person");

  const menuItems = [
    { name: "house", IconComponent: HouseIcon },
    { name: "menu", IconComponent: MenuGroupedIcon },
    { name: "clock", IconComponent: ClockIcon },
    { name: "person", IconComponent: PersonIcon },
  ];

  return (
    <footer
      className={`
      flex justify-around h-[66px] items-center py-4 
      border-t bg-gradient-to-br from-laborit-footer-bg-start 
      to-laborit-footer-bg-end border-laborit-footer-border 
      dark:bg-gradient-to-br dark:from-laborit-footer-bg-dark-start 
      dark:to-laborit-footer-bg-dark-end`}
      style={{
        backdropFilter: "blur(19.2214px)",
        borderTopWidth: "1.20133px",
      }}
    >
      {menuItems.map(({ name, IconComponent }) => (
        <div
          key={name}
          className="flex flex-col items-center"
          onClick={() => setCurrentPage(name)}
        >
          <IconComponent
            size={22}
            theme={theme}
            selected={currentPage === name}
          />
          <span
            className={`w-[6px] h-[6px] mt-2 rounded-full bg-laborit-icon-footer dark:bg-white ${
              currentPage === name ? "visible" : "invisible"
            }`}
          ></span>
        </div>
      ))}
    </footer>
  );
}
