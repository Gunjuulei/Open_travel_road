import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Navbar from "@/components/Navbar";
import bg from "../../../../public/assets/info/infoBg.jpg";
import info5 from "../../../../public/assets/info/info5.png";
import Footer from "@/components/Footer";
import useTranslation from "next-translate/useTranslation";

export default function Info5() {
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
                            {t('infoPlug.title')}
                        </h2>

                        <div className={'flex flex-col gap-6'}>
                            <p>
                                {t('infoPlug.par1')}
                            </p>
                            <p>
                                {t('infoPlug.par2')}
                            </p>
                            <p>
                                {t('infoPlug.par3')}
                            </p>
                            <p>
                                {t('infoPlug.par4')}
                            </p>
                        </div>
                    </div>
                    <div className={'w-[50%] max-w-[500px] flex flex-col gap-4 items-start'}>
                        <Image src={info5} alt={''} />
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
