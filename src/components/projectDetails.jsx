import { useLocation, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import ImageGallery from "./imageGallery.jsx";
import "../styles/projectDetails.css"

export default function ProjectDetails () {
    const { state } = useLocation(); // Acessa o estado enviado
    const { projectData } = state || {};
    const [images, setImages] = useState([]);
    const navigate = useNavigate();

    return (
        <main>
            <section className="projectDetails">
                <button className="btn-back" onClick={()=>navigate(-1)}>
                    &lt; voltar
                </button>
                <h1>{projectData.title}</h1>
                <div className="main">
                    <div className="images">
                        <div className="desktopImages">
                            <ImageGallery imageSize="desktop" imagePath={projectData.imagePath} />
                        </div>
                        <div className="mobileImages">
                            <ImageGallery imageSize="mobile" imagePath={projectData.imagePath} />
                        </div>
                    </div>
                    <div className="info">
                        <p>{projectData.description}</p>
                        <h2>Principais funcionalidades</h2>
                        <ul>
                            {projectData.features.map((feature, index) => <li key={index}>{feature}</li>)}
                        </ul>
                        <h2>Tecnologias usadas</h2>
                        <ul className="technologies-list">
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
