import { useEffect, useState } from "react";
import styles from "./navigation.module.scss";

const { circleContainer, circle, isSelected } = styles;

export default function Navigation() {
    const [currentSection, setCurrentSection] = useState(null);
    let sections;

    useEffect(() => {
        sections = document.querySelectorAll("section");
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    function handleScroll() {
        const scrollTop = window.pageYOffset;

        for (const section of sections) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= scrollTop && rect.bottom > scrollTop) {
                setCurrentSection(section.id);
                break;
            }
        }
    }

    return (
        <div>
            <div className={`${circleContainer}`}>
                <div className={`${circle} ${currentSection === "Hero" && isSelected}`}></div>
                <div className={`${circle} ${currentSection === "AboutMe" && isSelected} mt-2`}></div>
                <div className={`${circle} ${currentSection === "Experiences" && isSelected} mt-2`}></div>
                <div className={`${circle} ${currentSection === "Gallery" && isSelected} mt-2`}></div>
                <div className={`${circle} ${currentSection === "Projects" && isSelected} mt-2`}></div>
            </div>
        </div>
    );
}
