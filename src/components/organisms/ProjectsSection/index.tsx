"use client";

import React, { useEffect, useState } from "react";
import "./index.scss";
import classNames from "classnames";
import { dataProjects } from "../dataProjects";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/molecules/Wrapper";
import Slider from "react-slick";
import { Alert } from "antd";
import { useAppSelector } from "@/store/hooks";

interface ProjectsSectionProps {}

const Prev = () => {
    const { darkMode: darkmodeSlice } = useAppSelector((store) => store);
    const { darkMode } = darkmodeSlice;

    return (
        <div
            className={classNames(
                "z-10 w-[40px] h-[40px] flex items-center justify-center rounded-[50%]",
                darkMode ? "bg-gradient-dark text-white" : "bg-gradient text-black",
            )}
        >
            {`<`}
        </div>
    );
};
const Next = () => {
    const { darkMode: darkmodeSlice } = useAppSelector((store) => store);
    const { darkMode } = darkmodeSlice;

    return (
        <div
            className={classNames(
                "z-10 w-[40px] h-[40px] flex items-center justify-center rounded-[50%]",
                darkMode ? "bg-gradient-dark text-white" : "bg-gradient text-black",
            )}
        >
            {" "}
            {`>`}
        </div>
    );
};
const ProjectsSection: React.FC<ProjectsSectionProps> = () => {
    const [alert, setAlert] = useState(false);
    const handleChangeLink = (length: number) => {
        if (length === 0) {
            if (!alert) {
                setAlert(true);
            }
        }
        return;
    };
    useEffect(() => {
        if (alert) {
            setInterval(function () {
                setAlert(false);
            }, 3000);
        }
    }, [alert]);
    const settings = {
        className: "center",
        // centerMode: true,
        dots: true,
        arrows: true,
        slidesToScroll: 1,
        infinite: true,
        focusOnSelect: true,
        initialSlide: 4,
        speed: 800,
        slidesToShow: 4,
        cssEase: "ease-in-out",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    const { darkMode: darkmodeSlice } = useAppSelector((store) => store);
    const { darkMode } = darkmodeSlice;
    useEffect(() => {
        const dots = document.querySelectorAll(".slick-dots li button");
        dots.forEach((item) => {
            if (darkMode) {
                item.classList.remove("bg-gradient");
                item.classList.add("bg-gradient-dark");
            } else {
                item.classList.remove("bg-gradient-dark");
                item.classList.add("bg-gradient");
            }
        });
    }, [darkMode]);
    return (
        <div className={classNames(darkMode ? "bg-black" : "bg-vani")}>
            <Wrapper>
                {alert && <Alert message='This project is not public yet' type='error' showIcon />}
                <h2
                    className={classNames(
                        "text-white mb-6 md:mb-8 lg:mb-10 text-[24px] flex justify-start items-center font-[24px] mb-4 md:mb-6 lg:mb-8 relative mr-2",
                    )}
                >
                    <strong
                        className={classNames(
                            "mr-2",
                            darkMode ? "text-gradient-dark" : "text-gradient",
                        )}
                    >
                        #
                    </strong>{" "}
                    <p className={classNames("mr-2 ", darkMode ? "text-white" : "text-black")}>
                        My Projects
                    </p>{" "}
                    <div
                        className={classNames(
                            "h-[2px] top-[50%] right-[-60px]  bg-main w-[100px] md:w-[280px] lg:w-[420px]",
                        )}
                    ></div>
                </h2>
                <div className='mx-[-16px]'>
                    <Slider {...settings}>
                        {dataProjects.map((item, index) => {
                            return (
                                <div
                                    className='px-4 h-full rounded-lg overflow-hidden'
                                    key={`${index * index}`}
                                >
                                    <div
                                        className={classNames(
                                            "border border-solid",
                                            darkMode ? "border-white" : "border-gray",
                                        )}
                                    >
                                        <div
                                            onClick={() => {
                                                if (item.link.length === 0) {
                                                    handleChangeLink(item.link.length);
                                                }
                                            }}
                                            className={classNames(
                                                "w-full border-b border-solid  bg-white h-[300px] flex items-center",
                                                darkMode ? "border-white" : "border-gray",
                                            )}
                                        >
                                            <Image
                                                src={item.image}
                                                alt={item.image}
                                                className='w-full h-full object-contain'
                                                width={0}
                                                height={0}
                                            />
                                        </div>
                                        <div
                                            className={classNames(
                                                "w-full py-4 px-2 border-b border-solid text-gray",
                                                darkMode ? "border-white" : "border-gray",
                                            )}
                                        >
                                            Tech stack :
                                        </div>
                                        <div className='w-full py-4 px-2 flex flex-col'>
                                            <h2
                                                className={classNames(
                                                    "mb-4",
                                                    darkMode ? "text-white" : "text-black",
                                                )}
                                            >
                                                {item.title}
                                            </h2>
                                            <p className='text-gray mb-4'>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>{" "}
                </div>
            </Wrapper>
        </div>
    );
};

export default ProjectsSection;
