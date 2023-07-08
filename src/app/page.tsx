"use client";

import HeroSection from "@/components/templates/HeroSection";
import DeclarationSection from "@/components/templates/DeclarationSection";
import ProjectsSection from "@/components/organisms/ProjectsSection";
import CountSection from "@/components/organisms/CountSection";
import TechSection from "@/components/organisms/TechSection";
import classNames from "classnames";
import { useAppSelector } from "@/store/hooks";
import useWindowResize from "@/hooks/useWindowResize";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "@/components/atoms/Footer";
import Image from "next/image";
import arrowWhite from "@/assets/img/icons/ic_arrow_white.svg";
export default function Home() {
    const { darkMode: darkmodeSlice } = useAppSelector((store) => store);
    const { darkMode } = darkmodeSlice;
    const { isLargeDesktop } = useWindowResize();

    const wheelSlider = (event: any) => {
        const swiperEle = document.querySelector(".swiper-initialized") as any;

        const swiper = swiperEle?.swiper;
        if (swiperEle && swiper) {
            if (event?.deltaY < 0) {
                swiper.slidePrev();
            } else if (event?.deltaY > 0) {
                swiper.slideNext();
            }
        }
    };
    window.addEventListener("wheel", wheelSlider);

    return (
        <main className={classNames("", darkMode ? "bg-black" : "bg-vani")}>
            {!isLargeDesktop && (
                <>
                    <HeroSection />
                    <DeclarationSection />
                    <TechSection />
                    <CountSection />
                    <ProjectsSection />
                    <Footer />
                </>
            )}
            {isLargeDesktop && (
                <>
                    <Swiper
                        direction={"vertical"}
                        slidesPerView={1}
                        autoplay
                        centeredSlides
                        centeredSlidesBounds
                        grabCursor={false}
                        loop={false}
                        speed={4000}
                    >
                        <SwiperSlide>
                            <div
                                onScroll={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                }}
                                className='h-[100vh] flex  w-full justify-center items-center'
                            >
                                <HeroSection />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[100vh] flex flex-col w-full justify-center items-center'>
                                <DeclarationSection />
                                <TechSection />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[100vh] w-full flex flex-col justify-center items-center pt-[64px]'>
                                <CountSection />
                                <ProjectsSection />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[100vh] w-[100vw] flex justify-center items-center  pt-[76px]'>
                                <Footer />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </>
            )}
        </main>
    );
}
