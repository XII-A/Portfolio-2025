import { createFileRoute } from '@tanstack/react-router'
import Hero from './components/Hero/Hero'
import NavBar from './components/NavBar/NavBar'

export const Route = createFileRoute('/')({
    component: Index
})

function Index() {
    return (
        <div className="bg-primary border-secondary mx-[30px] grid min-h-screen grid-cols-6 border-x">
            <NavBar />
            <Hero />
        </div>
    )
}
