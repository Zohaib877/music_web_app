import Songs from "@/components/Songs/Songs";
import AppLayout from "@/containers/layout/AppLayout";

interface Slide {
    url: string;
    title?: string;
}

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

const Artist = () => {
    return(
        <AppLayout>
            <div className="w-full h-auto py-10">
                <Songs type={0} heading="Top Artists" slides={ArtistSlides} />
                <Songs type={0} heading="Urdu" slides={ArtistSlides} />
                <Songs type={0} heading="English" slides={ArtistSlides} />
                <Songs type={0} heading="Pubjabi" slides={ArtistSlides} />
                <Songs type={0} heading="Pashto" slides={ArtistSlides} />
            </div>
        </AppLayout>
    )
}

export default Artist;