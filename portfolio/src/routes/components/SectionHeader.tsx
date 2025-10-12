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
        <div className="col-span-full flex items-center justify-center border-b py-4 max-h-36 h-36">
            <div className="text-center">
                <div className="text-4xl font-bold mb-2">{title}</div>
                {subtitle && <div className="text-lg font-medium">{subtitle}</div>}
                {legend && (
                    <div className="flex justify-center space-x-6 mt-4 text-sm">
                        {legend.map((item, index) => (
                            <div key={index} className="flex items-center">
                                <div 
                                    className="w-4 h-4 mr-2" 
                                    style={{backgroundColor: item.color}}
                                ></div>
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
