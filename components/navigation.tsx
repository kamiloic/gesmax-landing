import Link from "next/link"
import { useState } from "react"

interface Props {
	active: string;
	locale: string;
}

/** Navigation component */
export const Navigation: React.FC<Props> = ({ active, locale }) => {
	const strings = useStrings(locale);
	const [isActive, setIsActive] = useState(false);

	const activeLink = (routeName: string) => {
		if (!active) return 'flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-primary transition-colors cursor-pointer';
		const isActive = active.toLowerCase().includes(routeName.toLowerCase());
		if (isActive) return 'flex cursor-pointer items-center px-4 -mb-1 border-b-2 link-active';
		return 'flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-primary transition-colors cursor-pointer';
	}

	const toggleMenu = () => {
		setIsActive(!isActive);
	}

	return (
		<nav className="py-4 text-gray-800">
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="flex justify-between h-16 ">
					<Link href="/" aria-label={strings.backToHomepage} className="flex items-center p-2">
						<div className="flex items-center cursor-pointer z-50">
							<div className="h-16 w-auto relative">
								<img src="/images/logo-lg.png" alt={strings.logoAlt} className="object-contain h-16 sm:h-16 lg:h-16 xl:h-16 2xl:h-16" />
							</div>
						</div>
					</Link>
					<ul className="items-stretch hidden space-x-3 md:flex">
						<li className={activeLink('pricing')}>
							<Link href='/pricing' className="flex items-center -mb-1">
								<span className="">{strings.pricing}</span>
							</Link>
						</li>
						<li className={activeLink('contact')}>
							<Link href='/contact' className="flex items-center -mb-1">
								<span className="">{strings.contact}</span>
							</Link>
						</li>
					</ul>
					<button onClick={toggleMenu} className="flex justify-end p-4 md:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
				</div>
				{isActive && (
					<div className="flex flex-col text-center mx-auto">
						<ul className="space-y-4 md:flex">
							<li className={activeLink('pricing')}>
								<Link href='/pricing' className="flex">
									<span className="flex">{strings.pricing}</span>
								</Link>
							</li>
							<li className={activeLink('contact')}>
								<Link href='/contact' className="flex">
									<span className="flex">{strings.contact}</span>
								</Link>
							</li>
						</ul>
					</div>
				)}
			</div>
		</nav>
	)
}

const useStrings = (locale: string) => {
	const isFrench = locale.toLowerCase().includes('fr');
	return {
		en: {
			backToHomepage: "Back to Gesmax by Bogital homepage",
			logoAlt: "Gesmax by Bogital Logo",
			pricing: "Pricing",
			contact: "Contact"
		},
		fr: {
			backToHomepage: "Retour à la page d'accueil de Gesmax by Bogital",
			logoAlt: "Logo de Gesmax by Bogital",
			pricing: "Coûts",
			contact: "Contact"
		}
	}[isFrench ? 'fr' : 'en'];
}

export default Navigation
