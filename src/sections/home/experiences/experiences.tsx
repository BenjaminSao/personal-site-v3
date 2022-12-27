import Image from "next/image";
import FeatherIcon from "feather-icons-react";

import styles from "./experiences.module.scss";

const {
    experiencesContainer,
    experienceContainer,
    offsetImage
} = styles;

export default function Experiences()
{
    return (
        <section className="section">
                <div className="container mx-auto p-12 is-fullheight">
                    <div className="mb-6">
                        <h1 className="is-text-gradient-1">Experiences</h1>
                        <p>
                            Here's the things I've been{" "}
                            <strong>involved</strong> with!
                        </p>
                    </div>

                    <div className={`grid grid-cols-2 gap-8 ${experiencesContainer}`}>
                        <div className={`${experienceContainer} h-full flex flex-col justify-between`}>
                            <div>
                                <Image
                                    src="/images/briefcase.svg"
                                    width={35}
                                    height={35}
                                    alt="suitcase"
                                ></Image>
                                <h1 className="is-purple">Oracle</h1>
                                <h2>Software Developer Co-op</h2>
                                <p>
                                    Kitchener, ON Canada
                                    <br />
                                    May 2022 - Aug 2022
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <Image
                                    src="/images/oracle-logo.png"
                                    width={500}
                                    height={500}
                                    alt="oracle"
                                    className="opacity-20"
                                ></Image>
                            </div>
                            <button className="button is-black">
                                Learn More
                            </button>
                        </div>

                        <div>
                            <div className={`${experienceContainer} flex flex-col justify-between mb-8`}>
                                <div className="grid grid-cols-2">
                                    <div>
                                        <div className="mb-8">
                                            <Image
                                                src="/images/briefcase.svg"
                                                width={35}
                                                height={35}
                                                alt="suitcase"
                                            ></Image>
                                            <h1 className="is-purple">
                                                Hack the Valley
                                            </h1>
                                            <h2>Lead Developer</h2>
                                            <p>
                                                Scarborough, ON Canada
                                                <br />
                                                May 2022 - Present
                                            </p>
                                        </div>
                                        <button className="button is-black">
                                            Learn More
                                        </button>
                                    </div>
                                    <div className="flex justify-center">
                                        <Image
                                            src="/images/htv.svg"
                                            width={250}
                                            height={250}
                                            alt="oracle"
                                            className="opacity-20"
                                        ></Image>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-8">
                                <div className={`${experienceContainer} flex flex-col justify-between`}>
                                    <div className="mb-4">
                                        <Image
                                            src="/images/briefcase.svg"
                                            width={35}
                                            height={35}
                                            alt="suitcase"
                                        ></Image>
                                        <h2 className="is-purple">
                                            NS Labs Inc
                                        </h2>
                                    </div>
                                    <button className="button is-black">
                                        <FeatherIcon icon="info"></FeatherIcon>
                                    </button>
                                </div>
                                <div className={`${experienceContainer} flex flex-col justify-between`}>
                                    <div className="mb-4">
                                        <Image
                                            src="/images/book-open.svg"
                                            width={35}
                                            height={35}
                                            alt="suitcase"
                                        ></Image>
                                        <h2 className="is-purple">
                                            University of Toronto
                                        </h2>
                                        <Image
                                            src="/images/uoft.png"
                                            width={500}
                                            height={500}
                                            alt="suitcase"
                                            className={`opacity-20 ${offsetImage}`}
                                        ></Image>
                                    </div>
                                    <button className="button is-black">
                                        <FeatherIcon icon="info"></FeatherIcon>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}