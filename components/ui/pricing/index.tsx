

import clsx from 'clsx';
import React, { useMemo, useState } from 'react';
import CurrencyFormat from '../currency-format';
import Link from 'next/link';
import { Tick } from '../icons/tick';

interface PricingProps {
	strings: {
		title: string;
		description: string;
		usersLabel: string;
		free30: string;
		free6Months: string;
		buttonText: string;
		items: string[];
		planLabels: {
			monthly: string;
			yearly: string;
			threeYears: string;
		}
		labels?: {
			users: string;
			vat: string;
		}
	};
}

interface ListItemProps {
	label: string;
	pro?: boolean
}

const QuestionMark = () => (
	<svg width="21" height="22" viewBox="0 0 21 22" fill="none" className="text-gray-400">
		<path fillRule="evenodd" clipRule="evenodd" d="M10.5 21.5C16.299 21.5 21 16.799 21 11S16.299.5 10.5.5 0 5.201 0 11s4.701 10.5 10.5 10.5zm.896-8.085H9.502v-.148c.012-2.045.591-2.676 1.597-3.301.688-.432 1.216-.977 1.216-1.773 0-.892-.699-1.471-1.568-1.471-.801 0-1.574.511-1.625 1.58H7.1c.057-2.16 1.67-3.262 3.66-3.262 2.17 0 3.664 1.204 3.664 3.125 0 1.3-.653 2.153-1.699 2.778-.926.568-1.318 1.12-1.33 2.324v.148zm.352 2.295a1.265 1.265 0 01-1.25 1.25 1.243 1.243 0 01-1.25-1.25 1.24 1.24 0 011.25-1.238c.67 0 1.244.556 1.25 1.238z" fill="currentColor"></path>
	</svg>
)

const ListItem: React.FC<ListItemProps> = ({ label, pro = false }) => {
	return (
		<li className="flex mt-4">
			<div className="flex-shrink-0">
				<Tick color={pro ? "" : "text-primary"} />
			</div>
			<p className={
				clsx(
					"flex-1 ml-3 text-base leading-6",
					pro ? "text-white" : "text-gray-800"
				)
			}>{label}</p>
			<span className="ml-2"></span>
			<button className="focus:outline-none focus:ring-2">
				<QuestionMark />
			</button>
		</li>
	);
};


interface PricingSliderProps {
	selectedPlan: 'monthly' | 'yearly' | 'threeYears';
	labels: {
		users: string
		vat: string
	}
}

const PricingSlider: React.FC<PricingSliderProps> = ({ selectedPlan, labels }) => {
	const [users, setUsers] = useState(3);

	const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newUserCount = parseInt(event.target.value);
		setUsers(newUserCount);
	};

	const price = (() => {
		if (selectedPlan === 'monthly')
			return 25 + (users - 3) * 10;
		if (selectedPlan === 'yearly')
			return (25 + (users - 3) * 10) * 11;
		if (selectedPlan === 'threeYears')
			return (25 + (users - 3) * 10) * 30;
		return 0;
	})();

	return (
		<div className="flex flex-col items-center justify-center py-8">
			<div className="flex w-full justify-between items-center mb-4">
				<div className="text-3xl font-bold">
					{users} {labels.users}
				</div>
				<div className="text-lg font-semibold">
					<p className='text-base text-gray-400'>{labels.vat}</p>
					<CurrencyFormat amount={price} />
				</div>
			</div>
			<div className="relative w-full">
				<input
					type="range"
					min="3"
					max="50"
					value={users}
					onChange={handleSliderChange}
					className={clsx(
						"absolute top-0 left-0 w-full rounded h-4 bg-gray-200 appearance-none cursor-pointer",
						" cursor-ew-resize slider"
					)}
				/>
				<div className="absolute top-0 left-0 h-4 bg-blue-500" style={{ width: `${((users - 3) / (50 - 3)) * 95}%` }}></div>
			</div>
		</div>
	);
};


