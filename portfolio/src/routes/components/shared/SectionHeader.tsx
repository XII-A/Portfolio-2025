interface SectionHeaderProps {
    title: string
    subtitle?: string
    legend?: {
        label: string
        color: string
    }[]
}

const SectionHeader = ({ title, subtitle, legend }: SectionHeaderProps) => {
    return (
        <div className="col-span-full flex h-36 max-h-36 items-center justify-center border-b py-4">
            <div className="text-center">
                <div className="mb-2 text-4xl font-bold">{title}</div>
                {subtitle && <div className="text-lg font-medium">{subtitle}</div>}
                {legend && (
                    <div className="mt-4 flex justify-center space-x-6 text-sm">
                        {legend.map((item, index) => (
                            <div key={index} className="flex items-center">
                                <div className="mr-2 h-4 w-4" style={{ backgroundColor: item.color }}></div>
                                <span>{item.label}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default SectionHeader
