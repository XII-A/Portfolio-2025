import { cn } from '../../../utils/cn'
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
                        <img
                            src="/me.jpg"
                            alt="Profile"
                            className="h-full w-full object-cover grayscale"
                            style={{ objectPosition: 'center 10%' }}
                        />
                    </div>
                    {/* Geometric accent */}
                    <div className="bg-work-work absolute -top-2 -right-2 h-6 w-6 sm:h-8 sm:w-8"></div>
                    <div className="bg-work-freelance absolute -bottom-2 -left-2 h-4 w-4 rounded-full sm:h-6 sm:w-6"></div>
                    {/* triangle for the work-education */}
                    <div
                        className={cn(
                            'absolute -right-4 -bottom-2',
                            'size-0 border-[0_16px_32px_16px] border-[transparent_transparent_#008551_transparent]'
                        )}
                    ></div>
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
                    <div className="mb-4 text-xl font-bold sm:text-2xl">Abdulrazak Armanazi</div>
                    <div className="mb-6 text-base leading-relaxed sm:text-lg">
                        I'm a full-stack developer <i>{'(or as I like to call myself, a problem solver)'}</i> who
                        approaches software like a detective approaches a case, with{' '}
                        <span className="bg-work-work text-primary px-2">curiosity</span>,{' '}
                        <span className="bg-work-freelance text-primary px-2">percision</span>, and a{' '}
                        <span className="bg-work-education text-primary px-2">drive</span> to uncover and solve every
                        edge case. To me, every system is a puzzle waiting to be solved. I analyze problems, test
                        hypotheses, and refine solutions until every piece of the puzzle is in place.
                    </div>
                    <div className="text-base leading-relaxed">
                        Over the past few years, I've built everything from local-first mobile apps and ERP systems to
                        single page applications and intelligent automation tools. I thrive in environments where I have
                        autonomy to experiment, learn continuously, and work on projects that help people focus on the
                        things that matter.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
