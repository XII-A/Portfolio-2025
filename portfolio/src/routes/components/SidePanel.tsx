import { PROJECTS_LIST } from '../../constants/projectList'
import { useSelectedProject } from '../../Providers/SelectedProject'
import ProjectLink from './ProjectLink'

const SidePanel = () => {
    const { activeId } = useSelectedProject()

    return (
        <div className="sticky top-0 col-span-4 h-screen justify-center bg-black text-white">
            <div className="flex items-start justify-between p-6 text-white">
                <div className="flex flex-col gap-1">
                    {Object.values(PROJECTS_LIST).map((item) => (
                        <ProjectLink key={item.id} item={item} />
                    ))}
                </div>

                <div className="text-9xl">{activeId.padStart(2, '0')}</div>
            </div>
            <div className="w-full p-6 pb-0">
                <div className="h-px w-full bg-neutral-600" />
            </div>
        </div>
    )
}

export default SidePanel
