import SectionHeader from '../shared/SectionHeader'

const AboutMe = () => {
    return (
        <div className="text-primary-foreground col-span-full grid min-h-screen grid-cols-6 grid-rows-[auto_1fr_1fr_1fr_auto] border-t">
            {/* About Header */}
            <SectionHeader title="ABOUT" subtitle="me" />

            {/* Profile Image Section - 2 cols, 3 rows */}
            <div className="col-span-2 row-span-3 flex items-center justify-center border-r border-b p-8">
                <div className="bg-secondary border-primary-foreground relative h-64 w-64 border-4">
                    {/* Placeholder for profile image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <svg viewBox="0 0 100 100" className="text-primary-foreground h-32 w-32 fill-current">
                            <circle cx="50" cy="35" r="20" />
                            <path d="M20 85 Q20 65 50 65 Q80 65 80 85" />
                        </svg>
                    </div>
                    {/* Geometric accent */}
                    <div className="bg-accent absolute -top-2 -right-2 h-8 w-8"></div>
                    <div className="bg-accent-secondary absolute -bottom-2 -left-2 h-6 w-6"></div>
                </div>
            </div>

            {/* About Text Section - 4 cols, 3 rows */}
            <div className="relative col-span-4 row-span-3 flex flex-col justify-center border-b p-8">
                {/* Industrial corner plus signs */}
                <div className="bg-primary-foreground border-primary-foreground absolute top-4 left-4 h-2 w-2 rotate-45 border-2"></div>
                <div className="bg-primary-foreground border-primary-foreground absolute top-4 right-4 h-2 w-2 rotate-45 border-2"></div>
                <div className="bg-primary-foreground border-primary-foreground absolute bottom-4 left-4 h-2 w-2 rotate-45 border-2"></div>
                <div className="bg-primary-foreground border-primary-foreground absolute right-4 bottom-4 h-2 w-2 rotate-45 border-2"></div>

                <div className="max-w-2xl">
                    <div className="mb-4 text-2xl font-bold">ABDULRAZAK ARMANAZI</div>
                    <div className="mb-6 text-lg leading-relaxed">
                        I'm a passionate developer with a focus on creating clean, functional, and user-centered
                        applications. My journey in software development spans across web, mobile, and desktop
                        platforms, where I combine technical expertise with a keen eye for design.
                    </div>
                    <div className="text-base leading-relaxed">
                        With experience in modern development practices and a commitment to continuous learning, I enjoy
                        tackling complex problems and turning ideas into reality through code.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
