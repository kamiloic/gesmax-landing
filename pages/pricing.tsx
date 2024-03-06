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
  const title = isFr ? "Coûts, Gesmax By Bogital" : "Pricing, Gesmax By Bogital"
  const desc = isFr ? "Coûts, Gesmax By Bogital" : "Pricing, Gesmax By Bogital"
  const subtitle = ""
  return (
    <Layout locale={locale as string} title={title} desc={desc}>
      <Header locale={locale as string} title="Pricing" subtitle={subtitle} active='pricing' image={{ src: "/images/prices.png", alt: "" }} />
      <PricingComponent  />
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
