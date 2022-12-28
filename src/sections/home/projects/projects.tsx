import FeatherIcon from "feather-icons-react";

import styles from "./projects.module.scss";

const { projectContainer, isLarge, isSmall, learnMoreButton } = styles;

export default function Projects() {
    return (
        <section className="section">
            <div className="container mx-auto p-6 is-fullheight flex flex-col justify-center">
                <div className="mb-6">
                    <h1 className="is-text-gradient-1">Projects</h1>
                    <p>
                        Welcome to my <strong>project</strong> showcase,
                        featuring some of my favs!
                    </p>
                </div>
                <div className="grid md:grid-cols-4 gap-4">
                    <div
                        className={`${projectContainer} ${isLarge} py-20 px-6 md:px-10 col-span-2 flex flex-col justify-center`}
                        style={{
                            background: `linear-gradient(rgba(255,255,255,.9), rgba(255,255,255,.9)), url("/images/personal-site-v3.png")`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="grid md:grid-cols-4 mb-4">
                            <div className="col-span-3">
                                <h1 className="mb-4">Personal Site v3</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                        <button
                            className={`${learnMoreButton} button is-circle is-white`}
                        >
                            <FeatherIcon
                                icon="arrow-right"
                                stroke="black"
                                height={20}
                                width={20}
                            ></FeatherIcon>
                        </button>
                    </div>
                    <div
                        className={`${projectContainer} py-20 px-6 md:px-10 ${isSmall}`}
                    >
                        <h2>Secure Tags</h2>
                        <button
                            className={`${learnMoreButton} button is-circle is-white`}
                        >
                            <FeatherIcon
                                icon="arrow-right"
                                stroke="black"
                                height={20}
                                width={20}
                            ></FeatherIcon>
                        </button>
                    </div>
                    <div
                        className={`${projectContainer} py-20 px-6 md:px-10 ${isSmall}`}
                    >
                        <h2>Certi Chain</h2>
                        <button
                            className={`${learnMoreButton} button is-circle is-white`}
                        >
                            <FeatherIcon
                                icon="arrow-right"
                                stroke="black"
                                height={20}
                                width={20}
                            ></FeatherIcon>
                        </button>
                    </div>
                    <div
                        className={`${projectContainer} ${isLarge} py-20 px-6 md:px-10 col-span-2 flex flex-col justify-center`}
                        style={{
                            background: `linear-gradient(rgba(255,255,255,.9), rgba(255,255,255,.9)), url("/images/tappedin.png")`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="grid md:grid-cols-4 mb-4">
                            <div className="col-span-3">
                                <h1 className="mb-4">TappedIn</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod.
                                </p>
                            </div>
                        </div>
                        <button
                            className={`${learnMoreButton} button is-circle is-black`}
                        >
                            <FeatherIcon
                                icon="arrow-right"
                                stroke="white"
                                height={20}
                                width={20}
                            ></FeatherIcon>
                        </button>
                    </div>
                    <div
                        className={`${projectContainer} ${isSmall} py-20 px-6 md:px-10`}
                    >
                        <h2>Ecoblock</h2>
                        <button
                            className={`${learnMoreButton} button is-circle is-white`}
                        >
                            <FeatherIcon
                                icon="arrow-right"
                                stroke="black"
                                height={20}
                                width={20}
                            ></FeatherIcon>
                        </button>
                    </div>
                    <div
                        className={`${projectContainer} ${isSmall} py-20 px-6 md:px-10`}
                    >
                        <h2 className="mb-4 is-text-gradient-1">
                            Other Projects
                        </h2>
                        {/* <button className="button is-black">
                            Explore
                        </button> */}
                        <button
                            className={`${learnMoreButton} button is-circle`}
                        >
                            <FeatherIcon
                                icon="search"
                                stroke="white"
                                height={20}
                                width={20}
                            ></FeatherIcon>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
