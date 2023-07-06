"use client";
import React from "react";
import "./index.scss";
import classNames from "classnames";
import quanTrungThanh from "../../../assets/img/avatar/qtt3.jpg";
import Image from "next/image";
import Wrapper from "@/components/molecules/Wrapper";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
    const { darkMode: darkmodeSlice } = useAppSelector((store) => store);
    const { darkMode } = darkmodeSlice;

    return (
        <div className={classNames(darkMode ? "bg-black" : "bg-vani")}>
            <Wrapper>
                <div className={classNames("flex flex-col", "", "lg:flex-row lg:justify-between")}>
                    <div
                        className={classNames(
                            "flex flex-col w-full justify-center mb-4",
                            "md:mb-8",
                            "lg:w-[50%] lg:mb-0",
                        )}
                    >
                        <h1
                            className={classNames(
                                "text-[36px] ",
                                "lg:mb-8 md:mb-6 mb-4",
                                darkMode ? "text-white" : "text-black",
                            )}
                        >
                            👋 Im
                            <strong
                                className={classNames(
                                    "ml-1",
                                    darkMode ? "text-gradient-dark" : "text-gradient",
                                )}
                            >
                                Quan Trung Thành
                            </strong>
                            , Full Stack Developer
                        </h1>
                        <p className='text-gray lg:mb-8 md:mb-6 mb-4'>
                            I have around 2 years experience at position Front end developer and 1
                            year in back-end developer ( Nodejs ). I am willing to learn any new
                            technologies to keep up with the project and finish it as soon as
                            possible. Please contact me if you find that we have a lot in common
                            point in working.
                        </p>
                        <button
                            className={classNames(
                                "w-max font-normal z-10 text-white  relative",
                                darkMode ? "bg-[transparent]" : "",
                            )}
                        >
                            <div
                                className={classNames(
                                    "w-[calc(100%_+_2px)] h-[calc(100%_+_2px)] absolute top-[-1px] left-[-1px] ",
                                    darkMode ? "bg-gradient-dark" : "bg-gradient ",
                                )}
                            />

                            <p
                                className={classNames(
                                    "relative z-10   w-full h-full  py-2 px-8",
                                    darkMode ? " bg-black text-white" : " bg-vani text-black",
                                )}
                            >
                                {" "}
                                Contact Me !!
                            </p>
                        </button>
                    </div>
                    <div className={classNames("w-full", "", "lg:w-[40%]")}>
                        <Image
                            className='w-full'
                            width={0}
                            height={0}
                            src={quanTrungThanh}
                            alt='QuanTrungThanh'
                        />
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default HeroSection;
