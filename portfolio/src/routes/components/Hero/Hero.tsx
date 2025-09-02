import BauhausBlocks from './BauhausBlocks'
import IntroSection from './IntroSection'

const Hero = () => {
    return (
        <div className="col-span-full grid h-[calc(100vh-72px)] grid-cols-subgrid">
            <IntroSection />

            <BauhausBlocks />
        </div>
    )
}

export default Hero
