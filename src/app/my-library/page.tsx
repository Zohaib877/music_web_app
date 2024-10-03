import TabContent from "@/components/Tabs/TabContent";
import Tabs from "@/components/Tabs/Tabs";
import AppLayout from "@/containers/layout/AppLayout";
import Link from "next/link";

const tabContents = [
    [
      { src: '/assets/images/thumbnail/song_mobile.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai' },
      { src: '/assets/images/thumbnail/song_mobile.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai' },
      { src: '/assets/images/thumbnail/song_mobile.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai' },
      { src: '/assets/images/thumbnail/song_mobile.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai' },
      { src: '/assets/images/thumbnail/song_mobile.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai' },
      { src: '/assets/images/thumbnail/song_mobile.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai' },
      { src: '/assets/images/thumbnail/song_mobile.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai' },
      { src: '/assets/images/thumbnail/song_mobile.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai' },
      { src: '/assets/images/thumbnail/song_mobile.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai' },
      { src: '/assets/images/thumbnail/song_mobile.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai' },
    ],
    [
      { src: '/assets/images/thumbnail/artist_mobile.png', alt: 'Slide 2', text: 'Gul panra' },
      { src: '/assets/images/thumbnail/artist_mobile.png', alt: 'Slide 2', text: 'Laila Khan' },
      { src: '/assets/images/thumbnail/artist_mobile.png', alt: 'Slide 2', text: 'Zeeshan Khan' },
      { src: '/assets/images/thumbnail/artist_mobile.png', alt: 'Slide 2', text: 'Malkoo' },
      { src: '/assets/images/thumbnail/artist_mobile.png', alt: 'Slide 2', text: 'Shafaullah Khan' },
    ],
    [
        { src: '/assets/images/thumbnail/song_mobile.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai' },
        { src: '/assets/images/thumbnail/song_mobile.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai' },
        { src: '/assets/images/thumbnail/song_mobile.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai' },
        { src: '/assets/images/thumbnail/song_mobile.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai' },
        { src: '/assets/images/thumbnail/song_mobile.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai' },
        { src: '/assets/images/thumbnail/song_mobile.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai' },
        { src: '/assets/images/thumbnail/song_mobile.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai' },
        { src: '/assets/images/thumbnail/song_mobile.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai' },
        { src: '/assets/images/thumbnail/song_mobile.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai' },
        { src: '/assets/images/thumbnail/song_mobile.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai' },
    ],
    [
        { src: '/assets/images/thumbnail/song_mobile.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai' },
        { src: '/assets/images/thumbnail/song_mobile.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai' },
        { src: '/assets/images/thumbnail/song_mobile.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai' },
        { src: '/assets/images/thumbnail/song_mobile.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai' },
        { src: '/assets/images/thumbnail/song_mobile.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai' },
        { src: '/assets/images/thumbnail/song_mobile.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai' },
        { src: '/assets/images/thumbnail/song_mobile.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai' },
        { src: '/assets/images/thumbnail/song_mobile.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai' },
        { src: '/assets/images/thumbnail/song_mobile.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai' },
        { src: '/assets/images/thumbnail/song_mobile.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai' },
    ],
    [
        { src: '/assets/images/thumbnail/song_mobile.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai' },
        { src: '/assets/images/thumbnail/song_mobile.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai' },
        { src: '/assets/images/thumbnail/song_mobile.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai' },
        { src: '/assets/images/thumbnail/song_mobile.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai' },
        { src: '/assets/images/thumbnail/song_mobile.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai' },
        { src: '/assets/images/thumbnail/song_mobile.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai' },
        { src: '/assets/images/thumbnail/song_mobile.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai' },
        { src: '/assets/images/thumbnail/song_mobile.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai' },
        { src: '/assets/images/thumbnail/song_mobile.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai' },
        { src: '/assets/images/thumbnail/song_mobile.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai' },
    ],
];

const tabs = [
    { label: 'My Playlist', href: '#', content: <TabContent items={tabContents[0]} /> },
    { label: 'Favourite Artist', href: '#', content: <TabContent items={tabContents[1]} /> },
    { label: 'Favourite Songs', href: '#', content: <TabContent items={tabContents[2]} /> },
    { label: 'Favourite Albums', href: '#', content: <TabContent items={tabContents[3]} /> },
    { label: 'Recently Played', href: '#', content: <TabContent items={tabContents[4]} /> },
];

const MyLibrary = () => {
    return(
        <AppLayout>
            <div className="w-full h-auto">
                {/* Header Title & Buttons */}
                <div className="w-full h-auto flex max-md:flex-col justify-between items-center px-6">
                    <h1 className="text-fontPrimary text-3xl font-bold py-3">My Library</h1>
                    <div className="flex justify-center max-sm:w-full max-sm:overflow-x-scroll max-sm:whitespace-nowrap py-3">
                        <Link href="#" className="w-fit h-11 px-6 mx-2 flex items-center rounded-3xl bg-buttonPrimary border-buttonPrimary text-white font-medium hover:text-gray-200">
                            Audio
                        </Link>
                        <Link href="/my-library/video" className="w-fit h-11 px-6 mx-2 flex items-center rounded-3xl bg-buttonDisable border border-buttonPrimary text-white font-medium hover:text-gray-200">
                            Video
                        </Link>
                        <Link href="/my-library/movie" className="w-fit h-11 px-6 mx-2 flex items-center rounded-3xl bg-buttonDisable border border-buttonPrimary text-white font-medium hover:text-gray-200">
                            Movie
                        </Link>
                    </div>
                </div>

                <Tabs tabs={tabs} />
            </div>
        </AppLayout>
    )
}

export default MyLibrary;