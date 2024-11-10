import ArrowRightIcon from "@/app/assets/arrow-right-s-line.svg";
import ArrowDownIcon from "@/app/assets/arrow-down-s-line.svg";
import FolderIcon from "@/app/assets/folder-3-fill.svg";
import { useState } from "react";

interface FolderOrFile {
  name: string;
  icon?: React.ComponentType;
  files?: FolderOrFile[];
}

const folderStructure: FolderOrFile[] = [
  {
    name: "_hello",
    files: [{ name: "you-are-here" }],
  },
  {
    name: "_about-me",
    files: [{ name: "trajectory" }, { name: "skills" }, { name: "hobbies" }],
  },
  {
    name: "_projects",
    files: [{ name: "stunning-saas" }],
  },
  {
    name: "_contact-me",
    files: [{ name: "contact-card" }],
  },
];

const folderColors: Record<string, string> = {
  _hello: "text-[#FEA55F]",
  "_about-me": "text-[#43D9AD]",
  _projects: "text-[#E99287]",
  "_contact-me": "text-[#C98BDF]",
};

const Menu = ({ isVisible }: { isVisible: boolean }) => {
  console.log("Menu visibiliry:", isVisible);

  const [openFolders, setOpenFolders] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleFolder = (folderName: string) => {
    setOpenFolders((prevState) => ({
      ...prevState,
      [folderName]: !prevState[folderName],
    }));
  };

  return (
    <nav
      className={`p-4 backdrop-blur-sm transition-transform duration-300 transform border-b border-r border-lines overflow-hidden
    ${
      isVisible ? "translate-y-0" : "-translate-y-full"
    }
    md:top-[64px] md:left-0 md:w-64 md:h-[calc(100vh-64px)] md:fixed md:z-10 md:${
      isVisible ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {folderStructure.map((folder) => (
        <div
          key={folder.name}
          onClick={() => toggleFolder(folder.name)}
          className="cursor-pointer"
        >
          <span className="flex items-center text-sm text-secondary-100 mb-1">
            {openFolders[folder.name] ? (
              <ArrowDownIcon className="w-4 h-4 mr-2" />
            ) : (
              <ArrowRightIcon className="w-4 h-4 mr-2" />
            )}
            <FolderIcon
              className={`w-4 h-4 mr-2 ${folderColors[folder.name]}`}
            />
            {folder.name}
          </span>
          {openFolders[folder.name] && folder.files && (
            <ul className="pl-6 text-sm text-secondary-100">
              {folder.files.map((file) => (
                <li key={file.name} className="flex items-center mb-1">
                  {file.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Menu;
