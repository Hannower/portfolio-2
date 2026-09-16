import Banner from "../components/Banner.jsx";
import Navbar from "../components/Navbar.jsx";
import Skills from "../components/Skills.jsx";
import Projetos from "../components/Projetos.jsx";
import Sobre from "../components/Sobre.jsx";
import Contato from "../components/Contato.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
    return(
        <>
        <Navbar />
        <Banner />
        <Skills />
        <Projetos />
        <Sobre />
        <Contato />
        <Footer />
        </>
    )
}