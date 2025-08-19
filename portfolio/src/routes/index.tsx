import { createFileRoute } from '@tanstack/react-router'
import NavBar from './components/NavBar/NavBar'

export const Route = createFileRoute('/')({
    component: Index
})

function Index() {
    return (
        <div className="bg-primary border-secondary mx-[76px] grid min-h-screen grid-cols-6 border-x">
            <NavBar />
        </div>
    )
}
