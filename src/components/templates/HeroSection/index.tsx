/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import classNames from "classnames";
import quanTrungThanh from "../../../assets/img/avatar/qtt3.jpg";
import Image from "next/image";
import Wrapper from "@/components/molecules/Wrapper";
import { useAppSelector } from "@/store/hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";
import { schema } from "@/utils/schemas";
import { useDispatch } from "react-redux";
import { toggleEmail } from "@/store/darkMode";

const HeroSection = () => {
    const { darkMode: darkmodeSlice } = useAppSelector((store) => store);
    const { darkMode } = darkmodeSlice;
    const [open, setOpen] = useState(false);
    const handleOpenModal = () => setOpen(true);

    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    //     reset,
    // } = useForm({
    //     resolver: yupResolver(schema),
    // });
    const formRef = useRef(null);
    const [successForm, setSuccessForm] = useState(false);
    const [errorForm, setErrorForm] = useState(false);

    useEffect(() => {
        if (successForm) {
            setTimeout(function () {
                setSuccessForm(false);
            }, 3000);
        }
        if (errorForm) {
            setTimeout(function () {
                setErrorForm(false);
            }, 3000);
        }
    }, [errorForm, successForm]);
    const dispatch = useDispatch();

    return (
        <>
            {/* {errorForm && (
                <Alert
                    message='Error'
                    description='Send email not success. Please try again later .'
                    type='error'
                    showIcon
                />
            )}
            {successForm && (
                <Alert
                    message='Success'
                    description='Send email successfully.'
                    type='success'
                    showIcon
                />
            )} */}
            <div
                className={classNames(
                    darkMode ? "bg-black" : "bg-vani",
                    "pt-[100px] lg:pt-[100px] xl:pt-[148px]",
                )}
            >
                <Wrapper>
                    <div
                        className={classNames(
                            "flex flex-col",
                            "",
                            "lg:flex-row lg:justify-between",
                        )}
                    >
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
                                👋Hi, I'm
                                <strong
                                    className={classNames(
                                        "ml-2",
                                        darkMode ? "text-gradient-dark" : "text-gradient",
                                    )}
                                >
                                    Quan Trung Thanh
                                </strong>
                                , Full Stack Developer
                            </h1>
                            <p className='text-gray lg:mb-8 md:mb-6 mb-4'>
                                I have around 2 years experience at position Front end developer and
                                1 year in back-end developer ( Nodejs ). I am willing to learn any
                                new technologies to keep up with the project and finish it as soon
                                as possible. Please contact me if you find that we have a lot in
                                common point in working.
                            </p>
                            <button
                                className={classNames(
                                    "w-max font-normal z-10 text-white  relative",
                                    darkMode ? "bg-[transparent]" : "",
                                )}
                                onClick={() => dispatch(toggleEmail(true))}
                            >
                                <div
                                    className={classNames(
                                        "w-[calc(100%_+_2px)] h-[calc(100%_+_2px)] absolute top-[-1px] left-[-1px] ",
                                        darkMode ? "bg-gray" : "bg-gradient ",
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
                        <div
                            className={classNames("w-full", "", "lg:w-[35%]")}
                            data-aos-easing='ease-out-cubic'
                            data-aos-duration='2000'
                            data-aos='flip-left'
                        >
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
            {/* {open && (
                <div
                    onClick={() => {
                        setOpen(false);
                        reset();
                    }}
                    className='rounded fixed flex items-center justify-center z-30 top-0 left-0 w-full h-full bg-[black] bg-opacity-70'
                >
                    <div className={classNames("w-[95%] z-10 md:w-[70%] lg:w-[50%] z-10 ")}>
                        <form
                            ref={formRef}
                            className={classNames(
                                "relative w-full h-full  p-6 md:p-8 lg:p-16",
                                darkMode ? "bg-black" : "bg-vani",
                            )}
                            onClick={(e) => e.stopPropagation()}
                            onSubmit={handleSubmit(onSubmitForm)}
                        >
                            <div
                                onClick={() => {
                                    setOpen(false);
                                    reset();
                                }}
                                className={classNames(
                                    "absolute cursor-pointer right-[8px] top-[8px] md:right-[8px] md:top-[8px] lg:right-[12px] lg:top-[12px] w-[16px] h-[16px] pointer",
                                )}
                            >
                                <Image
                                    src={darkMode ? icCloseDark : icClose}
                                    className='w-full h-full object-cover'
                                    width={0}
                                    height={0}
                                    alt='close'
                                />
                            </div>
                            <h2
                                className={classNames(
                                    "text-white mb-6 md:mb-8 lg:mb-10 text-[16px] flex justify-start items-center font-[24px] mb-4 md:mb-6 lg:mb-8 relative mr-2",
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
                                <p
                                    className={classNames(
                                        "mr-2 ",
                                        darkMode ? "text-white" : "text-black",
                                    )}
                                >
                                    Contact me follow these informations
                                </p>{" "}
                            </h2>
                            <div className='flex flex-wrap justify-between w-full'>
                                <div className=' w-full lg:w-[49%]'>
                                    <input
                                        placeholder='Name'
                                        className={classNames(
                                            darkMode ? "bg-black text-gray" : "bg-white text-black",
                                            "w-full mb-4 md:mb-6 lg:mb-0 border-gray border border solid px-2 py-2 outline-none",
                                        )}
                                        type='text'
                                        {...register("name")}
                                    />
                                    {errors.name && (
                                        <p className='text-[red] my-3'>{errors.name.message}</p>
                                    )}
                                </div>
                                <div className='w-full lg:w-[49%]'>
                                    <input
                                        placeholder='Email'
                                        className={classNames(
                                            darkMode ? "bg-black text-gray" : "bg-white text-black",
                                            "w-full border-gray border border solid px-2 py-2 outline-none",
                                        )}
                                        type='text'
                                        {...register("email")}
                                    />
                                    {errors.email && (
                                        <p className='text-[red] my-3'>{errors.email.message}</p>
                                    )}
                                </div>
                            </div>
                            <div className='flex flex-wrap justify-between w-full my-4 md:my-6 lg:my-8'>
                                <input
                                    placeholder='Title'
                                    className={classNames(
                                        darkMode ? "bg-black text-gray" : "bg-white text-black",
                                        "w-full border-gray border border solid px-2 py-2 outline-none",
                                    )}
                                    {...register("title")}
                                />
                                {errors.title && (
                                    <p className='text-[red] my-3'>{errors.title.message}</p>
                                )}
                            </div>
                            <div className='flex flex-wrap justify-between w-full mb-4 md:mb-6 lg:mb-8'>
                                <textarea
                                    placeholder='Message'
                                    className={classNames(
                                        darkMode ? "bg-black text-gray" : "bg-white text-black",
                                        "w-full border-gray border border solid px-2 py-2 outline-none",
                                    )}
                                    {...register("message")}
                                />
                                {errors.message && (
                                    <p className='text-[red] my-3'>{errors.message.message}</p>
                                )}
                            </div>

                            <button
                                className={classNames(
                                    "w-max font-normal z-10 text-white  relative",
                                    darkMode ? "bg-[transparent]" : "",
                                )}
                                type='submit'
                                // onClick={handleOpenModal}
                            >
                                <div
                                    className={classNames(
                                        "w-[calc(100%_+_2px)] h-[calc(100%_+_2px)] absolute top-[-1px] left-[-1px] ",
                                        darkMode ? "bg-gray" : "bg-gradient ",
                                    )}
                                />

                                <p
                                    className={classNames(
                                        "relative z-10   w-full h-full  py-2 px-8",
                                        darkMode ? " bg-black text-white" : " bg-vani text-black",
                                    )}
                                >
                                    {" "}
                                    Send
                                </p>
                            </button>
                        </form>
                    </div>
                </div>
            )} */}
        </>
    );
};

export default HeroSection;
