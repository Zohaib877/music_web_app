import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaHeart } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { IoDownloadOutline } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";

interface SongQueueCardGridProps {
  id: number;
  isOpen: boolean;
  handleToggle: () => void;
}

const SongQueueGridCard: React.FC<SongQueueCardGridProps> = ({
  id,
  isOpen,
  handleToggle,
}) => {
  const isBigScreen = useMediaQuery({ minWidth: 1024 });
  const router = useRouter();

  return (
    <div
      className={`relative h-52 rounded-lg shadow-lg transition-transform transform overflow-hidden ${
        isOpen ? "bg-gray-800" : "bg-gray-700"
      } hover:scale-105 my-2`}
      style={{
        backgroundImage: 'url("/assets/images/thumbnail/tumbnail1.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>{" "}
      {/* Dark overlay */}
      <div className="relative p-4 flex flex-col justify-between h-full">
        <div className="flex items-center w-full gap-2">
          <Image
            className="cursor-pointer"
            src="/assets/icons/play.png"
            alt="play"
            width={35}
            height={35}
            onClick={() => router.push(`/player/audio/${id}`)}
          />
          <p className="text-white font-semibold text-xs">05:23</p>
        </div>

        <div className="flex w-full justify-between items-center relative">
          <div className="flex flex-col justify-end w-7/12">
            <div className="bg-black bg-opacity-50 backdrop-blur-sm p-2 rounded-md">
              <h3
                className="text-white font-bold text-xs truncate cursor-pointer hover:underline"
                onClick={() => router.push(`/player/audio/${id}`)}
              >
                Wo Larki Khawab Mere Dekhti Hai
              </h3>
              <p className="text-gray-300 font-light text-xs truncate">
                Zeeshan Khan Rokhri
              </p>
            </div>
          </div>
          {!isBigScreen ? (
            <div className="flex flex-col justify-between items-center h-full w-3/12">
              <div className="text-white cursor-pointer" onClick={handleToggle}>
                <IoIosArrowDown width={30} />
              </div>
              <p className="text-gray-300 font-thin text-xs">05:23</p>
            </div>
          ) : (
            <div className="flex justify-evenly items-center w-3/12 gap-2">
              <div className="text-white text-xl">
                <IoDownloadOutline />
              </div>
              <div className="text-red-500 text-xl">
                <FaHeart />
              </div>
              <div className="text-white text-xl">
                <HiOutlineDotsVertical />
              </div>
            </div>
          )}
        </div>
        {isOpen && (
          <div className="flex justify-evenly items-center w-full pt-3 gap-2">
            <div className="text-white text-xl">
              <IoDownloadOutline />
            </div>
            <div className="text-red-500 text-xl">
              <FaHeart />
            </div>
            <div className="text-white text-xl">
              <HiOutlineDotsVertical />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SongQueueGridCard;
