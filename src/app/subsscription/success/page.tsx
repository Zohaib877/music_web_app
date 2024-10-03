import Image from "next/image";
import Link from "next/link";

const Success = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <Image src={'/assets/images/thumbnail/success.png'} alt="succss" width={250} height={250} />
            <h1 className="text-fontPrimary font-bold text-5xl py-6">Successful</h1>
            <div className="py-9 w-[250px] flex justify-center items-center">
            <Link
                href={"/"}
                className="w-full rounded-3xl bg-gradient-to-r from-btnGradientFrom to-btnGradientto text-white font-medium py-2 mt-4 text-center"
                >Back To Home</Link>
            </div>
        </div>
    );
}

export default Success;