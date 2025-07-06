import { useInView } from 'motion/react'
import { useEffect, useRef } from 'react'
import type { Project } from '../../constants/projectList'
import { useSelectedProject } from '../../Providers/SelectedProject'

type Props = {
    item: Project
}

const ProjectCard = (props: Props) => {
    const { item } = props
    const itemRef = useRef<HTMLDivElement>(null)
    const { setActiveId } = useSelectedProject()

    const isInView = useInView(itemRef, {
        amount: 'all'
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

export default ProjectCard
