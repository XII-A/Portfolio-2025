// SkillBar Component
const SkillBar = ({ name, level, color }: { name: string; level: number; color: string }) => {
    return (
        <div className="space-y-1">
            <div className="text-sm font-medium">{name}</div>
            <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((step) => (
                    <div
                        key={step}
                        className={`h-2 flex-1 border border-primary-foreground ${
                            step <= level ? 'bg-current' : 'bg-transparent'
                        }`}
                        style={{ color: step <= level ? color : 'transparent' }}
                    />
                ))}
            </div>
        </div>
    )
}

const AboutSection = () => {
    return (
        <div className="text-primary-foreground col-span-full grid min-h-screen grid-cols-6 grid-rows-8 border-t">
            {/* Header Section - 6 cols, 1 row */}
            <div className="col-span-full flex items-center justify-center border-b">
                <div className="text-center">
                    <div className="text-4xl font-bold mb-2">ABOUT</div>
                    <div className="text-lg font-medium">me</div>
                </div>
            </div>

            {/* Profile Image Section - 2 cols, 3 rows */}
            <div className="col-span-2 row-span-3 border-r border-b flex items-center justify-center p-8">
                <div className="relative w-64 h-64 bg-secondary border-4 border-primary-foreground">
                    {/* Placeholder for profile image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <svg 
                            viewBox="0 0 100 100" 
                            className="w-32 h-32 fill-current text-primary-foreground"
                        >
                            <circle cx="50" cy="35" r="20"/>
                            <path d="M20 85 Q20 65 50 65 Q80 65 80 85"/>
                        </svg>
                    </div>
                    {/* Geometric accent */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent"></div>
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-accent-secondary"></div>
                </div>
            </div>

            {/* About Text Section - 4 cols, 3 rows */}
            <div className="col-span-4 row-span-3 border-b p-8 flex flex-col justify-center relative">
                {/* Industrial corner plus signs */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-primary-foreground rotate-45 border-2 border-primary-foreground">
                </div>
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary-foreground rotate-45 border-2 border-primary-foreground">
                </div>
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary-foreground rotate-45 border-2 border-primary-foreground">
                </div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-primary-foreground rotate-45 border-2 border-primary-foreground">
                </div>
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-primary-foreground rotate-45 border-2 border-primary-foreground">
                </div>
                
                <div className="max-w-2xl">
                    <div className="text-2xl font-bold mb-4">ABDULRAZAK ARMANAZI</div>
                    <div className="text-lg leading-relaxed mb-6">
                        I'm a passionate developer with a focus on creating clean, functional, and user-centered applications. 
                        My journey in software development spans across web, mobile, and desktop platforms, where I combine 
                        technical expertise with a keen eye for design.
                    </div>
                    <div className="text-base leading-relaxed">
                        With experience in modern development practices and a commitment to continuous learning, 
                        I enjoy tackling complex problems and turning ideas into reality through code.
                    </div>
                </div>
            </div>

            {/* Skills Header - 6 cols, 1 row */}
            <div className="col-span-full flex items-center justify-center border-b">
                <div className="text-center">
                    <div className="text-3xl font-bold">SKILLS</div>
                    <div className="text-base font-medium">& TOOLS</div>
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

            {/* Skills Grid - 6 cols, 3 rows */}
            <div className="col-span-full row-span-3 grid grid-cols-6 grid-rows-3">
                {/* Frontend Skills */}
                <div className="col-span-2 row-span-1 border-r border-b p-4">
                    <div className="text-lg font-bold mb-4">FRONTEND</div>
                    <div className="space-y-3">
                        <SkillBar name="React" level={5} color="var(--color-skill-frameworks)" />
                        <SkillBar name="TypeScript" level={4} color="var(--color-skill-languages)" />
                        <SkillBar name="Tailwind CSS" level={5} color="var(--color-skill-frameworks)" />
                        <SkillBar name="Next.js" level={4} color="var(--color-skill-frameworks)" />
                    </div>
                </div>

                {/* Backend Skills */}
                <div className="col-span-2 row-span-1 border-r border-b p-4">
                    <div className="text-lg font-bold mb-4">BACKEND</div>
                    <div className="space-y-3">
                        <SkillBar name="Node.js" level={4} color="var(--color-skill-frameworks)" />
                        <SkillBar name="Express" level={3} color="var(--color-skill-frameworks)" />
                        <SkillBar name="PostgreSQL" level={4} color="var(--color-skill-tools)" />
                        <SkillBar name="MongoDB" level={3} color="var(--color-skill-tools)" />
                    </div>
                </div>

                {/* Mobile & Tools */}
                <div className="col-span-2 row-span-1 border-b p-4">
                    <div className="text-lg font-bold mb-4">MOBILE & TOOLS</div>
                    <div className="space-y-3">
                        <SkillBar name="React Native" level={3} color="var(--color-skill-frameworks)" />
                        <SkillBar name="Git" level={5} color="var(--color-skill-tools)" />
                        <SkillBar name="Docker" level={3} color="var(--color-skill-tools)" />
                        <SkillBar name="Figma" level={4} color="var(--color-skill-tools)" />
                    </div>
                </div>

                {/* Additional Skills Row 1 */}
                <div className="col-span-3 row-span-1 border-r border-b p-4">
                    <div className="text-lg font-bold mb-4">DESIGN & UX</div>
                    <div className="space-y-3">
                        <SkillBar name="UI/UX Design" level={4} color="var(--color-skill-tools)" />
                        <SkillBar name="Prototyping" level={3} color="var(--color-skill-tools)" />
                        <SkillBar name="Design Systems" level={3} color="var(--color-skill-tools)" />
                    </div>
                </div>

                {/* Additional Skills Row 2 */}
                <div className="col-span-3 row-span-1 border-b p-4">
                    <div className="text-lg font-bold mb-4">DEVELOPMENT PRACTICES</div>
                    <div className="space-y-3">
                        <SkillBar name="Agile Development" level={4} color="var(--color-skill-tools)" />
                        <SkillBar name="Test-Driven Development" level={3} color="var(--color-skill-tools)" />
                        <SkillBar name="CI/CD" level={3} color="var(--color-skill-tools)" />
                    </div>
                </div>

                {/* Skill Summary Footer */}
                <div className="col-span-full row-span-1 grid grid-cols-4 border-t">
                    <div className="border-r border-primary-foreground p-6 text-center flex flex-col justify-center">
                        <div className="text-4xl font-bold" style={{color: 'var(--color-skill-languages)'}}>10</div>
                        <div className="text-lg">Total Skills</div>
                    </div>
                    <div className="border-r border-primary-foreground p-6 text-center flex flex-col justify-center">
                        <div className="text-4xl font-bold" style={{color: 'var(--color-skill-frameworks)'}}>4</div>
                        <div className="text-lg">Expert Level</div>
                    </div>
                    <div className="border-r border-primary-foreground p-6 text-center flex flex-col justify-center">
                        <div className="text-4xl font-bold" style={{color: 'var(--color-skill-tools)'}}>84%</div>
                        <div className="text-lg">Avg Mastery</div>
                    </div>
                    <div className="p-6 text-center flex flex-col justify-center">
                        <div className="text-4xl font-bold" style={{color: 'var(--color-accent)'}}>3+</div>
                        <div className="text-lg">Years Exp</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
