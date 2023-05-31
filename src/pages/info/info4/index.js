import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Navbar from "@/components/Navbar";
import bg from "../../../../public/assets/info/infoBg.jpg";
import info4 from "../../../../public/assets/info/info4.png";
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

export default function Info4() {
    const { t } = useTranslation('common');
    return (
        <div className={'w-full'}>
            <Navbar />
            <div className={`w-full  relative bg-black  flex z-0 flex-col`}>
                <Image className={'w-full object-cover h-[400px]'} src={bg} alt={''} />
            </div>
            <div className={`flex w-full max-w-[100vw] relative z-0 flex-col`}>
                <section className={'w-full py-[80px] gap-24 flex flex-row items-start justify-center text-black relative z-1'}>
                    <div className={'w-[50%] max-w-[550px] flex flex-col gap-4 items-start'}>
                        <h2 className={'font-semibold text-5xl'}>
                            {t('infoSim.title')}
                        </h2>
                        <div className={'flex flex-col gap-6'}>
                            <ul style={{listStyleType: 'circle'}}>
                                <li>
                                    {t('infoSim.mobi')}
                                </li>
                                <li>
                                    {t('infoSim.sky')}
                                </li>
                                <li>
                                    {t('infoSim.uni')}
                                </li>
                                <li>
                                    {t('infoSim.gmo')}
                                </li>
                            </ul>
                            <p>
                                {t('infoSim.par1')}
                            </p>
                            <p>
                                {t('infoSim.par2')}
                            </p>
                            <p>
                                {t('infoSim.par3')}
                            </p>
                            <p>
                                {t('infoSim.par4')}
                            </p>
                        </div>
                    </div>
                    <div className={'w-[50%] max-w-[500px] flex flex-col gap-4 items-start'}>
                        <Image src={info4} alt={''} />
                    </div>
                </section>
            </div>

            {/*<div className={'mt-[200px] max-w-[1200px] mx-auto flex flex-col gap-10 my-[150px] justify-between'}>*/}
            {/*    <h3  className={'font-bold text-5xl text-[#FF9F47]'}>*/}
            {/*        Info*/}
            {/*    </h3>*/}
            {/*    <div className={'w-full flex flex-row gap-6 flex-wrap '}>*/}

            {/*    </div>*/}
            {/*</div>*/}
            <Footer />
        </div>
    );
}
