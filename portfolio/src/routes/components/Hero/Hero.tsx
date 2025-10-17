import BauhausBlocks from './BauhausBlocks'
import IntroSection from './IntroSection'

const Hero = () => {
    return (
        <div className="col-span-full grid min-h-[calc(100dvh-72px)] grid-cols-subgrid overflow-hidden">
            <IntroSection />
            <BauhausBlocks />
        </div>
    )
}

export default Hero
