import Image from "next/image";
import Link from "next/link";
import fb from "../../../public/assets/fb.svg";
import ig from "../../../public/assets/ig.svg";
import telegram from "../../../public/assets/telegram.svg";
import logoBlack from "../../../public/assets/logoBlack.svg";
import useTranslation from "next-translate/useTranslation";
import { useEffect, useState } from "react";

export default function Footer() {
    const [urlString, setUrlString] = useState("");
    const { t } = useTranslation("common");

    useEffect(() => {
        setUrlString(window.location.pathname);
    }, []);

    return (
        <div
            style={{ transition: "0.3s ease" }}
            className={`flex flex-col bg-white w-full mt-[60px] bottom-0 left-0 text-white right-0 border-t-2 border-gray-300 py-[40px] px-4 lg:px-12 z-10`}
        >
            <div className={"flex flex-col lg:flex-row justify-between items-center py-3"}>
                <Link className={"w-full lg:w-[220px] flex flex-col gap-4"} href={"/"}>
                    <Image src={logoBlack} alt={""} />
                    <p className={"text-xs text-black"}>
                        Design amazing digital experience that creates more happiness in the
                        world
                    </p>
                </Link>
                <div className={"flex flex-col w-full lg:w-fit lg:flex-row gap-4 lg:gap-8 text-black font-semibold text-sm mt-4 lg:mt-0"}>
                    <Link className={urlString.includes("trips") ? "activeLink link" : "link"} href={"/trips"}>
                        {t("trips")}
                    </Link>
                    <Link className={urlString.includes("info") ? "activeLink link" : "link"} href={"/info"}>
                        {t("info")}
                    </Link>
                    <Link className={urlString.includes("blogs") ? "activeLink link" : "link"} href={"/blogs"}>
                        {t("blogs")}
                    </Link>
                    <Link className={urlString.includes("aboutUs") ? "activeLink link" : "link"} href={"/aboutUs"}>
                        {t("aboutUs")}
                    </Link>
                    <Link className={urlString.includes("contact") ? "activeLink link" : "link"} href={"/contact"}>
                        {t("contact")}
                    </Link>
                </div>
            </div>
            <div className={"border-t-2 border-gray-200 items-center justify-between flex flex-col lg:flex-row py-4 text-gray-500"}>
                <p className={"text-xs py-2 lg:py-4"}>
                    @2023 Open Road Travel Mongolia, All rights reserved
                </p>
                <div className={"flex flex-row gap-6 items-center mt-4 lg:mt-0"}>
                    <Image src={fb} alt={""} />
                    <Image src={ig} alt={""} />
                    <Image src={telegram} alt={""} />
                </div>
            </div>
        </div>
    );
}
