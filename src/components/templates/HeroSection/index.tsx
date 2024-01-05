/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import classNames from "classnames";
import Image from "next/image";
import Wrapper from "@/components/molecules/Wrapper";
import { useAppSelector } from "@/store/hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "@/utils/schemas";
import { useDispatch } from "react-redux";
import { toggleEmail } from "@/store/darkMode";
import icCloseDark from "@/assets/img/icons/ic_close_dark.png";
import icClose from "@/assets/img/icons/ic_close.png";
import icShowPassword from "@/assets/img/icons/ic_showPassword.png";

interface DataForm {
    email: string;
    password: string;
    name: string;
}
const HeroSection = () => {
    const [successForm, setSuccessForm] = useState(false);
    const [errorForm, setErrorForm] = useState(false);
    const { darkMode: darkmodeSlice } = useAppSelector((store) => store);
    const { darkMode, openEmail } = darkmodeSlice;

    const handleOpenModal = () => dispatch(toggleEmail(true));

    const [showPassword, setShowPassword] = useState(false);

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

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmitForm = async (dataForm: DataForm) => {
        console.log("dataForm", dataForm);
        setSuccessForm(true);
    };

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

    const formRef = useRef(null);

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
            {openEmail && (
                <div
                    onClick={() => {
                        dispatch(toggleEmail(false));
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
                                    dispatch(toggleEmail(false));

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
                            <div className='flex flex-wrap justify-between w-full my-4 md:my-6 lg:my-8 relative'>
                                <input
                                    placeholder='Password'
                                    type={showPassword ? "text" : "password"}
                                    className={classNames(
                                        darkMode ? "bg-black text-gray" : "bg-white text-black",
                                        "w-full border-gray border border solid px-2 py-2 outline-none",
                                    )}
                                    {...register("password")}
                                />
                                <div
                                    className='absolute cursor-pointer z-10 right-2 top-2 w-[24px] h-[24px]'
                                    onClick={() => {
                                        setShowPassword(!showPassword);
                                    }}
                                >
                                    <Image
                                        src={icShowPassword}
                                        className='w-full h-full object-cover'
                                        width={0}
                                        height={0}
                                        alt='showPassword'
                                    />
                                </div>
                                {errors.password && (
                                    <p className='text-[red] my-3'>{errors.password.message}</p>
                                )}
                            </div>
                            <button
                                className={classNames(
                                    "w-max font-normal z-10 text-white  relative",
                                    darkMode ? "bg-[transparent]" : "",
                                )}
                                type='submit'
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
                                    Send
                                </p>
                            </button>
                        </form>
                    </div>
                </div>
            )}
            <div
                className={classNames(
                    darkMode ? "bg-black" : "bg-vani",
                    "pt-[100px] lg:pt-[100px] xl:pt-[148px]",
                )}
            >
                <Wrapper>
                    <button
                        className={classNames(
                            "w-max font-normal z-10 text-white  relative",
                            darkMode ? "bg-[transparent]" : "",
                        )}
                        type='button'
                        onClick={handleOpenModal}
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
                            Click here to open modal
                        </p>
                    </button>
                </Wrapper>
            </div>
        </>
    );
};

export default HeroSection;
