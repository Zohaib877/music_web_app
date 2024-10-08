import Songs from "@/components/Songs/Songs";
import AppLayout from "@/containers/layout/AppLayout";

interface Slide {
    url: string;
    title?: string;
}

const SongSlides: Slide[] = [
    {
      url: "/assets/images/thumbnail/song_mobile.png",
      title: "Wo Larki Khawab Mere Dekhti Hai",
    },
    {
      url: "/assets/images/thumbnail/song_mobile.png",
      title: "Wo Larki Khawab Mere Dekhti Hai",
    },
    {
      url: "/assets/images/thumbnail/song_mobile.png",
      title: "Wo Larki Khawab Mere Dekhti Hai",
    },
    {
      url: "/assets/images/thumbnail/song_mobile.png",
      title: "Wo Larki Khawab Mere Dekhti Hai",
    },
    {
      url: "/assets/images/thumbnail/song_mobile.png",
      title: "Wo Larki Khawab Mere Dekhti Hai",
    },
    {
      url: "/assets/images/thumbnail/song_mobile.png",
      title: "Wo Larki Khawab Mere Dekhti Hai",
    },
    {
      url: "/assets/images/thumbnail/song_mobile.png",
      title: "Wo Larki Khawab Mere Dekhti Hai",
    },
    {
      url: "/assets/images/thumbnail/song_mobile.png",
      title: "Wo Larki Khawab Mere Dekhti Hai",
    },
];
const VideoSlides: Slide[] = [
    {
      url: "/assets/images/thumbnail/video_desktop.png",
      title: "Wo Larki Khawab Mere Dekhti Hai",
    },
    {
      url: "/assets/images/thumbnail/video_desktop.png",
      title: "Wo Larki Khawab Mere Dekhti Hai",
    },
    {
      url: "/assets/images/thumbnail/video_desktop.png",
      title: "Wo Larki Khawab Mere Dekhti Hai",
    },
    {
      url: "/assets/images/thumbnail/video_desktop.png",
      title: "Wo Larki Khawab Mere Dekhti Hai",
    },
    {
      url: "/assets/images/thumbnail/video_desktop.png",
      title: "Wo Larki Khawab Mere Dekhti Hai",
    },
    {
      url: "/assets/images/thumbnail/video_desktop.png",
      title: "Wo Larki Khawab Mere Dekhti Hai",
    },
    {
      url: "/assets/images/thumbnail/video_desktop.png",
      title: "Wo Larki Khawab Mere Dekhti Hai",
    },
];
const ArtistSlides: Slide[] = [
    {
      url: "/assets/images/thumbnail/artist_mobile.png",
      title: "Gul panra",
    },
    {
      url: "/assets/images/thumbnail/artist_mobile.png",
      title: "Laila Khan",
    },
    {
      url: "/assets/images/thumbnail/artist_mobile.png",
      title: "Zeeshan Khan",
    },
    {
      url: "/assets/images/thumbnail/artist_mobile.png",
      title: "Malkoo",
    },
    {
      url: "/assets/images/thumbnail/artist_mobile.png",
      title: "Shafaullah Khan",
    },
    {
      url: "/assets/images/thumbnail/artist_mobile.png",
      title: "Atif Aslam",
    },
];

const Search = () => {
    return (
        <AppLayout>
            <Songs type={1} heading="Video Songs" slides={VideoSlides} link={'video_songs'} />
            <Songs type={0} heading="Top Artists" slides={ArtistSlides} link={'top_artists'} />
            <Songs type={0} heading="Trending Songs" slides={SongSlides} link={'trending_songs'} />
            <Songs type={0} heading="Pick Your Mood" slides={SongSlides} link={'your_mood'} />
        </AppLayout>
    );
}

export default Search;