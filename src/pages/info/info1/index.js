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

export default function Info1() {
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
                            Die beste Zeit für die Reise in die Mongolei
                        </h2>
                        <p className={'font-semibold text-base'}>
                            Die ideale Reisezeit für die Mongolei beginnt im Mai und erreicht ihren höchsten Höhepunkt im Juli während des Naadam Festivals der Mongolei. Im Juli und August ist das Wetter für Reisen am günstigsten. Dies ist die beste Zeit, wenn Sie die Kultur und die Schönheit der Natur mögen.
                        </p>
                        <div className={'flex flex-col gap-6'}>
                            <p>
                                Das Klima in der Mongolei: Die Mongolei hat eine hohe Höhe mit einem kalten und trockenen Klima. Es hat ein extremes kontinentales Klima mit langen, kalten Wintern und kurzen Sommern, in denen die meisten Niederschläge fallen. ... Winternächte können in den meisten Jahren auf -40 ° C fallen.
                            </p>
                            <p>
                                Dies ist die sicherste Zeit des Jahres, um in die Mongolei zu reisen, was das Wetter, die Sonnentage in der gesamten Mongolei und die ausreichenden Niederschläge betrifft, um die Steppen üppig und grün zu machen.
                            </p>
                            <p>
                                Ulaanbaatar gilt als die kälteste Hauptstadt der Welt. Die Temperaturen können Ende Oktober drastisch unter 0°C und die Kaltbeißtemperatur im Januar und Februar auf -30°C fallen und bis April unter dem Gefrierpunkt bleiben. Juli bis September ist angenehm, aber es kann immer noch kalt werden. Die Mongolei ist ein Urlaubsort, den Sie mit Ihren Freunden und Ihrer Familie planen können. Der Ulaanbaatar liegt auf 1305 m über dem Meeresspiegel. Das vorherrschende Klima in Ulaanbaatar ist als lokales Steppenklima bekannt. Während des Jahres gibt es in Ulaanbaatar wenig Niederschlag. Die Durchschnittstemperatur in Ulaanbaatar beträgt -0,7°C. Der jährliche Niederschlag beträgt 256 mm.
                            </p>
                        </div>
                    </div>
                    <div className={'w-[50%] max-w-[500px] flex flex-col gap-4 items-start'}>
                        <Image src={info1} alt={''} />
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
