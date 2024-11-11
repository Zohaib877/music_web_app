"use client"
import LanguagesContent from "@/components/Tabs/LanguagesContent";
import AppLayout from "@/containers/layout/AppLayout";
import { fetchLanguages } from "@/lib/features/language/languageSlice";
import { AppDispatch, RootState } from "@/lib/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const Language = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { languages, loading, error } = useSelector((state: RootState) => state.languages);

    useEffect(() => {
        dispatch(fetchLanguages());
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <AppLayout>
            <div className="w-full h-auto">
                <div className="w-full h-auto flex max-md:flex-col justify-between items-center px-6">
                    <h1 className="text-fontPrimary text-3xl font-bold py-5">Language</h1>
                </div>
                <LanguagesContent item={languages} />
            </div>
        </AppLayout>
    )
}

export default Language;