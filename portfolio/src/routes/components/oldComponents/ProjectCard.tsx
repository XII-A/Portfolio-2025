import { useInView } from 'motion/react'
import { useEffect, useRef } from 'react'
import type { Project } from '../../../constants/projectList'
import { useSelectedProject } from '../../../Providers/SelectedProject'
import Book from './Book'

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
        <Book
            ref={itemRef}
            mainColor={item.bookMainColor}
            secondaryColor={item.bookSecondaryColor}
            title={item.bookCoverText}
            itemId={item.id}
            textColor={item.bookTextColor}
            bookHeaderText={item.bookHeaderText}
            timeLine={item.timeline}
        >
            {item.id === '1' && (
                <div className="flex h-full w-full">
                    <img src="./1BookPic.svg" alt="Slick ERP img" className="mt-auto w-full rounded-t-md" />
                </div>
            )}
        </Book>
    )
}

export default ProjectCard
