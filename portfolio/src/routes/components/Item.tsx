import { useInView } from 'motion/react'
import { useEffect, useRef } from 'react'
import type { items } from '..'
type Props = {
    item: (typeof items)[keyof typeof items]
    setActiveId: (id: keyof typeof items) => void
}

const Item = (props: Props) => {
    const { item, setActiveId } = props
    const itemRef = useRef<HTMLDivElement>(null)

    const isInView = useInView(itemRef, {
        amount: 'all'
        // margin: '50px 0px -50% 0px'
    })

    useEffect(() => {
        if (isInView) {
            setActiveId(item.id)
        }
    }, [isInView, item.id, setActiveId])

    return (
        <div ref={itemRef} className="size-1/2 rounded bg-white p-4 shadow" id={`${item.id}-item`}>
            <h2 className="text-xl font-bold">{item.name}</h2>
            <p>{item.description}</p>
        </div>
    )
}

export default Item
