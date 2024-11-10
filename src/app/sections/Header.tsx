import MenuIcon from "@/app/assets/menu-line.svg";
import CloseMenu from "@/app/assets/close-large-line.svg";

export const Header = ({ toggleMenu, menuOpen }) => {
  return (
    <header className="sticky top-0 h-16 border-b border-lines rounded-t-lg overflow-hidden backdrop-blur-sm z-20">
      <div className="flex">
        {/* Left Section with consistent border */}
        <div className="flex items-center w-full md:w-64 bg-primary-100 px-4 py-4 md:border-r border-lines">
          <p className="text-secondary-100">Pablo-Leon</p>
          <div onClick={toggleMenu} className="ml-auto cursor-pointer">
            {menuOpen ? (
              <CloseMenu className="h-6 w-6 text-secondary-100" />
            ) : (
              <MenuIcon className="h-6 w-6 text-secondary-100" />
            )}
          </div>
        </div>

        {/* Right Section visible on desktop only */}
        <div className="hidden md:flex flex-1 bg-primary-100 px-4 py-4">
          {/* Placeholder for future desktop-only functionality */}
        </div>
      </div>
    </header>
  );
};

export default Header;