import { useState } from "react";
import icoDark from "../assets/images/ico_dark_mode.svg"; // Importação correta
import icoLight from "../assets/images/ico_light_mode.svg"; // Importação correta

export default function Header() {
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    function toggleTheme(e) {
        const newTheme = e.target.checked;
        setIsDarkTheme(newTheme);

        // Usa os imports diretamente, sem depender do estado
        const root = document.documentElement;
        root.style.setProperty(
            '--ico_theme',
            `url(${newTheme ? icoLight : icoDark})` // Troca os SVGs diretamente
        );
    }

    return (
        <header>
            <nav>
                <a href="#">Sobre</a>
                <a href="#">Habilidades</a>
                <a href="#">Projetos</a>
                <a href="#">Contato</a>
            </nav>
            <button className="toggle_theme">
                <input
                    id="toggle_switch"
                    name="toggle_switch"
                    type="checkbox"
                    checked={isDarkTheme}
                    onChange={toggleTheme}
                />
                <label htmlFor="toggle_switch" className="label_toggle_switch"></label>
            </button>
        </header>
    )
}
