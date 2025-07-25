import Project from "./project.jsx"
import { skills } from "../data/skills.js"
import { projects } from "../data/projects.js"
import { useScrollAnimation } from "../hooks/useScrollAnimation.jsx"
import { useRef } from "react";
const images = import.meta.glob('../assets/images/**/*.{png,jpg,jpeg,svg}', {
    eager: true,
    import: 'default'
});

export default function Principal() {
    const [registerElement, visible] = useScrollAnimation(); // Hook personalizado para gerenciar os elementos visíveis na tela e suas respectivas classes de animação
    const sectionAboutMe = useRef(null);
    const sectionContact = useRef(null);
    // importa todas as imagens da pasta como um objeto

    function scrollTo(ref) {
        ref.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }

    return (
        <main>
            <section className="apresentation">
                <div className="container-titles">
                    <h2 className="flex-left typing-effect-top" id="apresentation-title-h2">Olá, eu sou o</h2>
                    <h1><span className="h1-matheus">MATHEUS</span> <span className="h1-henrique">HENRIQUE</span></h1>
                    <h3 className="flex-right typing-effect-bottom" id="apresentation-title-h3"><span className="color-blue">&lt;</span>Desenvolvedor Front-end<span className="color-blue">/&gt;</span></h3>
                </div>
                <button className="btn-scroll" onClick={(e) => {
                    scrollTo(sectionAboutMe);
                }}>
                    <img src={images["../assets/images/arrow.svg"]} alt="seta para baixo" />
                </button>
            </section>
            <section
                className={`about-me ${visible['about-me'] ? "visible" : ""}`}
                id="about-me"
                ref={el => {
                    sectionAboutMe.current = el;
                    registerElement(el, 0.6)
                }}
            >
                <h2 className="section-title-h2">Sobre mim</h2>
                <div className="container-space-between container-about-text-btn">
                    <p className="text-about">
                        Estudo desenvolvimento de software desde 2021 e, atualmente, curso <strong>Análise e Desenvolvimento de Sistemas</strong>. As tecnologias que mais domino são <strong>JavaScript, HTML e CSS</strong>. Estou atuando como desenvolvedor full-stack em um projeto acadêmico em equipe e estou sempre buscando evoluir como profissional.
                    </p>
                    <div className="buttons-about-me">
                        <a
                            className="custom-btn btn-2"
                            href="/portfolio/assets/files/cv_matheus_henrique.pdf"
                            download="cv_matheus_henrique.pdf"
                        >
                            <span>Baixar CV</span>
                        </a>
                        <a className="custom-btn btn-2" onClick={(e) => {
                            e.preventDefault()
                            scrollTo(sectionContact)
                        }}>
                            <span>Entre em Contato</span>
                        </a>
                    </div>
                </div>
                <span className="about-background">&lt;/&gt;</span>
            </section>
            <section
                className={`section ${visible['skills'] ? 'visible' : ''}`}
                id="skills"
                ref={el => registerElement(el, 0.25)}
            >
                <h2 className="section-title-h2">Habilidades</h2>
                <div className="container-skills">
                    {
                        skills.map((skill, idx) => (
                            <div className="skill" key={idx}>
                                <div className="progress-container">
                                    <div className="progress-bar"></div>
                                </div>
                                <div className="donut" id={"donut-" + skill.label.replace(" ", "-").replace("#", "sharp").toLowerCase()}></div>
                                <div className="content">
                                    <img src={images[`../assets/images/${skill.imgKey}`]} alt={skill.alt} />
                                    <p>{skill.label}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </section>
            <section
                className="section"
                id="projects"
            >
                <h2 className="section-title-h2">Projetos</h2>
                <div className="container-projects">
                    {
                        projects.map((project, idx) => (
                            <Project
                                key={idx}
                                projectData={project}
                                ref={el => registerElement(el, 0.2)}
                                className={`${visible[project.id] ? 'visible' : ''}`}
                            />
                        ))
                    }
                </div>
            </section>
            <section
                className={`contacts ${visible['contact'] ? 'visible' : ''}`}
                id="contact"
                ref={el => {
                    sectionContact.current = el;
                    registerElement(el, 0.4)
                }}
            >
                <h2 className="section-title-h2">Contato</h2>
                <div className="container-contacts">
                    <div className="contact" id="contact-email">
                        <a href="mailto:matheushnunes2005@gmail.com">
                            <div>
                                <img
                                    src={images["../assets/images/ico_mail.svg"]}
                                    alt="Icone email"
                                />
                            </div>
                            <p>matheushnunes2005@gmail.com</p>
                        </a>
                    </div>
                    <div className="contact">
                        <a href="https://wa.me/5562994721231" target="_blank">
                            <div>
                                <img src={images["../assets/images/ico_telephone.svg"]} alt="Icone telefone" />
                            </div>
                            <p>(62) 99472-1231</p>
                        </a>
                    </div>
                    <div className="contact">
                        <a href="https://github.com/matheushnunes" target="_blank">
                            <div>
                                <img src={images["../assets/images/logo_gitHub.png"]} alt="Icone gitHub" />
                            </div>
                            <p>matheushnunes</p>
                        </a>
                    </div>
                    <div className="contact">
                        <a href="https://www.linkedin.com/in/matheus-henrique-nunes-a4988027a/" target="_blank">
                            <div>
                                <img src={images["../assets/images/ico_linkedin.png"]} alt="Icone linkedin" />
                            </div>
                            <p>Matheus Henrique Nunes</p>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}

