import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { cn } from '../utils/cn'
import Item from './components/Item'

export const Route = createFileRoute('/')({
    component: Index
})

export const items = {
    '1': {
        id: '1',
        name: 'Item 1',
        description: 'This is the first item.'
    },
    '2': {
        id: '2',
        name: 'Item 2',
        description: 'This is the second item.'
    },
    '3': {
        id: '3',
        name: 'Item 3',
        description: 'This is the third item.'
    }
} as const

function Index() {
    const [activeId, setActiveId] = useState<keyof typeof items>('1')

    return (
        <div className="grid grid-cols-10 font-mono">
            <div className="col-span-6 bg-gray-500">
                {Object.values(items).map((item) => (
                    <div className="flex h-screen items-center justify-center" key={item.id}>
                        <Item item={item} setActiveId={setActiveId} />
                    </div>
                ))}
            </div>

            <div className="sticky top-0 col-span-4 h-screen justify-center bg-black text-white">
                <div className="flex items-start justify-between p-6 text-white">
                    <div className="flex flex-col gap-1">
                        {Object.values(items).map((item, index) => (
                            <div
                                id={`${item.id}-link`}
                                key={`${item.id}-link`}
                                className="group flex cursor-pointer items-center gap-5 text-[10.4px] text-neutral-500 transition-colors duration-300 hover:text-neutral-400 data-[selected=true]:font-bold data-[selected=true]:text-white"
                                data-selected={activeId === item.id}
                                onClick={() => {
                                    document.getElementById(`${item.id}-item`)?.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'center'
                                    })
                                }}
                            >
                                <span className="relative">
                                    <span
                                        className={cn(
                                            'absolute top-[-1px] left-[-8px] transform-gpu transition-opacity duration-300 will-change-[opacity]',
                                            activeId === item.id ? 'opacity-100' : 'opacity-0'
                                        )}
                                    >
                                        {'{'}
                                    </span>
                                    N.{(index + 1).toString().padStart(2, '0')}
                                    <span
                                        className={cn(
                                            'absolute top-[-1px] right-[-8px] transform-gpu transition-opacity duration-300 will-change-[opacity]',
                                            activeId === item.id ? 'opacity-100' : 'opacity-0'
                                        )}
                                    >
                                        {'}'}
                                    </span>
                                </span>
                                <span>{item.name}</span>
                            </div>
                        ))}
                    </div>

                    <div className="text-9xl">{activeId.padStart(2, '0')}</div>
                </div>
                <div className="w-full p-6 pb-0">
                    <div className="h-px w-full bg-neutral-600" />
                </div>
            </div>
        </div>
    )
}
