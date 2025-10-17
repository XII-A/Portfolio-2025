import BauhausBlocks from './BauhausBlocks'
import IntroSection from './IntroSection'

const Hero = () => {
    return (
        <div className="col-span-full grid h-[calc(100dvh-72px)] grid-cols-subgrid overflow-hidden">
            <IntroSection />
            <div className="hidden lg:contents">
                <BauhausBlocks />
            </div>
        </div>
    )
}

export default Hero
