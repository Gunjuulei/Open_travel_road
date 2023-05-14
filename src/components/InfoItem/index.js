import Image from "next/image";
import logo from "../../../public/assets/logoBlack.svg";
import Link from "next/link";

export default function InfoItem({src, title, desc, link, ...props}) {
    return (
        <Link className={'w-[400px] md:w-full lg:min-w-[800px] lg:w-[800px] p-4 rounded-lg hover:shadow-lg'} href={link} >
            <div className={`flex lg:flex-row w-full lg:max-w-[800px] gap-6 lg:h-[150px] overflow-hidden md:flex-col md:w-full md:h-auto`} {...props}>
                <div className={'w-[220px] h-[125px]'}>
                    <Image className={'w-full object-cover'} src={src} alt={''} />
                </div>
                <div className={'flex flex-col gap-4 items-start bg-white w-[500px] p-3 max-w-[500px] md:w-full'}>
                    <Image className={'w-[150px]'} src={logo} alt={''} />
                    <h6 className={'text-bold text-base'}>{title}</h6>
                    <p className={'text-[#7E7E7E] text-sm'}> {desc}</p>
                </div>
            </div>
        </Link>

    );
}
