import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import Header from '../components/Header'
import Layout from '../components/Layout'
import PricingComponent from '../components/ui/pricing'

interface Props {
  data: any[]
}

const Pricing: NextPage<Props> = ({ data }) => {
  const { locale } = useRouter()
  const isFr = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale])
  const strings = useStrings(isFr);

  return (
    <Layout locale={locale as string} title={strings.title} desc={strings.desc}>
      <Header locale={locale as string} title={strings.headerTitle} subtitle={strings.headerSubtitle} active='pricing' image={{ src: "/images/prices.png", alt: "" }} />
      <PricingComponent />
    </Layout>
  )
}

const useStrings = (isFr: boolean) => {
  return useMemo(() => {
    const strings = {
      'en': {
        'title': 'Pricing, Gesmax By Bogital',
        'desc': 'Pricing, Gesmax By Bogital',
        'headerTitle': 'Pricing',
        'headerSubtitle': 'Find the right plan with pricing that scales with your team'
      },
      'fr': {
        'title': 'Coûts, Gesmax By Bogital',
        'desc': 'Coûts, Gesmax By Bogital',
        'headerTitle': 'Coûts',
        'headerSubtitle': 'Trouvez le tarif adapté à l\'échelle de votre équipe.'
      }
    };

    return isFr ? strings['fr'] : strings['en'];
  }, [isFr]);
}

export const getStaticProps: GetStaticProps = async (context) => {
  const data: any[] = []
  return {
    props: { data }
  };
}

export default Pricing
