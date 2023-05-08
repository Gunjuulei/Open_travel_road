import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Navbar from "@/components/Navbar";
import bg from "../../../../public/assets/info/infoBg.png";
import info3 from "../../../../public/assets/info/info3.png";

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
                            VISA für die Einreise in die Mongolei
                        </h2>
                        <p className={'font-semibold text-base'}>
                            Seit dem 1. September 2013 dürfen Staatsbürger der Bundesrepublik Deutschland mit einem gültigen Reisepass von mindestens 6 Monaten am Tag der Einreise maximal 30 Tage ohne Visum in die Mongolei reisen. Dies geht aus der einseitigen Entscheidung der mongolischen Regierung vom 8. Mai 2013 hervor.
                        </p>
                        <div className={'flex flex-col gap-6'}>
                            <p>
                                Bürger anderer ausgewiesener Länder benötigen ebenfalls kein Visum, wenn sie länger als 30 oder 90 Tage nicht in die Mongolei reisen. Zu diesen Ländern gehören Japan, Thailand, Malaysia, USA, Kanada, Brasilien, Russland, Weißrussland, die Ukraine, Serbien, die Türkei und Israel.
                            </p>
                            <p>
                                Einzelheiten zu den reduzierten Einreisebestimmungen finden Sie auf der Website des mongolischen Außenministeriums: http://consul.mn/eng/ Das Visum wird ausschließlich von der Botschaft in Berlin ausgestellt. Die mongolischen Honorarkonsuln in der Bundesrepublik Deutschland sind nicht berechtigt, ein Visum auszustellen. Die Bearbeitung des Visumantrags und des Visumantrags dauert 5 Werktage. Solange die für die Ausstellung des Visums erforderlichen Unterlagen nicht vollständig eingereicht wurden, wird der Visumantrag nicht bearbeitet. In besonderen Fällen kann das Visum innerhalb von 24-48 Stunden ausgestellt werden.
                            </p>
                            <p>
                                Einreisebestimmungen für Staatsangehörige aus anderen Ländern Staatsangehörige anderer Länder mit Wohnsitz in Deutschland, die kurzfristig nach Deutschland reisen oder über ein deutsches Reiseunternehmen bis zu 30 Tage in die Mongolei reisen möchten, können bei der Botschaft in Berlin ein Visum beantragen. Bürger aus anderen Ländern, die für mehr als 30 Tage aus touristischen oder anderen Gründen in die Mongolei reisen möchten, müssen ihr Visum im Voraus bei der Einwanderungsbehörde in Ulaanbaatar über die einladende Einrichtung oder Person beantragen. Im Falle einer positiven Entscheidung über den Visumantrag erhält die einladende Einrichtung oder Person eine offizielle Bestätigung von der Einwanderungsbehörde. Anschließend kann der Antragsteller seinen Reisepass im Original mit den entsprechenden Unterlagen an die Botschaft in Berlin senden oder persönlich abgeben.
                            </p>
                            <p>
                                Für Staatsangehörige anderer Länder einzureichende Unterlagen:
                            </p>
                            <p>
                                1. Antragsformular (vollständig ausfüllen, persönlich unterschreiben) (Antragsformular herunterladen)
                            </p>
                            <p>
                                2. Anmeldebestätigung in Deutschland
                            </p>
                            <p>
                                3. Reisepass im Original (gültig für mindestens 6 Monate am Tag der Einreise in die Mongolei)
                            </p>
                            <p>
                                4. Passbild (1 Stück, Bildformat 35 × 45 mm, ohne Rand)
                            </p>
                            <p>
                                5. Nachweis der Buchung einer Reise in die Mongolei (Flugticket, Bahnticket usw.)
                            </p>
                            <p>
                                6. Nachweis der Hotelreservierung in der Mongolei oder Bestätigung des Reiseunternehmens über die Unterbringung in der Mongolei
                            </p>
                            <p>
                                7. Nachweis der Überweisung der Visagebühren auf das Botschaftskonto (siehe Gebühren)
                            </p>
                            <p>
                                8. Registrierter Umschlag für die Rücksendung.
                            </p>
                        </div>
                    </div>
                    <div className={'w-[50%] max-w-[500px] flex flex-col gap-4 items-start'}>
                        <Image src={info3} alt={''} />
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
        </div>
    );
}
