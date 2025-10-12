import { createFileRoute } from '@tanstack/react-router'
import AboutMe from './components/About/AboutMe'
import SkillsSection from './components/About/SkillsSection'
import WorkExperience from './components/About/WorkExperience'
import Hero from './components/Hero/Hero'
import NavBar from './components/NavBar/NavBar'

export const Route = createFileRoute('/')({
    component: Index
})

function Index() {
    return (
        <div className="bg-primary border-secondary mx-[30px] grid min-h-screen grid-cols-6 border-x p-0">
            <NavBar />
            <Hero />
            <AboutMe />
            <SkillsSection />
            <WorkExperience />
        </div>
    )
}
