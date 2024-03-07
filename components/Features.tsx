import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";

interface Props {
    locale: string;
    featureSet: number;
}

const Tick = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
);

const Features: React.FC<Props> = ({ locale, featureSet }) => {
    const router = useRouter();
    const lang = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale]) ? 'fr' : 'en';
    const s = strings[lang];

    const features = useMemo(() => {
        const startIndex = (featureSet - 1) * 4;
        const endIndex = startIndex + 4;
        return s.features.slice(startIndex, endIndex);
    }, [featureSet, s.features]);

    const titleIndex = useMemo(() => {
        return featureSet - 1;
    }, [featureSet]);

    return (
        <div className="bg-gradient-to-r from-primary via-blue-800 to-blue-900 text-white">
            <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">

                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold sm:text-4xl">{s.title[titleIndex]}</h2>
                    <h3 className="mt-4 text-lg text-gray-200">{s.subtitle[titleIndex]}</h3>
                </div>

                <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12">
                    {
                        features.map(_feature => (
                            <div className="flex" key={_feature.title}>
                                <Tick />
                                <div className="ml-3">
                                    <dt className="text-lg font-medium">{_feature.title}</dt>
                                    <h4 className="italic">{_feature.subtitle}</h4>
                                    <dd className="mt-2 text-gray-200">{_feature.desc}</dd>
                                </div>
                            </div>
                        ))
                    }
                </dl>
            </div>
        </div>
    );
};

