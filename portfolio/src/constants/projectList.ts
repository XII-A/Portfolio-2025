export const PROJECTS_LIST = {
    '1': {
        id: '1',
        name: 'Slick ERP',
        description: 'A comprehensive ERP system designed to streamline business processes for NGOs'
    },
    '2': {
        id: '2',
        name: 'Slick Surveys',
        description:
            'An advanced survey platform that allows NGOs to create, distribute, and analyze surveys efficiently.'
    },
    '3': {
        id: '3',
        name: 'Procurement Management System',
        description:
            'A robust procurement management system tailored for NGOs to manage their procurement processes effectively.'
    },
    '4': {
        id: '4',
        name: 'Bazerni',
        description:
            'A real estate platform that connects buyers and sellers, offering a seamless property buying experience.'
    },
    '5': {
        id: '5',
        name: 'Toptalla',
        description:
            'A platform made for barbers and their clients, allowing easy appointment scheduling and management.'
    },
    '6': {
        id: '6',
        name: 'Fitness App',
        description:
            'A mobile application designed to help users track their fitness goals, workouts, and nutrition plans.'
    }
} as const

export type Project = (typeof PROJECTS_LIST)[keyof typeof PROJECTS_LIST]

export type ProjectId = keyof typeof PROJECTS_LIST

export function getProjectById(id: keyof typeof PROJECTS_LIST) {
    return PROJECTS_LIST[id]
}
