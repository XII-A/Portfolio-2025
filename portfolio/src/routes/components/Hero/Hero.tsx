import IntroSection from './IntroSection'

const Hero = () => {
    return (
        <div className="col-span-full grid h-[calc(100vh-72px)] grid-cols-subgrid">
            <IntroSection />

            <div className="bg-accent-secondary col-span-3 h-full">img</div>
        </div>
    )
}

export default Hero
