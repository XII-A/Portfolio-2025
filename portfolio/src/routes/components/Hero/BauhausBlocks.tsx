import { AtomIcon, CircuitryIcon, FlaskIcon, LightbulbIcon, SparkleIcon } from '@phosphor-icons/react'

const BauhausBlocks = () => {
    return (
        <div className="text-primary-foreground col-span-full grid h-full grid-cols-5 grid-rows-4 border-s-0 border-t lg:col-span-3 lg:border-s lg:border-t-0 lg:border-b-0">
            {/* B */}
            <div className="border-primary-foreground relative col-span-1 grid place-items-center overflow-visible border border-s-0 border-e-0 border-t-0">
                <div className="border-primary-foreground flex aspect-square w-full items-center justify-center rounded-full border-3 border-dashed">
                    <CircuitryIcon className="size-16 lg:size-20" weight="duotone" />
                </div>

                {/* circle at the center right */}
                <div
                    className="bg-primary-foreground absolute end-0 bottom-1/2 z-10 size-3 rounded-full lg:size-4"
                    style={{
                        transform: 'translateY(50%) translateX(50%)'
                    }}
                />
            </div>

            {/* 1 col 2 rows down right */}
            <div className="border-primary-foreground col-span-1 row-span-2 grid grid-rows-2 border border-t-0">
                {/* line connecting  the two circles */}

                {/* first circle */}
                <div className="relative h-full w-full">
                    {/* line from dot to center */}
                    <div className="bg-primary-foreground absolute bottom-1/2 h-0.5 w-1/2" />

                    {/* line from center to bottom */}
                    <div className="bg-primary-foreground absolute end-1/2 h-full w-0.5 translate-y-1/2" />
                </div>

                {/* second circle */}
                <div className="relative h-full w-full">
                    {/* line from dot to center */}
                    <div className="bg-primary-foreground absolute end-0 bottom-1/2 h-0.5 w-1/2" />

                    {/* line from center to bottom */}
                    <div className="bg-primary-foreground absolute end-1/2 h-1/2 w-0.5 translate-y-full" />
                </div>
            </div>

            {/* 2 cols 1 row (shipping) */}
            <div className="border-primary-foreground col-span-3 overflow-hidden border border-s-0 border-e-0 border-t-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="hidden h-full w-full lg:block">
                    <g>
                        <text
                            y="50%"
                            x="50%"
                            textLength="436"
                            lengthAdjust="spacingAndGlyphs"
                            className="fill-current"
                            fontSize="150"
                            textAnchor="middle"
                            dominantBaseline="middle"
                        >
                            creativity
                        </text>
                    </g>
                </svg>
                <div className="text-primary-foreground flex h-full items-center justify-center overflow-hidden text-5xl font-medium lg:hidden">
                    creativity
                </div>
            </div>

            {/* 1 col 1 row  (star)*/}
            <div className="border-primary-foreground col-span-1 grid place-items-center overflow-hidden border border-s-0 border-e-0 border-t-0">
                <LightbulbIcon className="size-16 lg:size-20" weight="duotone" />
            </div>

            {/* 1 col 1 row  (U)*/}
            <div className="border-primary-foreground relative col-span-1 row-span-1 grid place-items-center overflow-visible border border-s-0 border-t-0">
                <div className="border-primary-foreground flex aspect-square w-full items-center justify-center rounded-full border-3 border-dashed">
                    <AtomIcon className="size-16 lg:size-20" weight="duotone" />
                </div>
                {/* circle at the center left */}
                <div
                    className="bg-primary-foreground absolute start-0 bottom-1/2 z-10 size-3 rounded-full lg:size-4"
                    style={{
                        transform: 'translateY(50%) translateX(-50%)'
                    }}
                />
            </div>

            {/* 1 col 1 row  (I)*/}
            <div className="border-primary-foreground col-span-1 row-span-1 grid place-items-center overflow-hidden border border-s-0 border-t-0">
                <FlaskIcon className="size-16 lg:size-20" weight="duotone" />
            </div>

            {/* 1 col 2 rows  (↓) */}
            <div className="border-primary-foreground relative col-span-1 row-span-2 border border-s-0 border-e-0 border-t-0">
                {/* circle at top center */}
                <div
                    className="bg-primary-foreground absolute top-0 left-1/2 z-10 size-3 rounded-full lg:size-4"
                    style={{
                        transform: 'translateX(-55%) translateY(-50%)'
                    }}
                />

                <div className="border-primary-foreground absolute h-[75%] w-1/2 border-r-2 border-b-2" />

                <div className="bg-primary-foreground absolute end-1/2 bottom-0 h-[25%] w-0.5" />
            </div>

            <div className="border-primary-foreground col-span-4 row-span-2 overflow-hidden border border-s-0 border-t-0 border-b-0 p-4">
                {/* your website */}
                <div className="flex h-full w-full flex-col items-start justify-center">
                    <div className="bg-primary-foreground text-primary w-full px-2 py-1 text-sm font-medium">
                        Your Website
                    </div>
                    <div className="flex h-full w-full items-center justify-center border">Hello World</div>
                </div>
            </div>

            {/* 1 col 1 row  (D)*/}
            <div className="border-primary-foreground relative col-span-1 col-start-5 row-span-1 grid place-items-start">
                <div className="border-primary-foreground bg-primary flex aspect-square w-full items-center justify-center rounded-full border-3 border-dashed">
                    <SparkleIcon className="size-16 lg:size-20" weight="duotone" />
                </div>
                <div
                    className="bg-primary-foreground absolute end-1/2 top-0 size-3 rounded-full lg:size-4"
                    style={{
                        transform: 'translateY(-50%) translateX(45%)'
                    }}
                />
            </div>
        </div>
    )
}

export default BauhausBlocks
