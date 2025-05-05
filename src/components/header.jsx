export default function Header() {
    return (
        <header>
            <nav>
                <a href="#">Sobre</a>
                <a href="#">Habilidades</a>
                <a href="#">Projetos</a>
                <a href="#">Contato</a>
            </nav>
            <button className="toggle_theme">
                <input id="toggle_switch" name="toggle_switch" type="checkbox" />
                <label for="toggle_switch"></label>
            </button>
        </header>
    )
}
