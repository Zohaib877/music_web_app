import VideoPlayer from "@/components/Player/VideoPlayer";
import VideoCard from "@/components/SongCard/VideoCard";

import AppLayout from "@/containers/layout/AppLayout";

const items = [
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
]

const AudioPlayerPage = ( {params}: {params: {id: string}} ) => {
    return (
        <AppLayout>
            <div className="w-full h-auto flex flex-col justify-between items-center max-lg:px-4 px-9 max-lg:py-2 py-9">
                <VideoPlayer />
                
                <div className="w-full h-auto max-xl:mr-0 mr-10 flex flex-col justify-between gap-6 pt-5">
                    <h1 className="text-fontPrimary font-bold text-4xl max-lg:text-2xl max-lg:text-center">Similar</h1>
                    <VideoCard items={items}/>
                </div>
            </div>
        </AppLayout>
    );
}
export default AudioPlayerPage;