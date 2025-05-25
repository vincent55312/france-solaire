import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-100 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[var(--color-green)]">France Solaire</h1>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.png" alt="France Solaire Logo" className="h-10" />
      </div>
    </header>
  );
};

export default Header; 