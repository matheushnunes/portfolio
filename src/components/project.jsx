export default function Project ({title, heroImage, description, projectLink, repoLink}) {
    return (
        <div className="project">
            <h3>{title}</h3>
            <div className="container-project">
                <div className="container-img-project">
                    <button className="btn btn-3 see-more">
                        Ver mais
                    </button>
                    <div className="dark-background"></div>
                    <img src={heroImage} alt={`tela Principal do ${title}`}/>
                </div>
                <div className="info-project">
                    <p className="about-project">
                        {description}
                    </p>
                    <div className="container-space-between">
                        <button className="custom-btn btn-2">
                            <a href={projectLink} target="_blank" rel="external"><span>Acessar Projeto</span></a>
                        </button>
                        <button className="custom-btn btn-2">
                            <a href={repoLink} target="_blank" rel="external"><span>Ver repositorio</span></a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

