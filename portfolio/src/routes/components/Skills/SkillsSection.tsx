import SectionHeader from '../shared/SectionHeader'

// SkillCard Component
const SkillCard = ({
    name,
    level,
    category
}: {
    name: string
    level: number
    category: 'languages' | 'frameworks' | 'tools'
}) => {
    const getCategoryColorValue = (cat: string) => {
        switch (cat) {
            case 'languages':
                return 'var(--color-skill-languages)'
            case 'frameworks':
                return 'var(--color-skill-frameworks)'
            case 'tools':
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

const SkillsSection = () => {
    return (
        <div className="text-primary-foreground col-span-full grid min-h-screen grid-cols-6 grid-rows-[auto_1fr_1fr_1fr_auto]">
            {/* Skills Header */}
            <SectionHeader
                title="SKILLS"
                subtitle="& TOOLS"
                legend={[
                    { label: 'Languages', color: 'var(--color-skill-languages)' },
                    { label: 'Frameworks', color: 'var(--color-skill-frameworks)' },
                    { label: 'Tools', color: 'var(--color-skill-tools)' }
                ]}
            />

            {/* Skills Cards Section - 6 cols, 3 rows */}
            <div className="col-span-full row-span-3 p-6">
                <div
                    className="grid h-full grid-cols-1 md:grid-cols-2 md:gap-10 lg:grid-cols-4 lg:gap-14"
                    style={{ gridTemplateRows: 'repeat(auto-fit, minmax(0, 1fr))' }}
                >
                    <SkillCard name="JavaScript" level={5} category="languages" />
                    <SkillCard name="TypeScript" level={4} category="languages" />
                    <SkillCard name="Python" level={3} category="languages" />
                    <SkillCard name="Java" level={2} category="languages" />
                    <SkillCard name="React" level={5} category="frameworks" />
                    <SkillCard name="Next.js" level={4} category="frameworks" />
                    <SkillCard name="Node.js" level={4} category="frameworks" />
                    <SkillCard name="Express" level={3} category="frameworks" />
                    <SkillCard name="Tailwind CSS" level={5} category="frameworks" />
                    <SkillCard name="React Native" level={3} category="frameworks" />
                    <SkillCard name="Git" level={5} category="tools" />
                    <SkillCard name="Docker" level={3} category="tools" />
                    <SkillCard name="Figma" level={4} category="tools" />
                    <SkillCard name="VS Code" level={5} category="tools" />
                    <SkillCard name="PostgreSQL" level={4} category="tools" />
                    <SkillCard name="MongoDB" level={3} category="tools" />
                </div>
            </div>

            {/* Skill Summary Footer */}
            <div className="col-span-full row-span-1 grid grid-cols-4 border-t">
                <div className="border-primary-foreground flex flex-col justify-center border-r px-2 py-4 text-center sm:p-4">
                    <div className="text-2xl font-bold sm:text-3xl" style={{ color: 'var(--color-skill-languages)' }}>
                        16
                    </div>
                    <div className="text-sm sm:text-base">Total Skills</div>
                </div>
                <div className="border-primary-foreground flex flex-col justify-center border-r px-2 py-4 text-center sm:p-4">
                    <div className="text-2xl font-bold sm:text-3xl" style={{ color: 'var(--color-skill-frameworks)' }}>
                        5
                    </div>
                    <div className="text-sm sm:text-base">
                        Expert L<span className="hidden sm:inline">e</span>v<span className="hidden sm:inline">e</span>l
                    </div>
                </div>
                <div className="border-primary-foreground flex flex-col justify-center border-r px-2 py-4 text-center sm:p-4">
                    <div className="text-2xl font-bold sm:text-3xl" style={{ color: 'var(--color-skill-tools)' }}>
                        82%
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
