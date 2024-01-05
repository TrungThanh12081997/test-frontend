"use client";
import classNames from "classnames";
import { useAppSelector } from "@/store/hooks";
import HeroSection from "@/components/templates/HeroSection";

export default function Home() {
    const { darkMode: darkmodeSlice } = useAppSelector((store) => store);
    const { darkMode } = darkmodeSlice;

    return (
        <main className={classNames("h-screen w-screen", darkMode ? "bg-black" : "bg-vani")}>
            <HeroSection />
        </main>
    );
}
