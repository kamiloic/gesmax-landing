import { useMemo } from "react"

interface Props {
    locale: string
}

const FAQ: React.FC<Props> = ({ locale }) => {

    const lang = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale]) ? 'fr' : 'en'
    const s = strings[lang]

    return (
        <div className="">
            <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-8">
                    <h2 className="text-3xl font-extrabold sm:text-4xl">{'FAQ'}</h2>
                    {/* <p className="mt-4 text-lg text-gray-200">{s.subtitle}</p> */}
                </div>
                <div className="">
                    {
                        s.items.map((item, index) => (
                            <details
                                key={item.title + index}
                                className="p-6 border-l-4 border-primary bg-gray-50 group">
                                <summary className="flex items-center justify-between cursor-pointer">
                                    <h5 className="text-lg font-medium text-gray-900">
                                        {item.title}
                                    </h5>

                                    <span
                                        className="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                </summary>

                                <p className="mt-4 leading-relaxed text-gray-700">
                                    {item.body}
                                </p>
                            </details>
                        ))
                    }
                </div>

            </div>
        </div>


    )
}

const strings = {
    'en': {
        items: [
            {
                title: "Lorem ipsum dolor sit amet consectetur adipisicing?",
                body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!"
            },
            {
                title: "Lorem ipsum dolor sit amet consectetur adipisicing?",
                body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!"
            }
        ]
    },
    'fr': {
        items: [
            {
                title: "Lorem ipsum dolor sit amet consectetur adipisicing?",
                body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!"
            },
            {
                title: "Lorem ipsum dolor sit amet consectetur adipisicing?",
                body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!"
            }
        ]
    }
}


export default FAQ