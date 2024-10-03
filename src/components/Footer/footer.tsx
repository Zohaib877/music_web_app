import Image from "next/image";

const Footer = () => {
    return (
        <div className="bg-black w-full h-72 hidden lg:flex xl:flex justify-between items-start pt-9 pl-24">
            <div className="basis-1/5 px-5">
                <h1 className="text-fontPrimary text-2xl">Music APP</h1>
                <p className="text-fontPrimary text-xs pt-3">Koyal offers you free, unlimited access to over millions of folk songs, trending dramas, short videos, movies and more of the active playlists that attract you. Stream online and download them in 9+ different languages of Pakistan, including: Sindhi, Saraiki, Punjabi, Pashto, Balochi, Hindko and Urdu.</p>
                <ul className="flex justify-start items-center pt-3 w-full">
                    <li>
                        <Image className="cursor-pointer px-1.5" src="/assets/icons/fb_active.png" alt="facebook_active" width={25} height={25} />
                    </li>
                    <li>
                        <Image className="cursor-pointer px-1.5" src="/assets/icons/insta_active.png" alt="instagram_active" width={30} height={30} />
                    </li>
                    <li>
                        <Image className="cursor-pointer px-1.5" src="/assets/icons/linkdin_active.png" alt="linkdin_active" width={30} height={30} />
                    </li>
                    <li>
                        <Image className="cursor-pointer px-1.5" src="/assets/icons/youtube_active.png" alt="youtube_active" width={30} height={30} />
                    </li>
                </ul>
            </div>
            <div className="basis-1/5 px-5">
                <h1 className="text-fontPrimary text-2xl">NEW RELEASES</h1>
                <ul className="list-none text-fontPrimary pt-3">
                    <li className="text-fontPrimary text-xs cursor-pointer">Udiyan Kunjan</li>
                    <li className="text-fontPrimary text-xs cursor-pointer">Apni Gaari Rivo Nikalun</li>
                    <li className="text-fontPrimary text-xs cursor-pointer">Joriyan Banawe Sohna Allah</li>
                    <li className="text-fontPrimary text-xs cursor-pointer">Attend Kar Le Meri Call</li>
                    <li className="text-fontPrimary text-xs cursor-pointer">Kabhi To Dil Se</li>
                    <li className="text-fontPrimary text-xs cursor-pointer">Roz Marda Rehay Roz</li>
                    <li className="text-fontPrimary text-xs cursor-pointer">Tuhnjey Ishq Kayo Aa Badnam</li>
                    <li className="text-fontPrimary text-xs cursor-pointer">Cho Mond Kharab Ko Thi</li>
                </ul>
            </div>
            <div className="basis-1/5 px-5">
                <h1 className="text-fontPrimary text-2xl">NEW RELEASES</h1>
                <ul className="list-none text-fontPrimary pt-3">
                    <li className="text-fontPrimary text-xs cursor-pointer">Udiyan Kunjan</li>
                    <li className="text-fontPrimary text-xs cursor-pointer">Apni Gaari Rivo Nikalun</li>
                    <li className="text-fontPrimary text-xs cursor-pointer">Joriyan Banawe Sohna Allah</li>
                    <li className="text-fontPrimary text-xs cursor-pointer">Attend Kar Le Meri Call</li>
                    <li className="text-fontPrimary text-xs cursor-pointer">Kabhi To Dil Se</li>
                    <li className="text-fontPrimary text-xs cursor-pointer">Roz Marda Rehay Roz</li>
                    <li className="text-fontPrimary text-xs cursor-pointer">Tuhnjey Ishq Kayo Aa Badnam</li>
                    <li className="text-fontPrimary text-xs cursor-pointer">Cho Mond Kharab Ko Thi</li>
                </ul>
            </div>
            <div className="basis-1/5 px-5">
                <h1 className="text-fontPrimary text-2xl">NEW RELEASES</h1>
                <ul className="list-none text-fontPrimary pt-3">
                    <li className="text-fontPrimary text-xs cursor-pointer">Udiyan Kunjan</li>
                    <li className="text-fontPrimary text-xs cursor-pointer">Apni Gaari Rivo Nikalun</li>
                    <li className="text-fontPrimary text-xs cursor-pointer">Joriyan Banawe Sohna Allah</li>
                    <li className="text-fontPrimary text-xs cursor-pointer">Attend Kar Le Meri Call</li>
                    <li className="text-fontPrimary text-xs cursor-pointer">Kabhi To Dil Se</li>
                    <li className="text-fontPrimary text-xs cursor-pointer">Roz Marda Rehay Roz</li>
                    <li className="text-fontPrimary text-xs cursor-pointer">Tuhnjey Ishq Kayo Aa Badnam</li>
                    <li className="text-fontPrimary text-xs cursor-pointer">Cho Mond Kharab Ko Thi</li>
                </ul>
            </div>
            <div className="basis-1/5 px-5">
                <h1 className="text-fontPrimary text-2xl">Download App</h1>
                <ul className="list-none pt-3">
                    <li className="pt-1">
                        <Image src="/assets/images/platform-button/playstore.png" alt="" width={178} height={49} />
                    </li>
                    <li className="pt-1">
                        <Image src="/assets/images/platform-button/appstore.png" alt="" width={178} height={49} />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;