import MenuIcon from '@/app/assets/menu-line.svg';
import { useState } from 'react';

export const Header = () => {
  return (
    <header className="sticky top-0">
      <div className="flex justify-between items-center bg-primary-100 px-4 py-3 text-xs">
        <p className='text-secondary-100'>Pablo-Leon</p>
        <MenuIcon className="h-5 w-5 text-secondary-100" />
      </div>
    </header>
  );
};
