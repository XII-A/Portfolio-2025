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
    return (
        <button
            className={cn(
                'text-primary-foreground border-secondary flex cursor-pointer items-center justify-center border-s text-(length:--nav-button-font-size) font-bold transition-colors duration-300',
                className
            )}
            onClick={onClick}
        >
            {'label' in props ? props.label : props.children}
        </button>
    )
}

export default NavButton
