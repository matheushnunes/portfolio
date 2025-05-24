import Project from "./project.jsx"

import { skills } from "../data/skills.js"
import { projects } from "../data/projects.js"

export default function Principal() {
    return (
        <main>
            <section className="apresentation">
                <div className="container-titles">
                    <h2 className="flex-left typing-effect-top" id="apresentation-title-h2">Olá, eu sou o</h2>
                    <h1><span className="h1-matheus">MATHEUS</span> <span className="h1-henrique">HENRIQUE</span></h1>
                    <h3 className="flex-right typing-effect-bottom" id="apresentation-title-h3"><span className="color-blue">&lt;</span>Desenvolvedor Front-end<span className="color-blue">/&gt;</span></h3>
                </div>
            </section>
            <section className="about-me">
                <h2 className="section-title-h2">Sobre mim</h2>
                <div className="container-space-between">
                    <p className="text-about">
                        Estudo desenvolvimento de software desde 2021 e, atualmente, curso <strong>Análise e Desenvolvimento de Sistemas</strong>. As tecnologias que mais domino são <strong>JavaScript, HTML e CSS</strong>. Estou atuando como desenvolvedor full-stack em um projeto acadêmico em equipe e estou sempre buscando evoluir como profissional.
                    </p>
                    <div className="buttons-about-me">
                        <button className="custom-btn btn-2">
                            <a href="../src/assets/files/cv_matheus_henrique.pdf" download={"cv_matheus_henrique.pdf"}><span>Baixar CV</span></a>
                        </button>
                        <button className="custom-btn btn-2">
                            <a href="#"><span>Entre em Contato</span></a>
                        </button>
                    </div>
                </div>
                <span className="about-background">&lt;/&gt;</span>
            </section>
            <section className="skills">
                <h2 className="section-title-h2">Habilidades</h2>
                <div className="container-skills">
                    {
                        skills.map((skill, idx) => (
                            <div className="skill" key={idx}>
                                <div className="donut" id={"donut-" + skill.label.replace(" ", "-").replace("#", "sharp").toLowerCase()}></div>
                                <div className="content">
                                    <img src={skill.img} alt={skill.alt} />
                                    <p>{skill.label}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
            <section className="projects">
                <h2 className="section-title-h2">Projetos</h2>
                <div className="container-projects">
                    {
                        projects.map((project, idx) => (
                            <Project
                                key={idx}
                                title={project.title}
                                heroImage={project.heroImage}
                                description={project.description}
                                projectLink={project.projectLink}
                                repoLink={project.repoLink}
                            />
                        ))
                    }
                </div>
            </section>
            <section className="contacts">
                <h2 className="section-title-h2">Contato</h2>
                <div className="container-contacts">
                    <div className="contact">
                        <button>
                            <img src="/src/assets/images/ico_mail.svg" alt="Icone email"/>
                        </button>
                        <a href="#">matheushnunes2005@gmail.com</a>
                    </div>
                    <div className="contact">
                        <button>
                            <img src="/src/assets/images/ico_telephone.svg" alt="Icone telefone"/>
                        </button>
                        <a href="#">(62) 99472-1231</a>
                    </div>
                    <div className="contact">
                        <button>
                            <img src="/src/assets/images/logo_gitHub.png" alt="Icone gitHub"/>
                        </button>
                        <a href="#">matheushnunes</a>
                    </div>
                    <div className="contact">
                        <button>
                            <img src="/src/assets/images/ico_linkedin.png" alt="Icone linkedin"/>
                        </button>
                        <a href="#">Matheus Henrique Nunes</a>
                    </div>
                </div>
            </section>
        </main>
    )
}

