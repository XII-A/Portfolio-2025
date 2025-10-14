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
    category: 'work' | 'freelance' | 'education'
    description: string
    isExpanded: boolean
}) => {
    const getCategoryColorValue = (cat: string) => {
        switch (cat) {
            case 'work':
                return 'var(--color-work-work)'
            case 'freelance':
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
                        <h3 className="font-sans text-lg font-bold tracking-tight uppercase">{company}</h3>
                        <p className="text-sm opacity-80">{role}</p>
                    </div>
                    <div className="text-right">
                        <span className="font-mono text-sm tracking-wider uppercase">{dates}</span>
                    </div>
                </div>
            </AccordionTrigger>
            <AccordionContent className="AccordionContent">
                <div className="px-6 py-4">
                    <p className="text-primary-foreground text-sm leading-relaxed">{description}</p>
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
            company: 'Tech Solutions Inc.',
            role: 'Senior Frontend Developer',
            dates: '2023 - Present',
            category: 'work' as const,
            description:
                'Leading the development of modern web applications using React, TypeScript, and Next.js. Collaborated with cross-functional teams to deliver high-quality user experiences and implemented best practices for code quality and performance optimization.'
        },
        {
            id: '2',
            company: 'Digital Agency Pro',
            role: 'Full Stack Developer',
            dates: '2021 - 2023',
            category: 'work' as const,
            description:
                'Developed and maintained web applications for various clients using React, Node.js, and PostgreSQL. Worked closely with designers and project managers to ensure timely delivery of projects while maintaining high code quality standards.'
        },
        {
            id: '3',
            company: 'E-commerce Platform',
            role: 'Frontend Developer (Freelance)',
            dates: '2020 - 2021',
            category: 'freelance' as const,
            description:
                'Built responsive e-commerce interfaces using React and Tailwind CSS. Implemented payment integration and optimized performance for better user experience. Delivered the project ahead of schedule with excellent client feedback.'
        },
        {
            id: '4',
            company: 'Mobile App Startup',
            role: 'React Native Developer (Freelance)',
            dates: '2019 - 2020',
            category: 'freelance' as const,
            description:
                "Developed cross-platform mobile applications using React Native. Implemented real-time features and integrated third-party APIs. Contributed to the startup's growth by delivering a robust mobile solution."
        },
        {
            id: '5',
            company: 'Computer Science University',
            role: 'Bachelor of Computer Science',
            dates: '2016 - 2020',
            category: 'education' as const,
            description:
                'Graduated with honors, focusing on software engineering, data structures, and algorithms. Completed multiple projects including web applications, mobile apps, and database systems. Active in coding competitions and hackathons.'
        },
        {
            id: '6',
            company: 'React Advanced Course',
            role: 'Advanced React Certification',
            dates: '2020',
            category: 'education' as const,
            description:
                'Completed comprehensive React course covering advanced concepts including hooks, context, performance optimization, and testing. Gained deep understanding of modern React development patterns and best practices.'
        }
    ]

    const handleExperienceClick = (id: string) => {
        setExpandedExperience(expandedExperience === id ? null : id)
    }

    return (
        <div className="text-primary-foreground col-span-full grid grid-cols-6 grid-rows-[auto_1fr_auto] border-t">
            {/* Work Experience Header */}
            <SectionHeader
                title="WORK"
                subtitle="& EXPERIENCE"
                legend={[
                    { label: 'Work', color: 'var(--color-work-work)' },
                    { label: 'Freelance', color: 'var(--color-work-freelance)' },
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
                        />
                    ))}
                </Accordion>
            </div>

            {/* Experience Summary Footer */}
            <div className="col-span-full row-span-1 grid grid-cols-4 border-t">
                <div className="border-primary-foreground flex flex-col justify-center border-r p-4 text-center">
                    <div className="text-3xl font-bold" style={{ color: 'var(--color-work-work)' }}>
                        6
                    </div>
                    <div className="text-base">Total Positions</div>
                </div>
                <div className="border-primary-foreground flex flex-col justify-center border-r p-4 text-center">
                    <div className="text-3xl font-bold" style={{ color: 'var(--color-work-freelance)' }}>
                        4+
                    </div>
                    <div className="text-base">Years Experience</div>
                </div>
                <div className="border-primary-foreground flex flex-col justify-center border-r p-4 text-center">
                    <div className="text-3xl font-bold" style={{ color: 'var(--color-work-education)' }}>
                        4
                    </div>
                    <div className="text-base">Companies</div>
                </div>
                <div className="flex flex-col justify-center p-4 text-center">
                    <div className="text-3xl font-bold" style={{ color: 'var(--color-accent)' }}>
                        2
                    </div>
                    <div className="text-base">Projects</div>
                </div>
            </div>
        </div>
    )
}

export default WorkExperience
