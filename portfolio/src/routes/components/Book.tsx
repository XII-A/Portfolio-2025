import React from 'react'

type Props = {
    ref: React.RefObject<HTMLDivElement>
    mainColor: string
    secondaryColor: string
    textColor: string
    title: readonly string[]
    itemId: string
    bookHeaderText: readonly string[]
    timeLine: string
    children?: React.ReactNode
}

const Book = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
    const { mainColor, secondaryColor, title, itemId, textColor, bookHeaderText, timeLine, children } = props

    return (
        <div
            ref={ref}
            className="relative flex h-[637px] w-[460px] justify-center rounded-l-md rounded-r-[52px]"
            style={{ backgroundColor: mainColor, color: textColor }}
            id={`${itemId}-item`}
        >
            {/* main strip */}
            <div
                className="absolute left-0 h-full w-[42px] rounded-l-sm opacity-95"
                style={{ backgroundColor: secondaryColor }}
            />

            {/* small strip */}
            <div
                className="absolute left-0 h-full w-[12px] rounded-l-sm shadow-[1px_0px_4px_0px_rgba(0,0,0,0.5)]"
                style={{ backgroundColor: secondaryColor }}
            />

            {/* Book Cover */}
            <div className="flex h-full w-[330px] flex-col items-center gap-4 pt-5">
                {/* Book Header */}
                <div className="relative flex h-16 w-full shrink-0 items-center justify-between">
                    {/* logo & name */}
                    <div className="flex items-center gap-2">
                        <img src={`./${itemId}Logo.svg`} alt={`${itemId} logo`} />

                        <div className="leading-5">
                            {bookHeaderText.map((word, index) => (
                                <h1
                                    className="text-2xl leading-5 font-medium uppercase"
                                    key={`${itemId}-company-title-${index}`}
                                >
                                    {word}
                                </h1>
                            ))}
                        </div>
                    </div>

                    {/* timeline */}
                    <div className="text-xs font-medium uppercase">{timeLine}</div>

                    {/* divider */}
                    <div
                        className="absolute bottom-0 left-0 h-px w-full rounded-2xl"
                        style={{ backgroundColor: textColor }}
                    />
                </div>

                {/* Book Title */}
                <div className="flex w-full flex-col">
                    {title.map((word, index) => (
                        <div
                            className="text-4xl leading-normal font-bold capitalize text-shadow-lg"
                            key={`${itemId}-title-${index}`}
                        >
                            {word}
                        </div>
                    ))}
                </div>

                {children}
            </div>
        </div>
    )
})

export default Book
