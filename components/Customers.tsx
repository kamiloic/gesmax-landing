import Image from "next/image"

interface Props {
    locale: string
}

const Customers: React.FC<Props> = ({ locale }) => {
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
                                <Image src={_customer.image || "https://source.unsplash.com/random/420x21" + i} width={420} height={210} className="object-cover" />
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
        image: "/images/lib.jpeg",
        desc: "Librarie"
    },
    {
        title: "Le Bao",
        image: "",
        desc: "Restaurant"
    },
    {
        title: "Nails & Body",
        image: "/images/nailsnbody.jpg",
        desc: "Parfumerie"
    },
    {
        title: "Brocante Obili Palace",
        image: "/images/bro.jpg",
        desc: "Bazar"
    },
]
export default Customers