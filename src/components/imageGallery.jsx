import { useState, useEffect } from 'react';

const ImageGallery = ({ imageSize, imagePath }) => {
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const loadImages = async () => {
            try {
                //importa todas as imagens possíveis
                const allImageModules = import.meta.glob('../assets/images/**/*.{png,jpg,jpeg,svg}');

                //Filtra apenas as que correspondem ao caminho desejado
                const filteredPaths = Object.keys(allImageModules).filter(path =>
                    path.includes(`/${imagePath}/${imageSize}/`)
                );

                //Carrega cada imagem filtrada
                const loadedImages = await Promise.all(
                    filteredPaths.map(async (path) => {
                        const module = await allImageModules[path]();
                        return module.default;
                    })
                );

                setImages(loadedImages);
                setIsLoading(false);
            } catch (error) {
                console.error('Erro ao carregar imagens:', error);
                setIsLoading(false);
            }
        };

        loadImages();
    }, [imagePath, imageSize]);

    if (isLoading) return <div>Carregando imagens...</div>;
    if (images.length === 0) return <div>Nenhuma imagem encontrada em {imagePath}/{imageSize}.</div>;

    return (
        <div className="gallery">
            <img
                src={images[currentIndex]}
                alt={`Imagem ${currentIndex + 1}`}
            />
            <button className='btn-fullscreen' onClick={() => setIsModalOpen(true)}>
                <img src="/src/assets/images/fullscreen.svg" alt="icone tela cheia" />
            </button>
            <div className="controls">
                <button className='btn-back-image'
                    onClick={() => setCurrentIndex(prev =>
                        (prev - 1 + images.length) % images.length
                    )}
                >
                    <img src="/src/assets/images/arrow.svg" alt="seta para esquerda" />
                </button>
                <button className='btn-next-image'
                    onClick={() => setCurrentIndex(prev =>
                        (prev + 1) % images.length
                    )}
                >
                    <img src="/src/assets/images/arrow.svg" alt="seta para direita" className='rotate' />
                </button>
            </div>
            {isModalOpen && (
                <div className="modal">
                    <div className="popup-image">
                        <button onClick={() => {setIsModalOpen(false); console.log(isModalOpen)}} className='btn-exit-fullscreen'>
                            <img src="/src/assets/images/fullscreen_exit.svg" alt="" />
                        </button>
                        <div className="container-image-and-btns">
                            <button
                                className='btn-back-image btn-modal'
                                onClick={() => setCurrentIndex(prev =>
                                    (prev - 1 + images.length) % images.length
                                )}
                            >
                                <img src="/src/assets/images/arrow.svg" alt="seta para esquerda" />
                            </button>
                            <img
                                src={images[currentIndex]}
                                alt={`Imagem ${currentIndex + 1}`}
                            />
                            <button
                                className='btn-next-image btn-modal'
                                onClick={() => setCurrentIndex(prev =>
                                    (prev + 1) % images.length
                                )}
                            >
                                <img src="/src/assets/images/arrow.svg" alt="seta para direita" className='rotate' />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageGallery;
