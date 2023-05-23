import type { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import Header from '../components/Header'
import Layout from '../components/Layout'

interface Props {
  data: any[]
}

const Contact: NextPage<Props> = ({ data }) => {
  const { locale, query } = useRouter()
  const lang = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale]) ? 'fr' : 'en'
  const s = strings[lang]

  return (
    <Layout locale={locale as string} title={s.title} desc={s.desc}>
      <Header locale={locale as string} title="Contact" subtitle={s.subtitle} active='contact' hideHero />
      <section className="min-h-screen bg-gradient-to-r from-primary via-blue-800 to-blue-900 ">
        {/* <section className="min-h-screen bg-gradient-to-r from-primary via-blue-800 to-blue-900 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900"> */}
        <div className="container flex flex-col min-h-screen max-w-7xl px-6 py-12 mx-auto">
          <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
            <div className="text-white lg:w-1/2 lg:mx-6">
              <h1 className="text-3xl font-semibold capitalize lg:text-5xl">{s.contact}</h1>

              <div className="mt-6 space-y-8 md:mt-8">
                <p className="flex items-start -mx-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>

                  <span className="mx-2 text-white truncate w-72">
                    Total melen, Yaounde
                  </span>
                </p>

                <p className="flex items-start -mx-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>

                  <span className="mx-2 text-white truncate w-72">(237) 693-369-322</span>
                </p>

                <p className="flex items-start -mx-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>

                  <span className="mx-2 text-white truncate w-72">gesmax@bogital.com</span>
                </p>
              </div>
            </div>


            <div className="mt-8 lg:w-1/2 lg:mx-6">
              {
                query?.thanks && (
                  <div>
                    <p className='text-white text-center'>{s.thanks}</p>
                  </div>
                )
              }

              <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
                <h1 className="text-2xl font-medium text-gray-700 dark:text-gray-200">{s.form}</h1>

                <form className="mt-6" action="https://gesmax.vercel.app/api/form" method="POST">
                  <div className="flex-1">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">{s.name}</label>
                    <input name="name" type="text" placeholder="John Doe" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                  </div>

                  <div className="flex-1 mt-4">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">{s.phone}</label>
                    <input name="phone" type="phone" placeholder="+1 (840) 541-2563" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                  </div>

                  <div className="flex-1 mt-4">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">{s.email}</label>
                    <input name="email" type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                  </div>

                  <div className="w-full mt-6">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">{s.message}</label>
                    <textarea name="message" className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" placeholder="Message"></textarea>
                  </div>

                  <input type="hidden" name="_next" value="https://gesmax.vercel.app/contact?thanks"></input>
                  <input type="hidden" name="_subject" value="New submission! GESMAX"></input>

                  <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                    {s.getInTouch}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  )
}

const strings = {
  'en': {
    'title': 'Contact, Gesmax By Bogital',
    'desc': 'Contact, Gesmax By Bogital',
    'subtitle': '',
    'contact': 'Contact us',
    'form': 'Contact form',
    'name': 'Full name',
    'phone': 'Phone number',
    'email': 'Email address',
    'message': 'Message',
    'getInTouch': 'get in touch',
    "thanks": 'Thanks for subscribing to our waiting list! '
  },
  'fr': {
    'title': 'Contactez-nous, Gesmax By Bogital',
    'desc': 'Contactez-nous, Gesmax By Bogital',
    'subtitle': '',
    'contact': 'Contactez-nous',
    'form': 'Formulaire de contact',
    'name': 'Nom complet',
    'phone': 'Numéro de téléphone',
    'email': 'Adresse courriel',
    'message': 'Message',
    'getInTouch': 'contactez-nous',
    "thanks": 'Thanks for subscribing to our waiting list! '
  },
}


export const getStaticProps: GetStaticProps = async (context) => {
  const data: any[] = []
  return {
    props: { data }
  };
}


export default Contact
