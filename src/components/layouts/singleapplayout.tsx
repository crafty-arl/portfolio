import React from 'react';
import { ThemeSwitcher } from '../ThemeSwitcher';

const SingleAppLayout = ({ leftHero, rightHero }: { leftHero: React.ReactNode; rightHero: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <ThemeSwitcher />
      <main className="flex-grow relative flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/5 lg:h-screen bg-black p-4 border-r border-gray-700">
          {leftHero}
        </div>
        <div className="w-full lg:w-4/5 lg:h-screen overflow-y-auto bg-black p-4 lg:p-8">
          {rightHero}
        </div>
      </main>
    </div>
  );
};

export default SingleAppLayout;
