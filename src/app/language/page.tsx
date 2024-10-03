import TabContent from "@/components/Tabs/TabContent";
import AppLayout from "@/containers/layout/AppLayout";

const tabContents = [
    { src: '/assets/images/thumbnail/language.png', alt: 'Slide 1', text: 'All'},
    { src: '/assets/images/thumbnail/language.png', alt: 'Slide 1', text: 'Urdu'},
    { src: '/assets/images/thumbnail/language.png', alt: 'Slide 1', text: 'English'},
    { src: '/assets/images/thumbnail/language.png', alt: 'Slide 1', text: 'Punjabi'},
    { src: '/assets/images/thumbnail/language.png', alt: 'Slide 1', text: 'Pashto'},
    { src: '/assets/images/thumbnail/language.png', alt: 'Slide 1', text: 'Sindhi'},
    { src: '/assets/images/thumbnail/language.png', alt: 'Slide 1', text: 'sariki'},
];


const Language = () => {
    return(
        <AppLayout>
            <div className="w-full h-auto">
                {/* Header Title & Buttons */}
                <div className="w-full h-auto flex max-md:flex-col justify-between items-center px-6">
                    <h1 className="text-fontPrimary text-3xl font-bold py-5">Language</h1>
                </div>

                <TabContent items={tabContents} />
            </div>
        </AppLayout>
    )
}

export default Language;