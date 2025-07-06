import { memo } from 'react'
import { getProjectById, PROJECTS_LIST } from '../../constants/projectList'
import { useSelectedProject } from '../../Providers/SelectedProject'
import ProjectLink from './ProjectLink'
import ViewMore from './ViewMore'

const SidePanel = () => {
    const { activeId } = useSelectedProject()

    return (
        <div className="sticky top-0 col-span-4 flex h-screen flex-col bg-black p-6 text-white">
            <SidePanelHeader />

            <SidePanelFooter />
        </div>
    )
}

export default SidePanel

const SidePanelFooter = memo(() => {
    const { activeId } = useSelectedProject()
    return (
        <div className="flex flex-col gap-4">
            <ViewMore />
            <div className="text-7xl font-bold text-white">
                {getProjectById(activeId)?.nameToDisplay.map((word, index) => (
                    <div key={`word-${index}`}>{word}</div>
                ))}
            </div>
        </div>
    )
})

const SidePanelHeader = memo(() => {
    const { activeId } = useSelectedProject()

    return (
        <div className="grow">
            <div className="flex items-start justify-between text-white">
                <div className="flex flex-col gap-1">
                    {Object.values(PROJECTS_LIST).map((item) => (
                        <ProjectLink key={item.id} item={item} />
                    ))}
                </div>

                <div className="text-9xl font-medium">{activeId.padStart(2, '0')}</div>
            </div>

            <div className="w-full py-6 pb-0">
                <div className="h-px w-full bg-neutral-600" />
            </div>
        </div>
    )
})
