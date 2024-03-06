import Image from "next/image"
import Link from "next/link"
import logoImage from '../assets/images/logo-lg.png'
import { useMemo } from "react";

interface Route {
    name: string;
    path: string;
}

interface Props {
    locale: string;
}

const Footer: React.FC<Props> = ({ locale }) => {
    const isFr = locale.toLowerCase().includes('fr');
    const strings = useStrings(isFr);

    return (
        <footer className="pt-8 text-gray-800">
            <div className="px-4 py-16 sm:px-6 lg:px-8 container max-w-7xl flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
                <div className="flex flex-row flex-wrap pr-3 space-x-4 sm:space-x-8">
                    <Link href="/" aria-label={strings.backToHomepage} className="flex items-center justify-center flex-shrink-0">
                        <div className="mx-auto h-24 w-48 relative cursor-pointer">
                            <Image
                                layout="fill"
                                src={logoImage}
                                className="object-contain"
                                alt={strings.logoAlt}
                            />
                        </div>
                    </Link>

                    <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
                        {strings.routes.map((route: Route) => (
                            <li key={route.name} className="cursor-pointer">
                                <Link href={route.path}>
                                    <span className="px-4">{route.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="flex flex-row items-center justify-between mb-4 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <p className="text-xs text-center pt-4 md:pt-2">{strings.poweredBy} <a href="https://bogital.com" className="text-primary" target="_blank" rel="noreferrer">Bogital</a></p>
                <p className="text-xs text-center px-2 hover:text-primary"><a href="#@2024" target="_blank" rel="noreferrer">@2024 </a>Bogital</p>
            </div>
        </footer>
    )
}

const useStrings = (isFr: boolean) => {
    return useMemo(() => {
        return {
            en: {
                backToHomepage: "Back to Gesmax by Bogital homepage",
                logoAlt: "Logo - Gesmax Logo",
                poweredBy: "Powered with ❤️ by",
                routes: [
                    {
                        name: "Pricing",
                        path: "/pricing"
                    },
                    {
                        name: "Contact",
                        path: "/contact"
                    }
                ]
            },
            fr: {
                backToHomepage: "Retour à la page d'accueil de Gesmax by Bogital",
                logoAlt: "Logo - Logo de Gesmax",
                poweredBy: "Powered with ❤️ by",
                routes: [
                    {
                        name: "Coûts",
                        path: "/pricing"
                    },
                    {
                        name: "Contact",
                        path: "/contact"
                    }
                ]
            }
        }[isFr ? 'fr' : 'en'];
    }, [isFr]);
}

export default Footer
