import clsx from "clsx";
import React from "react";


export const Tick: React.FC<{ color?: string }> = ({ color }) => (
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
		className={clsx(
			"flex-shrink-0 w-6 h-6",
			color ? color : " text-white"
		)}>
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
	</svg>
);