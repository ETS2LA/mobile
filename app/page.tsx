"use client"

import "./globals.css";
import { ClipLoader } from "react-spinners";
import Image from "next/image";
import logo from "@/assets/favicon.ico";

export default function Home() {
    const imagesPreloaded = true

    if (!imagesPreloaded) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <p className="text-md text-muted-foreground mb-4">Preloading assets...</p>
                <ClipLoader size={20} color="#717171"/>
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Image src={logo} alt="ETS2LA Logo" width={144} height={144} />
            <h1 className="text-3xl font-bold text-white mt-5 mb-2">ETS2LA</h1>
            <p className="text-md text-muted-foreground mb-6">Mobile</p>
            <ClipLoader size={20} color="#717171"/>
        </div>
    );
}
