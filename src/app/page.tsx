'use client';

import { useState } from "react";
import { Header } from "@/app/sections/Header";
import Menu from "./components/Menu";
import TabsBar from "./components/TabsBar";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFiles, setOpenFiles] = useState<string[]>([]);
  const [activeFile, setActiveFile] = useState<string | null>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleFileClick = (fileName: string) => {
    if (!openFiles.includes(fileName)) {
      setOpenFiles((prev) => [...prev, fileName]);
    }
    setActiveFile(fileName);
  };

  const handleCloseFile = (fileName: string) => {
    setOpenFiles((prev) => prev.filter((name) => name !== fileName));
    if (activeFile === fileName) {
      const remainingFiles = openFiles.filter((name) => name !== fileName);
      setActiveFile(remainingFiles.length > 0 ? remainingFiles[0] : null);
    }
  };

  const handleTabClick = (fileName: string) => {
    setActiveFile(fileName);
  };

  return (
    <>
      <Header toggleMenu={toggleMenu} menuOpen={menuOpen} />
      <div className="flex">
        <Menu isVisible={menuOpen} onFileClick={handleFileClick} />
        <div className="flex-1">
          <TabsBar
            openFiles={openFiles}
            onCloseFile={handleCloseFile}
            activeFile={activeFile}
            onTabClick={handleTabClick}
          />
          {/* Content area where file content will be displayed */}
          <div className="p-4">
            {/* We'll handle content rendering in the next step */}
          </div>
        </div>
      </div>
    </>
  );
}