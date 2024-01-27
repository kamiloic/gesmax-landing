import Link from "next/link"
import { useMemo, useState } from "react"


interface Props {
	active: string
	locale: string
}


/** Navigation component */
export const Navigation: React.FC<Props> = ({ active, locale }) => {

	const isFrench = useMemo(() => locale.toLowerCase().includes('fr'), [locale])
	const [isActive, setIsAvtice] = useState(false)

	const activeLink = (routeName: string) => {
		// TODO: Use classnames from npm
		if (!active) return 'flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-primary transition-colors cursor-pointer'
		const isActive = active.toLowerCase().includes(routeName.toLowerCase())
		if (isActive) return 'flex cursor-pointer items-center px-4 -mb-1 border-b-2 link-active'
		return 'flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-primary transition-colors cursor-pointer'
	}

	const toggleMenu = () => {
		setIsAvtice(v => !v)
	}


	return (
		<nav className="py-4 text-gray-800">
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="flex justify-between h-16 ">
					<Link href="/" aria-label="Back to Gesmax by Bogital homepage" className="flex items-center p-2">
						<div className="flex items-center cursor-pointer z-50">
							<div className="h-16 w-auto relative">
								<img src="/images/logo-lg.png" alt="Gesmax by bogital Logo" className="object-contain h-16 sm:h-16 lg:h-16 xl:h-16 2xl:h-16" />
							</div>
						</div>
					</Link>
					<ul className={"items-stretch hidden space-x-3 md:flex"}>
						<li className={activeLink('pricing')}>
							<Link href='/pricing' className="flex items-center -mb-1">
								<span className="">
									{isFrench ? 'Coûts' : 'Pricing'}
								</span>
							</Link>
						</li>
						<li className={activeLink('contact')}>
							<Link href='/contact' className="flex items-center -mb-1">
								<span className="">
									{isFrench ? 'Contact' : 'Contact'}
								</span>
							</Link>
						</li>

					</ul>
					<button onClick={toggleMenu} className="flex justify-end p-4 md:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
				</div>
				{
					isActive && (
						<div className="flex flex-col text-center mx-auto">
							<ul className={"space-y-4 md:flex"}>
								<li className={activeLink('pricing')}>
									<Link href='/pricing' className="flex">
										<span className="flex">
											{isFrench ? 'Coûts' : 'Pricing'}
										</span>
									</Link>
								</li>
								<li className={activeLink('contact')}>
									<Link href='/contact' className="flex">
										<span className="flex">
											{isFrench ? 'Contact' : 'Contact'}
										</span>
									</Link>
								</li>
							</ul>
						</div>
					)
				}
			</div>
		</nav>
	)
}