import React, { useEffect } from "react";
import "./index.scss";
import Wrapper from "../../molecules/Wrapper/index";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import moon from "@/assets/img/icons/ic_moon.png";
import sun from "@/assets/img/icons/ic_sun.png";
import { toggleDarkMode } from "@/store/darkMode";
import classNames from "classnames";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
    const dispatch = useAppDispatch();
    const { darkMode: darkmodeSlice } = useAppSelector((store) => store);
    const { darkMode } = darkmodeSlice;
    const toggleDM = () => {
        dispatch(toggleDarkMode(!darkMode));
    };
    useEffect(() => {
        const body = document.querySelector("body");
        if (darkMode) {
            body?.classList.remove("bg-vani");

            body?.classList.add("bg-black");
        } else {
            body?.classList.remove("bg-black");

            body?.classList.add("bg-vani");
        }
    }, [darkMode]);

    return (
        <div className={classNames("header fixed z-20 w-full", darkMode ? "bg-black" : "bg-vani")}>
            <div className='relative'>
                <div
                    className={classNames(
                        "container mx-auto py-8 md:py-10 lg:py-12 xl:py-14 px-6 md:px-8 lg:px-12",
                    )}
                >
                    <div
                        className={classNames(
                            "absolute bottom-0 left-0 w-full h-[1px]",
                            darkMode ? "bg-gradient-dark" : "bg-gradient",
                        )}
                    ></div>
                    <div className='flex justify-between'>
                        <div
                            data-aos='fade-down'
                            data-aos-duration='500'
                            className='max-w-[300px] min-w-[100px]'
                        >
                            <Image
                                src=''
                                width={0}
                                height={0}
                                className='w-full h-full'
                                alt='logo'
                            />
                        </div>
                        <div
                            data-aos='fade-down'
                            data-aos-duration='800'
                            className='w-[32px] h-[32px] cursor-pointer'
                            onClick={toggleDM}
                        >
                            <Image
                                src={darkMode ? sun : moon}
                                width={0}
                                height={0}
                                className='w-full h-full object-contain bg-[transparent]'
                                alt='logo'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
