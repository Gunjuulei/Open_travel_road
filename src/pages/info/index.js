import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Navbar from "@/components/Navbar";
import info1 from "../../../public/assets/info/info1.png";
import info2 from "../../../public/assets/info/info2.png";
import info3 from "../../../public/assets/info/info3.png";
import info4 from "../../../public/assets/info/info4.png";
import info5 from "../../../public/assets/info/info5.png";

import InfoItem from "@/components/InfoItem";
import Footer from "@/components/Footer";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import bg from "../../../public/assets/bg/faqsBg.jpg";
export default function Info() {
    const bgStyle = {
        background: `url(${bg.src}) no-repeat center fixed`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        position: 'relative',
    };
    const { t } = useTranslation('common');
    return (
        <>
            <Head>
                <title>Info</title>
            </Head>
            <Navbar />
            <div className={`w-full h-[80px] relative bg-black  flex z-0 flex-col`}></div>
            <div className={`w-full h-[400px] justify-center px-[200px] relative bg-[#FF9F47] flex z-0 flex-col gap-12`}>
                <h2 className={'text-8xl font-bold'}>
                    Info
                </h2>
                <p className={'max-w-[450px] font-bold'}>
                    Discover stories, thinking, and expertise from writers on any topic.
                </p>
            </div>
            <div className={`flex w-full max-w-[100vw] relative items-center z-0 flex-col` } style={bgStyle} >
                <section className={'w-full max-w-[1200px] py-[100px] gap-6 flex flex-col items-center text-black gap-4 relative z-1'}>
                    <InfoItem link={'info/info1'} src={info1} title={t('infoBest.title')} desc={t('infoBest.par1')}/>
                    {/*<InfoItem link={'info/info2'} src={info2} title={"Reiseversicherung nach Mongolei"} desc={"Reiseversicherung: Sie können einfach und flexibel online kaufen, erweitern und Ansprüche geltend machen..."}/>*/}
                    <InfoItem link={'info/info3'} src={info3} title={t('infoVisa.title')} desc={t('infoVisa.par1')} />
                    <InfoItem link={'info/info4'} src={info4} title={t('infoSim.title')} desc={t('infoSim.par1')}/>
                    <InfoItem link={'info/info5'} src={info5} title={t('infoPlug.title')} desc={t('infoPlug.par1')}/>
                    <InfoItem link={'info/info6'} src={info1} title={t('infoList.title')} desc={t('infoList.title')}/>
                </section>
            </div>
            <Footer />
        </>
    );
}
