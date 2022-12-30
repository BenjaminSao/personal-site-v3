import FeatherIcon from "feather-icons-react";
import { useState } from "react";

import styles from "./navbar.module.scss";

const { navbarContainer, navbarIcon, navbarContent } = styles;

export default function Navbar() {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    return (
        <div>
            <div
                className={`${navbarContainer} flex items-end md:items-center flex-col-reverse md:flex-row`}
            >
                {isNavbarOpen && (
                    <div className={`${navbarContent} flex flex-col md:flex-row md:mr-4`}>
                        <a href="#AboutMe" className="mt-4 md:mt-0 text-right">
                            About Me
                        </a>
                        <a href="#Experiences" className="ml-4 mt-4 md:mt-0 text-right">
                            Experiences
                        </a>
                        <a href="#Gallery" className="ml-4 mt-4 md:mt-0 text-right">
                            Gallery
                        </a>
                        <a href="#Projects" className="ml-4 mt-4 md:mt-0 text-right">
                            Projects
                        </a>
                    </div>
                )}

                <div className={`${navbarIcon} cursor-pointer`} onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
                    <FeatherIcon icon="menu"></FeatherIcon>
                </div>
            </div>
        </div>
    );
}
