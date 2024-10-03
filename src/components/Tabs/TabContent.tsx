import React from "react";
import { IoEyeOutline } from "react-icons/io5";

interface TabContentProps {
  items: { src: string; alt: string; text?: string; view?: number }[];
}

const TabContent: React.FC<TabContentProps> = ({ items }) => (
  <div className="w-full h-auto py-10 grid justify-items-center grid-flow-row-dense grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1">
    {items.map((item, index) => (
      <div
        key={index}
        className="flex flex-col justify-center items-center h-auto w-fit px-4 py-3"
      >
        <img
          src={item.src}
          alt={item.alt}
          width={250}
          height={250}
          className="mb-3 mx-auto"
          
        />
        <p className="text-fontPrimary text-base font-medium text-center">
          {item.text}
        </p>
        {item.view && 
          <p className="text-fontPrimary text-xs font-medium text-center flex flex-row gap-1 items-center">
              <IoEyeOutline size={20} />  
              { item.view} view
          </p>
        }
      </div>
    ))}
  </div>
);

export default TabContent;
