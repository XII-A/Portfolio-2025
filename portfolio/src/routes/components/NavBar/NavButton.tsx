import { cn } from '../../../utils/cn'

type Props = {
    label: string
    href: string
    className: string
}

const NavButton = (props: Props) => {
    const { label, href, className } = props
    return (
        <button
            className={cn(
                'text-primary-foreground border-secondary flex cursor-pointer items-center justify-center border-e text-(length:--nav-button-font-size) font-bold transition-colors duration-300',
                className
            )}
            onClick={() => {
                console.log(href)
            }}
        >
            {label}
        </button>
    )
}

export default NavButton
