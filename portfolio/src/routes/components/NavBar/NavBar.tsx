import { cn } from '../../../utils/cn'
import NavButton from './NavButton'

const NAV_BAR_ITEMS = ['Home', 'About', 'Skills', 'Projects', 'Contact']

const NavBar = () => {
    return (
        <div className="border-secondary col-span-full grid h-[72px] grid-cols-subgrid border-b">
            <NavButton
                key={`nav-bar-main`}
                className={cn('bg-secondary text-primary hover:bg-primary hover:text-primary-foreground italic')}
                href="ar."
                label={'ar.'}
            />

            {NAV_BAR_ITEMS.map((item, index) => (
                <NavButton
                    key={`nav-bar-${index}`}
                    className={cn(
                        'hover:bg-secondary hover:text-primary',
                        'last:bg-accent last:text-accent-foreground last:hover:bg-accent-secondary'
                    )}
                    href={item.toLowerCase()}
                    label={item}
                />
            ))}
        </div>
    )
}

export default NavBar
