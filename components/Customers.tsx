import Image from "next/image"
import { useRouter } from "next/router"
import { useCallback, useMemo } from "react"

interface Props {
    locale: string
}

const Tick = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-primary">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
)

const Customers: React.FC<Props> = ({ locale }) => {
    const isFr = useMemo(() => locale.toLowerCase().includes('fr'), [locale])
    const title = isFr ? "Clients" : "Customers"

    return (
        <div className="text-gray-900">
            <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
                {/* <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold sm:text-4xl">{title}</h2>
                    <p className="mt-4 text-lg text-gray-600">A non-exhaustive list of Gesmax Customers</p>
                </div> */}
                <h3 className="text-xl font-extrabold sm:text-2xl">They use Gesmax - our fav</h3>
                <dl className="mt-4 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
                    {
                        customers.map((_customer, i) => (
                            <div className="flex flex-col" key={_customer.title}>
                                <Image src={"https://source.unsplash.com/random/420x21" + i} width={420} height={210} className="object-cover" />
                                <div className="mt-2 mb-8">
                                    <dt className="text-lg font-medium">{_customer.title}</dt>
                                    <dd className="mt-2 text-gray-600">{_customer.desc}</dd>
                                </div>
                            </div>
                        ))
                    }
                </dl>

                <h3 className="text-xl font-extrabold sm:text-2xl">They biggest</h3>
                <dl className="mt-4 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
                    {
                        customers.map((_customer, i) => (
                            <div className="flex flex-col" key={_customer.title}>
                                <Image src={"https://source.unsplash.com/random/420x22" + i} width={420} height={210} className="object-cover" />
                                <div className="mt-2 mb-8">
                                    <dt className="text-lg font-medium">{_customer.title}</dt>
                                    <dd className="mt-2 text-gray-600">{_customer.desc}</dd>
                                </div>
                            </div>
                        ))
                    }
                </dl>

                <h3 className="text-xl font-extrabold sm:text-2xl">Meduim</h3>
                <dl className="mt-4 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
                    {
                        customers.map((_customer, i) => (
                            <div className="flex flex-col" key={_customer.title}>
                                <Image src={"https://source.unsplash.com/random/420x23" + i} width={420} height={210} className="object-cover" />
                                <div className="mt-2 mb-8">
                                    <dt className="text-lg font-medium">{_customer.title}</dt>
                                    <dd className="mt-2 text-gray-600">{_customer.desc}</dd>
                                </div>
                            </div>
                        ))
                    }
                </dl>

                <h3 className="text-xl font-extrabold sm:text-2xl">Bronze</h3>
                <dl className="mt-4 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
                    {
                        customers.map((_customer, i) => (
                            <div className="flex flex-col" key={_customer.title}>
                                <Image src={"https://source.unsplash.com/random/420x24" + i} width={420} height={210} className="object-cover" />
                                <div className="mt-2 mb-8">
                                    <dt className="text-lg font-medium">{_customer.title}</dt>
                                    <dd className="mt-2 text-gray-600">{_customer.desc}</dd>
                                </div>
                            </div>
                        ))
                    }
                </dl>


            </div>
        </div>
    )
}

const customers = [
    {
        title: "Librarie J²",
        desc: "Librarie"
    },
    {
        title: "Le Bao",
        desc: "Restaurant"
    },
    {
        title: "Nails & Body",
        desc: "Parfumerie"
    },
    {
        title: "Brocante Obili Palace",
        desc: "Bazar"
    },
]
export default Customers