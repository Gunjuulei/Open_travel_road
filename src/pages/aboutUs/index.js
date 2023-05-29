import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Navbar from "@/components/Navbar";
import turkey from "../../../public/assets/countries/turkey.png";
import kazak from "../../../public/assets/countries/kazak.png";
import thai from "../../../public/assets/countries/thai.png";
import china from "../../../public/assets/countries/china.png";
import german from "../../../public/assets/countries/german.png";
import belgium from "../../../public/assets/countries/belgium.png";
import hungary from "../../../public/assets/countries/hungary.png";
import cuba from "../../../public/assets/countries/cuba.png";
import austria from "../../../public/assets/countries/austria.png";
import laos from "../../../public/assets/countries/laos.png";
import poland from "../../../public/assets/countries/poland.png";
import usa from "../../../public/assets/countries/usa.png";
import egypt from "../../../public/assets/countries/egypt.png";
import australia from "../../../public/assets/countries/australia.png";
import indo from "../../../public/assets/countries/indonesia.png";
import uk from "../../../public/assets/countries/uk.png";
import russia from "../../../public/assets/countries/russia.png";
import india from "../../../public/assets/countries/india.png";
import canada from "../../../public/assets/countries/canada.png";
import france from "../../../public/assets/countries/france.png";
import czech from "../../../public/assets/countries/czech.png";
import korea2 from "../../../public/assets/countries/dprKorea.png";
import italy from "../../../public/assets/countries/italy.png";
import bulgaria from "../../../public/assets/countries/bulgaria.png";
import vietnam from "../../../public/assets/countries/vietnam.png";
import korea from "../../../public/assets/countries/korea.png";
import singa from "../../../public/assets/countries/singapore.png";
import sweden from "../../../public/assets/countries/sweden.png";
import japan from "../../../public/assets/countries/japan.png";
import kuwait from "../../../public/assets/countries/kuwait.png";

import Footer from "@/components/Footer";
import AboutUsItem from "@/components/AboutUsItem";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
export default function AboutUs() {
    const { t } = useTranslation('common');
    return (
        <>
            <Head>
                <title>{t('aboutUs')}</title>
            </Head>
            <Navbar />
            <div className={`w-full h-[80px] relative bg-black  flex z-0 flex-col`}></div>
            <div className={`w-full h-[600px] justify-center px-[200px] relative bg-[#FF9F47] flex z-0 flex-col gap-2`}>
                <h2 className={'text-8xl font-bold mb-10'}>
                    {t('aboutUs')}
                </h2>
                <p className={'max-w-[1200px] font-semibold'}>
                    {t('about.para1')}
                </p>
                <p className={'max-w-[1200px] font-semibold'}>
                    {t('about.para2')}
                </p>
            </div>

            <Footer />
        </>
    );
}
