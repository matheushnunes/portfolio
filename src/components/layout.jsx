import Header from './header.jsx';
import { Outlet } from 'react-router-dom';
import { useRef } from 'react';
import { ScrollContext } from './SrollContext.jsx';

export default function Layout() {
    const sectionAbout = useRef(null);
    const sectionSkills = useRef(null);
    const sectionProjects = useRef(null);
    const sectionContact = useRef(null);

    const scrollTo = (ref) => {
        let block = 'start';


        ref.current.scrollIntoView({
            behavior: 'smooth',
            block: block,
        });
    }

    const contextValue = {
        sectionAbout,
        sectionSkills,
        sectionProjects,
        sectionContact,
        scrollTo,
    }

    return (
        <ScrollContext.Provider value={contextValue}>
            <Header
                goToSectionAbout={() => scrollTo(sectionAbout)}
                goToSectionSkills={() => scrollTo(sectionSkills)}
                goToSectionProjects={() => scrollTo(sectionProjects)}
                goToSectionContact={() => scrollTo(sectionContact)}
            />
            <Outlet /> {/* Aqui as rotas filhas serão renderizadas */}
        </ScrollContext.Provider>
    );
}
