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
export default function Info() {
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
            <div className={`flex w-full max-w-[100vw] relative items-center z-0 flex-col`}>
                <section className={'w-full max-w-[1200px] py-[100px] gap-6 flex flex-col items-center text-black gap-4 relative z-1'}>
                    <InfoItem link={'info/info1'} src={info1} title={"Die beste Zeit für die Reise in die Mongolei"} desc={"Die ideale Reisezeit für die Mongolei beginnt im Mai und erreicht ihren höchsten Höhepunkt im Juli während des..."}/>
                    <InfoItem link={'info/info2'} src={info2} title={"Reiseversicherung nach Mongolei"} desc={"Reiseversicherung: Sie können einfach und flexibel online kaufen, erweitern und Ansprüche geltend machen..."}/>
                    <InfoItem link={'info/info3'} src={info3} title={"VISA für die Einreise in die Mongolei"} desc={"Reiseversicherung: Sie können einfach und flexibel online kaufen, erweitern und Ansprüche geltend machen..."}/>
                    <InfoItem link={'info/info4'} src={info4} title={"Tour – SIM - Karte"} desc={"Mit der Prepaid-Tour-SIM-Karte können Sie bis zu 90% Ihrer Roaming-Kosten sparen..."}/>
                    <InfoItem link={'info/info5'} src={info5} title={"Strom, Netzstecker und Mobilfunkwelle in der Mongolei"} desc={"Die Mongolei arbeitet mit einer Versorgungsspannung von 230 V und 50 Hz. Strom ist fast stabil..."}/>
                    <InfoItem link={'info/info6'} src={info1} title={t('info6.title')} desc={t('info6.title')}/>
                </section>
            </div>
            <Footer />
        </>
    );
}
