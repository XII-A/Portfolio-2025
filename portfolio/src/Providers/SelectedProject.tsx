import type { ReactNode } from 'react'
import { createContext, useContext, useState } from 'react'
import type { ProjectId } from '../constants/projectList'

type ActiveId = ProjectId

interface SelectedProjectContextType {
    activeId: ActiveId
    setActiveId: (id: ActiveId) => void
}

const SelectedProjectContext = createContext<SelectedProjectContextType | undefined>(undefined)

interface SelectedProjectProviderProps {
    children: ReactNode
}

export function SelectedProjectProvider({ children }: SelectedProjectProviderProps) {
    const [activeId, setActiveId] = useState<ActiveId>('1')

    return (
        <SelectedProjectContext.Provider value={{ activeId, setActiveId }}>{children}</SelectedProjectContext.Provider>
    )
}

export function useSelectedProject() {
    const context = useContext(SelectedProjectContext)
    if (context === undefined) {
        throw new Error('useSelectedProject must be used within a SelectedProjectProvider')
    }
    return context
}
