import { useNavigate } from 'react-router-dom'
const images = import.meta.glob('/src/assets/images/**/*.{png,jpg,jpeg,svg}', {
    eager: true,
    import: 'default'
});

export default function Project ({projectData, ref, className}) {
    const navigate = useNavigate()

    return (
        <div
            ref={ref}
            className={`project ${className}`}
            id={projectData.id}
        >
            <h3>{projectData.title}</h3>
            <div className="container-project">
                <div className="container-img-project">
                    <button className="btn btn-3 see-more" onClick={() => {
                        navigate('/projectDetails', {state: {projectData}})
                    }}>
                        Ver mais
                    </button>
                    <div className="dark-background"></div>
                    <img src={images[`/src/assets/images/${projectData.heroImageKey}`]} alt={`tela Principal do ${projectData.title}`}/>
                </div>
                <div className="info-project">
                    <p className="about-project">
                        {projectData.description}
                    </p>
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
        </div>
    )
}

