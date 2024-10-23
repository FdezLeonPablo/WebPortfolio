"use client";
import { useState } from "react";
import MenuIcon from "@/app/assets/menu-line.svg";
import Menu from "@/app/components/Menu";
import CloseMenu from "@/app/assets/close-large-line.svg";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="sticky top-0 border border-lines rounded-t-lg overflow-hidden backdrop-blur-sm z-20">
      <div className="flex justify-between items-center bg-primary-100 px-4 py-4 text-base border-lines">
        <p className="text-secondary-100">Pablo-Leon</p>
        <div onClick={toggleMenu} className="cursor-pointer">
          {menuOpen ? (
            <CloseMenu className="h-6 w-6 text-secondary-100" />
          ) : (
            <MenuIcon className="h-6 w-6 text-secondary-100" />
          )}
        </div>
      </div>
      <Menu isVisible={menuOpen}/>
    </header>
  );
};
