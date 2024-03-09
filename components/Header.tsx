import { Navigation } from "./navigation"


interface Props {
    active: string
    locale: string
    title: string
    subtitle?: string
    hideHero?: boolean
    image?: {
        src?: string
        alt: string
    }
}

const Header: React.FC<Props> = ({ active, locale, title, subtitle, hideHero, image }) => {
    return (
        <header className="flex max-w-7xl mx-auto flex-col justify-between bg-cover">

            <Navigation locale={locale} active={active} />

            {
                !hideHero &&
                <section className="bg-white text-gray-900">
                    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-6 lg:py-12 lg:flex-row lg:justify-between">
                        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                            <h1 className="text-5xl font-bold leading-none sm:text-5xl">
                                {title}
                            </h1>
                            <p className="mt-6 mb-8 text-lg sm:mb-12">
                                {subtitle || ''}
                            </p>
                        </div>
                        {
                            image?.src &&
                            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                                <img src={image.src} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                            </div>
                        }
                    </div>
                </section>
            }

        </header>
    )
}

export default Header