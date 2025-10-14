import { GithubLogoIcon, LinkedinLogoIcon, ThreadsLogoIcon, XLogoIcon } from '@phosphor-icons/react'
import { cn } from '../../../utils/cn'

const socialMedia = [
    {
        Icon: LinkedinLogoIcon,
        url: 'https://www.linkedin.com/in/dev-abdulrazak-armanazi',
        color: `oklch(0.5313 0.1301 243.65)`
    },
    {
        Icon: GithubLogoIcon,
        url: 'https://github.com/dev-abdulrazak-armanazi',
        color: `oklch(0.4097 0.2064 289.57)`
    },
    {
        Icon: XLogoIcon,
        url: 'https://twitter.com/dev-abdulrazak-armanazi',
        color: `#000`
    },
    {
        Icon: ThreadsLogoIcon,
        url: 'https://www.instagram.com/dev-abdulrazak-armanazi',
        color: `oklch(0.6209 0.2607 345.83)`
    }
]

const ContactFooter = () => {
    return (
        <div className="col-span-full">
            <div className="text-primary-foreground bg-primary relative z-10 col-span-full grid grid-cols-6 border-t pt-[72px]">
                <div className="col-span-1 mt-4 ps-8">
                    <div className="text-lg font-bold">Get in touch:</div>
                </div>
                <div className="col-span-5">
                    <div className="text-[100px] leading-none font-bold whitespace-pre-wrap">
                        If you'd like to chat, you can reach me at:
                    </div>

                    <div className="text-accent mt-10 text-8xl font-bold">ar.armanazi@gmail.com</div>
                </div>
                <div className="relative col-span-full mt-10 grid grid-cols-4 border-y">
                    {socialMedia.map(({ Icon, url, color }) => (
                        <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={
                                {
                                    '--hover-color': `${color}`
                                } as React.CSSProperties
                            }
                            className={cn(
                                'text-primary-foreground group flex items-center justify-center border-e p-4 transition-colors duration-300 last:border-e-0',
                                `hover:bg-(--hover-color)`
                            )}
                            key={url}
                        >
                            <Icon
                                className="size-10 transition-colors duration-300 group-hover:text-white"
                                weight="regular"
                            />
                        </a>
                    ))}
                </div>
            </div>

            <div className="bg-accent-foreground sticky bottom-0 left-0 z-0 col-span-full flex h-40 w-full items-center justify-center">
                <div className="text-primary relative flex h-full w-full items-start justify-end overflow-hidden px-12 py-12 text-right">
                    <h2 className="text-primary absolute bottom-0 left-0 translate-y-1/3 text-[80px] italic sm:text-[192px]">
                        ar.
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default ContactFooter
