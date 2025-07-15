import { useEffect, useRef, useState } from 'react';

export function useScrollAnimation() {
    const elements = useRef([]);
    const [visibleSections, setVisibleSections] = useState({});

    // Registra um elemento e seu threshold
    const registerElement = (el, threshold = 0.2) => {
        if (el && !elements.current.find(item => item.el === el)) {
            elements.current.push({ el, threshold });
        }
    };

    useEffect(() => {
        const observers = [];

        elements.current.forEach(({ el, threshold }) => {
            const observer = new IntersectionObserver(
                (entries, obs) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            setVisibleSections(prev => ({
                                ...prev,
                                [entry.target.id]: true
                            }));
                            obs.unobserve(entry.target);
                        }
                    });
                },
                { threshold }
            );

            observer.observe(el);
            observers.push(observer);
        });

        return () => {
            observers.forEach(observer => observer.disconnect());
        };
    }, []);

    return [registerElement, visibleSections];
}
