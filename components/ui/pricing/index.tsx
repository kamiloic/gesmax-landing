import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMemo, useState } from 'react'
import CurrencyFormat from '../currency-format'

interface Props {
}

const SVGTickGray = () => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
		<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
	</svg>
)

const PricingComponent: NextPage<Props> = ({ }) => {
	const [userCount, setUserCount] = useState<number>(3);
	const { locale } = useRouter()
	const isFr = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale])
	const requestDemoText = isFr ? 'Demander une démo' : 'Request a demo'

	const RequestDemo = () => (
		<Link href='contact'>
			<span className="inline-block w-full px-5 py-3 font-semibold tracking-wider cursor-pointer text-center rounded bg-primary text-gray-900">
				{requestDemoText}
			</span>
		</Link>
	)

	// Handler function to update userCount state
	const handleUserCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newCount = parseInt(e.target.value);
		// Perform input validation to ensure userCount is always greater than or equal to 3
		if (newCount >= 3) {
			setUserCount(newCount);
		}
	};

	const monthlyFee = useMemo(() => {
		if (userCount <= 3)
			return 25;
		return 25 + (10 * (userCount - 3))
	}, [userCount])

	return (
		<section className="py-20 bg-gradient-to-r from-primary via-blue-800 to-blue-900 text-gray-100">
			<div className="container max-w-7xl px-4 mx-auto">
				<div className="max-w-2xl mx-auto mb-16 text-center">
					<span className="font-bold tracking-wider uppercase text-primary">Pricing</span>
					<p className='text-2xl'>
						<input
							className='bg-transparent w-16 text-center'
							type="number"
							value={userCount} // Bind input value to userCount state
							onChange={handleUserCountChange} // Handle input change
							min={3}
							max={200}
						/>
						<h2 className="font-bold lg:text-5xl inline-block">users?</h2>
					</p>
				</div>


				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
					{/* Pricing section 1 */}
					<div className="flex w-full mb-8 sm:px-4 md:w-full lg:mb-0">
						<div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-gray-900">
							<div className="space-y-2">
								<h4 className="text-2xl font-bold">Free</h4>
								<span className="text-4xl font-bold">
									<CurrencyFormat amount={0} />
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
									<span>Limited support</span>
								</li>
							</ul>
							<RequestDemo />
						</div>
					</div>

					{/* Pricing section 2 */}
					<div className="flex w-full mb-8 sm:px-4 md:w-full lg:mb-0">
						<div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-gray-900">
							<div className="space-y-2">
								<h4 className="text-2xl font-bold">1 Month</h4>
								<span className="text-4xl font-bold">
									<CurrencyFormat amount={monthlyFee} />
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
							<RequestDemo />
						</div>
					</div>

					{/* Pricing section 3 */}
					<div className="flex w-full mb-8 sm:px-4 md:w-full lg:mb-0">
						<div className="p-6 space-y-6 rounded shadow sm:p-8 bg-gray-900">
							<div className="space-y-2">
								<h4 className="text-2xl font-bold">1 Year</h4>
								<span className="text-4xl font-bold">
									<CurrencyFormat amount={11 * monthlyFee} />
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
							<RequestDemo />
						</div>
					</div>

					{/* Pricing section 4 */}
					<div className="flex w-full mb-8 sm:px-4 md:w-full lg:mb-0">
						<div className="p-6 space-y-6 rounded shadow sm:p-8 bg-gray-900">
							<div className="space-y-2">
								<h4 className="text-2xl font-bold">3 Years</h4>
								<span className="text-4xl font-bold">
									<CurrencyFormat amount={30 * monthlyFee} />
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
							<RequestDemo />
						</div>
					</div>
				</div>

			</div>
		</section>
	)
}


export const getStaticProps: GetStaticProps = async (context) => {
	const data: any[] = []
	return {
		props: { data }
	};
}


export default PricingComponent
