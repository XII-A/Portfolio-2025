import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
    component: About
})

function About() {
    return (
        <div className="h-screen bg-gradient-to-b from-blue-300 to-blue-500 font-mono font-extrabold text-black">
            Hello from About!
        </div>
    )
}
