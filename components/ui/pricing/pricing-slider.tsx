import { useState } from "react";
import CurrencyFormat from "../currency-format";
import clsx from "clsx";
import Link from "next/link";


interface PricingSliderProps {
	selectedPlan: 'monthly' | 'yearly' | 'threeYears';
	labels: {
		users: string
		vat: string
		contact: string
	};
	onValue?: (v: number) => void
}

export const PricingSlider: React.FC<PricingSliderProps> = ({ selectedPlan, labels, onValue }) => {
	const [users, setUsers] = useState(3);

	const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newUserCount = parseInt(event.target.value);
		onValue && onValue(newUserCount)
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
			<div className="flex w-full justify-between h-12 items-center mb-4">
				<div className="text-3xl font-bold">
					{users > 50 ? '50+' : users} {labels.users}
				</div>
				<div className="text-lg font-semibold">
					{users <= 50 ?
						<>
							<p className='text-base text-gray-400'>{labels.vat}</p>
							<CurrencyFormat amount={price} />
						</> :
						<Link href={'/contact'}>
							<span className="text-gray-400 hover:text-white underline underline-offset-8 cursor-pointer">{labels.contact}</span>
						</Link>
					}
				</div>
			</div>
			<div className="relative w-full">
				<input
					type="range"
					min="3"
					max="51"
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
