import Image from "next/image"

interface Props {
    locale: string;
}

const strings = {
    'en': {
        'title': 'They use Gesmax — our fav',
        'desc': 'A non-exhaustive list of Gesmax Customers'
    },
    'fr': {
        'title': 'Ils utilisent Gesmax — nos préférés',
        'desc': 'Une liste non exhaustive des clients de Gesmax'
    }
};

const Customers: React.FC<Props> = ({ locale }) => {
    const s = strings[locale.toLowerCase().includes("fr") ? "fr" : "en"];

    return (
        <div className="text-gray-900">
            <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <h3 className="text-xl font-extrabold sm:text-2xl">{s.title}</h3>
                <p className="mt-4 text-lg text-gray-600">{s.desc}</p>
                <dl className="mt-4 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
                    {
                        customers.map((_customer, i) => (
                            <div className="flex flex-col" key={_customer.title}>
                                <Image src={_customer.image || "https://source.unsplash.com/random/420x210?" + i} width={420} height={210} className="object-cover" />
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
        image: "/images/bao.jpg",
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

export default Customers;
