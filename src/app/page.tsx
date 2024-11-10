'use client'
import { useState } from "react";
import { Header } from "@/app/sections/Header";
import { YoureHere } from "./sections/YoureHere";
import Menu from "./components/Menu";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Header toggleMenu={toggleMenu} menuOpen={menuOpen} />
      <Menu isVisible={menuOpen} />
    </>
  );
}
