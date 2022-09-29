import type { GetStaticProps, NextPage } from 'next'
import HomeHeader from '../components/HomeHeader'
import Layout from '../components/Layout'
import Features from '../components/Features'
import { useRouter } from 'next/router'
import Customers from '../components/Customers'

interface Props {
  data: {
  }
}
const Home: NextPage<Props> = ({ data }) => {
  const { locale } = useRouter()
  const title = "Gesmax by Bogital"
  const desc = "Gesmax by Bogital Point of sale (POS) and business management software"

  return (
    <Layout locale={locale as string} title={title} desc={desc}>
      <HomeHeader locale={locale as string} active="home" />
      <Features locale={locale as string} />
      {/* <Customers locale={locale as string} /> */}
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
