const OldCassetteTape = () => {
    // colors:
    // bg: #d3d0c7,
    // screws: main: #2F3031, sec: #676863
    return (
        <>
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
            {/* Cd Player */}
            <div className="col-span-7 bg-[#E36228]">CD Player</div>
            {/* Needle */}
            <div className="col-span-3 flex flex-col items-center justify-center">
                {/* plus icon */}
                <div className="text-3xl">+</div>

                {/* needle holder */}
                <div className="inset-shadow-primary-foreground/50 size-16 rounded-full p-2 ring inset-shadow-sm">
                    {/* <div className="bg-primary-foreground shadow-primary-foreground h-full w-full rounded-full border drop-shadow-lg"></div> */}
                </div>
                {/* minus icon */}
                <div className="text-3xl">-</div>
            </div>
        </>
    )
}

const TurnTable = () => {
    return <div className="relative grid h-full w-full grid-cols-10 overflow-hidden bg-[#d3d0c7]"></div>
}

export default TurnTable
