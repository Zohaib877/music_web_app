'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

const LeftCard = () => {
  const router = useRouter();
  return (
    <div className="hidden lg:flex-1 lg:flex lg:justify-end lg:items-center">
      <div className="flex bg-cardDisabled/50 bg-opacity-40 lg:w-8/12 lg:h-3/5 lg:mr-16 justify-center items-center flex-col rounded-3xl">
      <div className="relative w-40 h-40 cursor-pointer" onClick={()=>router.push("/")}> 
          <Image
            src={require("../../../public/assets/images/brand/Logo.png")}
            alt="Music App Logo"
            width={200} 
            height={200}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default LeftCard;
