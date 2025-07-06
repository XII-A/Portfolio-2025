import { createRootRoute, Outlet } from '@tanstack/react-router'
import { SelectedProjectProvider } from '../Providers/SelectedProject'

export const Route = createRootRoute({
    component: () => (
        <SelectedProjectProvider>
            <Outlet />
        </SelectedProjectProvider>
    )
})
