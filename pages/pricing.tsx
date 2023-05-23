import type { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import Header from '../components/Header'
import Layout from '../components/Layout'

interface Props {
  data: any[]
}

const SVGTickPrimary = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-primary">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
  </svg>
)

const SVGTickGray = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
  </svg>
)

const Pricing: NextPage<Props> = ({ data }) => {
  const { locale } = useRouter()
  const isFr = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale])
  const title = isFr ? "Coûts, Gesmax By Bogital" : "Pricing, Gesmax By Bogital"
  const desc = isFr ? "Coûts, Gesmax By Bogital" : "Pricing, Gesmax By Bogital"
  const subtitle = "Promotion: Free training till the 15th of October 2022"

  return (
    <Layout locale={locale as string} title={title} desc={desc}>
      <Header locale={locale as string} title="Pricing" subtitle={subtitle} active='pricing' image={{ src: "/images/prices.png", alt: "" }} />
      <section className="py-20  bg-gradient-to-r from-primary via-blue-800 to-blue-900 text-gray-100">
        <div className="container max-w-7xl px-4 mx-auto">
          {/* <div className="max-w-2xl mx-auto mb-16 text-center">
            <span className="font-bold tracking-wider uppercase text-primary">Pricing</span>
            <h2 className="text-4xl font-bold lg:text-5xl">Choose your best plan</h2>
          </div> */}

          <div className="flex flex-wrap items-stretch -mx-4">

            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
              <div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-gray-900">
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold">Monthly</h4>
                  <span className="text-4xl font-bold">0 FCFA
                    <span className="text-sm tracking-wide">/month</span>
                  </span>
                  {/* <span className="text-6xl font-bold">Free</span> */}
                </div>
                {/* <p className="mt-3 leading-relaxed text-gray-400">Etiam ac convallis enim, eget euismod dolor.</p> */}
                <ul className="flex-1 mb-6 text-gray-400">
                  <li className="flex items-center space-x-2">
                    <SVGTickGray />
                    <span>30 Orders per month</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <SVGTickGray />
                    <span>24/24 7/7 support</span>
                  </li>
                </ul>
                <a rel="noopener noreferrer" href="mailto:gesmax@bogital.com" className="inline-block w-full px-5 py-3 font-semibold tracking-wider text-center rounded bg-primary text-gray-900">Get Started</a>
              </div>
            </div>


            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
              <div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-gray-900">
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold">Monthly</h4>
                  <span className="text-4xl font-bold">15 000 FCFA
                    <span className="text-sm tracking-wide">/month</span>
                  </span>
                  {/* <span className="text-6xl font-bold">Free</span> */}
                </div>
                {/* <p className="mt-3 leading-relaxed text-gray-400">Etiam ac convallis enim, eget euismod dolor.</p> */}
                <ul className="flex-1 mb-6 text-gray-400">
                  <li className="flex items-center space-x-2">
                    <SVGTickGray />
                    <span>All features available</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <SVGTickGray />
                    <span>24/24 7/7 support</span>
                  </li>
                </ul>
                <a rel="noopener noreferrer" href="mailto:gesmax@bogital.com" className="inline-block w-full px-5 py-3 font-semibold tracking-wider text-center rounded bg-primary text-gray-900">Get Started</a>
              </div>
            </div>

            <div className="w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
              <div className="p-6 space-y-6 rounded shadow sm:p-8 bg-gray-900">
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold">Annual</h4>
                  <span className="text-4xl font-bold">150 000 FCFA
                    <span className="text-sm tracking-wide">/12 months</span>
                  </span>
                </div>
                {/* <p className="leading-relaxed text-gray-400">Phasellus ultrices bibendum nibh in vehicula.</p> */}
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center space-x-2">
                    <SVGTickGray />
                    <span>All features available</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <SVGTickGray />
                    <span>24/24 7/7 support</span>
                  </li>
                </ul>
                <a rel="noopener noreferrer" href="mailto:gesmax@bogital.com" className="inline-block w-full px-5 py-3 font-semibold tracking-wider text-center rounded bg-primary text-gray-900">Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}


export const getStaticProps: GetStaticProps = async (context) => {
  const data: any[] = []
  return {
    props: { data }
  };
}


export default Pricing
