import styles from "./hero.module.scss";

const {
    heroBackground
} = styles;

export default function Hero() 
{
    return (
        <section className={`section ${heroBackground}`}>
            <div className="container mx-auto px-12 md:px-0 pb-24 flex items-center justify-center is-fullheight">
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
    );
}
