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
                            backgroundImage: `url(./SlickErp.png)`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
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
