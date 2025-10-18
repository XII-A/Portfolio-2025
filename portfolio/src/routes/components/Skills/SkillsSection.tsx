import SectionHeader from '../shared/SectionHeader'

// SkillCard Component
const SkillCard = ({
    name,
    level,
    category
}: {
    name: string
    level: number
    category: 'languages' | 'front-end' | 'back-end'
}) => {
    const getCategoryColorValue = (cat: string) => {
        switch (cat) {
            case 'languages':
                return 'var(--color-skill-languages)'
            case 'front-end':
                return 'var(--color-skill-frameworks)'
            case 'back-end':
                return 'var(--color-skill-tools)'
            default:
                return 'var(--color-primary-foreground)'
        }
    }

    return (
        <div className="border-primary-foreground flex h-full items-center gap-3 border-b-2 py-3">
            {/* Category Color Indicator */}
            <div
                className="h-8 w-1"
                style={{
                    backgroundColor: getCategoryColorValue(category),
                    color: getCategoryColorValue(category)
                }}
            />

            {/* Skill Info */}
            <div className="flex flex-1 flex-col justify-center">
                <div className="mb-1 flex items-baseline justify-between">
                    <h3 className="font-sans text-lg font-bold tracking-tight uppercase">{name}</h3>
                    <span className="font-mono text-xs tracking-wider uppercase opacity-60">LV.{level}</span>
                </div>

                {/* Minimal Level Blocks */}
                <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((block) => (
                        <div
                            key={block}
                            className={`h-1 flex-1 ${block <= level ? 'bg-current' : 'bg-primary-foreground'}`}
                            style={{
                                backgroundColor:
                                    block <= level ? getCategoryColorValue(category) : 'var(--color-skill-empty)'
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

const skills = [
    // languages
    {
        name: 'TypeScript',
        level: 4,
        category: 'languages'
    },
    {
        name: 'JavaScript',
        level: 4,
        category: 'languages'
    },
    {
        name: 'HTML/CSS',
        level: 4,
        category: 'languages'
    },
    {
        name: 'C/C++',
        level: 3,
        category: 'languages'
    },
    {
        name: 'Python',
        level: 3,
        category: 'languages'
    },
    // front-end
    {
        name: 'React',
        level: 4,
        category: 'front-end'
    },
    {
        name: 'React Native / Expo',
        level: 4,
        category: 'front-end'
    },
    {
        name: 'Next.js',
        level: 4,
        category: 'front-end'
    },
    {
        name: 'Vite',
        level: 4,
        category: 'front-end'
    },
    {
        name: 'Tailwind CSS',
        level: 4,
        category: 'front-end'
    },
    {
        name: 'Tanstack',
        level: 4,
        category: 'front-end'
    },
    {
        name: 'Zod',
        level: 5,
        category: 'front-end'
    },
    // back-end
    {
        name: 'Express.js',
        level: 4,
        category: 'back-end'
    },
    {
        name: 'tRPC',
        level: 5,
        category: 'back-end'
    },
    {
        name: 'Drizzle',
        level: 5,
        category: 'back-end'
    },
    {
        name: 'PostgreSQL',
        level: 4,
        category: 'back-end'
    },
    {
        name: 'NoSQL',
        level: 3,
        category: 'back-end'
    },
    {
        name: 'Redis',
        level: 3,
        category: 'back-end'
    },
    {
        name: 'BullMQ',
        level: 3,
        category: 'back-end'
    },
    {
        name: 'Docker',
        level: 3,
        category: 'back-end'
    }
] as const

const SkillsSection = () => {
    return (
        <div
            id="skills"
            className="text-primary-foreground col-span-full grid min-h-screen grid-cols-6 grid-rows-[auto_1fr_1fr_1fr_auto]"
        >
            {/* Skills Header */}
            <SectionHeader
                title="SKILLS"
                subtitle="& TOOLS"
                legend={[
                    { label: 'Languages', color: 'var(--color-skill-languages)' },
                    { label: 'Front End', color: 'var(--color-skill-frameworks)' },
                    { label: 'Back End', color: 'var(--color-skill-tools)' }
                ]}
            />

            {/* Skills Cards Section - 6 cols, 3 rows */}
            <div className="col-span-full row-span-3 p-6">
                <div
                    className="grid h-full grid-cols-1 md:grid-cols-2 md:gap-10 lg:grid-cols-4 lg:gap-14"
                    style={{ gridTemplateRows: 'repeat(auto-fit, minmax(0, 1fr))' }}
                >
                    {skills.map((skill) => (
                        <SkillCard key={skill.name} {...skill} />
                    ))}
                </div>
            </div>

            {/* Skill Summary Footer */}
            <div className="col-span-full row-span-1 grid grid-cols-4 border-t">
                <div className="border-primary-foreground flex flex-col justify-center border-r px-2 py-4 text-center sm:p-4">
                    <div className="text-2xl font-bold sm:text-3xl" style={{ color: 'var(--color-skill-languages)' }}>
                        {skills.length}
                    </div>
                    <div className="text-sm sm:text-base">Total Skills</div>
                </div>
                <div className="border-primary-foreground flex flex-col justify-center border-r px-2 py-4 text-center sm:p-4">
                    <div className="text-2xl font-bold sm:text-3xl" style={{ color: 'var(--color-skill-frameworks)' }}>
                        {skills.filter((skill) => skill.level === 5 || skill.level === 4).length}
                    </div>
                    <div className="text-sm sm:text-base">
                        Expert L<span className="hidden sm:inline">e</span>v<span className="hidden sm:inline">e</span>l
                    </div>
                </div>
                <div className="border-primary-foreground flex flex-col justify-center border-r px-2 py-4 text-center sm:p-4">
                    <div className="text-2xl font-bold sm:text-3xl" style={{ color: 'var(--color-skill-tools)' }}>
                        {/* out of 100% */}
                        {Math.round(
                            (skills.filter((skill) => skill.level === 5 || skill.level === 4).length / skills.length) *
                                100
                        )}
                        %
                    </div>
                    <div className="text-sm sm:text-base">
                        <span className="hidden sm:inline">Avg </span>Mastery
                    </div>
                </div>
                <div className="flex flex-col justify-center px-2 py-4 text-center sm:p-4">
                    <div className="text-2xl font-bold sm:text-3xl" style={{ color: 'var(--color-accent)' }}>
                        3+
                    </div>
                    <div className="text-sm sm:text-base">Years Exp</div>
                </div>
            </div>
        </div>
    )
}

export default SkillsSection
