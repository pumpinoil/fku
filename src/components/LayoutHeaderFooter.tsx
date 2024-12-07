// src/components/LayoutHeaderFooter.tsx

import React from 'react';

const LayoutHeaderFooter: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-pink-500 text-white p-4 shadow-md">
        <h1 className="text-3xl">Magickal Dashboard</h1>
      </header>
      <main className="flex-grow bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 p-4">
        {children}
      </main>
      <footer className="bg-pink-500 text-white p-4 text-center shadow-inner">
        <p>&copy; 2024 Magickal Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LayoutHeaderFooter;
