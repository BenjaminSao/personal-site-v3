import Image from "next/image";
import FeatherIcon from "feather-icons-react";

import styles from "./gallery.module.scss";

const { placeholderImage, isBehind, galleryContainer, galleryButton } = styles;

export default function Gallery() {
    return (
        <section className="section" id="Gallery">
            <div className="container mx-auto px-6 py-12 is-fullheight flex items-center">
                <div className="grid md:grid-cols-2 items-center gap-16 md:gap-48 ">
                    <div>
                        <h1 className="is-text-gradient-1">Gallery</h1>
                        <p>
                            What's a better way to get to know someone than some{" "}
                            <strong>pictures</strong>? <br></br>
                            <br></br>
                            Let's move away from the technical bits a little and
                            see what's my life's like outside of work. Here's a
                            snapshot of my life in a couple pictures.
                            Introducing <strong>me!</strong> :)
                        </p>
                    </div>
                    <div className="flex items-center">
                        <Image
                            src="/svg/chevron-left.svg"
                            width={48}
                            height={48}
                            alt="chevron-left"
                            className="cursor-pointer h-fit"
                        ></Image>
                        <div
                            className={`${galleryContainer} flex mx-4 md:mx-8`}
                        >
                            <div className={`${placeholderImage}`}></div>
                            <div
                                className={`${placeholderImage} ${isBehind}`}
                            ></div>
                            <button className={`${galleryButton} button is-circle`}>
                                <FeatherIcon
                                    icon="grid"
                                    stroke="white"
                                    height={35}
                                    width={35}
                                ></FeatherIcon>
                            </button>
                        </div>
                        <Image
                            src="/svg/chevron-right.svg"
                            width={48}
                            height={48}
                            alt="chevron-right"
                            className="cursor-pointer h-fit"
                        ></Image>
                    </div>
                </div>
            </div>
        </section>
    );
}
