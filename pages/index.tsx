import type { GetStaticProps, NextPage } from 'next'
import HomeHeader from '../components/ui/home/header'
import Layout from '../components/Layout'
import Features from '../components/ui/home/features'
import { useRouter } from 'next/router'
import Customers from '../components/ui/home/customers'
import Testimonials from '../components/ui/home/testimonials'
import GrowthInsights from '../components/ui/home/growth_insights'

interface Props {
  data: {
  }
}
const Home: NextPage<Props> = ({ data }) => {
  const { locale } = useRouter()
  const title = "Gesmax by Bogital - A Magical new way of managing your business"
  const desc = "Gesmax by Bogital Point of sale (POS) and business management software"

  return (
    <Layout locale={locale as string} title={title} desc={desc}>
      <HomeHeader locale={locale as string} active="home" />
      <Customers locale={locale as string} />
      <Features featureSet={1} locale={locale as string} />
      <Testimonials locale={locale as string} />
      <Features featureSet={2} locale={locale as string} />
      <GrowthInsights locale={locale as string} />
      <Features featureSet={3} locale={locale as string} />
      {/* <Meeting30Minites locale={locale as string} /> */}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {

  const data = {}

  return {
    props: { data },
    // revalidate: 1
  };
}

export default Home
