import { useState } from 'react'
import { Drawer } from 'vaul'
import { cn } from '../../../utils/cn'
import { NAV_BAR_ITEMS } from './NavBar'
import NavButton from './NavButton'

const MobileNavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [hasAnimationEnded, setHasAnimationEnded] = useState(true)

    return (
        <>
            <div
                className={cn(
                    'bg-primary sticky top-0 z-20 col-span-full flex h-[72px] flex-row lg:hidden',
                    isOpen ? 'border-b-0' : 'border-b'
                )}
            >
                <NavButton
                    key={`nav-bar-main-mobile`}
                    className={cn(
                        'bg-secondary text-primary hover:bg-primary hover:text-primary-foreground flex-1 border-0 italic'
                    )}
                    href="ar."
                    onClick={() => {
                        const link = document.createElement('a')
                        link.href = '/cv.pdf'
                        link.download = 'cv.pdf'
                        document.body.appendChild(link)
                        link.click()
                        document.body.removeChild(link)
                    }}
                    label={'ar.'}
                />
                <NavButton
                    key={`nav-bar-mobile-menu`}
                    className={cn('bg-primary text-primary-foreground flex-1 border-0 italic')}
                    href="ar."
                    onClick={() => {
                        if (!hasAnimationEnded) {
                            return
                        }
                        setIsOpen((prev) => !prev)
                        setHasAnimationEnded(false)
                    }}
                >
                    {isOpen ? 'close' : 'menu'}
                </NavButton>
            </div>
            <Drawer.Root
                direction="right"
                open={isOpen}
                onOpenChange={setIsOpen}
                onAnimationEnd={() => setHasAnimationEnded(true)}
            >
                <Drawer.Portal>
                    <Drawer.Content
                        className="fixed top-[70px] bottom-0 z-10 flex w-dvw outline-none md:right-[30px] md:w-[calc(100vw-60px)]"
                        style={{ '--initial-transform': 'calc(100% + 30px)' } as React.CSSProperties}
                    >
                        <div className="bg-secondary flex h-full w-full grow flex-col p-5">
                            <div className="flex h-1/2 w-full flex-col justify-evenly">
                                {NAV_BAR_ITEMS.map((item, index) => (
                                    <NavButton
                                        key={`nav-bar-${index}`}
                                        href={item.toLowerCase()}
                                        label={item}
                                        className="text-primary w-full"
                                        onClick={() => {
                                            setIsOpen(false)
                                            setHasAnimationEnded(true)
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </Drawer.Content>
                </Drawer.Portal>
            </Drawer.Root>
        </>
    )
}

export default MobileNavBar
