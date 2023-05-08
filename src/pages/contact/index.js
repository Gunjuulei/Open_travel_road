import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Navbar from "@/components/Navbar";
import contact from "../../../public/assets/landing/contact.png";
import phone from "../../../public/assets/phone.svg";
import mail from "../../../public/assets/mail.svg";
import iconEdit from "../../../public/assets/iconEdit.png";
import Button from "@/components/Button";
import Link from "next/link";
export default function ContactUs() {
    return (
        <>
            <Navbar />
            <div className={`w-full h-[80px] relative bg-black  flex z-0 flex-col`}></div>
            <div className={`flex w-full max-w-[100vw] relative flex z-0 flex-col`}>
                <section className={'w-full py-[100px] gap-24 flex flex-row items-center justify-center text-black relative z-1'}>
                    <div className={'w-[500px] flex flex-col items-end gap-[50px]'}>
                        <Image className={'w-[500px]'} src={contact} alt={""} />
                    </div>
                    <div className={'w-[650px] flex flex-col items-start gap-[20px]'}>
                        <h3 className={'text-2xl font-bold'}>
                            CONTACT US
                        </h3>
                        <h2 className={'text-6xl font-bold'}>
                            WE’RE HERE
                        </h2>
                        <div className={'flex flex-row gap-6 font-semibold items-center'}>
                            <div className={'flex flex-row gap-2 items-center'}>
                                <Image src={mail} alt={""} />
                                <p>Mail: example@example.com</p>
                            </div>
                            <div className={'flex flex-row gap-2  items-center'}>
                                <Image src={phone} alt={""} />
                                <p>Phone: +976 9999-9999</p>
                            </div>
                        </div>
                        <p>
                            This Contact Us page is for a marketing agency that works directly with businesses. Since it knows its audience, Brandaffair encourages visitors to "have a talk" one-on-one rather than providing a one-way communication channel via support resources.                            <br />
                        </p>
                        <Link href={'https://docs.google.com/forms/d/e/1FAIpQLSeRSZ-_D-hQO-IbqBGe9-fLAFoz-69a1xDEOhn0wdjKjBePIg/viewform'} target="_blank">
                            <Button style={{padding: '20px 144px'}} className={'bg-[#FF9F47] text-2xl rounded-[16px] px-4 py-1 text-white font-semibold self-start'}>
                                <Image className={'w-[30px]'} src={iconEdit} alt={""} />  Go FROM
                            </Button>
                        </Link>

                    </div>
                </section>
            </div>
        </>
    );
}
