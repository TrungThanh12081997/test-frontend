"use client";
import React from "react";
import "./index.scss";

interface WrapperProps {
    children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => (
    <div className='container mx-auto py-8 md:py-10 lg:py-12 xl:py-14 px-6 md:px-8 lg:px-12'>
        {children}
    </div>
);

export default Wrapper;
