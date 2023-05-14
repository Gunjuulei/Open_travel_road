import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Navbar from "@/components/Navbar";
import bg from "../../../../public/assets/info/infoBg.jpg";
import blog from "../../../../public/assets/blogs/blog.png";
import blog1 from "../../../../public/assets/blogs/blog1.png";
import blog2 from "../../../../public/assets/blogs/blog2.png";
import blog3 from "../../../../public/assets/blogs/blog3.png";
import Footer from "@/components/Footer";

export default function Blog1() {
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
                            How the 1223 Mongol invasion of Europe still impacts us today
                        </h2>
                        <p className={'text-[#7E7E7E] text-base border-l-2 border-black px-6 py-4'}>
                            In 1241, the Mongols came close to conquering Eastern Europe. Ultimately, they were pushed out by the Kingdom of Hungary and the Grand Duchy of Moscow. But Hungary and Russia are not the only countries that changed as a result of the Mongol invasion.                        </p>
                        <div className={'flex flex-col gap-6'}>
                            <p>
                                On April 11, 1241, Hungarian soldiers lined up along the haphazardly fortified banks of the Hernad and Sajo rivers to await the arrival of the Mongols. Although the Hungarians’ numbers were vastly superior, the odds were stacked in favor of their opponent. The “Mongol storm” had been raging through Central Asia and Eastern Europe for roughly two decades at this point, swallowing up the Khwarazmian Empire in modern-day Afghanistan, the principalities of Kievan Rus’, and, most recently, the Kingdom of Poland.
                            </p>
                            <p>
                                Thanks in part to their unrivaled horsemanship and archery skills — Mongolian bows were lighter, faster, and more precise than their European counterparts — the Mongols plowed through armies many times their size, and Hungary proved no exception. The lines at Sajo and Hernad were breached, cities burned to the ground, crops and livestock confiscated, and an estimated 25% of all Hungarians slaughtered.
                            </p>
                            <p>
                                The Hungarian king, Béla IV, fled to the Dalmatian coast, which was part of Croatia at the time, where he and his kingdom would have surely been crushed were it not for Ogodei Khan, whose sudden death later that year compelled Mongol forces everywhere to return home to elect a new leader.
                            </p>
                            <Image src={blog1} alt={''} />
                            <p>
                                The Mongol invasion of Europe, left unfinished, left its mark on the survivors. “The entire precious kingdom,” the Holy Roman Emperor Frederick II wrote of Hungary, “was depopulated, devastated and turned into a barren wasteland.” The invasion is also believed to have facilitated the spread of the bubonic plague, leading to the deaths of up to 200 million people worldwide.
                            <p>
                                But while the crimes and casualties of Mongol conquest are too great to count, so, too, are the downstream effects it had on the development of civilization. Poland, Hungary, and particularly Russia bounced back stronger, building the foundation for nation-states that are still around today. With the lands of Asia united under a single ruler, ideas and inventions could travel more freely and safely from one end of the world to another. In a weird way, the Mongols even had a hand in events as distant as Vladimir Putin’s invasion of Ukraine.                            </p>
                            </p>
                            <p>
                                Although the Mongols may well have been able to conquer all of Europe, they never did. After the passing of Ogodei, invasions gave way to infighting as multiple heirs of Genghis Khan laid claim to his title. Even if there had been an uncontested successor, however, it is unlikely that the Mongols would have penetrated farther than they already had. Hungary, renowned for its pastures and grasslands, had long been designated as the last leg of their campaign. The dense forests of Central and Western Europe, by comparison, were not only difficult for the nomadic Mongols to navigate in times of war, but also pointless to occupy in peace.                            </p>
                            <p>
                                Thus began what historians sometimes refer to as the Pax Mongolica, a period when the Mongol Empire largely ceased to expand and Khans focused on maintaining the territories their predecessors had brought into the fold. Central to the Pax Mongolica was the resurgence of international trade. Not since the ancient Romans had there been an empire large and powerful enough to bring Europe into sustained contact with East Asia. Under Mongol supervision, the trade routes of the Silk Road, many of which had become dangerous and deserted after the collapse of Rome, reopened, creating new industries and economies. Rice and porcelain traveled West as glassware and fur went East. Chinese silk, arguably the most important product of all, made the Italian city-states of Genoa, Florence, and Venice wealthy enough to finance the Renaissance.
                            <p>
                                Merchants along the Silk Road not only traded in consumer goods but also in ideas, inventions, and identities. Between the fall of Rome and the birth of Genghis Khan, Edward Vajda, a historical linguist at Western Washington University, explains in a lecture, “there wasn’t one international world. There were many separate worlds (…) inventions in China stayed in China. Innovations from Europe stayed in Europe.”
                            </p>
                            <p>
                                This changed after the Mongol invasion of Europe, when life-altering technologies like printmaking and gunpowder, which had been around for centuries in the East, moved westward. Documents show gunpowder, thought to have been invented in Han dynasty China around 140 AD, appeared in the Middle East as early as 1240, less than 10 years after the fall of Khwarazmia; its first mention in Europe can be found in Roger Bacon’s 1267 text, Opus Majus.                            </p>
                            </p>
                            <Image src={blog2} alt={''} />
                            <p>
                                As a rule, the Mongols killed anyone who didn’t surrender. Conversely, they tended to spare those who did. In a move that distinguishes him from most other imperialists, Genghis Khan promoted religious tolerance, creating an environment in which Christians, Muslims, Buddhists, and Taoists could express their faith without fear of being harmed. Genghis also allowed monks and missionaries to travel the Silk Road, a decision that ultimately enabled the famous voyages of the Venetian merchant Marco Polo.
                            </p>
                            <p>
                                Freedom of religion did ultimately contribute to the splintering of the Mongol Empire, though; in 1368, China’s Ming dynasty usurped the Mongol-backed Yuan dynasty in part to resist the encroachment of Christianity.
                            </p>
                            <h3 className={'font-bold text-2xl'}>
                                The birth of Russia
                            </h3>
                            <p>
                                Currently, the biggest legacy of the Mongol invasion of Eastern Europe is the role it played in unifying the principalities of Kievan Rus’ into a single governing body. Prior to the arrival of the Mongols, the territory that comprises modern-day Ukraine, Belarus, and western Russia was tied together by a confederation of loosely affiliated city-states. The most powerful of these city-states was Kyiv until the Mongols captured and destroyed it in 1240.
                            <p>
                                Under Mongol rule, another principality, the Grand Duchy of Moscow, emerged as the new cultural, religious, and military epicenter of the region. It was Moscow that eventually overthrew the Mongols, using the victory to establish an empire of its own: the Tsardom of Russia.
                            </p>
                            <p>
                                The downfall of Kyiv and the rise of Moscow, two events in which the Mongols took central stage, occupy a special place in the myth of Russian greatness that Vladimir Putin’s government has used to justify its invasion of Ukraine. Presenting an oversimplified version of the distant past, Putin has referred to Kyiv as “the mother of Russian cities,” of a people destined to ward off international threats, be that the sons of Genghis Khan or the agents of American imperialism.
                            </p>
                            <p>
                                The Grand Duchy of Moscow was not the only society that grew stronger as a result of the Mongol invasion of Europe. Having survived the initial onslaught on his country, King Béla passed a series of military reforms to prepare Hungary for possible attacks in the future. He ordered the construction of fortifications along the Danube, the river where his soldiers managed to hold the Mongols for an impressive 10 months. He also worked with the Knights Hospitaller, a Catholic military order founded in Jerusalem, to build castles in the kingdom’s most vulnerable and depopulated regions, including Transylvania.                            </p>
                            </p>
                            <Image src={blog3} alt={''} />
                            <p>
                                When the Mongol hordes returned in 1285, their horses clashed against the impregnable walls of Béla’s newly built fortresses. Once again the invaders were forced to abandon a war they themselves had started — only this time they left for good.                            </p>

                        </div>
                    </div>
                    <div className={'w-[50%] max-w-[500px] flex flex-col gap-4 items-start'}>
                        <Image src={blog} alt={''} />
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
