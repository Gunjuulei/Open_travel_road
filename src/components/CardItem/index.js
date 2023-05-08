import Image from "next/image";
import icon from "../../../public/assets/map.svg";
// import "swiper/css";

export default function CardItem({src, text, days, ...props}) {
    return (
        <div className={`flex flex-col rounded-[24px] w-[250px] h-[240px] bg-white shadow overflow-hidden border-gray-100 border`} {...props}>
            <Image className={'w-full h-[150px] object-cover'} src={src} alt={''} />
            <div className={'flex flex-col gap-1 items-start bg-white p-3'}>
                <h3 className={'text-2xl font-bold'}>
                    {text}
                </h3>
                <div className={'flex flex-row gap-2 items-start'}>
                    <Image className={'w-[21px]'} src={icon} alt={''} />
                    <p className={'text-[#9C9C9C] text-sm'}> {days} days</p>
                </div>
            </div>
        </div>
    );
}
