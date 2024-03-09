import type { NextPage } from 'next'
import Link from 'next/link'

const SVGTickGray = () => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
		<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
	</svg>
)

interface Props {
	locale?: string;
}

const DownloadComponent: NextPage<Props> = ({ locale }) => {
	const s = strings[(locale || '').toLowerCase().includes('fr') ? 'fr' : 'en'];
	return (
		<section className="py-16 bg-gradient-to-bl from-blue-800 to-gray-800 text-gray-100">
			<div className="container max-w-7xl px-4 mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{s.downloadLinks.map((link, index) => (
						<div className="flex flex-col space-y-4 w-full mb-8 sm:px-4 md:w-full lg:mb-0" key={index}>
							<div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-gray-900">
								<div className="space-y-2">
									<h4 className="text-2xl font-bold">{link.title}</h4>
								</div>
								<ul className="flex-1 mb-6 text-gray-400">
									{link.features.map((feature, index) => (
										<li className="flex items-center space-x-2" key={index}>
											<SVGTickGray />
											<span>{feature}</span>
										</li>
									))}
								</ul>
								<div>
									<Link href={link.url}>
										<a className="button-primary">{link?.actionButton || s.downloadButton}</a>
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

const strings = {
	'en': {
		'downloadText': 'Choose your platform and start boosting your business today!',
		'downloadButton': 'Download Now',
		'download': 'Download',
		'downloadLinks': [
			{
				'title': 'Windows',
				'url': '/download/windows',
				'features': ['Supports Windows 10 and above', 'Easy installation process']
			},
			// {
			// 	'title': 'MacOS',
			// 	'url': '/download/macos',
			// 	'features': ['Compatible with MacOS Catalina and later', 'Sleek and intuitive interface']
			// },
			// {
			// 	'title': 'Linux',
			// 	'url': '/download/linux',
			// 	'features': ['Supports various Linux distributions', 'Lightweight and efficient']
			// },
			{
				'title': 'Web',
				'url': 'https://gesmaxapp.vercel.app/',
				'actionButton': 'Demo',
				'features': ['Accessible from any modern web browser', 'No installation required']
			}
		]
	},
	'fr': {
		'downloadText': 'Choisissez votre plateforme et commencez à dynamiser votre entreprise dès aujourd\'hui !',
		'downloadButton': 'Télécharger maintenant',
		'download': 'Télécharger',
		'downloadLinks': [
			{
				'title': 'Windows',
				'url': '/download/Gesmax.exe',
				'features': ['Prise en charge de Windows 10 et versions ultérieures', 'Processus d\'installation simple']
			},
			// {
			// 	'title': 'MacOS',
			// 	'url': '/download/macos',
			// 	'features': ['Compatible avec MacOS Catalina et versions ultérieures', 'Interface élégante et intuitive']
			// },
			// {
			// 	'title': 'Linux',
			// 	'url': '/download/linux',
			// 	'features': ['Prise en charge de diverses distributions Linux', 'Léger et efficace']
			// },
			{
				'title': 'Web',
				'url': 'https://gesmaxapp.vercel.app/',
				'actionButton': 'Démo',
				'features': ['Accessible depuis n\'importe quel navigateur Web moderne', 'Aucune installation requise']
			}
		]
	},
};


export default DownloadComponent