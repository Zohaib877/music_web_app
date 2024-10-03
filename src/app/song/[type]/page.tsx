import SongCard from "@/components/SongCard/SongCard";
import AppLayout from "@/containers/layout/AppLayout";

const SongList = [
    {
      src: "/assets/images/thumbnail/song_mobile.png",
      alt: "Wo Larki Khawab Mere Dekhti Hai",
      text: "Wo Larki Khawab Mere Dekhti Hai",
    },
    {
      src: "/assets/images/thumbnail/song_mobile.png",
      alt: "Wo Larki Khawab Mere Dekhti Hai",
      text: "Wo Larki Khawab Mere Dekhti Hai",
    },
    {
      src: "/assets/images/thumbnail/song_mobile.png",
      alt: "Wo Larki Khawab Mere Dekhti Hai",
      text: "Wo Larki Khawab Mere Dekhti Hai",
    },
    {
      src: "/assets/images/thumbnail/song_mobile.png",
      alt: "Wo Larki Khawab Mere Dekhti Hai",
      text: "Wo Larki Khawab Mere Dekhti Hai",
    },
    {
      src: "/assets/images/thumbnail/song_mobile.png",
      alt: "Wo Larki Khawab Mere Dekhti Hai",
      text: "Wo Larki Khawab Mere Dekhti Hai",
    },
    {
      src: "/assets/images/thumbnail/song_mobile.png",
      alt: "Wo Larki Khawab Mere Dekhti Hai",
      text: "Wo Larki Khawab Mere Dekhti Hai",
    },
    {
      src: "/assets/images/thumbnail/song_mobile.png",
      alt: "Wo Larki Khawab Mere Dekhti Hai",
      text: "Wo Larki Khawab Mere Dekhti Hai",
    },
    {
      src: "/assets/images/thumbnail/song_mobile.png",
      alt: "Wo Larki Khawab Mere Dekhti Hai",
      text: "Wo Larki Khawab Mere Dekhti Hai",
    },
    {
      src: "/assets/images/thumbnail/song_mobile.png",
      alt: "Wo Larki Khawab Mere Dekhti Hai",
      text: "Wo Larki Khawab Mere Dekhti Hai",
    },
    {
      src: "/assets/images/thumbnail/song_mobile.png",
      alt: "Wo Larki Khawab Mere Dekhti Hai",
      text: "Wo Larki Khawab Mere Dekhti Hai",
    },
    {
      src: "/assets/images/thumbnail/song_mobile.png",
      alt: "Wo Larki Khawab Mere Dekhti Hai",
      text: "Wo Larki Khawab Mere Dekhti Hai",
    },
    {
      src: "/assets/images/thumbnail/song_mobile.png",
      alt: "Wo Larki Khawab Mere Dekhti Hai",
      text: "Wo Larki Khawab Mere Dekhti Hai",
    },
    {
      src: "/assets/images/thumbnail/song_mobile.png",
      alt: "Wo Larki Khawab Mere Dekhti Hai",
      text: "Wo Larki Khawab Mere Dekhti Hai",
    },
    {
      src: "/assets/images/thumbnail/song_mobile.png",
      alt: "Wo Larki Khawab Mere Dekhti Hai",
      text: "Wo Larki Khawab Mere Dekhti Hai",
    },
    {
      src: "/assets/images/thumbnail/song_mobile.png",
      alt: "Wo Larki Khawab Mere Dekhti Hai",
      text: "Wo Larki Khawab Mere Dekhti Hai",
    },
    {
      src: "/assets/images/thumbnail/song_mobile.png",
      alt: "Wo Larki Khawab Mere Dekhti Hai",
      text: "Wo Larki Khawab Mere Dekhti Hai",
    },
];

