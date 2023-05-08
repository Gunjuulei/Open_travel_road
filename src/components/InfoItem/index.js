import Image from "next/image";
import logo from "../../../public/assets/logoBlack.svg";
import Link from "next/link";

export default function InfoItem({src, title, desc, link, ...props}) {
    return (
        <Link className={'w-[full] p-4 rounded-lg hover:shadow-lg'} href={link} >
            <div className={`flex  flex-row w-full max-w-[800px] gap-6 h-[150px] overflow-hidden`} {...props}>
                <div className={'w-[220px] h-[125px]'}>
                    <Image className={'w-full object-cover'} src={src} alt={''} />
                </div>
                <div className={'flex flex-col gap-4 items-start bg-white p-3 max-w-[500px]'}>
                    <Image className={'w-[150px]'} src={logo} alt={''} />
                    <h6 className={'text-bold text-base'}>{title}</h6>
                    <p className={'text-[#7E7E7E] text-sm'}> {desc}</p>
                </div>
            </div>
        </Link>

    );
}
