export default function Project ({title, heroImage, description, projecLink, repoLink}) {
    return (
        <div className="project">
            <h3>{title}</h3>
            <div className="container_project">
                <div className="container_img_project">
                    <button className="btn see_more">
                        Ver mais
                    </button>
                    <img src={heroImage} alt={"tela Principal do " + title}/>
                </div>
                <div className="info_project">
                    <p className="about_project">
                        {description}
                    </p>
                    <div className="container_space_between">
                        <button className="btn">
                            <a href={projecLink} target="_blank" rel="external">Acessar Projeto</a>
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
