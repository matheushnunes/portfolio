import Project from "./project.jsx"

import { skills } from "../data/skills.js"
import { projects } from "../data/projects.js"

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
                    {
                        skills.map((skill, idx) => (
                            <div className="skill" key={idx}>
                                <img src={skill.img} alt={skill.alt} />
                                <p>{skill.label}</p>
                            </div>
                        ))
                    }
                </div>
            </section>
            <section className="projects">
                <h2>Projetos</h2>
                {
                    projects.map((project, idx) => (
                        <Project
                            key={idx}
                            title={project.title}
                            heroImage={project.heroImage}
                            description={project.description}
                            projecLink={project.projectLink}
                            repoLink={project.repoLink}
                        />
                    ))
                }
            </section>
            <section className="contacts">
                <h2>Contato</h2>
                <div className="containerContacts">
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
                            <img src="/src/assets/images/logo_gitHub.png" alt="Icone email"/>
                        </button>
                        <a href="#">matheushnunes</a>
                    </div>
                    <div className="contact">
                        <button>
                            <img src="/src/assets/images/ico_linkedin.svg" alt="Icone email"/>
                        </button>
                        <a href="#">Matheus Henrique Nunes</a>
                    </div>
                </div>
            </section>
        </main>
    )
}
