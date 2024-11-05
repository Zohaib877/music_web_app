"use client";
import React, { useState } from 'react';
import Link from 'next/link';

interface Tab {
  label: string;
  href: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div>
      <div className="w-full h-3 flex justify-center max-md:justify-start items-center max-md:overflow-x-scroll whitespace-nowrap max-md:pt-14 py-10 overflow-y-hidden">
        {tabs.map((tab, index) => (
          <Link
            key={tab.href}
            href={tab.href}
            className={`w-fit h-11 px-6 mx-2 flex items-center rounded-3xl border border-buttonPrimary text-white font-medium hover:text-gray-200
              ${index === selectedIndex ? 'bg-buttonPrimary' : 'bg-buttonDisable'}`}
            role="tab"
            aria-selected={index === selectedIndex}
            tabIndex={index === selectedIndex ? 0 : -1}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </Link>
        ))}
      </div>

      <div className="py-10">
        {tabs[selectedIndex].content}
      </div>
    </div>
  );
};

export default Tabs;