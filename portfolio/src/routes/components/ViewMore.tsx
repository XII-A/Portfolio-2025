import * as motion from 'motion/react-client'

const ViewMore = () => {
    return (
        <motion.div className="flex cursor-pointer flex-col gap-1.5" initial="rest" whileHover="hover">
            <div className="flex w-full items-center justify-between text-white">
                <div>View More</div>
                <div>{`->`}</div>
            </div>
            <div className="relative">
                <div className="h-px w-full bg-neutral-600" />
                <motion.div
                    className="absolute top-0 left-0 h-px bg-white"
                    variants={{
                        rest: {
                            scaleX: 0,
                            transformOrigin: 'right',
                            transition: { duration: 0.6, ease: 'easeOut' }
                        },
                        hover: {
                            scaleX: 1,
                            transformOrigin: 'left',
                            transition: { duration: 0.6, ease: 'easeIn' }
                        }
                    }}
                    style={{ width: '100%' }}
                />
            </div>
        </motion.div>
    )
}

export default ViewMore
