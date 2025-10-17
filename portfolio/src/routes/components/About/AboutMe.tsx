import SectionHeader from '../shared/SectionHeader'

const AboutMe = () => {
    return (
        <div
            id="about"
            className="text-primary-foreground col-span-full grid min-h-screen grid-cols-6 grid-rows-[auto_1fr_1fr_1fr_auto] border-t"
        >
            {/* About Header */}
            <SectionHeader title="ABOUT" subtitle="me" />

            {/* Profile Image Section - Responsive: 6 cols on mobile, 2 cols on desktop */}
            <div className="col-span-6 row-span-3 flex items-center justify-center border-b p-4 sm:p-6 lg:col-span-2 lg:border-r lg:p-8">
                <div className="bg-secondary border-primary-foreground relative h-48 w-48 border-4 sm:h-56 sm:w-56 lg:h-64 lg:w-64">
                    {/* Placeholder for profile image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                            viewBox="0 0 100 100"
                            className="text-primary-foreground h-24 w-24 fill-current sm:h-28 sm:w-28 lg:h-32 lg:w-32"
                        >
                            <circle cx="50" cy="35" r="20" />
                            <path d="M20 85 Q20 65 50 65 Q80 65 80 85" />
                        </svg>
                    </div>
                    {/* Geometric accent */}
                    <div className="bg-accent absolute -top-2 -right-2 h-6 w-6 sm:h-8 sm:w-8"></div>
                    <div className="bg-accent-secondary absolute -bottom-2 -left-2 h-4 w-4 sm:h-6 sm:w-6"></div>
                </div>
            </div>

            {/* About Text Section - Responsive: 6 cols on mobile, 4 cols on desktop */}
            <div className="relative col-span-6 row-span-3 flex flex-col justify-center border-b p-4 sm:p-6 lg:col-span-4 lg:p-8">
                {/* Industrial corner plus signs */}
                <div className="bg-primary-foreground border-primary-foreground absolute top-4 left-4 h-2 w-2 rotate-45 border-2"></div>
                <div className="bg-primary-foreground border-primary-foreground absolute top-4 right-4 h-2 w-2 rotate-45 border-2"></div>
                <div className="bg-primary-foreground border-primary-foreground absolute bottom-4 left-4 h-2 w-2 rotate-45 border-2"></div>
                <div className="bg-primary-foreground border-primary-foreground absolute right-4 bottom-4 h-2 w-2 rotate-45 border-2"></div>

                <div className="max-w-2xl pt-8 pr-8 pb-8 pl-8 sm:pt-10 sm:pr-10 sm:pb-10 sm:pl-10 lg:pt-0 lg:pr-0 lg:pb-0 lg:pl-0">
                    <div className="mb-4 text-xl font-bold sm:text-2xl">ABDULRAZAK ARMANAZI</div>
                    <div className="mb-6 text-base leading-relaxed sm:text-lg">
                        I'm a passionate developer with a focus on creating clean, functional, and user-centered
                        applications. My journey in software development spans across web, mobile, and desktop
                        platforms, where I combine technical expertise with a keen eye for design.
                    </div>
                    <div className="text-sm leading-relaxed sm:text-base">
                        With experience in modern development practices and a commitment to continuous learning, I enjoy
                        tackling complex problems and turning ideas into reality through code.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
