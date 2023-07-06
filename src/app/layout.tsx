"use client";
import { Wrapper } from "@/wrapper";
import "./globals.scss";
import "../assets/font/index.scss";
import Footer from "@/components/atoms/Footer";
import Header from "@/components/atoms/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body>
                <Wrapper>
                    <Header />
                    {children}
                    <Footer />
                </Wrapper>
            </body>
        </html>
    );
}
