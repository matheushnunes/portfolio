import logoGitHub from '../assets/images/logo_gitHub.png'

export default function Footer() {
    return (
        <footer>
            <p>
                Desenvolvido por
                <a href="https://github.com/matheushnunes" target='_blank'>
                    <img src={logoGitHub} alt="logo do gitHub"/>
                    matheushnunes
                </a>
            </p>
        </footer>
    )
}
