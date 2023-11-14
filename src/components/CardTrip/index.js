import Image from "next/image";
import map2 from "../../../public/assets/map2.svg";
import user from "../../../public/assets/user.svg";
import dollar from "../../../public/assets/dollar.svg";
import Link from "next/link";
import {useEffect} from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

export default function CardTrip({src, text, map, days,members, price, link, ...props}) {
    useEffect(()=> {
        AOS.init();
        const handleRouteChange = () => {
            AOS.refresh();
        };

        window.addEventListener('routeChangeComplete', handleRouteChange);

        return () => {
            window.removeEventListener('routeChangeComplete', handleRouteChange);
        };
    },[])
    return (
        <>
            {/*<Link href={link} >*/}
            {/*    <div className={`flex flex-col rounded-[24px] w-[300px] max-w-[300px] h-[370px] shadow-lg bg-white overflow-hidden border-gray-100 border`} {...props}>*/}
            {/*        <Image className={'w-full h-[200px] object-cover'} src={src} alt={''} />*/}
            {/*        <div className={'flex flex-col h-40 gap-2 justify-between items-start bg-white p-3'}>*/}
            {/*            <h3 className={'lg:text-lg font-bold min-h-[60px]'}>*/}
            {/*                {text}*/}
            {/*            </h3>*/}
            {/*            <div className={'w-full flex flex-col'}>*/}
            {/*                <div className={'text-[#FF9F47] text-base flex gap-1 '}>*/}
            {/*                    <Image className={'w-[24px]'} src={map2} alt={""} />*/}
            {/*                    <span>*/}
            {/*                    {map}*/}
            {/*                </span>*/}
            {/*                </div>*/}
            {/*                <div className={'flex flex-row gap-4 items-center'}>*/}
            {/*                    <div className={'flex flex-row gap-2 items-start'}>*/}
            {/*                        <Image className={'w-[21px]'} src={user} alt={''} />*/}
            {/*                        <p className={'text-[#9C9C9C] text-sm'}> {members}</p>*/}
            {/*                    </div>*/}
            {/*                    <div className={'flex flex-row gap-2 items-start'}>*/}
            {/*                        <Image className={'w-[21px]'} src={dollar} alt={''} />*/}
            {/*                        <p className={'text-[#9C9C9C] text-sm'}> {price}</p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*        </div>*/}
            {/*    </div>*/}
            {/*</Link>*/}
            <div className={'tourItem rounded-[24px] w-[330px] max-w-[330px] min-h-[450px] h-[450px]'} data-aos="fade-up" data-aos-duration="800" >
                <Link href={link}>
                    <div className="innerBox p-5">
                        <div className="imageBox">
                            <div className="image">
                                <Image src={src} alt="" title=""/>
                            </div>
                        </div>
                        <div className="lowerContent">
                            <h4 className={'h-[70px] overflow-y-hidden bg-gradient-to-t from-white via-white to-transparent bg-clip-text'}>
                                {text}
                            </h4>
                            <div className="info flex flex-row gap-2 text-[#FF9F47] text-sm"><Image className={'w-[18px]'} src={map2} alt={""} />{map}
                            </div>
                            <div className="price text-[#9C9C9C] flex flex-row gap-2  text-sm"> <Image className={'w-[18px]'} src={dollar} alt={''} /> {price}</div>
                            <div className="text">
                                <div className={'flex flex-row gap-2 text-[#9C9C9C] text-sm'}><Image className={'w-[18px]'} src={user} alt={''} /> {members} people</div>
                            </div>
                        </div>
                        <div className="bottomBox clearfix">
                            <div className="moreLink">
                                <div className="theme-btn">
                                            <span>View Details</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </Link>
            </div>
        </>


    );
}
