import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createFileRoute('/')({
    component: Index
})

const items = {
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
}

function Index() {
    return (
        <div className="grid grid-cols-10 font-mono">
            <div className="col-span-6 bg-gray-500">
                {Object.values(items).map((item) => (
                    <div className="flex h-screen items-center justify-center">
                        <div key={item.id} className="size-1/2 rounded bg-white p-4 shadow">
                            <h2 className="text-xl font-bold">{item.name}</h2>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="sticky top-0 col-span-4 h-screen justify-center bg-black text-white">
                <div className="flex items-start justify-between p-6 text-white">
                    <div className="flex flex-col gap-1">
                        {Object.values(items).map((item, index) => (
                            <div
                                key={`${item.id}-link`}
                                className="group flex items-center gap-4 text-[10.4px] text-neutral-500 data-[selected=true]:font-bold data-[selected=true]:text-white"
                                data-selected={index === 0 ? 'true' : 'false'}
                            >
                                <span className="relative before:absolute before:top-[-1px] before:left-[-8px] group-data-[selected=true]:before:content-['{'] after:absolute after:top-[-1px] after:right-[-8px] group-data-[selected=true]:after:content-['}']">
                                    N.{(index + 1).toString().padStart(2, '0')}
                                </span>
                                <span>{item.name}</span>
                            </div>
                        ))}
                    </div>

                    <div className="text-9xl">01</div>
                </div>
                <div className="w-full p-6 pb-0">
                    <div className="h-px w-full bg-neutral-600" />
                </div>
            </div>
        </div>
    )
}
