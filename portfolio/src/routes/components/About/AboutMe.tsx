const AboutMe = () => {
    return (
        <div className="text-primary-foreground col-span-full grid min-h-screen grid-cols-6 grid-rows-4 border-t">
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
        </div>
    )
}

export default AboutMe
