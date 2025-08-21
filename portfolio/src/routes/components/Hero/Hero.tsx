import IntroSection from './IntroSection'

const Hero = () => {
    return (
        <div className="col-span-full grid h-[calc(100vh-72px)] grid-cols-subgrid">
            <IntroSection />

            <div className="text-primary-foreground col-span-3 grid h-full grid-cols-5 grid-rows-4 border-s">
                {/* B */}
                <div className="border-primary-foreground col-span-1 overflow-hidden border border-s-0 border-e-0 border-t-0">
                    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" className="block h-full w-full">
                        <text
                            x="50"
                            y="63%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize="150"
                            className="fill-current"
                        >
                            B
                        </text>
                    </svg>
                </div>

                {/* 1 col 2 rows {} */}
                <div className="border-primary-foreground col-span-1 row-span-2 border border-t-0">
                    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" className="block h-full w-full">
                        <text
                            x="50"
                            y="63%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize="150"
                            className="fill-current"
                        >
                            {'{}'}
                        </text>
                    </svg>
                </div>

                {/* 2 cols 1 row (shipping) */}
                <div className="border-primary-foreground col-span-3 border border-s-0 border-e-0 border-t-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
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
                                shipping
                            </text>
                        </g>
                    </svg>
                </div>

                {/* 1 col 1 row  (star)*/}
                <div className="border-primary-foreground col-span-1 overflow-hidden border border-s-0 border-e-0 border-t-0">
                    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" className="block h-full w-full">
                        <text
                            x="50"
                            y="63%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize="150"
                            className="fill-current"
                        >
                            ✴
                        </text>
                    </svg>
                </div>

                {/* 1 col 1 row  (U)*/}
                <div className="border-primary-foreground col-span-1 row-span-1 overflow-hidden border border-s-0 border-e-0 border-t-0">
                    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" className="block h-full w-full">
                        <text
                            x="50"
                            y="63%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize="150"
                            className="fill-current"
                        >
                            U
                        </text>
                    </svg>
                </div>

                {/* 1 col 1 row  (I)*/}
                <div className="border-primary-foreground col-span-1 row-span-1 overflow-hidden border border-s-0 border-t-0">
                    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" className="block h-full w-full">
                        <text
                            x="50"
                            y="63%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize="150"
                            className="fill-current"
                        >
                            I
                        </text>
                    </svg>
                </div>

                {/* 1 col 2 rows  (↓) */}
                <div className="border-primary-foreground col-span-1 row-span-2 border border-s-0 border-e-0 border-t-0">
                    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" className="block h-full w-full">
                        <text
                            x="50"
                            y="63%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize="150"
                            className="fill-current"
                        >
                            ↓
                        </text>
                    </svg>
                </div>

                {/* 1 col 1 row  (L)*/}
                <div className="border-primary-foreground col-span-1 row-span-1 overflow-hidden border border-s-0 border-e-0 border-t-0">
                    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" className="block h-full w-full">
                        <text
                            x="50"
                            y="63%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize="150"
                            className="fill-current"
                        >
                            L
                        </text>
                    </svg>
                </div>

                {/* 2 col 2 rows  (--__--)*/}
                <div className="border-primary-foreground col-span-3 row-span-2 overflow-hidden border border-t-0 border-b-0">
                    <svg preserveAspectRatio="xMidYMid meet" className="block h-full w-full">
                        <text
                            x="50%"
                            y="50%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize="150"
                            className="fill-current"
                        >
                            {'--__--'}
                        </text>
                    </svg>
                </div>

                {/* 1 col 1 row  (D)*/}
                <div className="border-primary-foreground col-span-1 col-start-5 row-span-1 overflow-hidden border border-s-0 border-e-0 border-t-0">
                    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" className="block h-full w-full">
                        <text
                            x="50"
                            y="63%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize="150"
                            className="fill-current"
                        >
                            D
                        </text>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Hero
