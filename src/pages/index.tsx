import ReactFullPage from "@fullpage/react-fullpage";

export default function Home() {
    return (
        <div className="scroll-snap">
            <section className={`section heroBackground`}>
                <div className="container mx-auto px-12 md:px-0 flex items-center justify-center is-fullheight">
                    <div>
                        <div className="flex justify-center mb-20">
                            <img src="/logo/logo.svg" alt="" />
                        </div>
                        <h1>Hi, I'm</h1>
                        <h1 className="headings">Benjamin Saobuppha</h1>
                        <h2>
                            Prev. Software Dev @{" "}
                            <span className="is-blue">Oracle</span>
                        </h2>

                        <div className="flex flex-col items-center mt-20">
                            <button className="button mb-4">Hello</button>
                            <a href="">TL;DR</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container mx-auto p-12 is-fullheight flex items-center">
                    <div className="grid md:grid-cols-2 items-center gap-24 md:gap-48 ">
                        <div>
                            <h1>
                                <span className="is-purple">Hi there,</span>
                                <br></br>
                                <span className="font-medium">
                                    it's nice to meet you!
                                </span>
                            </h1>
                            <p className="mb-12">Here's my life in a couple of words</p>
                            <p>
                                I'm a{" "}
                                <span className="font-semibold">
                                    Full-Stack Developer
                                </span>
                                , who is a 4th year student studying at the{" "}
                                <span className="is-blue font-semibold">
                                    University of Toronto
                                </span>{" "}
                                specializing in Machine Learning and Data Mining
                                and a Software Developer at{" "}
                                <span className="is-blue font-semibold">
                                    Oracle
                                </span>{" "}
                                and Web Developer at{" "}
                                <span className="is-blue font-semibold">
                                    HTV Exec Team
                                </span>
                                .
                            </p>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="placeholderImageBox mb-10"></div>
                            <div className="placeholderImageBox col-span-2 mb-10"></div>
                            <div></div>
                            <div className="placeholderImageBox"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
