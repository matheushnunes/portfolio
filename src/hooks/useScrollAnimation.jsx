import { useEffect, useState, useRef } from 'react';

export function useScrollAnimation(options = { threshold: 0.2 }) {
    const refs = useRef([]);
    const [visibleSections, setVisibleSections] = useState({});

    useEffect(() => {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisibleSections(prev => ({
                        ...prev,
                        [entry.target.id]: true
                    }));
                    obs.unobserve(entry.target);
                }
            });
        }, options);

        refs.current.forEach(el => {
            if (el) observer.observe(el);
        });

        return () => {
            refs.current.forEach(el => {
                if (el) observer.unobserve(el);
            });
            observer.disconnect();
        };
    }, [options]);

    const setRef = el => {
        if (el && !refs.current.includes(el)) {
            refs.current.push(el);
        }
    };

    console.log(visibleSections);
    return [setRef, visibleSections];
}
