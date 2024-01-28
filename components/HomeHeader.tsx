import Link from "next/link"
import { useMemo, useState } from "react"
import { Navigation } from "./navigation"


interface Props {
    active: string
    locale: string
}

const HomeHeader: React.FC<Props> = ({ active, locale }) => {
    const isFrench = useMemo(() => locale.toLowerCase().includes('fr'), [locale])
    return (
        <header className="flex flex-col justify-between container max-w-7xl mx-auto bg-cover">

            {/* Navigation Component */}
            <Navigation active={active} locale={locale} />

            <section className="bg-white text-gray-900">
                <div className="container flex flex-col justify-center sm:py-6 lg:py-12 lg:flex-row lg:justify-items-stretch py-16 max-w-7xl ">
                    <div className="flex flex-1 flex-col justify-center lg:justify-start p-6 text-center rounded-sm lg:text-left lg:max-w-md xl:max-w-lg">
                        <h1 className="text-5xl font-bold leading-none sm:text-5xl">A
                            <span className="text-primary"> Magical</span> new way of managing your business
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12"><i>Gesmax by Bogital</i> is available on all plateforms:
                            <br className="hidden md:inline lg:hidden" /> PC, Android, iOs and web
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <button onClick={(e) => {
                                window.open("https://gesmaxapp.vercel.app", "_blank")
                            }}>
                                <span className="px-8 py-3 text-lg font-semibold rounded bg-primary text-white cursor-pointer">
                                    {isFrench ? 'Démo' : 'Request a demo'}
                                </span>
                            </button>
                            <Link href='/pricing'>
                                <span className="px-8 py-3 text-lg font-semibold text-primary cursor-pointer">
                                    {isFrench ? 'Coûts' : 'See pricing'}
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

export default HomeHeader