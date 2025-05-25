import { useLocation } from "react-router-dom"

export default function ProjectDetails () {
    const { state } = useLocation(); // Acessa o estado enviado
    const { projectData } = state || {};

    return (
        <main>
            <section className="projectDetails">
                <button className="btn-close" onClick={()=>closeModal()}>
                    X
                </button>
                <h1>{projectData.title}</h1>
                <div className="main">
                    <div className="images">
                        <div className="desktopImages">
                            <img src={projectData.heroImage} alt={`tela Principal do ${projectData.title}`}/>
                        </div>
                        <div className="mobileImages">

                        </div>
                    </div>
                    <div className="info">
                        <p>{projectData.description}</p>
                        <h2>Principais funcionalidades</h2>
                        <ul>
                            {projectData.features.map((feature, index) => <li key={index}>{feature}</li>)}
                        </ul>
                        <h2>Tecnologias usadas</h2>
                        <ul>
                            {projectData.technologies.map((technology, index) => <li key={index}>{technology}</li>)}
                        </ul>
                        <div className="container-space-between">
                            <button className="custom-btn btn-2">
                                <a href={projectData.projectLink} target="_blank" rel="external"><span>Acessar Projeto</span></a>
                            </button>
                            <button className="custom-btn btn-2">
                                <a href={projectData.repoLink} target="_blank" rel="external"><span>Ver repositorio</span></a>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
