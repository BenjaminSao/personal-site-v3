import styles from "./skills.module.scss";

const { mainSkillsContainer, smContainer, mContainer, tag, isHighlighted, smContainerSpecialFont, mContainerSpecialFont, mContainerSpecialContent } =
    styles;

export default function Skills() {
    return (
        <section className="section">
            <div className="container mx-auto p-12 is-fullheight">
                <div className="mb-6">
                    <h1 className="is-text-gradient-1">Skills</h1>
                    <p>
                        Here's the things I'm <strong>proficient</strong> in!
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-8">
                    <div className={`${mainSkillsContainer} col-span-2`}>
                        <h1 className="is-blue mb-4">Tools & Frameworks</h1>
                        <div className="flex flex-wrap mb-6">
                            <div className={`${tag} ${isHighlighted}`}>
                                <label>React.js</label>
                            </div>
                            <div className={`${tag} ${isHighlighted}`}>
                                <label>Vue.js</label>
                            </div>
                            <div className={`${tag} ${isHighlighted}`}>
                                <label>Figma</label>
                            </div>
                            <div className={`${tag} ${isHighlighted}`}>
                                <label>Node.js</label>
                            </div>
                            <div className={`${tag}`}>
                                <label>SCSS</label>
                            </div>
                            <div className={`${tag}`}>
                                <label>Git</label>
                            </div>
                            <div className={`${tag}`}>
                                <label>Tailwind</label>
                            </div>
                            <div className={`${tag}`}>
                                <label>Bulma</label>
                            </div>
                            <div className={`${tag}`}>
                                <label>Google API's</label>
                            </div>
                            <div className={`${tag}`}>
                                <label>Flutter</label>
                            </div>
                            <div className={`${tag}`}>
                                <label>Unix</label>
                            </div>
                            <div className={`${tag}`}>
                                <label>Jira</label>
                            </div>
                            <div className={`${tag}`}>
                                <label>PostgreSQL</label>
                            </div>
                        </div>

                        <h1 className="is-blue mb-4">Languages</h1>
                        <div className="flex flex-wrap mb-6">
                            <div className={`${tag} ${isHighlighted}`}>
                                <label>JavaScript</label>
                            </div>
                            <div className={`${tag} ${isHighlighted}`}>
                                <label>TypeScript</label>
                            </div>
                            <div className={`${tag} ${isHighlighted}`}>
                                <label>HTML</label>
                            </div>
                            <div className={`${tag} ${isHighlighted}`}>
                                <label>CSS</label>
                            </div>
                            <div className={`${tag} ${isHighlighted}`}>
                                <label>SQL</label>
                            </div>
                            <div className={`${tag}`}>
                                <label>Java</label>
                            </div>
                            <div className={`${tag}`}>
                                <label>Python</label>
                            </div>
                            <div className={`${tag}`}>
                                <label>C</label>
                            </div>
                            <div className={`${tag}`}>
                                <label>Dart</label>
                            </div>
                        </div>

                        <h1 className="is-blue mb-4">Hobbies ;)</h1>
                        <div className="flex flex-wrap">
                            <div className={`${tag} ${isHighlighted}`}>
                                <label>アニメ</label>   
                            </div>
                            <div className={`${tag} ${isHighlighted}`}>
                                <label>Piano</label>   
                            </div>
                            <div className={`${tag} ${isHighlighted}`}>
                                <label>Working Out</label>   
                            </div>
                            <div className={`${tag} ${isHighlighted}`}>
                                <label>Basketball</label>   
                            </div>
                            <div className={`${tag} ${isHighlighted}`}>
                                <label>Archery</label>   
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-col-2 gap-4">
                        <div className={`${smContainer} flex justify-center flex-col`}>
                            <h1 className={`${smContainerSpecialFont} text-center`}>
                                3
                            </h1>
                            <p className="text-center is-blue font-semibold">Hackathon Wins</p>
                        </div>
                        <div className={`${smContainer} flex justify-center flex-col`}>
                            <h1 className={`${smContainerSpecialFont} text-center`}>
                                10+
                            </h1>
                            <p className="text-center is-blue font-semibold">Projects</p>
                        </div>
                        <div className={`${mContainer} col-span-2 flex items-center justify-center`}>
                            <h1 className={`${mContainerSpecialFont} text-center pl-4`}>
                                    1+
                            </h1>
                            <p className={`${mContainerSpecialContent} text-center`}>Years of Work Experience</p>
                        </div>
                        <div className={`${mContainer} col-span-2 flex items-center`}>
                            <div>
                               <h1 className="is-blue mb-4">Interests</h1>
                            <div className="flex flex-wrap">
                                <div className={`${tag}`}>
                                    <label>ML</label>   
                                </div>
                                <div className={`${tag}`}>
                                    <label>AI</label>   
                                </div>
                                <div className={`${tag}`}>
                                    <label>Entrepreneurship</label>   
                                </div>
                                <div className={`${tag}`}>
                                    <label>Enterprise Architecture</label>   
                                </div>
                            </div> 
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
