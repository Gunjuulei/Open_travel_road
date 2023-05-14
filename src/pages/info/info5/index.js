import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Navbar from "@/components/Navbar";
import bg from "../../../../public/assets/info/infoBg.jpg";
import info5 from "../../../../public/assets/info/info5.png";
import Footer from "@/components/Footer";

export default function Info5() {
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
                            Strom, Netzstecker und Mobilfunkwelle in der Mongolei
                        </h2>

                        <div className={'flex flex-col gap-6'}>
                            <p>
                                Die Mongolei arbeitet mit einer Versorgungsspannung von 230 V und 50 Hz. Strom ist fast stabil.
                            </p>
                            <p>
                                Für die Mongolei gibt es zwei zugehörige Steckertypen, Typ C und E. Steckertyp C ist der Stecker mit zwei runden Stiften und Stecker Typ E ist der Stecker mit zwei runden Stiften und einem Loch für den männlichen Furzstift der Buchse.
                            </p>
                            <p>
                                Stecker / Steckdosen sind ein Problem beim Reisen. Denn da werden auch die Stellen Sie daher immer sicher, dass Sie mit einem universellen Steckeradapter reisen.
                            </p>
                            <p>
                                Die Mongolei verwendet die folgenden GSM-Frequenzen: GSM 900 / GSM 1800. Stellen Sie auf Reisen sicher, dass Ihr Telefon die GSM-Frequenz des Landes unterstützt, in das Sie reisen. Normalerweise sind die unterstützten GSM-Frequenzen auf der Verpackung Ihres Telefons sowie im Handbuch angegeben.
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
