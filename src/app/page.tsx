import Carousel from "@/components/Carousel/carousel";
import Songs from "@/components/Songs/Songs";
import TopSong from "@/components/SongTab/TopSong";
import AppLayout from "@/containers/layout/AppLayout";

interface Slide {
  url: string;
  title?: string;
}

const BannerSlides: Slide[] = [
  {
    url: "/assets/images/slider/slide1.png",
  },
  {
    url: "/assets/images/slider/slide1.png",
  },
  {
    url: "/assets/images/slider/slide1.png",
  },
  {
    url: "/assets/images/slider/slide1.png",
  },
  {
    url: "/assets/images/slider/slide1.png",
  },
  {
    url: "/assets/images/slider/slide1.png",
  },
  {
    url: "/assets/images/slider/slide1.png",
  },
  {
    url: "/assets/images/slider/slide1.png",
  },
];

const SongSlides: Slide[] = [
  {
    url: "/assets/images/thumbnail/song_mobile.png",
    title: "Romantic",
  },
  {
    url: "/assets/images/thumbnail/song_mobile.png",
    title: "Classic",
  },
  {
    url: "/assets/images/thumbnail/song_mobile.png",
    title: "Sad",
  },
  {
    url: "/assets/images/thumbnail/song_mobile.png",
    title: "Ghazal",
  },
  {
    url: "/assets/images/thumbnail/song_mobile.png",
    title: "Patriotic",
  },
  {
    url: "/assets/images/thumbnail/song_mobile.png",
    title: "Pop",
  },
  {
    url: "/assets/images/thumbnail/song_mobile.png",
    title: "Dhamal",
  },
  {
    url: "/assets/images/thumbnail/song_mobile.png",
    title: "Qawali",
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
const newRelease: Slide[] = [
  {
    url: "/assets/images/thumbnail/thumbnail4.jpg",
    title: "Wo Larki Khawab Mere Dekhti Hai",
  },
  {
    url: "/assets/images/thumbnail/thumbnail3.jpg",
    title: "Wo Larki Khawab Mere Dekhti Hai",
  },
  {
    url: "/assets/images/thumbnail/tumbnail1.jpg",
    title: "Wo Larki Khawab Mere Dekhti Hai",
  },
  {
    url: "/assets/images/thumbnail/thumbnail4.jpg",
    title: "Wo Larki Khawab Mere Dekhti Hai",
  },
  {
    url: "/assets/images/thumbnail/tumbnail1.jpg",
    title: "Wo Larki Khawab Mere Dekhti Hai",
  },
  {
    url: "/assets/images/thumbnail/tumbnail2.jpg",
    title: "Wo Larki Khawab Mere Dekhti Hai",
  },
  {
    url: "/assets/images/thumbnail/thumbnail4.jpg",
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

export default function Home() {
  return (
    <AppLayout>
      <Carousel autoSlide={true} slides={BannerSlides} />
      <TopSong />
      <Songs
        type={0}
        heading="New Releases"
        slides={newRelease}
        link={"new_releases"}
      />
      <Songs
        type={1}
        heading="Video Songs"
        slides={VideoSlides}
        link={"video_songs"}
      />
      <Songs
        type={0}
        heading="Top Artists"
        slides={ArtistSlides}
        link={"top_artists"}
      />
      {/* <Songs type={0} heading="Trending Songs" slides={SongSlides} link={'trending_songs'} /> */}
      <Songs
        type={0}
        heading="Pick Your Mood"
        slides={SongSlides}
        link={"your_mood"}
      />
    </AppLayout>
  );
}
