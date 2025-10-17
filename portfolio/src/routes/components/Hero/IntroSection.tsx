const IntroSection = () => {
    return (
        <div className="text-primary-foreground 0 col-span-full mx-auto flex h-full flex-col items-start justify-center py-10 lg:col-span-3 lg:mx-0 lg:ps-(--center-to-navbar)">
            <div className="primary mb-2 text-lg font-semibold lg:text-xl">Hiiiiiiiiiiii there,</div>
            <div className="text-(length:--heading-size-mobile) font-bold text-pretty lg:text-(length:--heading-size)">
                <div>I am Abdulrazak Armanazi.</div>
                <div>
                    I build things for the <span className="text-primary bg-work-work px-2">Web</span>,
                    <br /> <span className="text-primary bg-work-freelance px-2">Mobile</span> and{' '}
                    <span className="text-primary bg-work-education px-2">Desktop</span>.
                </div>
            </div>
        </div>
    )
}

export default IntroSection
