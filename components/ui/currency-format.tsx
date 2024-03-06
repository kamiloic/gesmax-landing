import React, { useEffect, useState } from 'react';

interface CurrencyFormatProps {
	amount: number;
}

const CurrencyFormat: React.FC<CurrencyFormatProps> = ({ amount }) => {
	const [currency, setCurrency] = useState<string>('USD'); // Default to USD

	useEffect(() => {
		fetch('https://ipapi.co/json/')
			.then(response => response.json())
			.then(data => {
				const userCountry = data.country_code.toUpperCase(); // Extract country code from API response
				// Check if the user's country is in the FCFA countries list
				const fcfaCountries = ['CM', 'TD', 'CG', 'GA', 'GQ', 'CF']; // Add more FCFA countries as needed
				if (fcfaCountries.includes(userCountry)) {
					setCurrency('XAF'); // Set currency to XAF for FCFA countries
				}
			})
			.catch(error => console.error('Error fetching user country:', error));
	}, []);

	// Convert amount to XAF by multiplying by 600 if the currency is XAF
	const convertedAmount = currency === 'XAF' ? amount * 600 : amount;

	// Format the converted amount to currency using Intl.NumberFormat
	const formattedAmount = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: currency, // Use the determined currency
	}).format(convertedAmount);

	return <span>{formattedAmount}</span>;
}

export default CurrencyFormat;
