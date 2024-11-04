import TabContent from "@/components/Tabs/TabContent";
import Tabs from "@/components/Tabs/Tabs";
import AppLayout from "@/containers/layout/AppLayout";
import Link from "next/link";

const tabContents = [
    [
      { src: '/assets/images/thumbnail/video_desktop.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai', view: 512},
      { src: '/assets/images/thumbnail/video_desktop.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai', view: 512},
      { src: '/assets/images/thumbnail/video_desktop.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai', view: 512},
      { src: '/assets/images/thumbnail/video_desktop.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai', view: 512},
      { src: '/assets/images/thumbnail/video_desktop.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai', view: 512},
      { src: '/assets/images/thumbnail/video_desktop.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai', view: 512},
      { src: '/assets/images/thumbnail/video_desktop.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai', view: 512},
      { src: '/assets/images/thumbnail/video_desktop.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai', view: 512},
      { src: '/assets/images/thumbnail/video_desktop.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai', view: 512},
      { src: '/assets/images/thumbnail/video_desktop.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai', view: 512},
    ],
    [
      { src: '/assets/images/thumbnail/video_desktop.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai', view: 512},
      { src: '/assets/images/thumbnail/video_desktop.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai', view: 512},
      { src: '/assets/images/thumbnail/video_desktop.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai', view: 512},
      { src: '/assets/images/thumbnail/video_desktop.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai', view: 512},
      { src: '/assets/images/thumbnail/video_desktop.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai', view: 512},
      { src: '/assets/images/thumbnail/video_desktop.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai', view: 512},
      { src: '/assets/images/thumbnail/video_desktop.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai', view: 512},
      { src: '/assets/images/thumbnail/video_desktop.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai', view: 512},
      { src: '/assets/images/thumbnail/video_desktop.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai', view: 512},
      { src: '/assets/images/thumbnail/video_desktop.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai', view: 512},
    ],
    [
      { src: '/assets/images/thumbnail/video_desktop.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai', view: 512},
      { src: '/assets/images/thumbnail/video_desktop.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai', view: 512},
      { src: '/assets/images/thumbnail/video_desktop.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai', view: 512},
      { src: '/assets/images/thumbnail/video_desktop.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai', view: 512},
      { src: '/assets/images/thumbnail/video_desktop.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai', view: 512},
      { src: '/assets/images/thumbnail/video_desktop.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai', view: 512},
      { src: '/assets/images/thumbnail/video_desktop.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai', view: 512},
      { src: '/assets/images/thumbnail/video_desktop.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai', view: 512},
      { src: '/assets/images/thumbnail/video_desktop.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai', view: 512},
      { src: '/assets/images/thumbnail/video_desktop.png', alt: 'Slide 1', text: 'Wo Larki Khawab Mere Dekhti Hai', view: 512},
    ],
];

const tabs = [
    { label: 'My Videos', href: '#', content: <TabContent items={tabContents[0]} /> },
    { label: 'Watch Later', href: '#', content: <TabContent items={tabContents[1]} /> },
    { label: 'Downloads', href: '#', content: <TabContent items={tabContents[2]} /> },
];

const Video = () => {
    return(
        <AppLayout>
            <div className="w-full h-auto">
                {/* Header Title & Buttons */}
                <div className="w-full h-auto flex max-md:flex-col justify-between items-center px-6">
                    <h1 className="text-fontPrimary text-3xl font-bold py-3">My Library</h1>
                    <div className="flex justify-center max-sm:w-full max-sm:overflow-x-scroll max-sm:whitespace-nowrap py-3">
                        <Link href="/my-library" className="w-fit h-11 px-6 mx-2 flex items-center rounded-3xl bg-buttonDisable border-buttonPrimary text-white font-medium hover:text-gray-200">
                            Audio
                        </Link>
                        <Link href="#" className="w-fit h-11 px-6 mx-2 flex items-center rounded-3xl bg-buttonPrimary border border-buttonPrimary text-white font-medium hover:text-gray-200">
                            Video
                        </Link>
                    </div>
                </div>

                <Tabs tabs={tabs} />
            </div>
        </AppLayout>
    )
}

export default Video;