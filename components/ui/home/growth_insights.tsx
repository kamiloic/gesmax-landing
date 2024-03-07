import Link from "next/link";
import { Navigation } from "../../navigation";

interface Props {
    locale: string;
}

const strings = {
    'en': {
        'growthInsights': {
            'title': "Growth and Insights",
            'subtitle': "Unlock Your Business's Potential with Gesmax's Analytical Capabilities",
            'image': {
                'src': "/images/growthninsights.jpeg",
                'alt': ""
            }
        },
        'customizationSupport': {
            'titles': [
                "Customization and Support",
                "Tailored Solutions and Personalized Assistance",
                "Optimize Your Experience with Gesmax"
            ],
            'cta': [
                "Schedule a 30-Minute Consultation Call Now!",
                "Book a Personalized Appointment to Elevate Your Business",
                "Connect with Us to Discover Tailored Solutions"
            ],
            'layoutOptions': [
                "Default",
                "Centered",
                "Left-aligned",
                "Right-aligned",
                "Full-width"
            ]
        },
        demo: "Request a demo",
        seePricing: "See pricing"
    },
    'fr': {
        'growthInsights': {
            'title': "Croissance et Perspectives",
            'subtitle': "Débloquez le potentiel de votre entreprise avec les capacités analytiques de Gesmax",
            'image': {
                'src': "/images/growthninsights.jpeg",
                'alt': ""
            }
        },
        'customizationSupport': {
            'titles': [
                "Personnalisation et Support",
                "Solutions sur Mesure et Assistance Personnalisée",
                "Optimisez Votre Expérience avec Gesmax"
            ],
            'cta': [
                "Planifiez un appel de consultation de 30 minutes dès maintenant !",
                "Réservez un rendez-vous personnalisé pour dynamiser votre entreprise",
                "Connectez-vous avec nous pour découvrir des solutions adaptées"
            ],
            'layoutOptions': [
                "Défaut",
                "Centré",
                "Aligné à gauche",
                "Aligné à droite",
                "Plein largeur"
            ]
        },
        demo: "Démo",
        seePricing: "Voir les coûts?"
    }
};

const GrowthInsights: React.FC<Props> = ({ locale }) => {
    const s = strings[locale.toLowerCase().includes("fr") ? "fr": "en"];
    const { title, subtitle, image } = s.growthInsights;

    return (
        <section className="flex max-w-7xl mx-auto flex-col justify-between bg-cover">
            <div className="bg-white text-gray-900">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-6 lg:py-12 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h2 className="text-3xl font-extrabold sm:text-4xl">
                            {title}
                        </h2>
                        <h3 className="mt-4 text-lg mb-8 sm:mb-12">
                            {subtitle || ''}
                        </h3>

                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <button onClick={() => window.open("https://gesmaxapp.vercel.app", "_blank")}>
                                <span className="px-8 py-3 text-lg font-semibold rounded bg-primary text-white cursor-pointer">
                                    {s.demo}
                                </span>
                            </button>
                            <Link href='/pricing'>
                                <span className="px-8 py-3 text-lg font-semibold text-primary cursor-pointer">
                                    {s.seePricing}
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        {
                            image?.src && <img src={image.src} alt={image.alt} className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-xl" />
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GrowthInsights;
