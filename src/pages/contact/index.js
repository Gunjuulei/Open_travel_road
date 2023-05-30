import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useTranslation from 'next-translate/useTranslation';
import Navbar from "@/components/Navbar";
import contact from "../../../public/assets/landing/contact.png";
import phone from "../../../public/assets/phone.svg";
import mail from "../../../public/assets/mail.svg";
import iconEdit from "../../../public/assets/iconEdit.png";
import Button from "@/components/Button";
import Link from "next/link";
import Footer from "@/components/Footer";
import Head from "next/head";
export default function ContactUs() {
    const { t } = useTranslation('common');
    return (
        <>
            <Head>
                <title>{t('contact')}</title>
            </Head>
            <Navbar />
            <div className={`w-full h-[80px] relative bg-black  flex z-0 flex-col`}></div>
            <div className={`flex w-full max-w-[100vw] relative flex z-0 flex-col`}>
                <section className={'w-full py-[100px] gap-24 flex flex-row items-center justify-center text-black relative z-1'}>
                    <div className={'w-[500px] flex flex-col items-end gap-[50px]'}>
                        <Image className={'w-[500px]'} src={contact} alt={""} />
                    </div>
                    <div className={'w-[650px] flex flex-col items-start gap-[20px]'}>
                        <h3 className={'text-2xl font-bold'}>
                            {t('contactUs.us')}:
                        </h3>
                        <h2 className={'text-6xl font-bold'}>
                            {t('contactUs.here')}:
                        </h2>
                        <div className={'flex flex-col gap-6 font-semibold items-start'}>
                            <div className={'flex flex-row gap-2 items-center'}>
                                <Image src={mail} alt={""} />
                                <p>{t('contactUs.mail')}: oprotravel@gmail.com</p>
                            </div>
                            <div className={'flex flex-row gap-2  items-center'}>
                                <Image src={phone} alt={""} />
                                <p>{t('contactUs.phone')}: +976 95075579, +976 99299986</p>
                            </div>
                            <div className={'flex flex-row gap-2  items-center'}>
                                <Image src={phone} alt={""} />
                                <p>WhatsApp: +976 95075579, +976 99299986</p>
                            </div>
                        </div>
                        <p>
                            {t('contactUs.desc')}
                        </p>
                        <p>
                            {t('contactUs.desc1')}
                        </p>
                        <p>
                            {t('contactUs.desc2')}
                        </p>
                        <Link href={'https://forms.gle/EP5EpqGPofQLJQEVA'} target="_blank">
                            <Button style={{padding: '20px 144px'}} className={'bg-[#FF9F47] text-2xl rounded-[16px] px-4 py-1 text-white font-semibold self-start'}>
                                <Image className={'w-[30px]'} src={iconEdit} alt={""} />  {t('contactUs.book')}
                            </Button>
                        </Link>

                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}
