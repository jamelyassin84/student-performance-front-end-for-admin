export const rating = [
    'Very much like me',
    'Mostly like me',
    'Somewhat like me',
    'Not much like me',
    'Not like me at all',
];

export const GRIT_SCALE: SurveyForm[] = [
    {
        name: 'Distraction',
        question:
            'New ideas and projects sometimes distract me from previous ones.',
        form: rating,
        type: 'negative',
    },
    {
        name: 'Innovation',
        question:
            'Continues work on a challenging task by trying different ways to solve a problem.',
        form: rating,
        type: 'positive',
    },
    {
        name: 'Dont give easily on setbacks',
        question: "Setbacks don't discourage me. I don't give up easily.",
        form: rating,
        type: 'positive',
    },
    {
        name: 'Not Goal Oriented',
        question:
            'I often set a goal but later choose to pursue a different one.',
        form: rating,
        type: 'negative',
    },
    {
        name: 'Hard working',
        question: 'I am a hard worker.',
        form: rating,
        type: 'positive',
    },
    {
        name: 'Difficulty Focusing on Projects',
        question:
            'I have difficulty maintaining my focus on projects that take more than a few months to complete.',
        form: rating,
        type: 'negative',
    },
    {
        name: 'Completion',
        question: 'I finish whatever I begin.',
        form: rating,
        type: 'positive',
    },
    {
        name: 'Changing interest',
        question: 'My interests change from year to year.',
        form: rating,
        type: 'negative',
    },
    {
        name: 'Diligence',
        question: 'I am diligent. I never give up..',
        form: rating,
        type: 'positive',
    },
    {
        name: 'Obsessed and lost interest',
        question:
            'I have been obsessed with a certain idea or project for a short time but later lost interest.',
        form: rating,
        type: 'negative',
    },
    {
        name: 'Overcoming setbacks',
        question:
            'I have overcome setbacks to conquer an important challenge..',
        form: rating,
        type: 'positive',
    },
];

export const TIME_MANAGEMENT_QUESTIONS: SurveyForm[] = [
    {
        name: 'Skimming',
        question:
            'I read selectively, skimming the material until I find what is important, then highlighting it.',
        form: rating,
        type: 'negative',
    },
    {
        name: 'Listing Tasks',
        question: 'I make a list of tasks to accomplish each day.',
        form: rating,
        type: 'positive',
    },
    {
        name: 'Keeping in a proper place',
        question: 'I keep everything in its proper place.',
        form: rating,
        type: 'positive',
    },
    {
        name: 'Prioritizing tasks based on importance and urgency',
        question:
            'I prioritize the tasks I have to do according to their importance and urgency.',
        form: rating,
        type: 'positive',
    },
    {
        name: 'Single Tasker',
        question:
            'I concentrate on only one important task at a time, but I do multiple trivial tasks at once.',
        form: rating,
        type: 'positive',
    },
    {
        name: 'Listing task for five or ten minutes',
        question: 'I make a list of short five- or ten-minute tasks to do.',
        form: rating,
        type: 'positive',
    },
    {
        name: 'Project Management',
        question: 'I divide large projects into smaller, separate stages.',
        form: rating,
        type: 'positive',
    },
    {
        // #added
        name: 'Reviewing',
        question: 'I review my planner each day after I complete my tasks. .',
        form: rating,
        type: 'positive',
    },
    {
        name: 'Reviewing Planner',
        question:
            'I do the most important tasks at my best time during the day.',
        form: rating,
        type: 'positive',
    },
    {
        name: 'Extreme Focus',
        question:
            'I have some time during each day when I can work uninterrupted.',
        form: rating,
        type: 'positive',
    },
    {
        // #added
        name: 'Extreme Motivation',
        question: 'I do today what needs to be done. I don’t procrastinate.',
        form: rating,
        type: 'positive',
    },
    {
        name: 'Time Review based on Academic Calendar',
        question:
            'I periodically evaluate the use of my time while using my academic calendar.',
        form: rating,
        type: 'positive',
    },
    {
        name: 'Setting Self-deadlines',
        question: 'I set deadlines for myself if they are not provided for me.',
        form: rating,
        type: 'positive',
    },
    {
        name: 'Doing Something Productive',
        question: 'I do something productive whenever I am waiting.',
        form: rating,
        type: 'positive',
    },
    {
        name: 'I avoid time wasters.',
        question: 'I am avoiding wasters.',
        form: rating,
        type: 'positive',
    },
    {
        name: 'At least one thing every day.',
        question: 'I finish at least one thing every day.',
        form: rating,
        type: 'positive',
    },
    {
        name: 'Having Personal Time',
        question:
            'I schedule some time during the day for personal time alone (for planning, meditation, prayer, exercise).',
        form: rating,
        type: 'positive',
    },
    {
        name: 'Setting Goals for academic years',
        question:
            'I set goals for the academic year. (Academic, Personal, Spiritual) –Long Term.',
        form: rating,
        type: 'positive',
    },
    {
        name: 'Setting Goals for every semester',
        question:
            'I set goals for myself each semester. (Academic, Personal, Spiritual…etc.) .',
        form: rating,
        type: 'positive',
    },
    {
        name: 'Setting Time Efficiently',
        question:
            'I continually try to find little ways to use my time more efficiently.',
        form: rating,
        type: 'positive',
    },
];

