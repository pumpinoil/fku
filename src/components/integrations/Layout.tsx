import React from 'react';

const LayoutContainer: React.FC = () => {
  return (
    <div className="flex flex-col min-h-full bg-white bg-opacity-20 text-white p-4 rounded">
      <header className="p-2 bg-magickPurple rounded mb-2">Header</header>
      <main className="flex-grow p-2">Main Content</main>
      <footer className="p-2 bg-magickBlue rounded mt-2">Footer</footer>
    </div>
  );
};

export default LayoutContainer;
