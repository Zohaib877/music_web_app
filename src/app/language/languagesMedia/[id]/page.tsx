'use client'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLanguageMedia } from '@/lib/features/language/languageMediaSlice';
import { AppDispatch, RootState } from '@/lib/store';
import AppLayout from '@/containers/layout/AppLayout';
import Songs from '@/components/Songs/Songs';
import SongQueueGridCard from '@/components/SongQueueCard/SongQueueGridCard';

interface LanguageMediaProps {
    id: string;
}

const LanguageMediaComponent = ({ params }: { params: LanguageMediaProps }) => {
    const dispatch = useDispatch<AppDispatch>();
    const { id: ids, name, audio, movie, video, loading, error } = useSelector((state: RootState) => state.languageMedia);
    const [openCardId, setOpenCardId] = useState<number | null>(null);

    useEffect(() => {
        dispatch(fetchLanguageMedia(params.id));
    }, [dispatch, params.id]);

    const handleToggle = (id: number) => {
        setOpenCardId(openCardId === id ? null : id);
    };


    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <AppLayout>
            <div className="w-full h-auto px-4 lg:px-11 xl:px-11 py-8">
                <h3 className={`text-fontPrimary text-2xl`}>{'Audio Songs'}</h3>
                <div className="w-full h-auto py-8">
                    {audio !== undefined && (
                        <div className="flex">
                            <div className="lg:w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                                {
                                    audio?.length !== 0 &&
                                    audio?.map((_, index) => (
                                        <SongQueueGridCard
                                            key={index + 1}
                                            data={_}
                                            queue={audio}
                                            isOpen={openCardId}
                                            handleToggle={() => handleToggle(_.id)} 
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {
                video !== undefined && (
                    <div className="w-full h-auto px-4 lg:px-11 xl:px-11 py-8">
                        <h3 className={`text-fontPrimary text-2xl`}>{'Video Songs'}</h3>
                        <div className="flex">
                            <div className="lg:w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                                {
                                    video?.length !== 0 &&
                                    video?.map((_, index) => (
                                        <SongQueueGridCard
                                            key={index + 1}
                                            data={_}
                                            queue={video}
                                            isOpen={openCardId}
                                            handleToggle={() => handleToggle(_.id)}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                )
            }

        </AppLayout>
    );
};

export default LanguageMediaComponent;
