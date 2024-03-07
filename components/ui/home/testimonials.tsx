import { useState, useMemo, useEffect } from "react";

interface Props {
    locale: string;
}

const Testimonials: React.FC<Props> = ({ locale }) => {
    const lang = useMemo(() => (locale || '').toLowerCase().includes('fr') ? 'fr' : 'en', [locale]);
    const s = strings[lang];
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prevIndex) => (prevIndex + 1) % s.list.length);
        }, 15000);

        return () => clearInterval(interval);
    }, [s.list.length, currentTestimonial]);
    // Add currentTestimonial to useEffect deps to stop autoswitching indexes when
    // index is choosed on indicator.

    const handleTestimonialChange = (index: number) => {
        setCurrentTestimonial(index);
    };

    return (
        <section className="text-gray-100">
            <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center text-gray-800">
                    <h2 className="text-3xl font-extrabold sm:text-4xl">{s.title}</h2>
                    <h3 className="mt-4 text-lg">{s.subtitle}</h3>
                </div>
                <div className="container mt-12 max-w-xl mx-auto rounded-xl">
                    <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-900 dark:text-gray-100">
                        <img src={s.list[currentTestimonial].image || "https://source.unsplash.com/random/200x200"} alt={s.list[currentTestimonial].business} className="w-20 h-20 rounded-full dark:bg-gray-500" />
                        <blockquote className="max-w-lg text-lg italic font-medium text-center">{s.list[currentTestimonial].desc}</blockquote>
                        <div className="text-center dark:text-gray-400">
                            <p>{s.list[currentTestimonial].author}, {s.list[currentTestimonial].position}</p>
                            <p>{s.list[currentTestimonial].business}</p>
                        </div>
                        <div className="flex space-x-2">
                            {s.list.map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    aria-label={`Page ${index + 1}`}
                                    className={`w-2 h-2 rounded-full ${currentTestimonial === index ? 'bg-gray-50' : 'bg-gray-600'}`}
                                    onClick={() => handleTestimonialChange(index)}
                                ></button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const strings = {
    'en': {
        'title': 'Testimonials',
        'subtitle': 'A non-exhaustive list of Gesmax Testimonials',
        'list': [
            {
                desc: "Gesmax has revolutionized our inventory management! With its intuitive interface and real-time sync, we can now keep track of our extensive book collection effortlessly.",
                business: "Librarie J²",
                author: "Joël",
                position: "Owner",
                image: "/images/lib.jpeg"
            },
            {
                desc: "As a busy restaurant owner, Gesmax has been a game-changer for us. From point-of-sale to inventory management, it has streamlined our operations and helped us serve our customers more efficiently.",
                business: "Le Bao",
                author: "Murielle",
                position: "Owner",
                image: "/images/bao.jpg"
            },
            {
                desc: "Managing inventory in the beauty industry can be challenging, but Gesmax has made it simple and hassle-free. Now, we can focus on providing exceptional service to our clients without worrying about stock shortages.",
                business: "Nails & Body",
                author: "Lynette",
                position: "Owner",
                image: "/images/nailsnbody.jpg"
            },
            {
                desc: "With Gesmax, we've been able to organize our inventory effectively and showcase our unique collection of vintage items to our customers. It has helped us grow our business and attract new clientele.",
                business: "Brocante Obili Palace",
                author: "Derek",
                position: "Owner",
                image: "/images/bro.jpg"
            },
        ]
    },
    'fr': {
        'title': 'Témoignages',
        'subtitle': 'Pourquoi Gesmax',
        'list': [
            {
                desc: "Gesmax a révolutionné la gestion de notre inventaire ! Avec son interface intuitive et sa synchronisation en temps réel, nous pouvons maintenant suivre notre vaste collection de livres sans effort.",
                business: "Librairie J²",
                author: "Joël",
                position: "Propriétaire",
                image: "/images/lib.jpeg"
            },
            {
                desc: "En tant que propriétaire occupé de restaurant, Gesmax a été un véritable atout pour nous. De la caisse enregistreuse à la gestion des stocks, il a rationalisé nos opérations et nous a aidés à mieux servir nos clients.",
                business: "Le Bao",
                author: "Murielle",
                position: "Propriétaire",
                image: "/images/bao.jpg"
            },
            {
                desc: "La gestion des stocks dans l'industrie de la beauté peut être difficile, mais Gesmax l'a rendue simple et sans tracas. Maintenant, nous pouvons nous concentrer sur la fourniture d'un service exceptionnel à nos clients sans nous soucier des",
                business: "Nails & Body",
                author: "Lynette",
                position: "Propriétaire",
                image: "/images/nailsnbody.jpg"
            },
            {
                desc: "Avec Gesmax, nous avons pu organiser efficacement notre inventaire et présenter notre collection unique d'articles vintage à nos clients. Cela nous a aidés à développer notre entreprise et à attirer une nouvelle clientèle.",
                business: "Brocante Obili Palace",
                author: "Derek",
                position: "Propriétaire",
                image: "/images/bro.jpg"
            },
        ]
    },
};

export default Testimonials;
