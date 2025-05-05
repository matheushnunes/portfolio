export default function Principal () {
    return (
        <main>
            <section className="apresentation">
                <h2>Olá, eu sou o</h2>
                <h1>MATHEUS HENRIQUE</h1>
                <h3>&lt;Desenvolvedor Front-end /&gt;</h3>
            </section>
            <section className="aboutMe">
                <h2>Sobre mim</h2>
                <p>
                    Estudo desenvolvimento de software desde 2021 e, atualmente, curso <strong>Análise e Desenvolvimento de Sistemas</strong>. As tecnologias que mais domino são <strong>JavaScript, HTML e CSS</strong>. Estou atuando como desenvolvedor full-stack em um projeto acadêmico em equipe e estou sempre buscando evoluir como profissional.
                </p>
                <div className="buttonsAboutMe">
                    <button className="btn">
                        <a href="#">Baixar CV</a>
                    </button>
                    <button className="btn">
                        <a href="#">Entre em Contato</a>
                    </button>
                </div>
            </section>
            <section className="skills">
                <h2>Habilidades</h2>
                <div className="containerSkills">
                    <div className="skill">
                        <img src="/src/assets/images/logo_html.png" alt="logo html" />
                        <p>HTML 5</p>
                    </div>
                    <div className="skill">
                        <img src="/src/assets/images/logo_css.png" alt="logo html" />
                        <p>CSS 3</p>
                    </div>
                    <div className="skill">
                        <img src="/src/assets/images/logo_js.png" alt="logo html" />
                        <p>JavaSript</p>
                    </div>
                    <div className="skill">
                        <img src="/src/assets/images/logo_react.png" alt="logo html" />
                        <p>React</p>
                    </div>
                </div>
            </section>
        </main>
    )
}
