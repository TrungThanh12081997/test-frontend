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
    const { isTablet, isMobile, isDesktop, isLargeDesktop } = useWindowResize();
    window.addEventListener(
        "wheel",
        function () {
            let lastScrollTop = 0;

            const st = window.pageYOffset || document.documentElement.scrollTop;
            if (st > lastScrollTop) {
                console.log("case 1");
            } else if (st < lastScrollTop) {
                console.log("case 2");
            }
            lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
        },
        false,
    );

    const wheelSlider = (event: any) => {
        const swiperEle = document.querySelector(".swiper-initialized") as any;
        const swiper = swiperEle?.swiper;
        if (event?.deltaY < 0) {
            console.log("scrolling up");
            swiper.slidePrev();
        } else if (event?.deltaY > 0) {
            console.log("scrolling down");
            swiper.slideNext();
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
                    <div className='w-full mx-auto h-[100px] fixed z-20 bottom-[20px] flex flex-col items-center justify-center'>
                        <div
                            className='w-[28px] h-[28px] cursor-pointer mb-3'
                            onClick={() => {
                                const swiperEle = document.querySelector(
                                    ".swiper-initialized",
                                ) as any;
                                const swiper = swiperEle?.swiper;
                                swiper.slidePrev();
                            }}
                        >
                            <Image
                                src={darkMode ? arrowWhite : arrowWhite}
                                width={0}
                                height={0}
                                className='w-full h-full object-cover'
                                alt='next'
                            />
                        </div>
                        <div
                            className='w-[28px] h-[28px] cursor-pointer'
                            onClick={() => {
                                const swiperEle = document.querySelector(
                                    ".swiper-initialized",
                                ) as any;
                                const swiper = swiperEle?.swiper as any;
                                swiper.slideNext();
                            }}
                        >
                            <Image
                                src={darkMode ? arrowWhite : arrowWhite}
                                width={0}
                                height={0}
                                className='w-full h-full object-cover'
                                alt='next'
                            />
                        </div>
                    </div>
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
                                    console.log("scroll");
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
