import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

export default function Button({children, ...props}) {
    return (
        <button className={`flex text-2xl w-fit px-[100px] py-4 bg-[#FF9F47] rounded-[24px]`} {...props}>
            <div className={'flex flex-row gap-4 items-center '}>
                {children}
            </div>
        </button>
    );
}
