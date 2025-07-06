import { createFileRoute } from '@tanstack/react-router'
import { PROJECTS_LIST } from '../constants/projectList'
import ProjectCard from './components/ProjectCard'
import SidePanel from './components/SidePanel'

export const Route = createFileRoute('/')({
    component: Index
})

function Index() {
    return (
        <div className="grid grid-cols-10">
            <div className="col-span-6 bg-gray-500">
                {Object.values(PROJECTS_LIST).map((item) => (
                    <div
                        className="flex h-screen items-center justify-center"
                        key={item.id}
                        style={{
                            backgroundColor: `hsl(${(parseInt(item.id, 36) * 137) % 360}, 60%, 80%)`
                        }}
                    >
                        <ProjectCard item={item} />
                    </div>
                ))}
            </div>

            <SidePanel />
        </div>
    )
}
