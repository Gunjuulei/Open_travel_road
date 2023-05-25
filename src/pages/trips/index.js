import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Navbar from "@/components/Navbar";
import { useRouter } from 'next/router';
import cardDef from "../../../public/assets/landing/tripCardDef.png";
import Button from "@/components/Button";
import Link from "next/link";
import { tripsEn } from '../../utils/index'
import { tripsGr} from "@/utils/german";
import CardTrip from "@/components/CardTrip";
import Footer from "@/components/Footer";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
export default function Trips() {
    const { locale } = useRouter();
    const isEng = locale === 'en';
    const { t } = useTranslation('common');
    const trips = isEng ? tripsEn : tripsGr;
  return (
      <>
          <Head>
              <title>{t('trips')}</title>
          </Head>
        <Navbar />
        <div className={`w-full h-[80px] relative bg-black  flex z-0 flex-col`}></div>
        <div className={`flex w-full max-w-[100vw] relative z-0 flex-col items-center`}>
            <h2 className={'text-2xl lg:text-6xl font-semibold mt-[100px] '}>
                {t('trips')}
            </h2>
          <section className={'w-full max-w-[1200px] py-[100px] gap-24 flex flex-row flex-wrap items-center justify-items-start text-black relative z-1'}>
              {
                  trips?.map((item, idx)=> {
                      return (
                          <CardTrip link={`/trips/${item.id}`} text={item?.name} key={idx} src={item?.mainImg} map={`${item.nights || 0}-${item.days || 0}`} members={item?.group} price={item?.price} /> )
                  })
              }
          </section>
        </div>
          <Footer />
      </>
  );
}
