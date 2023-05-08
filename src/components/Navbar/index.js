import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import logo from "../../../public/assets/logo.svg"
import logoBlack from "../../../public/assets/logoBlack.svg"
import {useEffect, useState} from "react";


export default function Navbar() {

    const [scrolling, setScrolling]= useState(false);
    const [urlString, setUrlString]= useState('');


    const changeAppbar = () => {
        if(window.scrollY >= 60) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeAppbar);
        setUrlString(window.location.pathname)
    }, []);
    console.log(urlString)
    return (
        <div style={{transition: '0.3s ease'}} className={`flex w-full max-w-[100vw] fixed top-0 left-0 text-white right-0 ${scrolling ? 'bg-white h-[70px]': 'bg-transparent h-[80px]'}  flex-row justify-between px-12 items-center z-10`}>
            <Link className={'justify-self-start'} href={'/'}>
                {
                    scrolling ?
                        <Image className={'w-[150px]'} src={logoBlack} alt={""} />
                        :
                        <Image className={'w-[150px]'} src={logo} alt={""} />
                }
            </Link>
            <div className={scrolling ? 'flex flex-row gap-8 text-black text-sm' : `flex flex-row gap-8 text-white text-sm`}>
                <Link className={urlString.includes('trips') ? 'activeLink link' : 'link'} href={'/trips'}>
                    Trips
                </Link>
                <Link className={urlString.includes('info') ? 'activeLink link' : 'link'} href={'/info'}>
                    Info
                </Link>
                <Link className={urlString.includes('blog') ? 'activeLink link' : 'link'} href={'/'}>
                    Blogs & Articles
                </Link>
                <Link className={urlString.includes('aboutUs') ? 'activeLink link' : 'link'} href={'/'}>
                    About us
                </Link>
                <Link className={urlString.includes('contact') ? 'activeLink link' : 'link'} href={'/contact'}>
                    Contact
                </Link>
            </div>
            <div className={scrolling ? 'flex flex-row gap-4 text-black items-center' : 'flex flex-row gap-4 text-white items-center'}>
                language
                <div style={{boxShadow: '0px 4px 4px 0px #00000040'}} className={'cursor-pointer rounded-[16px] px-4 py-1 bg-white text-black'}>
                    GR
                </div>
            </div>
        </div>
    );
}
