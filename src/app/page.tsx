"use client";

import HeroSection from "@/components/templates/HeroSection";
import DeclarationSection from "@/components/templates/DeclarationSection";
import ProjectsSection from "@/components/organisms/ProjectsSection";
import CountSection from "@/components/organisms/CountSection";
import TechSection from "@/components/organisms/TechSection";
import classNames from "classnames";

export default function Home() {
    return (
        <main className={classNames(" min-h-screen")}>
            <HeroSection />
            <DeclarationSection />
            <TechSection />
            <CountSection />
            <ProjectsSection />
        </main>
    );
}
