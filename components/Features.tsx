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

const Features: React.FC<Props> = ({ locale }) => {
    const router = useRouter()
    const navigate = useCallback((sport: string) => () => router.push(`/results/${sport}`), [])
    const isFr = useMemo(() => locale.toLowerCase().includes('fr'), [locale])
    const title = isFr ? "Fonctionalitées" : "Features"

    return (
        <div className="bg-gradient-to-r from-primary via-blue-800 to-blue-900 text-white">
            <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold sm:text-4xl">{title}</h2>
                    <p className="mt-4 text-lg text-gray-200">A non-exhaustive list of Gesmax Features</p>
                </div>
                <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">

                    {
                        features.map(_feature => (
                            <div className="flex" key={_feature.title}>
                                <Tick />
                                <div className="ml-3">
                                    <dt className="text-lg font-medium">{_feature.title}</dt>
                                    <dd className="mt-2 text-gray-200">{_feature.desc}</dd>
                                </div>
                            </div>
                        ))
                    }

                </dl>
            </div>
        </div>
    )
}

const features = [
    {
        title: "Inventory Management",
        desc: "Gemax will help you manage your inventory and sync your stocks across all your devices.  You will be informed at anytime, anywhere in the world of the status of your stocks"
    },
    {
        title: "Point of Sale system",
        desc: "Gesmax will help you invoice your customers, print receipts and save invoices for bookkeeping"
    },
    {
        title: "Expense Management",
        desc: "Gesmax enable you to efficiently manage the expenses of your business"
    },
    {
        title: "Supply Management",
        desc: "Gesmax works perfectly offline, but requires an internet connection to sync data across all devices"
    },
    {
        title: "Team management and assessment",
        desc: "Gesmax helps you manage your teams and assess their performances"
    },
    {
        title: "Real-time syncs",
        desc: "Gesmax automatically syncs your business information to all authorized devices in real-time"
    },
    {
        title: "Disaster recovery",
        desc: "You can always recover all your information if any hazard like device malfunctioning, fire hazards, or theft occurs."
    },
    {
        title: "Offline first",
        desc: "Gesmax works perfectly offline, but requires an internet connection to sync data across all devices"
    },
]
export default Features