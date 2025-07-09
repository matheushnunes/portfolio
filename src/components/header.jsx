import { useRef, useEffect, useState } from "react";
import icoDark from "../assets/images/ico_dark_mode.svg";
import icoLight from "../assets/images/ico_light_mode.svg";

export default function Header() {
    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const sectionAbout = useRef(null);
    const sectionSkills = useRef(null);
    const sectionProjects = useRef(null);
    const sectionContact = useRef(null);

    function toggleTheme(e) {
        setIsDarkTheme(!isDarkTheme);
    }

    const scrollTo = (ref) => {
        console.log(ref)
        console.log("scroll")
    }
    return (
        <header>
            <nav>
                <a onClick={() => scrollTo(sectionAbout)} className="links-nav" href="#about-me">Sobre</a>
                <a onClick={() => scrollTo(sectionSkills)} className="links-nav" href="#skills">Habilidades</a>
                <a onClick={() => scrollTo(sectionProjects)} className="links-nav" href="#">Projetos</a>
                <a onClick={() => scrollTo(sectionContact)} className="links-nav" href="#">Contato</a>
            </nav>
            <button className="toggle-theme" onClick={toggleTheme}>
                <div className="container-ico-theme">
                    <img src={icoLight} alt="icone tema claro" className="ico-theme"/>
                    <img src={icoDark} alt="icone tema escuro" className="ico-theme"/>
                </div>
                <input
                    id="toggle-switch"
                    name="toggle-switch"
                    type="checkbox"
                    checked={isDarkTheme}
                    readOnly
                />
                <label htmlFor="toggle-switch" className="label-toggle-switch"></label>
            </button>
        </header>
    )
}

