import React from "react";
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
    console.log("darkMode", darkMode);
    const toggleDM = () => {
        dispatch(toggleDarkMode(!darkMode));
    };
    return (
        <div className={classNames("fixed z-10 w-full", darkMode ? "bg-black" : "bg-vani")}>
            <Wrapper>
                <div className='flex justify-between'>
                    <div className='max-w-[300px] min-w-[100px]'>
                        <Image src='' width={0} height={0} className='w-full h-full' alt='logo' />
                    </div>
                    <div className='w-[32px] h-[32px] cursor-pointer' onClick={toggleDM}>
                        <Image
                            src={darkMode ? sun : moon}
                            width={0}
                            height={0}
                            className='w-full h-full object-contain bg-[transparent]'
                            alt='logo'
                        />
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default Header;
