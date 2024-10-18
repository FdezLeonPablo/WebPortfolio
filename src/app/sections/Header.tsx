'use client';
import MenuIcon from '@/app/assets/menu-line.svg';
import Menu from '@/app/components/Menu';

export const Header = () => {
  return (
    <header className="sticky top-0 border border-secondary-100 rounded-lg overflow-hidden">
      <div className="flex justify-between items-center bg-primary-100 px-4 py-4 text-sm border-b border-secondary-100">
        <p className='text-secondary-100'>Pablo-Leon</p>
        <MenuIcon className="h-6 w-6 text-secondary-100" />
      </div>
      <Menu/>
    </header>
  );
};