const PricingComponent: React.FC<PricingProps> = ({ strings }) => {
	const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly' | 'threeYears'>('monthly');

	const handleTabChange = (tab: 'monthly' | 'yearly' | 'threeYears') => {
		setSelectedPlan(tab);
	};

	const isPro = strings.title == "Pro";

	return (
		<div className={clsx(
			"w-full transform py-16",
			isPro && "bg-gradient-to-bl from-blue-800 to-gray-800 text-white"
		)}>
			<div className="md:flex max-w-5xl mx-auto">
				<div className='px-4'>
					<span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%' }}>
						<span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', maxWidth: '100%' }}>
							<img alt="" aria-hidden="true" src="/favicon.png" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px' }} />
						</span>
					</span>
				</div>
				<div className="flex-1 p-6">
					<div className="flex flex-col items-end justify-between md:flex-row md:items-start pt-8 md:pt-0">
						<div className="w-full">
							<h2 className="mt-3 font-serif text-4xl font-bold">{strings.title}<span className="text-blue=-400 inline-block transition-transform transform duration-100 scale-0" style={{ textShadow: 'rgba(254, 188, 53, 0.8) 0px 0px 25px' }}> ∞ </span></h2>
							<p className={clsx(isPro && "text-gray-300")}>{strings.description}</p>
						</div>
						{
							isPro && (
								<div className="flex flex-col w-full mt-3 md:mt-0 md:w-128 md:mx-0">
									<div className="relative flex order-10 border border-blue=-500 rounded-full border-opacity-20">
										<div className="absolute left-0 grid w-full grid-cols-2 h-7">
											<div
												className={clsx("bg-white rounded-full h-full w-[66.67%] left-0 transform transition-transform", {
													'translate-x-0': selectedPlan === 'monthly',
													'translate-x-[100%]': selectedPlan === 'yearly',
													'translate-x-[200%]': selectedPlan === 'threeYears',
												})}
											></div>
										</div>
										<div className="relative grid w-full grid-cols-3">
											<button
												onClick={() => handleTabChange('monthly')}
												className={clsx(
													"text-sm py-1 relative px-4 focus:outline-none rounded-full font-semibold",
													selectedPlan === 'monthly' ? "text-gray-800" : "text-gray-400"
												)}
											>
												{strings.planLabels.monthly}
											</button>
											<button
												onClick={() => handleTabChange('yearly')}
												className={clsx(
													"text-sm py-1 relative px-4 focus:outline-none rounded-full font-semibold",
													selectedPlan === 'yearly' ? "text-gray-800" : "text-gray-400"
												)}
											>
												{strings.planLabels.yearly}
											</button>
											<button
												onClick={() => handleTabChange('threeYears')}
												className={clsx(
													"text-sm py-1 relative px-4 focus:outline-none rounded-full font-semibold",
													selectedPlan === 'threeYears' ? "text-gray-800" : "text-gray-400"
												)}
											>
												{strings.planLabels.threeYears}
											</button>
										</div>
									</div>
									<div className="relative grid w-full grid-cols-3 my-1 md:order-10">
										{
											selectedPlan == "yearly" &&
											<div className="text-center col-start-2 text-sm font-semibold whitespace-nowrap opacity-40">{strings.free30}</div>
										}
										{
											selectedPlan == "threeYears" &&
											<div className="text-center col-start-3 text-sm font-semibold whitespace-nowrap opacity-40">{strings.free6Months}</div>
										}
									</div>
								</div>
							)
						}
					</div>
					{
						// @ts-ignore
						isPro && <PricingSlider labels={strings.labels} selectedPlan={selectedPlan} />
					}
					<div className="grid w-full gap-4 mt-2 text-gray-800 md:grid-cols-2">
						{
							strings.items.map((item, index) => (
								<ListItem pro={strings.title == "Pro"} key={index} label={item} />
							))
						}
					</div>
					<div className="flex justify-end mt-2">
						<Link className="inline-block" tabIndex={-1} href="/contact">
							<button className="mt-8 px-10 py-3 text-center flex justify-center rounded-lg relative font-medium custom-focus  bg-primary hover:bg-blue-800 active:bg-primary text-white">{strings.buttonText}</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PricingComponent;
