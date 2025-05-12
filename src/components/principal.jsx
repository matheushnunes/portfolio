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
                    {[
                        {
                            img: "/src/assets/images/logo_html.png",
                            alt: "logo html",
                            label: "HTML 5"
                        },
                        {
                            img: "/src/assets/images/logo_css.png",
                            alt: "logo css",
                            label: "CSS 3"
                        },
                        {
                            img: "/src/assets/images/logo_js.png",
                            alt: "logo JavaScript",
                            label: "JavaScript"
                        },
                        {
                            img: "/src/assets/images/logo_git.png",
                            alt: "logo Git",
                            label: "Git"
                        },
                        {
                            img: "/src/assets/images/logo_gitHub.png",
                            alt: "logo GitHub",
                            label: "GitHub"
                        },
                        {
                            img: "/src/assets/images/logo_react.png",
                            alt: "logo React",
                            label: "React"
                        },
                        {
                            img: "/src/assets/images/logo_figma.png",
                            alt: "logo Figma",
                            label: "Figma"
                        },
                        {
                            img: "/src/assets/images/logo_node.png",
                            alt: "logo Node js",
                            label: "Node js"
                        }
                    ].map((skill, idx) => (
                        <div className="skill" key={idx}>
                            <img src={skill.img} alt={skill.alt} />
                            <p>{skill.label}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="projects">
                <h2>Projetos</h2>
                <div className="project">
                    <h3>SGA Online</h3>
                    <div className="container_project">
                        <div className="container_img_project">
                            <button className="btn see_more">
                                Ver mais
                            </button>
                            <img src="../src/assets/images/dashboard_sga_online.png" alt="tela principal do SGA Online"/>
                        </div>
                        <div className="info_project">
                            <p className="about_project">
                                O SGA (Sistema de Gestão Automotivo) Online é um projeto acadêmico desenvolvido em equipe com mais cinco colegas. Nosso objetivo é criar uma versão moderna, web e responsiva de um sistema ERP desktop já utilizado por uma empresa do setor automotivo.
                            </p>
                            <div className="container_space_between">
                                <button className="btn">
                                    <a href="https://sga-web.github.io/SGA_ONLINE/Front_end/Principal/principal.html" target="_blank" rel="external">Acessar Projeto</a>
                                </button>
                                <button className="btn">
                                    <a href="https://github.com/SGA-WEB/SGA_ONLINE" target="_blank" rel="external">Ver repositorio</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <h3>Tabuada</h3>
                    <div className="container_project">
                        <div className="container_img_project">
                            <button className="btn see_more">
                                Ver mais
                            </button>
                            <img src="../src/assets/images/home_page_tabuada.png" alt="tela principal do SGA Online"/>
                        </div>
                        <div className="info_project">
                            <p className="about_project">
                                Um site onde é possível testar seus conhecimentos e aprender as tabuadas da matemática. Objeto principal para o desenvolvimento desse projeto é testar e praticar meus conhecimentos em React pois ele é feito 100% usando React
                            </p>
                            <div className="container_space_between">
                                <button className="btn">
                                    <a href="https://matheushnunes.github.io/projeto-tabuada/" target="_blank" rel="external">Acessar Projeto</a>
                                </button>
                                <button className="btn">
                                    <a href="https://github.com/matheushnunes/projeto-tabuada" target="_blank" rel="external">Ver repositorio</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <h3>Tabuada</h3>
                    <div className="container_project">
                        <div className="container_img_project">
                            <button className="btn see_more">
                                Ver mais
                            </button>
                            <img src="../src/assets/images/home_page_tabuada.png" alt="tela principal do SGA Online"/>
                        </div>
                        <div className="info_project">
                            <p className="about_project">
                                Um site onde é possível testar seus conhecimentos e aprender as tabuadas da matemática. Objeto principal para o desenvolvimento desse projeto é testar e praticar meus conhecimentos em React pois ele é feito 100% usando React
                            </p>
                            <div className="container_space_between">
                                <button className="btn">
                                    <a href="https://matheushnunes.github.io/projeto-tabuada/" target="_blank" rel="external">Acessar Projeto</a>
                                </button>
                                <button className="btn">
                                    <a href="https://github.com/matheushnunes/projeto-tabuada" target="_blank" rel="external">Ver repositorio</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
