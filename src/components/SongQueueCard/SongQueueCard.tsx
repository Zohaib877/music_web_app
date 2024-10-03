import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaHeart } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { IoDownloadOutline } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";

interface SongQueueCardProps {
  id: number;
  isOpen: boolean;
  handleToggle: () => void;
}

const SongQueueCard: React.FC<SongQueueCardProps> = ({
  id,
  isOpen,
  handleToggle,
}) => {
  const isBigScreen = useMediaQuery({ minWidth: 1024 });
  const router = useRouter();
  return (
    <div
      className={`h-auto rounded-lg lg:rounded-full ${
        isOpen ? "bg-black/40" : "bg-cardDisabled/50"
      } flex flex-col justify-between items-center my-2 lg:px-4 xl:px-4 divide-y`}
    >
      <div className="flex w-full justify-between items-center pb-3 py-2">
        <div className="flex justify-around items-center w-3/12 md:w-2/12 lg:w-2/12 xl:w-2/12">
          <Image
            className="ml-2 cursor-pointer"
            src="/assets/icons/play.png"
            alt="play"
            width={35}
            height={35}
            onClick={() => router.push("/player/audio/1")}
          />
          <Image
            className="ml-2"
            src="/assets/images/thumbnail/song_mobile.png"
            alt="play"
            width={55}
            height={55}
          />
        </div>
        <div className="ml-2 flex flex-col justify-start w-7/12">
          <h3
            className="text-fontPrimary font-bold text-xs truncate cursor-pointer hover:underline"
            onClick={() => router.push("/player/audio/1")}
          >
            Wo Larki Khawab Mere Dekhti Hai
          </h3>
          <p className="text-fontPrimary font-light text-xs truncate">
            Zeeshan Khan Rokhri
          </p>
        </div>
        {!isBigScreen ? (
          <div className="flex flex-col justify-between items-center h-full w-3/12 md:w-2/12 lg:w-2/12 xl:w-2/12">
            <div
              className="text-fontPrimary cursor-pointer"
              onClick={handleToggle}
            >
              <IoIosArrowDown width={55} />
            </div>
            <p className="text-fontPrimary font-thin text-xs">05:23</p>
          </div>
        ) : (
          <div className="flex justify-evenly items-center w-3/12">
            <div className="text-fontPrimary text-xl">
              <IoDownloadOutline />
            </div>
            <div className="text-buttonPrimary text-xl">
              <FaHeart />
            </div>
            <div className="text-fontPrimary text-xl">
              <HiOutlineDotsVertical />
            </div>
            <p className="text-fontPrimary font-thin text-xs">05:23</p>
          </div>
        )}
      </div>
      {isOpen && (
        <div className="flex justify-evenly items-center w-8/12 md:w-10/12 pt-3">
          <div className="text-fontPrimary text-xl">
            <IoDownloadOutline />
          </div>
          <div className="text-fontPrimary text-xl">
            <FaHeart />
          </div>
          <div className="text-fontPrimary text-xl">
            <HiOutlineDotsVertical />
          </div>
        </div>
      )}
    </div>
  );
};
export default SongQueueCard;
