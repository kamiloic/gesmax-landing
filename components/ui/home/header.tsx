import Link from "next/link"
import { Navigation } from "../../navigation"

interface Props {
    active: string;
    locale: string;
}

const HomeHeader: React.FC<Props> = ({ active, locale }) => {
    const strings = useStrings(locale);

    return (
        <header className="flex flex-col justify-between container max-w-7xl mx-auto bg-cover">

            {/* Navigation Component */}
            <Navigation active={active} locale={locale} />

            <section className="bg-white text-gray-900">
                <div className="container flex flex-col justify-center sm:py-6 lg:py-12 lg:flex-row lg:justify-items-stretch py-16 max-w-7xl ">
                    <div className="flex flex-1 flex-col justify-center lg:justify-start p-6 text-center rounded-sm lg:text-left lg:max-w-md xl:max-w-lg">
                        <h1 className="text-5xl font-bold leading-none sm:text-5xl" dangerouslySetInnerHTML={{
                            __html: strings.title
                        }} />
                        <p className="mt-6 mb-8 text-lg sm:mb-12">{strings.subtitle}</p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <button onClick={() => window.open("https://gesmaxapp.vercel.app", "_blank")}>
                                <span className="button-primary mt-0 cursor-pointer">
                                    {strings.demo}
                                </span>
                            </button>
                            <Link href='/pricing'>
                                <span className="button-primary mt-0 bg-white hover:bg-transparent hover:text-blue-800 text-primary cursor-pointer">
                                    {strings.seePricing}
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-1 items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src="/images/presentation_image.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>

        </header>
    )
}

const useStrings = (locale: string) => {
    const isFr = locale.toLowerCase().includes('fr');
    return {
        en: {
            title: "A <span style='color:#3b82f6'>Magical</span> way of managing your business",
            subtitle: "For seamless business management anytime, anywhere: Gesmax is accessible on all major platforms – including PC, Android, iOS, and web – ensuring convenience and flexibility for your workflow.",
            demo: "Request a demo",
            seePricing: "See pricing"
        },
        fr: {
            title: "Une façon <span style='color:#3b82f6'>Magique</span> de gérer votre entreprise",
            subtitle: "Pour une gestion commerciale fluide, où que vous soyez : Gesmax est disponible sur toutes les grandes plateformes, notamment sur PC, Android, iOS et le web, garantissant ainsi une commodité et une flexibilité optimales pour votre flux de travail.",
            demo: "Démo",
            seePricing: "Voir les coûts?"
        }
    }[isFr ? 'fr' : 'en'];
}

export default HomeHeader
