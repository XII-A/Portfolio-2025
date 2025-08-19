import { createRootRoute, Outlet } from '@tanstack/react-router'
import ReactLenis, { type LenisRef } from 'lenis/react'
import { cancelFrame, frame } from 'motion'
import { useEffect, useRef } from 'react'

export const Route = createRootRoute({
    component: RootLayout
})

function RootLayout() {
    const lenisRef = useRef<LenisRef>(null)

    useEffect(() => {
        function update(data: { timestamp: number }) {
            const time = data.timestamp
            lenisRef.current?.lenis?.raf(time)
        }

        frame.update(update, true)

        return () => cancelFrame(update)
    }, [])

    return (
        <>
            <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
            <Outlet />
        </>
    )
}
