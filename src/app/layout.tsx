"use client";
import { Wrapper } from "@/wrapper";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body>
                <Wrapper>{children}</Wrapper>
            </body>
        </html>
    );
}
