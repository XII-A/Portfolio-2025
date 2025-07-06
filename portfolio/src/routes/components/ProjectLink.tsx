import type { Project } from '../../constants/projectList'
import { useSelectedProject } from '../../Providers/SelectedProject'
import { cn } from '../../utils/cn'

type Props = {
    item: Project
}

const ProjectLink = (props: Props) => {
    const { item } = props
    const { activeId } = useSelectedProject()

    return (
        <div
            id={`${item.id}-link`}
            key={`${item.id}-link`}
            className="group text-dynamic flex cursor-pointer items-center gap-5 text-neutral-500 uppercase transition-colors duration-300 hover:text-neutral-400 data-[selected=true]:font-bold data-[selected=true]:text-white"
            data-selected={activeId === item.id}
            onClick={() => {
                document.getElementById(`${item.id}-item`)?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                })
            }}
        >
            <span className="relative">
                <span
                    className={cn(
                        'absolute top-[-1px] left-[-8px] transform-gpu transition-opacity duration-300 will-change-[opacity]',
                        activeId === item.id ? 'opacity-100' : 'opacity-0'
                    )}
                >
                    {'{'}
                </span>
                N.{item.id.padStart(2, '0')}
                <span
                    className={cn(
                        'absolute top-[-1px] right-[-8px] transform-gpu transition-opacity duration-300 will-change-[opacity]',
                        activeId === item.id ? 'opacity-100' : 'opacity-0'
                    )}
                >
                    {'}'}
                </span>
            </span>
            <span>{item.name}</span>
        </div>
    )
}

export default ProjectLink
