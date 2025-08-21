const IntroSection = () => {
    return (
        <div className="text-primary-foreground col-span-3 flex h-full flex-col items-start justify-center ps-(--center-to-navbar)">
            <div className="primary mb-2 text-xl font-semibold">Hiiiiiiiiiiii there,</div>
            <div className="text-(length:--heading-size) font-bold text-pretty">
                <div>I am Abdulrazak Armanazi.</div>
                <div>
                    I build things for the <span className="text-primary bg-secondary px-2">Web</span>,
                    <br /> <span className="text-primary bg-secondary px-2">Mobile</span> and{' '}
                    <span className="text-primary bg-secondary px-2">Desktop</span>.
                </div>
            </div>
        </div>
    )
}

export default IntroSection
