"use client";
import React from "react";
import "./index.scss";
import classNames from "classnames";

interface WrapperProps {
    children: React.ReactNode;
    classNames?: string;
}

const Wrapper: React.FC<WrapperProps> = (props) => (
    <div
        className={classNames(
            "container mx-auto py-8 md:py-10 lg:py-12 xl:py-14 px-6 md:px-8 lg:px-12",
            props.classNames,
        )}
    >
        {props.children}
    </div>
);

export default Wrapper;