export const SELF_EFFICACY: SurveyForm[] = [
    {
        name: 'Managing Problems',
        question:
            'I can always manage to solve difficult problems if I try hard enough.',
        form: rating,
        type: 'positive',
    },
    {
        name: 'Hardened',
        question:
            'If someone opposes me, I can find the means and ways to get what I want.',
        form: rating,
        type: 'positive',
    },
    {
        name: 'Reaching Goals',
        question:
            'It is easy for me to stick to my aims and accomplish my goals.',
        form: rating,
        type: 'positive',
    },
    {
        name: 'Extreme Confidence',
        question:
            'I am confident that I could deal efficiently with unexpected events.',
        form: rating,
        type: 'positive',
    },
    {
        name: 'Resourceful',
        question:
            'Thanks to my resourcefulness, I know how to handle unforeseen situations.',
        form: rating,
        type: 'positive',
    },
    {
        name: 'Time Investment',
        question:
            ' I can solve most problems if I invest the necessary effort.',
        form: rating,
        type: 'positive',
    },
    {
        name: 'Extreme Patience',
        question:
            ' I can remain calm when facing difficulties because I can rely on my coping abilities.',
        form: rating,
        type: 'positive',
    },
    {
        name: 'Mind Boggling',
        question:
            ' When I am confronted with a problem, I can usually find several solutions.',
        form: rating,
        type: 'positive',
    },
    {
        name: 'Genius',
        question: ' If I am in trouble, I can usually think of a solution.',
        form: rating,
        type: 'positive',
    },
    {
        name: 'Selft Trust',
        question: 'I can usually handle whatever comes my way.',
        form: rating,
        type: 'positive',
    },
];

export const SELF_REGULATION_QUESTIONS: SurveyForm[] = [
    {
        name: 'Tracking Progress',
        question: 'I usually keep track of my progress toward my goals.',
        form: rating,
        type: 'positive',
    },
    {
        name: 'Common Behavior',
        question: `My behavior is not that different from other people's.`,
        form: rating,
        type: 'positive',
    },
    {
        name: 'Cannot Change',
        question: `I doubt I could change even if I wanted to.`,
        form: rating,
        type: 'negative',
    },
    {
        name: 'Indecisive',
        question: `I have trouble making up my mind about things.`,
        form: rating,
        type: 'negative',
    },
    {
        name: 'Easily Get Distracted',
        question: `I get easily distracted from my plans.`,
        form: rating,
        type: 'negative',
    },
    {
        name: 'Rewarding Self',
        question: `I reward myself for progress toward my goals.`,
        form: rating,
        type: 'negative',
    },
    {
        name: 'Not Thinking before doing',
        question: `I don't notice the effects of my actions until it's too late.`,
        form: rating,
        type: 'negative',
    },
    {
        name: 'Behavior similar to friends',
        question: `My behavior is similar to that of my friends.`,
        form: rating,
        type: 'negative',
    },
    {
        name: 'Accomplishing goals',
        question: `I am able to accomplish goals I set for myself.`,
        form: rating,
        type: 'positive',
    },
    {
        name: 'Is not focused on plans set',
        question: `I have so many plans that it's hard for me to focus on any one of them.`,
        form: rating,
        type: 'positive',
    },
    {
        name: 'Cannot notice on too much alcohol or liquor consumption',
        question: `It's hard for me to notice when I've “had enough” (alcohol, food, sweets).`,
        form: rating,
        type: 'positive',
    },
    {
        name: 'Not learning from mistakes',
        question: `I don't seem to learn from my mistakes.`,
        form: rating,
        type: 'positive',
    },
    {
        name: 'Comparing self to others',
        question: `I tend to compare myself with other people.`,
        form: rating,
        type: 'positive',
    },
    {
        name: 'Learning from one mistake',
        question: `I usually only have to make a mistake one time in order to learn from it.`,
        form: rating,
        type: 'positive',
    },
    {
        name: 'Unique',
        question: `I don't care if I'm different from most people.`,
        form: rating,
        type: 'positive',
    },
];

export interface SurveyForm {
    name: string;
    question: string;
    form: typeof rating;
    type: 'negative' | 'positive';
}
