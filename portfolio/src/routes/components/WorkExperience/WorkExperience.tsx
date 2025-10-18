import { useState } from 'react'
import SectionHeader from '../shared/SectionHeader'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../shared/ui/accordion'

// ExperienceBar Component
const ExperienceBar = ({
    id,
    company,
    role,
    dates,
    category,
    description,
    isExpanded
}: {
    id: string
    company: string
    role: string
    dates: string
    category: 'work' | 'project' | 'education'
    description: string[]
    isExpanded: boolean
}) => {
    const getCategoryColorValue = (cat: string) => {
        switch (cat) {
            case 'work':
                return 'var(--color-work-work)'
            case 'project':
                return 'var(--color-work-freelance)'
            case 'education':
                return 'var(--color-work-education)'
            default:
                return 'var(--color-primary-foreground)'
        }
    }

    return (
        <AccordionItem value={id} key={id} className="flex h-full w-full flex-col">
            <AccordionTrigger
                className={`flex flex-1 cursor-pointer items-center gap-4 rounded-none px-6 py-4 transition-all duration-300 ${
                    isExpanded ? 'text-white' : 'text-primary-foreground'
                }`}
                style={{
                    backgroundColor: isExpanded ? getCategoryColorValue(category) : 'transparent'
                }}
            >
                {/* Category Color Indicator */}
                <div
                    className="h-12 w-2"
                    style={{
                        backgroundColor: isExpanded ? 'white' : getCategoryColorValue(category)
                    }}
                />

                {/* Experience Info */}
                <div className="flex flex-1 items-center justify-between">
                    <div>
                        <h3 className="font-sans text-base font-bold tracking-tight uppercase sm:text-lg">{company}</h3>
                        <p className="text-sm opacity-80">{role}</p>
                    </div>
                    <div className="text-right">
                        <span className="font-mono text-xs tracking-wider whitespace-nowrap uppercase sm:text-sm">
                            {dates}
                        </span>
                    </div>
                </div>
            </AccordionTrigger>
            <AccordionContent className="AccordionContent">
                <div className="px-6 py-4">
                    <ul className="text-primary-foreground list-inside list-disc space-y-2 text-xs leading-relaxed sm:text-sm">
                        {description.map((item, index) => (
                            <li key={index} className="list-item items-start">
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </AccordionContent>
        </AccordionItem>
    )
}

const WorkExperience = () => {
    const [expandedExperience, setExpandedExperience] = useState<string | null>(null)

    const experiences = [
        {
            id: '1',
            company: 'Molham Team',
            role: 'Full Stack Developer',
            dates: 'July 2024 - Present',
            category: 'work' as const,
            description: [
                'Leading the development of an integrated ERP platform for NGOs, alongside an internal procurement app and a local-first data collection mobile app',
                'Automated supplier screening process using Puppeteer and Gmail API, saving significant manual effort',
                'Implemented cross-organization beneficiary similarity check using text analysis algorithms, reducing duplicate sponsorships',
                'Built robust synchronization solution for offline data collection with guaranteed consistency',
                'Developed 15+ reusable UI components library and handled distributed systems communication with Redis pub/sub and BullMQ',
                'Trained and mentored two interns to contribute production-ready features within two months'
            ]
        },
        {
            id: '2',
            company: 'Toptalla',
            role: 'Front End Developer',
            dates: 'Nov 2023 - Apr 2024',
            category: 'work' as const,
            description: [
                "Integrated Meta's API into salons' portfolio system with automated content publishing and metrics viewing",
                'Established a referral system enabling salons to refer other businesses to the platform, boosting user acquisition',
                'Implemented the complete Marketplace front end UI, giving businesses a platform to showcase and sell their products'
            ]
        },
        {
            id: '3',
            company: 'Toptalla',
            role: 'Front End Developer Intern',
            dates: 'July 2023 - Aug 2023',
            category: 'work' as const,
            description: [
                'Translated Figma wireframes into responsive, customizable website themes',
                'Helped salons establish their online presence through modern web development'
            ]
        },
        {
            id: '4',
            company: 'Spotlight NGO',
            role: 'Full Stack Developer (Freelance)',
            dates: 'Oct 2025',
            category: 'work' as const,
            description: [
                'Developed a multilingual, responsive website for an NGO using Next.js (frontend) and Strapi CMS (backend)',
                'Built a custom Markdown parser to support embedded media (videos, iframes) in blog posts managed via Strapi',
                'Designed SEO-friendly blog post pages with sitemap generation',
                'Ensured mobile-first responsiveness and optimized page performance for accessibility and engagement'
            ]
        },
        {
            id: '5',
            company: 'Bazerni',
            role: 'Full Stack Developer (Freelance)',
            dates: 'Dec 2024 - Mar 2025',
            category: 'work' as const,
            description: [
                'Optimized the process of creating ads for mobile devices, using touch friendly interactions and responsive design to provide a native like and more accessible experience for users on mobile devices',
                'Built a dynamic filtering component that utilizes URL search parameters to manage filter states, enabling server side rendering in Next.js and improving page load speeds'
            ]
        },
        {
            id: '6',
            company: 'Fitness Tracker',
            role: 'Full Stack Developer (Project)',
            dates: 'Apr 2024 - May 2024',
            category: 'project' as const,
            description: [
                'Developed a fitness tracking app using React Native and Expo, allowing users to track their workouts, activities, and progress',
                'Built an Admin Dashboard using Next.js allowing users to manage and add courses, classes, and trainers'
            ]
        },
        {
            id: '7',
            company: 'House Rent Price Prediction',
            role: 'Machine Learning Project',
            dates: '2023',
            category: 'project' as const,
            description: [
                'Built a deep learning model to predict rental prices in Turkey using real estate data scraped from EmlakJet',
                'Improved data quality by removing outliers, scaling features, and applying feature engineering',
                'Achieved 0.22 MSE, outperforming Random Forest (0.36) and Linear Regression (0.24) models'
            ]
        },
        {
            id: '8',
            company: 'Ankara University',
            role: 'BSc in Computer Engineering',
            dates: 'Aug 2020 - July 2024',
            category: 'education' as const,
            description: [
                'Graduated with a CGPA of 3.92/4',
                'Focused on computer engineering fundamentals, software development, and system design',
                'Completed comprehensive coursework in programming, algorithms, data structures, and software engineering principles'
            ]
        }
    ]

    const handleExperienceClick = (id: string) => {
        setExpandedExperience(expandedExperience === id ? null : id)
    }

    return (
        <div
            id="projects"
            className="text-primary-foreground col-span-full grid grid-cols-6 grid-rows-[auto_1fr_auto] border-t"
        >
            {/* Work Experience Header */}
            <SectionHeader
                title="WORK"
                subtitle="& EXPERIENCE"
                legend={[
                    { label: 'Work', color: 'var(--color-work-work)' },
                    { label: 'Projects', color: 'var(--color-work-freelance)' },
                    { label: 'Education', color: 'var(--color-work-education)' }
                ]}
            />

            {/* Experience List Section - 6 cols, 3 rows */}
            <div className="col-span-full">
                <Accordion
                    type="single"
                    collapsible
                    value={expandedExperience ?? undefined}
                    onValueChange={handleExperienceClick}
                >
                    {experiences.map((experience, index) => (
                        <ExperienceBar
                            id={experience.id}
                            company={experience.company}
                            role={experience.role}
                            dates={experience.dates}
                            category={experience.category}
                            description={experience.description}
                            isExpanded={expandedExperience === experience.id}
                            key={experience.id}
                        />
                    ))}
                </Accordion>
            </div>

            {/* Experience Summary Footer */}
            <div className="col-span-full row-span-1 grid grid-cols-4 border-t">
                <div className="border-primary-foreground flex flex-col justify-center border-r px-2 py-4 text-center sm:p-4">
                    <div className="text-2xl font-bold sm:text-3xl" style={{ color: 'var(--color-work-work)' }}>
                        {experiences.filter((experience) => experience.category === 'work').length}
                    </div>
                    <div className="text-sm sm:text-base">Total</div>
                </div>
                <div className="border-primary-foreground flex flex-col justify-center border-r px-2 py-4 text-center sm:p-4">
                    <div className="text-2xl font-bold sm:text-3xl" style={{ color: 'var(--color-work-freelance)' }}>
                        3+
                    </div>
                    <div className="text-sm sm:text-base">Years Exp</div>
                </div>
                <div className="border-primary-foreground flex flex-col justify-center border-r px-2 py-4 text-center sm:p-4">
                    <div className="text-2xl font-bold sm:text-3xl" style={{ color: 'var(--color-work-education)' }}>
                        4
                    </div>
                    <div className="text-sm sm:text-base">Companies</div>
                </div>
                <div className="flex flex-col justify-center px-2 py-4 text-center sm:p-4">
                    <div className="text-2xl font-bold sm:text-3xl" style={{ color: 'var(--color-accent)' }}>
                        {experiences.map((experience) => experience.description).flat().length}
                    </div>
                    <div className="text-sm sm:text-base">Highlights</div>
                </div>
            </div>
        </div>
    )
}

export default WorkExperience
