import Navbar from "../components/navbar/navbar";
import Navigation from "../components/navigation/navigation";
import Hero from "../sections/home/hero/hero";
import AboutMe from "../sections/home/aboutMe/aboutMe";
import Experiences from "../sections/home/experiences/experiences";
import Skills from "../sections/home/skills/skills";
import Gallery from "../sections/home/gallery/gallery";
import Projects from "../sections/home/projects/projects";

export default function Home() {
    return (
        <div>
            <Navbar></Navbar>
            <Navigation></Navigation>
            <Hero></Hero>
            <AboutMe></AboutMe>
            <Experiences></Experiences>
            <Skills></Skills>
            <Gallery></Gallery>
            <Projects></Projects>
        </div>
    );
}
