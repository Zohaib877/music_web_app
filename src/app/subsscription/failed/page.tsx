import Image from "next/image";
import Link from "next/link";

const Failed = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <Image src={'/assets/images/thumbnail/failed.png'} alt="succss" width={250} height={250} />
            <h1 className="text-fontPrimary font-bold text-5xl py-6">Failed</h1>
            <div className="py-9 w-[250px] flex justify-center items-center">
            <Link
                href={"/subsscription"}
                className="w-full rounded-3xl bg-gradient-to-r from-btnGradientFrom to-btnGradientto text-white font-medium py-2 mt-4 text-center"
                >Please Try Again</Link>
            </div>
        </div>
    );
}

export default Failed;