import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Navbar from "@/components/Navbar";
import blog from "../../../public/assets/blogs/blog.png";
import pope1 from "../../../public/assets/blogs/pope1.png";

import InfoItem from "@/components/InfoItem";
import Footer from "@/components/Footer";
import useTranslation from "next-translate/useTranslation";
export default function Blogs() {
    const { t } = useTranslation('common');
    return (
        <>
            <Navbar />
            <div className={`w-full h-[80px] relative bg-black  flex z-0 flex-col`}></div>
            <div className={`w-full h-[400px] justify-center px-[200px] relative bg-[#FF9F47] flex z-0 flex-col gap-12`}>
                <h2 className={'text-8xl font-bold'}>
                    {t('blogs')}
                </h2>
                <p className={'max-w-[450px] font-bold'}>
                    {t('blogText')}
                </p>
            </div>
            <div className={`flex w-full max-w-[100vw] relative items-center z-0 flex-col`}>
                <section className={'w-full max-w-[1200px] py-[100px] gap-6 flex flex-col items-center text-black gap-4 relative z-1'}>
                    <InfoItem link={'blogs/blog1'} src={blog} title={"How the 1223 Mongol invasion of Europe still impacts us today"} desc={"In 1241, the Mongols came close to conquering Eastern Europe. Ultimately, they were pushed out by the Kingdom of ..."}/>
                    <InfoItem link={'blogs/blog2'} src={pope1} title={"Pope Francis says he will travel to Mongolia"} desc={"Pope Francis greets pilgrims at the Wednesday general audience in St. Peter's Square"}/>
                </section>
            </div>
            <Footer />
        </>
    );
}
