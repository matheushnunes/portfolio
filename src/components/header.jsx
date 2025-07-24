import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import icoDark from "../assets/images/ico_dark_mode.svg";
import icoLight from "../assets/images/ico_light_mode.svg";
import icoMenu from "../assets/images/ico-menu.svg";
import closeButton from "../assets/images/close-button.svg";

export default function Header() {
    const root = document.documentElement;
    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);
    const scrollTimeout = useRef(null);
    const navigate = useNavigate();

    if (isDarkTheme) root.classList.add("dark-mode")

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

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        }

        function handleEscapeKey(event) {
            if (event.key === 'Escape') {
                setIsMenuOpen(false);
                buttonRef.current?.focus();
            }
        }

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handleEscapeKey);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [isMenuOpen]);

    const handleLinkClick = (section) => {
        setIsMenuOpen(false);

        // Se não estiver na tela principal, redireciona para a tela principal
        if (location.pathname !== "/portfolio") {
            navigate('/', { state: { scrollTo: section } });
        }

        // Navega para o elemento clicado no link do menu
        scrollTimeout.current = setTimeout(() => {
            const element = document.getElementById(section);
            element?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }, 100);

        return () => {
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }
        };
    }

    return (
        <header>
            <button
                ref={buttonRef}
                aria-haspopup="true"
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="btn-menu-hamburguer"
            >
                {isMenuOpen ?
                    <img
                        src={closeButton}
                        alt="botão fechar menu"
                        className="close-button"
                    /> :
                    <img
                        src={icoMenu}
                        alt="abrir menu hamburguer"
                        className="menu-hamburguer"
                    />
                }
            </button>
            <nav
                ref={dropdownRef}
                className={`nav-sections ${isMenuOpen ? "menu-open" : "menu-close"}`}
                role="menu"
                aria-orientation="vertical"
            >
                <a className="links-nav" onClick={() => { handleLinkClick("about-me") }}>Sobre</a>
                <a className="links-nav" onClick={() => { handleLinkClick("skills") }}>Habilidades</a>
                <a className="links-nav" onClick={() => { handleLinkClick("projects") }}>Projetos</a>
                <a className="links-nav" onClick={() => { handleLinkClick("contact") }}>Contato</a>
            </nav>
            <button className={`toggle-theme ${isDarkTheme ? "dark-mode" : "light-mode"}`} onClick={toggleTheme}>
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

