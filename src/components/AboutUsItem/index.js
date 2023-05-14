import Image from "next/image";
import logo from "../../../public/assets/logoBlack.svg";
import Link from "next/link";
import mailSrc from '../../../public/assets/mail.svg';
import phoneSrc from '../../../public/assets/phone.svg';

export default function AboutUsItem({src, title, desc, mail, phone, ...props}) {
    return (
        <div className={'w-[400px] p-6 rounded-lg hover:text-black'} >
            <div className={`flex flex-col w-full gap-4`} {...props}>
                <div className={'w-full flex flex-row gap-4'}>
                    <Image className={'w-[65px] h-[40px] object-cover'} src={src} alt={''} />
                    <h3 className={'font-bold text-2xl'}>
                        {title}
                    </h3>
                </div>
                <div className={'flex flex-col gap-4 items-start py-3 w-full'}>
                    <p className={'text-[#7E7E7E] text-xs'}> {desc}</p>
                    <p className={'text-xs flex items-center flex-row gap-3'}> <Image src={mailSrc} alt={''} /> <span>{mail}</span> </p>
                    <p className={'text-xs flex items-center flex-row gap-3'}> <Image src={phoneSrc} alt={''} /> <span>{phone}</span></p>
                </div>
            </div>
        </div>

    );
}