const VideoList = [
    {
      src: "/assets/images/thumbnail/video_desktop.png",
      alt: "Wo Larki Khawab Mere Dekhti Hai",
      text: "Wo Larki Khawab Mere Dekhti Hai",
    },
    {
      src: "/assets/images/thumbnail/video_desktop.png",
      alt: "Wo Larki Khawab Mere Dekhti Hai",
      text: "Wo Larki Khawab Mere Dekhti Hai",
    },
    {
      src: "/assets/images/thumbnail/video_desktop.png",
      alt: "Wo Larki Khawab Mere Dekhti Hai",
      text: "Wo Larki Khawab Mere Dekhti Hai",
    },
    {
      src: "/assets/images/thumbnail/video_desktop.png",
      alt: "Wo Larki Khawab Mere Dekhti Hai",
      text: "Wo Larki Khawab Mere Dekhti Hai",
    },
    {
      src: "/assets/images/thumbnail/video_desktop.png",
      alt: "Wo Larki Khawab Mere Dekhti Hai",
      text: "Wo Larki Khawab Mere Dekhti Hai",
    },
    {
      src: "/assets/images/thumbnail/video_desktop.png",
      alt: "Wo Larki Khawab Mere Dekhti Hai",
      text: "Wo Larki Khawab Mere Dekhti Hai",
    },
    {
      src: "/assets/images/thumbnail/video_desktop.png",
      alt: "Wo Larki Khawab Mere Dekhti Hai",
      text: "Wo Larki Khawab Mere Dekhti Hai",
    },
    {
      src: "/assets/images/thumbnail/video_desktop.png",
      alt: "Wo Larki Khawab Mere Dekhti Hai",
      text: "Wo Larki Khawab Mere Dekhti Hai",
    },
    {
      src: "/assets/images/thumbnail/video_desktop.png",
      alt: "Wo Larki Khawab Mere Dekhti Hai",
      text: "Wo Larki Khawab Mere Dekhti Hai",
    },
    {
      src: "/assets/images/thumbnail/video_desktop.png",
      alt: "Wo Larki Khawab Mere Dekhti Hai",
      text: "Wo Larki Khawab Mere Dekhti Hai",
    },
    {
      src: "/assets/images/thumbnail/video_desktop.png",
      alt: "Wo Larki Khawab Mere Dekhti Hai",
      text: "Wo Larki Khawab Mere Dekhti Hai",
    },
    {
      src: "/assets/images/thumbnail/video_desktop.png",
      alt: "Wo Larki Khawab Mere Dekhti Hai",
      text: "Wo Larki Khawab Mere Dekhti Hai",
    },
    {
      src: "/assets/images/thumbnail/video_desktop.png",
      alt: "Wo Larki Khawab Mere Dekhti Hai",
      text: "Wo Larki Khawab Mere Dekhti Hai",
    },
    {
      src: "/assets/images/thumbnail/video_desktop.png",
      alt: "Wo Larki Khawab Mere Dekhti Hai",
      text: "Wo Larki Khawab Mere Dekhti Hai",
    },
    {
      src: "/assets/images/thumbnail/video_desktop.png",
      alt: "Wo Larki Khawab Mere Dekhti Hai",
      text: "Wo Larki Khawab Mere Dekhti Hai",
    },
    {
      src: "/assets/images/thumbnail/video_desktop.png",
      alt: "Wo Larki Khawab Mere Dekhti Hai",
      text: "Wo Larki Khawab Mere Dekhti Hai",
    },
];

const ArtistList = [
    {
      src: "/assets/images/thumbnail/artist_mobile.png",
      alt: "Gul panra",
      text: "Gul panra",
    },
    {
      src: "/assets/images/thumbnail/artist_mobile.png",
      alt: "Laila Khan",
      text: "Laila Khan",
    },
    {
      src: "/assets/images/thumbnail/artist_mobile.png",
      alt: "Zeeshan Khan",
      text: "Zeeshan Khan",
    },
    {
      src: "/assets/images/thumbnail/artist_mobile.png",
      alt: "Malkoo",
      text: "Malkoo",
    },
    {
      src: "/assets/images/thumbnail/artist_mobile.png",
      alt: "Shafaullah Khan",
      text: "Shafaullah Khan",
    },
    {
      src: "/assets/images/thumbnail/artist_mobile.png",
      alt: "Atif Aslam",
      text: "Atif Aslam",
    },
];

const SongDetail = ({params}: {params: {type: string}} ) => {
    let MediaType   = null;
    let Title       = null;
    switch (params.type) {
        case "new_releases":
            Title       = 'New Releases';
            MediaType   = SongList;
            break;
        case "video_songs":
            Title       = 'Video Songs';
            MediaType = VideoList;
            break;
        case "top_artists":
            Title       = 'Top Artists';
            MediaType = ArtistList;
            break;
        case "trending_songs":
            Title       = 'Trending Songs';
            MediaType = SongList;
            break;
        case "your_mood":
            Title       = 'Pick Your Mood';
            MediaType = SongList;
            break;
    
        default:
            break;
    }

    return (
        <AppLayout>
            <div className="w-full h-auto">
                {/* Header Title & Buttons */}
                <div className="w-full h-auto flex max-md:flex-col justify-between items-center px-6 py-5">
                    <h1 className="text-fontPrimary text-3xl font-bold">{Title}</h1>
                </div>

                {MediaType && <SongCard items={MediaType} />}
            </div>
        </AppLayout>
    );
}

export default SongDetail;