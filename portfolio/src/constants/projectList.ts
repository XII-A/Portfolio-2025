export const PROJECTS_LIST = {
    '1': {
        id: '1',
        name: 'Slick ERP',
        nameToDisplay: ['Slick', 'ERP'],
        description: 'A comprehensive ERP system designed to streamline business processes for NGOs',
        bookMainColor: '#7C6CE5',
        bookSecondaryColor: '#2A224F',
        bookTextColor: '#FFFFFF',
        bookHeaderText: ['Slick', 'ERP'],
        timeline: 'JUL 2024 - PRESENT',
        bookCoverText: ['Turning Intricacy', 'into Simplicity', 'for NGOs']
    },
    '2': {
        id: '2',
        name: 'Slick Surveys',
        nameToDisplay: ['Slick', 'Surveys'],
        description:
            'An advanced survey platform that allows NGOs to create, distribute, and analyze surveys efficiently.',
        bookMainColor: '#FFB347',
        bookSecondaryColor: '#FF7F50',
        bookTextColor: '#FFFFFF',
        bookHeaderText: ['Slick', 'Surveys'],
        timeline: 'JUL 2024 - PRESENT',
        bookCoverText: ['Gathering Insights', 'Empowering NGOs', 'with Data']
    },
    '3': {
        id: '3',
        name: 'Procurement Management System',
        nameToDisplay: ['Procurement', 'Management'],
        description:
            'A robust procurement management system tailored for NGOs to manage their procurement processes effectively.',
        bookMainColor: '#4CAF50',
        bookSecondaryColor: '#2E7D32',
        bookTextColor: '#FFFFFF',
        bookHeaderText: ['Procurement', 'Management'],
        timeline: 'JUL 2024 - PRESENT',
        bookCoverText: ['Streamlining Procurement', 'for NGOs', 'with Efficiency']
    },
    '4': {
        id: '4',
        name: 'Bazerni',
        nameToDisplay: ['Bazerni', 'Real Estate'],
        description:
            'A real estate platform that connects buyers and sellers, offering a seamless property buying experience.',
        bookMainColor: '#2196F3',
        bookSecondaryColor: '#1565C0',
        bookTextColor: '#FFFFFF',
        bookHeaderText: ['Bazerni', 'Real Estate'],
        timeline: 'DEC 2024 - MAR 2025',
        bookCoverText: ['Connecting Buyers', 'and Sellers', 'Seamlessly']
    },
    '5': {
        id: '5',
        name: 'Toptalla',
        nameToDisplay: ['Toptalla', 'Business'],
        description:
            'A platform made for barbers and their clients, allowing easy appointment scheduling and management.',
        bookMainColor: '#E91E63',
        bookSecondaryColor: '#880E4F',
        bookTextColor: '#FFFFFF',
        bookHeaderText: ['Toptalla', 'Business'],
        timeline: 'JUL 2023 - APR 2024',
        bookCoverText: ['Barber Appointments', 'Made Simple', 'for Everyone']
    },
    '6': {
        id: '6',
        name: 'Fitness App',
        nameToDisplay: ['Fitness', 'App'],
        description:
            'A mobile application designed to help users track their fitness goals, workouts, and nutrition plans.',
        bookMainColor: '#00BCD4',
        bookSecondaryColor: '#006064',
        bookTextColor: '#FFFFFF',
        bookHeaderText: ['Fitness', 'App'],
        timeline: 'MAR 2024 - MAY 2024',
        bookCoverText: ['Achieve Your', 'Fitness Goals', 'Easily']
    }
} as const

export type Project = (typeof PROJECTS_LIST)[keyof typeof PROJECTS_LIST]

export type ProjectId = keyof typeof PROJECTS_LIST

export function getProjectById(id: keyof typeof PROJECTS_LIST) {
    return PROJECTS_LIST[id]
}
