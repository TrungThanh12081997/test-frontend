import React from "react";
import "./index.scss";
import classNames from "classnames";
import Wrapper from "@/components/molecules/Wrapper";
import react from "@/assets/img/tech/ic_react.png";
import next from "@/assets/img/tech/ic_next.png";
import git from "@/assets/img/tech/ic_git.png";
import jira from "@/assets/img/tech/ic_jira.png";
import figma from "@/assets/img/tech/ic_figma.png";
import mongo from "@/assets/img/tech/ic_mongo.png";
import mysql from "@/assets/img/tech/ic_mysql.png";
import js from "@/assets/img/tech/ic_js.png";
import ts from "@/assets/img/tech/ic_ts.png";
import nest from "@/assets/img/tech/ic_nest.png";
import node from "@/assets/img/tech/ic_node.png";
import express from "@/assets/img/tech/ic_express.png";
import Image from "next/image";
import { useAppSelector } from "@/store/hooks";

interface TechSectionProps {}

const TechSection: React.FC<TechSectionProps> = () => {
    const { darkMode: darkmodeSlice } = useAppSelector((store) => store);
    const { darkMode } = darkmodeSlice;
    const techData = [
        {
            image: react,
            title: "ReactJS",
        },
        {
            image: next,
            title: "NextJS",
        },
        {
            image: mongo,
            title: "MongoDB",
        },
        {
            image: mysql,
            title: "Mysql",
        },
        {
            image: js,
            title: "Javascript",
        },
        {
            image: ts,
            title: "Typescript",
        },
        {
            image: node,
            title: "Nodejs",
        },
        {
            image: express,
            title: "ExpressJS",
        },
        {
            image: nest,
            title: "NestJS",
        },
        {
            image: git,
            title: "Git",
        },
        {
            image: jira,
            title: "Jira",
        },
        {
            image: figma,
            title: "Figma",
        },
    ];
    return (
        <div className={classNames(darkMode ? "bg-black" : "bg-vani")}>
            <Wrapper>
                <h2
                    className={classNames(
                        "text-white text-[24px] mb-6 md:mb-8 lg:mb-10 flex justify-start  items-center font-[24px] mb-4 md:mb-6 lg:mb-8 relative mr-2",
                    )}
                >
                    <strong
                        className={classNames(
                            "mr-2",
                            darkMode ? "text-gradient-dark" : "text-gradient",
                        )}
                    >
                        #
                    </strong>
                    <p className={classNames("mr-2 ", darkMode ? "text-white" : "text-black")}>
                        My Tech Stack
                    </p>
                    <div
                        className={classNames(
                            "h-[2px] top-[50%] right-[-60px]  bg-main w-[100px] md:w-[280px] lg:w-[420px]",
                        )}
                    ></div>
                </h2>
                <div className='flex flex-wrap mx-[-16px]'>
                    {techData.map((item, index) => {
                        return (
                            <div
                                key={`${index * index}`}
                                className=' px-4 w-full sm:w-1/2 lg:w-1/4 mb-4'
                            >
                                <div className='bg-white flex flex-col items-center justify-center w-full   p-8'>
                                    <div
                                        data-aos='fade-down'
                                        data-aos-duration='500'
                                        className='cursor-pointer w-full max-w-[60px] h-[50px] relative mb-4'
                                    >
                                        <Image
                                            className='w-full h-full object-contain'
                                            src={item.image}
                                            width={0}
                                            height={0}
                                            alt={item.title}
                                        />
                                    </div>
                                    <p className='text-gray'>{item.title}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Wrapper>
        </div>
    );
};

export default TechSection;
