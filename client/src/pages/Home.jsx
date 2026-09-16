import Banner from "../components/Banner.jsx";
import Navbar from "../components/Navbar.jsx";
import Skills from "../components/Skills.jsx";
import Projetos from "../components/Projetos.jsx";

export default function Home() {
    return(
        <>
        <Navbar />
        <Banner />
        <Skills />
        <Projetos />
        </>
    )
}