import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

export default function Button({children, ...props}) {
    return (
        <button className={`flex  w-fit px-[30px] md:px-[45px] lg:px-[100px] py-2 md:py-4 bg-[#FF9F47] rounded-[24px]`} {...props}>
            <div className={'flex flex-row gap-4 items-center '}>
                {children}
            </div>
        </button>
    );
}
