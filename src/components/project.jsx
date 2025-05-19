export default function Project ({title, heroImage, description, projectLink, repoLink}) {
    return (
        <div className="project">
            <h3>{title}</h3>
            <div className="container-project">
                <div className="container-img-project">
                    <button className="btn see-more">
                        Ver mais
                    </button>
                    <img src={heroImage} alt={`tela Principal do ${title}`}/>
                </div>
                <div className="info-project">
                    <p className="about-project">
                        {description}
                    </p>
                    <div className="container-space-between">
                        <button className="btn">
                            <a href={projectLink} target="_blank" rel="external">Acessar Projeto</a>
                        </button>
                        <button className="btn">
                            <a href={repoLink} target="_blank" rel="external">Ver repositorio</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

