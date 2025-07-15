import { useRef, useEffect, useState } from "react";
import icoDark from "../assets/images/ico_dark_mode.svg";
import icoLight from "../assets/images/ico_light_mode.svg";

export default function Header({
    goToSectionAbout,
    goToSectionSkills,
    goToSectionProjects,
    goToSectionContact
}) {
    const root = document.documentElement;
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    root.classList.add("dark-mode")
    
    function toggleTheme(e) {

        setIsDarkTheme(!isDarkTheme);

        if (isDarkTheme) {
            root.classList.remove("dark-mode");
            root.classList.add("light-mode");
        } else {
            root.classList.remove("light-mode");
            root.classList.add("dark-mode");
        }
    }

    return (
        <header>
            <nav>
                <a className="links-nav" href="#about-me">Sobre</a>
                <a className="links-nav" href="#skills">Habilidades</a>
                <a className="links-nav" href="#projects">Projetos</a>
                <a className="links-nav" href="#contact">Contato</a>
            </nav>
            <button className={`toggle-theme ${isDarkTheme ? "dark-mode" : "light-mode" }`} onClick={toggleTheme}>
                <div className="container-ico-theme">
                    <img
                        id="ico-theme-light"
                        src={icoLight}
                        alt="icone tema claro"
                        className="ico-theme"
                    />
                    <img
                        id="ico-theme-dark"
                        src={icoDark}
                        alt="icone tema escuro"
                        className="ico-theme"
                    />
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

