import Head from 'next/head'
import Script from 'next/script'
import { useMemo } from 'react'
import Footer from "./Footer"


interface Props extends React.PropsWithChildren {
    locale: string
    title: string
    desc: string
}

interface Props {
    locale: string
}

const Layout: React.FC<Props> = ({ children, locale, title, desc }) => {
    const isFr = useMemo(() => locale.toLowerCase().includes('fr'), [locale])
    const lang = isFr ? 'fr_FR' : 'en_US'
    const siteName = isFr ? "Gesmax By Bogital" : "Gesmax By Bogital"

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={desc} />
                <link rel="icon" href="/favicon.png" />
                <meta name="description" content={desc} />
                <meta name="robots" content="max-image-preview:large" />
                {/* <link rel="canonical" href="http://www.fenassco.com/" /> */}
                <meta property="og:locale" content={lang} />
                <meta property="og:site_name" content={siteName} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={desc} />
                {/* <meta property="og:url" content="http://fenassco.com/" /> */}
                <meta property="og:image" content="/favicon.png" />
                <meta property="og:image:secure_url" content="/favicon.png" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={desc} />
                <meta name="twitter:image" content="/favicon.png" />
            </Head>

            <body>
                <main>
                    {children}
                </main>
            </body>

            {/* @ts-ignore */}
            <Footer locale={locale as string} />

            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                        page_path: window.location.pathname,
                        });
                    `,
                }}
            />
        </div>
    )
}

export default Layout