import React from "react";
import "./index.scss";
import classNames from "classnames";
import Wrapper from "@/components/molecules/Wrapper";
import { useAppSelector } from "@/store/hooks";

interface CountSectionProps {}

const CountSection: React.FC<CountSectionProps> = () => {
    const { darkMode: darkmodeSlice } = useAppSelector((store) => store);
    const { darkMode } = darkmodeSlice;

    const countData = [
        { count: "15+", title: "Company Projects " },
        { count: "10+", title: "Personal Projects " },
        { count: "5+", title: "Release Projects" },
        { count: "3", title: "Upcoming Projects " },
    ];
    return (
        <div className={classNames("relative ", darkMode ? "bg-gradient-dark" : "bg-gradient")}>
            <Wrapper>
                <div className='flex flex-wrap'>
                    {countData.map((item, index) => {
                        return (
                            <div
                                className='flex items-center flex-col justify-center lg:w-1/4 w-1/2'
                                key={`${index * index}`}
                            >
                                <h1 className={classNames("text-[28px] text-white mb-4")}>
                                    {item.count}
                                </h1>
                                <p className='text-white '>{item.title}</p>
                            </div>
                        );
                    })}
                </div>
            </Wrapper>
        </div>
    );
};

export default CountSection;
