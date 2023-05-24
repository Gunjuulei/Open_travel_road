import Image from "next/image";
import useTranslation from 'next-translate/useTranslation';
import { Inter } from "next/font/google";
import Landing from "./Landing";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { t } = useTranslation('common');
  return (
    <main
      className={`flex min-h-screen bg-white flex-col z-0 relative items-center justify-between p-0 ${inter.className}`}
    >
      <Head>
        <title>Open Road Travel</title>
      </Head>
      <Navbar />
      <Landing />
    </main>
  );
}
