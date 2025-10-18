import { createFileRoute } from '@tanstack/react-router'
import AboutMe from './components/About/AboutMe'
import ContactFooter from './components/Contact/ContactFooter'
import Hero from './components/Hero/Hero'
import NavBar from './components/NavBar/NavBar'
import SkillsSection from './components/Skills/SkillsSection'
import WorkExperience from './components/WorkExperience/WorkExperience'

export const Route = createFileRoute('/')({
    component: Index
})

function Index() {
    return (
        <div className="bg-primary border-secondary grid min-h-screen grid-cols-6 p-0 md:mx-[30px] md:border-x">
            <NavBar />
            <Hero />
            <AboutMe />
            <SkillsSection />
            <WorkExperience />
            <ContactFooter />
        </div>
    )
}
