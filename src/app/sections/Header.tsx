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
    <header className="sticky top-0 border border-secondary-100 rounded-lg overflow-hidden">
      <div className="flex justify-between items-center bg-primary-100 px-4 py-4 text-sm border-b border-secondary-100">
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
