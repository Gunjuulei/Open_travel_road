import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import landingBg from '../../public/assets/landing/landingBg.png'
import Button from "@/components/Button";
import arrowLeft from "../../public/assets/landing/arrow.svg"
import mongolBichig from "../../public/assets/landing/mongolBichig.png"
import kazaksd from "../../public/assets/landing/kazaksd.png"
import uhamsar from "../../public/assets/landing/uhamsar.png"
import grid1 from "../../public/assets/landing/grid1.png"
import grid2 from "../../public/assets/landing/grid2.png"
import grid3 from "../../public/assets/landing/grid3.png"
import grid4 from "../../public/assets/landing/grid4.png"
import grid5 from "../../public/assets/landing/grid5.png"
import gobi from "../../public/assets/landing/card5.png"
import hangai from "../../public/assets/landing/card2.png"
import eagle from "../../public/assets/landing/card4.png"
import howsgol from "../../public/assets/landing/card1.png"
import tsonjin from "../../public/assets/landing/card3.png"
import CardItem from "@/components/CardItem";
import Link from "next/link";

export default function Landing() {
  return (
    <div className={`flex w-full max-w-[100vw] relative flex z-0 flex-col`}>
        <section className={'w-full h-[100vh] max-h-[100vh] overflow-y-hidden flex flex-col items-center justify-center text-white relative z-1'}>
            <Image src={landingBg} alt={""} className={'w-full max-w-full top-0 left-0 right-0 z-0 absolute'} />
            <div className={'h-full w-full flex flex-col items-center justify-center text-white relative z-1'}>
                <div className={'flex flex-col items-center gap-4 w-[600px]'}>
                    <h2 className={'text-xs self-start '}>Open Road Travel</h2>
                    <h1 className={'text-6xl font-semibold'} > Travel MONGOLIA</h1>
                    <Link href={'/trips'} >
                        <Button>
                            Let&apos;s <span className={'font-bold'}> TOUR </span> <Image src={arrowLeft} alt={""} />
                        </Button>
                    </Link>

                </div>
                <Image className={'w-[130px] absolute right-[250px] '} src={mongolBichig} alt={""} />
            </div>
            <div style={{boxShadow: "0px 10px 10px 0px #CFCFCF40"}} className={'relative max-w-[950px] mb-[100px] w-full p-24 h-[125px] z-1  bg-white rounded-[12px]'}>
                Open travel mongolia
            </div>
        </section>
        <section className={'w-full py-[180px] gap-24 flex flex-row items-center justify-center text-black relative z-1'}>
            <div className={'w-[650px] flex flex-col items-end gap-[50px]'}>
                <h2 className={'text-6xl'}>
                    Die beste Zeit für die Reise in die Mongolei
                </h2>
                <p className={'w-[500px]'}>
                    Die ideale Reisezeit für die Mongolei beginnt im Mai und erreicht ihren höchsten Höhepunkt im Juli während des Naadam Festivals der Mongolei. Im Juli und August ist das Wetter für Reisen am günstigsten. Dies ist die beste Zeit, wenn Sie die Kultur und die Schönheit der Natur mögen.
                    <br />
                    <br />
                    <button className={'bg-[#FF9F47] rounded-[16px] px-4 py-1 text-white font-semibold self-start'}>
                        Read more
                    </button>
                </p>

            </div>
            <div className={'w-[400px] flex flex-col items-end gap-[50px]'}>
                {/*<Swiper*/}
                {/*  spaceBetween={50}*/}
                {/*  slidesPerView={3}*/}
                {/*  onSlideChange={() => console.log("slide change")}*/}
                {/*  onSwiper={(swiper) => console.log(swiper)}*/}
                {/*>*/}
                {/*  <SwiperSlide>Slide 1</SwiperSlide>*/}
                {/*  <SwiperSlide>Slide 2</SwiperSlide>*/}
                {/*  <SwiperSlide>Slide 3</SwiperSlide>*/}
                {/*  <SwiperSlide>Slide  sda</SwiperSlide>*/}
                {/*  ...*/}
                {/*</Swiper>*/}
                <Image className={'w-[400px]'} src={kazaksd} alt={""} />
            </div>
        </section>
        <section className={'w-full py-[180px] gap-24 flex flex-row items-center justify-center text-black relative z-1'}>
            <div className={'w-[400px] flex flex-col items-end gap-[50px]'}>

                <Image className={'w-[400px]'} src={uhamsar} alt={""} />
            </div>
            <div className={'w-[650px] flex flex-col items-start gap-[50px]'}>
                <h2 className={'text-6xl'}>
                    Reiseversicherung nach Mongolei
                </h2>
                <p className={'w-[500px]'}>
                    Reiseversicherung: Sie können einfach und flexibel online kaufen, erweitern und Ansprüche geltend machen, auch nachdem Sie das Haus verlassen haben.                    <br />
                    <br />
                    <button className={'bg-[#FF9F47] rounded-[16px] px-4 py-1 text-white font-semibold self-start'}>
                        Read more
                    </button>
                </p>

            </div>
        </section>
        <section className={'w-full h-[750px] gap-20 flex flex-col items-start px-[144px] justify-center text-white relative z-1 landingFixedBg'}>
            <h2 className={'text-8xl max-w-[900px]'}>
                VISA für die Einreise in die Mongolei
            </h2>
            <p className={'max-w-[750px]'}>
                Ab dem 01.07.2018 gilt die neue Regelung zur Erteilung eines Visums für die Mongolei. Bitte informieren Sie sich über die geänderten Anforderungen für die Beantragung eines Visums.

            </p>
            <button className={'bg-[#FF9F47] rounded-[16px] px-4 py-1 text-white font-semibold self-start my-[-60px]'}>
                Read more
            </button>
        </section>
        <section className={'w-full py-[170px] gap-20 flex flex-col items-center text-black relative z-1'}>
            <h3 className={'text-5xl '}>
                Open travel mongolia
            </h3>
            <div className={'max-w-[1250px] flex grid grid-cols-3 gap-4 w-full '}>
                <Image className={'col-span-1'} src={grid1} alt={""} />
                <Image className={'col-span-2'} src={grid2} alt={""} />
                <Image className={'col-span-2'} src={grid3} alt={""} />
                <Image className={'col-span-1'} src={grid4} alt={""} />
                <Image className={'col-span-3'} src={grid5} alt={""} />
            </div>
        </section>
        <section className={'w-full max-h-[1300px] py-[70px] gap-12 flex flex-row justify-center items-center  text-black relative z-1'}>
            <div className={'flex flex-col gap-6 max-w-[450px]'}>
                <h3 className={'text-6xl font-semibold'}>
                  Travel MONGOLIA
                </h3>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <Link href={'https://docs.google.com/forms/d/e/1FAIpQLSeRSZ-_D-hQO-IbqBGe9-fLAFoz-69a1xDEOhn0wdjKjBePIg/viewform'} target={"_blank"}>
                    <Button style={{padding: '15px 125px', color: 'white'}}>
                        Contact us
                    </Button>
                </Link>

            </div>
            <div className={'flex flex-row gap-6 items-center'}>
                <div className={'flex flex-col flex-wrap gap-6 w-full '}>
                    <CardItem src={gobi} text={'Gobi'} days={10} />
                    <CardItem src={eagle} text={'Eagle'} days={10} />
                    <CardItem src={howsgol} text={'Khowsgol'} days={10} />

                </div>
                <div className={'flex flex-col flex-wrap gap-6 w-full '}>
                    <CardItem src={hangai} text={'Khangai'} days={10} />
                    <CardItem src={tsonjin} text={'Tsonjin'} days={10} />
                </div>
            </div>


        </section>
    </div>
  );
}
