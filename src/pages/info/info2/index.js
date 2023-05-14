import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Navbar from "@/components/Navbar";
import bg from "../../../../public/assets/info/infoBg.jpg";
import info2 from "../../../../public/assets/info/info2.png";
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

export default function Info2() {
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
                            Reiseversicherung nach Mongolei
                        </h2>
                        <p className={'font-semibold text-base'}>
                            Reiseversicherung: Sie können einfach und flexibel online kaufen, erweitern und Ansprüche geltend machen, auch nachdem Sie das Haus verlassen haben.                        </p>
                        <div className={'flex flex-col gap-6'}>
                            <p>
                                Die Reiseversicherung von WorldNomads.com steht Personen aus über 150 Ländern zur Verfügung. Es ist für abenteuerlustige Reisende konzipiert, die Schutz für medizinische Versorgung, Evakuierung, Gepäck und eine Reihe von Abenteuersportarten und -aktivitäten in Übersee bieten. 7 Dinge, die Sie über Reiseversicherungen von WorldNomads.com wissen sollten                            </p>
                            <p>
                                1. Vertrauenswürdige zuverlässige Underwriter WorldNomads.com wird von einer Reihe starker, sicherer und spezialisierter Reiseversicherer unterstützt, die Ihnen eine hervorragende Deckung, 24-Stunden-Nothilfe und ein Höchstmaß an Support und Schadenmanagement bieten, wenn Sie diese am dringendsten benötigen.
                            </p>
                            <p>
                                2. Preis-Leistungsverhältnis mit der Deckung, die Sie benötigen WorldNomads.com bietet Deckung für das, was für Reisende aus über 150 Ländern wichtig ist. Indem Sie sich auf das konzentrieren, was Sie brauchen, und das weglassen, was Sie nicht brauchen, gehören die Preise der World Nomads zu den wettbewerbsfähigsten im Internet.
                            </p>
                            <p>
                                3. Flexibilität, wenn Sie es am meisten brauchen Hatten Sie eine Planänderung? Sie können Ihre Police verlängern oder online Ansprüche geltend machen, während Sie noch nicht da sind. Sie können sogar eine World Nomads-Police kaufen, wenn Sie bereits unterwegs sind.
                            </p>
                            <p>
                                4. Deckung für eine Reihe von Abenteueraktivitäten Vom Skifahren und Snowboarden in Neuseeland bis zum Wildwasser-Rafting in Colorado bietet WorldNomads.com eine Reihe von Abenteueraktivitäten, mit denen Sie beruhigt Ihre Reisen optimal nutzen können.
                            </p>
                            <p>
                                5. World Nomads sorgen dafür, dass Sie sicher reisen Alle Mitglieder von WorldNomads.com haben über den World Nomads Travel Safety Hub Zugriff auf aktuelle Reisesicherheitswarnungen sowie Ratschläge und Tipps zur Reisesicherheit online.
                            </p>
                            <p>
                                6. Mehr als nur eine preiswerte Reiseversicherung Alle Mitglieder von WorldNomads.com können die lokale Umgangssprache über eine Reihe von iPod- und iPhone-Sprachführern lernen und über ein Online-Reisetagebuch mit Familie und Freunden in Kontakt bleiben.
                            </p>
                            <p>
                                7. Verpflichtung zu außergewöhnlichem Kundenservice Wir möchten sicherstellen, dass Sie WorldNomads.com optimal nutzen. Erfahren Sie mehr darüber, warum eine Reiseversicherung für Ihre Reise wichtig ist. Wenn Sie Fragen zu Ihrer Reiseversicherung oder zur Reisesicherheit im Allgemeinen haben, wenden Sie sich bitte direkt an WorldNomads.com.
                                <br />
                                Die Reisende haben auch gute Infos in folgende link zu finden:
                            </p>
                            <p>
                                https://www.americanvisitorinsurance.com/insurance-features.asp
                            </p>
                        </div>
                    </div>
                    <div className={'w-[50%] max-w-[500px] flex flex-col gap-4 items-start'}>
                        <Image src={info2} alt={''} />
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
