// SkillCard Component
const SkillCard = ({ name, level, category }: { name: string; level: number; category: 'languages' | 'frameworks' | 'tools' }) => {
    const getCategoryColorValue = (cat: string) => {
        switch (cat) {
            case 'languages':
                return 'var(--color-skill-languages)';
            case 'frameworks':
                return 'var(--color-skill-frameworks)';
            case 'tools':
                return 'var(--color-skill-tools)';
            default:
                return 'var(--color-primary-foreground)';
        }
    };

    return (
        <div className="flex items-center gap-3 py-3 border-b-2 border-primary-foreground h-full">
            {/* Category Color Indicator */}
            <div
                className="w-1 h-8"
                style={{ 
                    backgroundColor: getCategoryColorValue(category),
                    color: getCategoryColorValue(category)
                }}
            />

            {/* Skill Info */}
            <div className="flex-1 flex flex-col justify-center">
                <div className="flex items-baseline justify-between mb-1">
                    <h3 className="font-sans text-lg font-bold uppercase tracking-tight">{name}</h3>
                    <span className="font-mono text-xs uppercase tracking-wider opacity-60">LV.{level}</span>
                </div>

                {/* Minimal Level Blocks */}
                <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((block) => (
                        <div
                            key={block}
                            className={`h-1 flex-1 ${
                                block <= level ? 'bg-current' : 'bg-primary-foreground'
                            }`}
                            style={{ 
                                backgroundColor: block <= level ? getCategoryColorValue(category) : 'var(--color-skill-empty)'
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
        <div className="text-primary-foreground col-span-full grid min-h-screen grid-cols-6 grid-rows-4 ">
            {/* Skills Header - 6 cols, 1 row */}
            <div className="col-span-full flex items-center justify-center border-b py-4">
                <div className="text-center">
                    <div className="text-4xl font-bold mb-2">SKILLS</div>
                    <div className="text-lg font-medium">& TOOLS</div>
                    {/* Color Legend */}
                    <div className="flex justify-center space-x-6 mt-4 text-sm">
                        <div className="flex items-center">
                            <div className="w-4 h-4 mr-2" style={{backgroundColor: 'var(--color-skill-languages)'}}></div>
                            <span>Languages</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-4 h-4 mr-2" style={{backgroundColor: 'var(--color-skill-frameworks)'}}></div>
                            <span>Frameworks</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-4 h-4 mr-2" style={{backgroundColor: 'var(--color-skill-tools)'}}></div>
                            <span>Tools</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Skills Cards Section - 6 cols, 3 rows */}
            <div className="col-span-full row-span-3 p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-14 md:gap-10 h-full" style={{gridTemplateRows: 'repeat(auto-fit, minmax(0, 1fr))'}}>
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
                <div className="border-r border-primary-foreground p-4 text-center flex flex-col justify-center">
                    <div className="text-3xl font-bold" style={{color: 'var(--color-skill-languages)'}}>16</div>
                    <div className="text-base">Total Skills</div>
                </div>
                <div className="border-r border-primary-foreground p-4 text-center flex flex-col justify-center">
                    <div className="text-3xl font-bold" style={{color: 'var(--color-skill-frameworks)'}}>5</div>
                    <div className="text-base">Expert Level</div>
                </div>
                <div className="border-r border-primary-foreground p-4 text-center flex flex-col justify-center">
                    <div className="text-3xl font-bold" style={{color: 'var(--color-skill-tools)'}}>82%</div>
                    <div className="text-base">Avg Mastery</div>
                </div>
                <div className="p-4 text-center flex flex-col justify-center">
                    <div className="text-3xl font-bold" style={{color: 'var(--color-accent)'}}>3+</div>
                    <div className="text-base">Years Exp</div>
                </div>
            </div>
        </div>
    )
}

export default SkillsSection
