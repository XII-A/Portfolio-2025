import { cn } from '../../../utils/cn'

interface DefaultProps {
    href: string
    className: string
    onClick?: () => void
}

type Props =
    | (DefaultProps & {
          label: string
      })
    | (DefaultProps & {
          children: React.ReactNode
      })

const NavButton = (props: Props) => {
    const { href, className, onClick } = props

    const handleClick = () => {
        if (onClick) {
            onClick()
        }

        // Handle smooth scrolling for navigation items
        if (href !== 'ar.' && href !== 'close' && href !== 'menu') {
            const element = document.getElementById(href)
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            }
        }
    }

    return (
        <button
            className={cn(
                'text-primary-foreground border-secondary flex cursor-pointer items-center justify-center border-s text-(length:--nav-button-font-size) font-bold transition-colors duration-300',
                className
            )}
            onClick={handleClick}
        >
            {'label' in props ? props.label : props.children}
        </button>
    )
}

export default NavButton