const strings = {
    'en': {
        'title': [
            "Gesmax Core Business Management Tools",
            "Gesmax Sales and Operations Optimization",
            "Gesmax Team Collaboration and Financial Management"
        ],
        'subtitle':
            [
                "Maximizing Efficiency with Gesmax Core Business Management Tools",
                "Enhancing Performance with Gesmax Sales and Operations Optimization",
                "Boosting Collaboration and Financial Control with Gesmax Team Management Solutions"
            ],
        "features": [
            {
                "title": "Efficiency and Analytics",
                "subtitle": "Streamline Processes and Gain Insight with Advanced Analytics",
                "desc": "Gesmax streamlines your business processes, saving time and resources, while maximizing productivity and profitability. Gain detailed analytics to track sales, expenses, and losses, empowering informed decision-making for business growth."
            },
            {
                "title": "Ensure Business Continuity",
                "subtitle": "Safeguard Your Business Data and Ensure Uninterrupted Operations",
                "desc": "Gesmax's robust disaster recovery and offline functionality ensure uninterrupted operations, safeguarding your business data and minimizing downtime risks. Rest assured knowing your data is securely backed up and easily recoverable in emergencies."
            },
            {
                "title": "Insights",
                "subtitle": "Uncover Business Weaknesses and Risks for Strategic Improvement",
                "desc": "Gesmax Insights reveal critical aspects of business health, sales sources, expenses, and potential losses, highlighting areas for improvement and risk mitigation."
            },
            {
                "title": "Notifications",
                "subtitle": "Stay Informed with Real-time Event Alerts and Updates",
                "desc": "Gesmax notifies you of significant events, including inventory updates, sales transactions, expense approvals, and team assessments, ensuring you're always up-to-date."
            },
            {
                "title": "Invoicing and Ticketing System",
                "subtitle": "Streamline Sales Transactions and Documentation Effortlessly",
                "desc": "Gesmax's Invoicing and Ticketing System simplifies sales processes, enabling seamless transactions, receipt printing, and efficient record-keeping."
            },
            {
                "title": "Real-time Sync",
                "subtitle": "Access Critical Data Anytime, Anywhere with Seamless Sync",
                "desc": "Gesmax ensures real-time data synchronization across devices, enabling instant access to critical information for informed decision-making on the go."
            },
            {
                "title": "Drive Growth and Innovation",
                "subtitle": "Expand Your Horizons with Scalable E-commerce Solutions",
                "desc": "With Gesmax's scalable and customizable features, unlock new opportunities for growth, innovation, and success in your industry. Benefit from easy-to-use e-commerce solutions tailored to your business needs."
            },
            {
                "title": "Offline Functionality",
                "subtitle": "Work Without Interruption, Anytime, Anywhere",
                "desc": "Gesmax operates seamlessly offline, allowing you to continue working uninterrupted. Upon reconnecting, data syncs automatically, ensuring continuity of operations."
            },
            {
                "title": "Team Management and Assessment",
                "subtitle": "Empower Your Team and Enhance Performance",
                "desc": "Gesmax facilitates efficient team management and performance assessment, fostering collaboration, productivity, and growth within your organization."
            },
            {
                "title": "Supply and Expense Management",
                "subtitle": "Optimize Resource Allocation for Sustainable Growth",
                "desc": "Gesmax simplifies supply and expense management, helping you track and control costs effectively to maximize profitability and sustainability."
            },
            {
                "title": "Inventory Management",
                "subtitle": "Maintain Control and Visibility Over Your Stock",
                "desc": "Gesmax's Inventory Management feature enables you to track stock levels, monitor movements, and optimize inventory processes for enhanced efficiency and profitability."
            },
            {
                "title": "Customizable Reporting and Accounting",
                "subtitle": "Tailor Reports to Drive Strategic Decision-making",
                "desc": "Gesmax offers customizable reporting and accounting options, allowing you to generate detailed reports tailored to your specific business requirements, facilitating strategic decision-making."
            }
        ]
    },
    'fr': {
        'title': [
            "Outils de Gestion d'Entreprise",
            "Optimisation des Ventes et des Opérations",
            "Collaboration d'Équipe et Gestion Financière"
        ],
        'subtitle':
            [
                "Exploitez pleinement votre potentiel avec les outils de gestion d'entreprise essentiels de Gesmax",
                "Optimisez vos performances grâce à l'efficacité des ventes et des opérations de Gesmax",
                "Cultivez la collaboration et maîtrisez vos finances avec les solutions de gestion d'équipe de Gesmax"
            ],
        "features": [
            {
                "title": "Efficacité et Analytique",
                "subtitle": "Optimisez vos processus et obtenez des informations détaillées grâce à l'analytique avancée",
                "desc": "Gesmax optimise vos processus d'affaires, vous faisant gagner du temps et des ressources, tout en maximisant la productivité et la rentabilité. Obtenez des analyses détaillées pour suivre les ventes, les dépenses et les pertes, permettant une prise de décision éclairée pour la croissance de l'entreprise."
            },
            {
                "title": "Assurer la Continuité des Affaires",
                "subtitle": "Protégez vos données d'entreprise et assurez des opérations ininterrompues",
                "desc": "La récupération après sinistre robuste et la fonctionnalité hors ligne de Gesmax garantissent des opérations ininterrompues, protégeant vos données d'entreprise et minimisant les risques d'arrêt. Soyez assuré de savoir que vos données sont sauvegardées en toute sécurité et facilement récupérables en cas d'urgence."
            },
            {
                "title": "Informations",
                "subtitle": "Découvrez les faiblesses et les risques commerciaux pour une amélioration stratégique",
                "desc": "Les informations Gesmax révèlent des aspects critiques de la santé de l'entreprise, des sources de ventes, des dépenses et des pertes potentielles, mettant en évidence les domaines à améliorer et l'atténuation des risques."
            },
            {
                "title": "Notifications",
                "subtitle": "Restez informé avec des alertes et des mises à jour d'événements en temps réel",
                "desc": "Gesmax vous informe des événements importants, notamment des mises à jour d'inventaire, des transactions de vente, des approbations de dépenses et des évaluations d'équipe, vous assurant d'être toujours à jour."
            },
            {
                "title": "Système de Facturation et de Billetterie",
                "subtitle": "Simplifiez les transactions de vente et la documentation sans effort",
                "desc": "Le système de facturation et de billetterie de Gesmax simplifie les processus de vente, permettant des transactions sans heurt, l'impression de reçus et une gestion efficace des dossiers."
            },
            {
                "title": "Synchronisation en Temps Réel",
                "subtitle": "Accédez aux données critiques n'importe où, n'importe quand avec une synchronisation transparente",
                "desc": "Gesmax garantit une synchronisation en temps réel des données entre les appareils, permettant un accès instantané aux informations critiques pour une prise de décision éclairée en déplacement."
            },
            {
                "title": "Stimuler la Croissance et l'Innovation",
                "subtitle": "Élargissez vos horizons avec des solutions de commerce électronique évolutives",
                "desc": "Avec les fonctionnalités évolutives et personnalisables de Gesmax, débloquez de nouvelles opportunités de croissance, d'innovation et de succès dans votre industrie. Bénéficiez de solutions de commerce électronique faciles à utiliser et adaptées à vos besoins commerciaux."
            },
            {
                "title": "Fonctionnalité Hors Ligne",
                "subtitle": "Travaillez sans interruption, n'importe où, n'importe quand",
                "desc": "Gesmax fonctionne sans interruption hors ligne, vous permettant de continuer à travailler sans interruption. Lors de la reconnexion, les données se synchronisent automatiquement, assurant la continuité des opérations."
            },
            {
                "title": "Gestion et Évaluation d'Équipe",
                "subtitle": "Donnez du pouvoir à votre équipe et améliorez les performances",
                "desc": "Gesmax facilite la gestion efficace de l'équipe et l'évaluation des performances, favorisant la collaboration, la productivité et la croissance au sein de votre organisation."
            },
            {
                "title": "Gestion des Approvisionnements et des Dépenses",
                "subtitle": "Optimisez l'allocation des ressources pour une croissance durable",
                "desc": "Gesmax simplifie la gestion des approvisionnements et des dépenses, vous aidant à suivre et à contrôler efficacement les coûts pour maximiser la rentabilité et la durabilité."
            },
            {
                "title": "Gestion des Stocks",
                "subtitle": "Maintenez le contrôle et la visibilité sur votre stock",
                "desc": "La fonctionnalité de gestion des stocks de Gesmax vous permet de suivre les niveaux de stock, de surveiller les mouvements et d'optimiser les processus d'inventaire pour une efficacité et une rentabilité accrues."
            },
            {
                "title": "Rapports Personnalisables et Comptabilité",
                "subtitle": "Personnalisez les rapports pour une prise de décision stratégique",
                "desc": "Gesmax propose des options de rapports personnalisables et de comptabilité, vous permettant de générer des rapports détaillés adaptés à vos besoins commerciaux spécifiques, facilitant la prise de décision stratégique."
            }
        ]
    }
}


export default Features;
