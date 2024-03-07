

interface Props {
	title: string
	subtitle: string
	dark?: boolean
}


export const TitleSubTitle = ({ title, subtitle, dark = true }: Props) => {
	return (
		<div className="max-w-3xl mx-auto text-center">
			<h2 className="text-3xl font-extrabold sm:text-4xl">{title}</h2>
			<h3 className="mt-4 text-lg text-gray-200">{subtitle}</h3>
		</div>
	)
}
