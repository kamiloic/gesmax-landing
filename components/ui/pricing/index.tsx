

import clsx from 'clsx';
import React, { useState } from 'react';
import Link from 'next/link';
import { Tick } from '../icons/tick';
import { QuestionMark } from '../icons/question-mark';
import { PricingSlider } from './pricing-slider';

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
			contact: string
		}
	};
}

interface ListItemProps {
	label: string;
	pro?: boolean
}

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


const PricingComponent: React.FC<PricingProps> = ({ strings }) => {
	const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly' | 'threeYears'>('monthly');
	const [hideButton, setHideButton] = useState(false)

	const onUserValue = (value: number) => {
		if (value > 50) {
			setHideButton(true)
			return;
		}
		setHideButton(false)
	}

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
						isPro && <PricingSlider onValue={onUserValue} labels={strings.labels} selectedPlan={selectedPlan} />
					}
					<div className="grid w-full gap-4 mt-2 text-gray-800 md:grid-cols-2">
						{
							strings.items.map((item, index) => (
								<ListItem pro={strings.title == "Pro"} key={index} label={item} />
							))
						}
					</div>

					{
						hideButton ?
							<div className="flex justify-end mt-2">
								<a className="inline-block" tabIndex={-1} href="mailto:gesmax@bogital.com">
									<button className="button-primary bg-gray-400">{"gesmax@bogital.com"}</button>
								</a>
							</div> :
							<div className="flex justify-end mt-2">
								<Link className="inline-block" tabIndex={-1} href="/contact">
									<button className="button-primary">{strings.buttonText}</button>
								</Link>
							</div>
					}

				</div>
			</div>
		</div>
	);
};

export default PricingComponent;
