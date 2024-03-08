import type { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import Header from '../components/Header'
import Layout from '../components/Layout'
import DownloadComponent from '../components/ui/download/download-component'

interface Props {
	data: any[]
}

const Download: NextPage<Props> = ({ data }) => {
	const { locale } = useRouter()
	const isFr = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale])
	const strings = useStrings(isFr);

	return (
		<Layout locale={locale as string} title={strings.title} desc={strings.desc}>
			<Header locale={locale as string} title={strings.headerTitle} subtitle={strings.headerSubtitle} active='download' image={{ src: "/images/download.png", alt: "" }} />
			<DownloadComponent locale={locale} />
		</Layout>
	)
}

const useStrings = (isFr: boolean) => {
	return useMemo(() => {
		const strings = {
			'en': {
				'title': 'Download Gesmax By Bogital',
				'desc': 'Download Gesmax By Bogital',
				'headerTitle': 'Download',
				'demo': 'Demo',
				'headerSubtitle': 'Your gateway to powerful business management'
			},
			'fr': {
				'title': 'Télécharger Gesmax By Bogital',
				'desc': 'Télécharger Gesmax By Bogital',
				'headerTitle': 'Télécharger',
				'demo': 'Demo',
				'headerSubtitle': 'Votre passerelle vers une gestion d\'entreprise efficace'
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

export default Download
