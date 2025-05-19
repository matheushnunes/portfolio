import { useEffect, useState } from "react";
import icoDark from "../assets/images/ico_dark_mode.svg"; // Importação correta
import icoLight from "../assets/images/ico_light_mode.svg"; // Importação correta

export default function Header() {
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    function toggleTheme(e) {
        setIsDarkTheme(!isDarkTheme);
    }

    return (
        <header>
            <nav>
                <a href="#">Sobre</a>
                <a href="#">Habilidades</a>
                <a href="#">Projetos</a>
                <a href="#">Contato</a>
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

