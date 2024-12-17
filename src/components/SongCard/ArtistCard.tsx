import { Artist } from "@/lib/features/Home/homeSlice";
import Image from "next/image";
import React from "react";

interface ArtistCardProps {
    items: Artist[];
}

const ArtistCard: React.FC<ArtistCardProps> = ({ items }) => {
    return (
        <div className="w-full h-auto py-10 grid justify-items-center grid-flow-row-dense grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1">
            {items.map((item, index) => (
                <div
                    key={item.id}
                    className="flex flex-col justify-center items-center h-auto w-fit px-4 py-3"
                >
                    <Image
                        src={item.image??""}
                        alt={item.name}
                        width={250}
                        height={250}
                        className="mb-3 mx-auto rounded-sm"
                    />
                    <p className="text-fontPrimary text-base font-medium text-center">
                        {item.name}
                    </p>
                </div>
            ))}
        </div>
    );
}
export default ArtistCard;