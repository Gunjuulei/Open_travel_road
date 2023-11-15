import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Navbar from "@/components/Navbar";
import bg from "../../../../public/assets/info/infoBg.jpg";
import info1 from "../../../../public/assets/info/info1.png";
import {useRouter} from "next/router";
import {trips} from "@/utils";
import moon from "../../../../public/assets/moon.svg"
import sun from "../../../../public/assets/sun.svg"
import map from "../../../../public/assets/map-black.svg"
import user from "../../../../public/assets/user-black.svg"
import dollar from "../../../../public/assets/dollar-black.svg"
import home from "../../../../public/assets/home.svg"
import send from "../../../../public/assets/send.svg"
import CardTrip from "@/components/CardTrip";
import cardDef from "../../../../public/assets/landing/tripCardDef.png";
import Footer from "@/components/Footer";
import useTranslation from "next-translate/useTranslation";

export default function Info1() {
    const bgStyle = {
        background: `url(${bg.src}) no-repeat center fixed`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
        position: 'relative',
        height: 400
    };
    const { t } = useTranslation('common');
    return (
        <div className={'w-full'}>
            <Navbar />
            <div className={`w-full overflow-y-hidden h-[400px] relative bg-black flex z-0 flex-col`}>
                <div className={'w-full h-[400px]'} style={bgStyle}></div>
            </div>
            <div className={`flex w-full max-w-[100vw] relative z-0 flex-col`}>
                <section className={'w-full py-[80px] gap-24 flex flex-row items-start justify-center text-black relative z-1'}>
                    <div className={'w-[50%] max-w-[550px] flex flex-col gap-4 items-start'}>
                        <h2 className={'font-semibold text-5xl'}>
                            {t('infoBest.title')}
                        </h2>
                        <p className={'font-semibold text-base'}>
                            {t('infoBest.par1')}
                        </p>
                        <div className={'flex flex-col gap-6'}>
                            <p>
                                {t('infoBest.par2')}
                            </p>
                            <p>
                                {t('infoBest.par3')}
                            </p>
                            <p>
                                {t('infoBest.par4')}
                            </p>
                        </div>
                    </div>
                    <div className={'w-[50%] max-w-[500px] flex flex-col gap-4 items-start'}>
                        <Image src={info1} alt={''} />
                    </div>
                </section>
            </div>


            <Footer />
        </div>
    );
}
