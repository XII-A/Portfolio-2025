import { cn } from '../../../utils/cn'
import MobileNavBar from './MobileNavBar'
import NavButton from './NavButton'

export const NAV_BAR_ITEMS = ['Home', 'About', 'Skills', 'Projects', 'Contact']

const NavBar = () => {
    return (
        <>
            <div className="relative col-span-full hidden h-[72px] grid-cols-subgrid rounded-none lg:grid">
                {/* border-b */}
                <div className={cn('bg-secondary absolute start-0 end-0 bottom-0 h-px w-[calc(100%+0.25px)]')} />
                <NavButton
                    key={`nav-bar-main`}
                    className={cn(
                        'bg-secondary text-primary   border-s-0 ',
                        'group'
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
                >
                    <span className="flip-container">
                        <span className="flip-face italic">ar.</span>
                        <span className="flip-face flip-back italic">cv.</span>
                    </span>
                </NavButton>

                {NAV_BAR_ITEMS.map((item, index) => (
                    <NavButton
                        key={`nav-bar-${index}`}
                        className={cn(
                            'hover:bg-secondary hover:text-primary',
                            'last:bg-accent last:text-accent-foreground last:hover:bg-accent-secondary rounded-none last:w-[calc(100%+0.25px)]'
                        )}
                        href={item.toLowerCase()}
                        label={item}
                    />
                ))}
            </div>
            <MobileNavBar />
        </>
    )
}

export default NavBar
