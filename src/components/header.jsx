import { useRef, useEffect, useState } from "react";
import icoDark from "../assets/images/ico_dark_mode.svg";
import icoLight from "../assets/images/ico_light_mode.svg";

export default function Header({
    goToSectionAbout,
    goToSectionSkills,
    goToSectionProjects,
    goToSectionContact
}) {
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    function toggleTheme(e) {
        setIsDarkTheme(!isDarkTheme);
    }


    return (
        <header>
            <nav>
                <a onClick={(e) => {
                    e.preventDefault()
                    goToSectionAbout()

                }} className="links-nav" href="#about-me">Sobre</a>
                <a onClick={(e) => {
                    e.preventDefault()
                    goToSectionSkills()
                }} className="links-nav" href="#skills">Habilidades</a>
                <a onClick={(e) => {
                    e.preventDefault()
                    goToSectionProjects()
                }} className="links-nav" href="#">Projetos</a>
                <a onClick={(e) => {
                    e.preventDefault()
                    goToSectionContact()

                }} className="links-nav" href="#">Contato</a>
            </nav>
            <button className="toggle-theme" onClick={toggleTheme}>
                <div className="container-ico-theme">
                    <img src={icoLight} alt="icone tema claro" className="ico-theme" />
                    <img src={icoDark} alt="icone tema escuro" className="ico-theme" />
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

