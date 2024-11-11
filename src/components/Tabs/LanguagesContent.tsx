'use client'
import React from "react";
import { Language } from "@/lib/features/language/languageSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface LanguagesProp {
  item: Language[];
}
const LanguagesContent: React.FC<LanguagesProp> = ({ item }) => {
  const router = useRouter();

  return (
    <div className="w-full h-auto py-10 grid justify-items-center grid-flow-row-dense grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1">
      {item.map((item, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center h-auto w-fit px-4 py-3"
          onClick={() => router.push(`/language/languagesMedia/${item.id}`)}
        >
          <Image
            src={'/assets/images/thumbnail/language.png'}
            alt={'languages'}
            width={250}
            height={250}
            className="mb-3 mx-auto"
          />
          <p className="text-fontPrimary text-base font-medium text-center">
            {item.name}
          </p>
        </div>
      ))}
    </div>
  )
}

export default LanguagesContent;
