import {Degree} from '../app.constants'

export interface Department {
    name: string
    degrees: Degree[]
}

export const DEPARTMENTS1: Department[] = [
    {
        name: 'College of Arts and Sciences',
        degrees: [
            {
                name: 'Bachelor of Arts',
                courses: [
                    {
                        name: 'Communication',
                        majors: [],
                    },
                    {
                        name: 'English Language Studies',
                        majors: [],
                    },
                    {
                        name: 'Political Science',
                        majors: [],
                    },
                    {
                        name: '',
                        majors: ['Political Science and Public Administration'],
                    },
                ],
            },
            {
                name: 'Bachelor of Science',
                courses: [
                    {
                        name: 'Biology',
                        majors: [],
                    },
                    {
                        name: 'Biology with specialization in Microbiology',
                        majors: [],
                    },
                    {
                        name: 'Chemistry',
                        majors: [],
                    },
                    {
                        name: 'Psychology',
                        majors: [],
                    },
                    {
                        name: 'Social Work',
                        majors: [],
                    },
                    {
                        name: '',
                        majors: [' Mathematics'],
                    },
                ],
            },
        ],
    },
    {
        name: 'College of Computer Studies',
        degrees: [
            {
                name: 'Bachelor of Science',
                courses: [
                    {
                        name: 'Computer Science',
                        majors: [],
                    },
                    {
                        name: 'Digital Media and Interactive Arts',
                        majors: [],
                    },
                    {
                        name: 'Information Technology',
                        majors: [],
                    },
                    {
                        name: ' Library and Information Science',
                        majors: [],
                    },
                ],
            },
        ],
    },
    {
        name: 'College of Nursing',
        degrees: [
            {
                name: 'Bachelor of Science',
                courses: [
                    {
                        name: 'Nursing',
                        majors: [],
                    },
                ],
            },
        ],
    },
    {
        name: 'College of Business and Accountancy',
        degrees: [
            {
                name: 'Bachelor of Science',
                courses: [
                    {
                        name: 'Accountancy',
                        majors: [],
                    },
                    {
                        name: 'Advertising',
                        majors: [],
                    },
                    {
                        name: 'Business Administration major in',
                        majors: [
                            'Business Management',
                            'Financial Management',
                            'Marketing Management',
                            'Entrepreneurship',
                            'Management Accounting',
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: 'College of Education', // Name of Deapartment
        degrees: [
            {
                name: 'Bachelor of ',
                courses: [
                    {
                        name: 'Early Childhood Education',
                        majors: [],
                    },
                    {
                        name: 'Elementary Education',
                        majors: [],
                    },
                    {
                        name: 'Physical Education',
                        majors: [],
                    },
                    {
                        name: 'Secondary Education, majors in: ',
                        majors: [
                            'English',
                            'Filipino',
                            'Mathematics',
                            'Science',
                            'Special Needs Education',
                            'Bachelor in Sports Match Analysis',
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: 'College of Engineering',
        degrees: [
            {
                name: 'Bachelor of Science',
                courses: [
                    {
                        name: 'Chemical Engineering',
                        majors: [],
                    },
                    {
                        name: 'Civil Engineering',
                        majors: [],
                    },
                    {
                        name: 'Electrical Engineering',
                        majors: [],
                    },
                    {
                        name: 'Electronics Engineering',
                        majors: [],
                    },
                    {
                        name: 'Mechanical Engineering',
                        majors: [],
                    },
                    {
                        name: 'Packaging Engineering',
                        majors: [],
                    },
                    {
                        name: 'Software Engineering',
                        majors: [],
                    },
                ],
            },
        ],
    },
    {
        name: 'College of Hospitality Management',
        degrees: [
            {
                name: 'Bachelor of Science',
                courses: [
                    {
                        name: 'Hospitality Management',
                        majors: [],
                    },
                    {
                        name: 'Tourism Management',
                        majors: [],
                    },
                ],
            },
        ],
    },
    {
        name: 'College of Medical Laboratory',
        degrees: [
            {
                name: 'Bachelor of Science',
                courses: [
                    {
                        name: 'Medical Laboratory Sciences',
                        majors: [],
                    },
                ],
            },
        ],
    },
    {
        name: 'College of Pharmacy',
        degrees: [
            {
                name: 'Bachelor of Science',
                courses: [
                    {
                        name: 'Pharmacy',
                        majors: [],
                    },
                ],
            },
        ],
    },
    {
        name: 'College of Medicine',
        degrees: [
            {
                name: 'Bachelor of Science',
                courses: [
                    {
                        name: 'Health, Fitness and Lifestyle Management',
                        majors: [],
                    },
                    {
                        name: 'Respiratory Therapy',
                        majors: [],
                    },
                    {
                        name: 'Doctor of Medicine',
                        majors: [],
                    },
                ],
            },
        ],
    },
    {
        name: 'College of Theology',
        degrees: [
            {
                name: 'Bachelor of ',
                courses: [
                    {
                        name: 'Theology',
                        majors: [],
                    },
                ],
            },
        ],
    },
]
