import Image from "next/image";
import { Inter } from "next/font/google";
import Landing from "./Landing";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen bg-white flex-col z-0 relative items-center justify-between p-0 ${inter.className}`}
    >
      <Navbar />
      <Landing />
    </main>
  );
}
