import BauhausBlocks from './BauhausBlocks'
import IntroSection from './IntroSection'

const Hero = () => {
    return (
        <div id="home" className="col-span-full grid min-h-[calc(100vh-72px)] grid-cols-subgrid overflow-hidden">
            <IntroSection />
            <BauhausBlocks />
        </div>
    )
}

export default Hero
