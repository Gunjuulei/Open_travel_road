import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Navbar from "@/components/Navbar";
import bg from "../../../../public/assets/info/infoBg.jpg";
import pope1 from "../../../../public/assets/blogs/pope1.png";
import pope2 from "../../../../public/assets/blogs/pope2.png";
import Footer from "@/components/Footer";

export default function Blog2() {
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
                            Pope Francis says he will travel to Mongolia
                        </h2>
                        <p className={' text-[#7E7E7E] text-base border-l-2 border-black px-6 py-4'}>
                            Pope Francis greets pilgrims at the Wednesday general audience in St. Peter&lsquo;s Square on March 22, 2023. | Daniel Ibanez/CNA
                        </p>
                        <div className={'flex flex-col gap-6'}>
                            <p>
                                Pope Francis said Friday that he plans to visit Mongolia, the world’s most sparsely populated sovereign country.
                            </p>
                            <p>
                                In off-the-cuff remarks to employees of the Italian airline company that staffs the papal plane for his international trips, the pope said that he will travel to Mongolia after his scheduled trips to Hungary and France in the coming months.
                            </p>
                            <p>
                                “In two weeks’ time, God willing, I will leave for my 41st pilgrimage, by going to visit Hungary. And then there will be Marseille, then Mongolia,” Francis said at a Vatican audience with ITA Airways on April 14.
                            </p>
                            <p>
                                An apostolic journey to Mongolia would make Pope Francis the first pope to visit the Asian country that shares a 2,880-mile border with China, its most significant economic partner.
                            </p>
                            <p>
                                Mongolia has a population of about 1,300 Catholics in a country of more than 3 million people.
                            </p>
                            <p>
                                The first modern mission to Mongolia was in 1922 and was entrusted to the Congregation of the Immaculate Heart of Mary. But under a communist government, religious expression was soon thereafter suppressed, until 1992. Mongolia’s first native priest was ordained in 2016.
                            </p>
                            <p>
                                Last year, Pope Francis named an Italian who had served as a missionary in Mongolia for nearly 20 years as the world’s youngest cardinal. Cardinal Giorgio Marengo, 48, is the apostolic prefect of Ulaanbaatar, Mongolia, which serves the entire country.
                            </p>
                            <p>
                                Roughly the size of Alaska, Mongolia has five people per square mile. About 30% of its population is nomadic or semi-nomadic. Bordering Russia to the north and China to the south, Mongolia is also the second-largest landlocked country in the world with the vast Gobi Desert covering one-third of its territory.
                            </p>
                            <p>
                                Pope Francis first spoke about the possibility of traveling to Mongolia in February during an in-flight press conference on his return trip from South Sudan. He told reporters at the time that “there is a possibility from Marseille to fly to Mongolia.”
                            </p>
                            <Image src={pope2} alt={''} />
                            <h3 className={'font-bold text-2xl'}>
                                What countries will Pope Francis visit in 2023?
                            </h3>
                            <p>
                                Pope Francis is scheduled to visit Budapest, Hungary, at the end of this month from April 28–30 in what will be his second visit to the central European country in three years.
                            </p>
                            <p>
                                The pope is also expected to travel to Portugal during the 2023 World Youth Day in Lisbon taking place Aug. 1–6.
                            </p>
                            <p>
                                The French Diocese of Marseille announced this week that Pope Francis will preside over a Mass on Sept. 23 as part of a meeting of Mediterranean bishops in the port city in southern France.
                            </p>
                            <p>
                                Due to the pope’s recent comments, it is expected that a potential papal trip to Mongolia would depart directly from Marseille.
                            </p>
                            <p>
                                Pope Francis has also said that he hopes to travel to India next year in response to an invitation by Prime Minister Narendra Modi.
                            </p>
                            <p className={'font-semibold mb-2'}>
                                Tags:
                            </p>
                            <ul className={'px-2 font-semibold py-0'}>
                                <li>
                                    China,
                                </li>
                                <li>
                                    Catholic News,
                                </li>
                                <li>
                                    Pope Francis,
                                </li>
                                <li>
                                    Mongolia,
                                </li>
                                <li>
                                    Asia,
                                </li>
                                <li>
                                    Church in Mongolia,
                                </li>
                                <li>
                                    France,
                                </li>
                                <li>
                                    Pope&lsquo;s travels,
                                </li>
                                <li>
                                    Vatican news
                                </li>
                            </ul>
                            <p>
                                Courtney Mares is a Rome Correspondent for Catholic News Agency. A graduate of Harvard University, she has reported from news bureaus on three continents and was awarded the Gardner Fellowship for her work with North Korean refugees.
                            </p>

                        </div>
                    </div>
                    <div className={'w-[50%] max-w-[500px] flex flex-col gap-4 items-start'}>
                        <Image src={pope1} alt={''} />
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
