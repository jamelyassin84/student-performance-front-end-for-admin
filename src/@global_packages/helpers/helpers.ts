export const slugify = (text: string) => {
    return text
        .toString() // Cast to string
        .toLowerCase() // Convert the string to lowercase letters
        .normalize('NFD') // The normalize() method returns the Unicode Normalization Form of a given string.
        .trim() // Remove whitespace from both sides of a string
        .replace(/\s+/g, '_') // Replace spaces with -
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-\-+/g, '_'); // Replace multiple - with single -
};

export const slugToSentence = (slug: string) => {
    return slug.split('_').join(' ');
};

export function toCardExpiry(digits: string) {
    const expiry = digits.split('');

    return { month: expiry[0] + expiry[1], year: '20' + expiry[2] + expiry[3] };
}

export function empty(value: any): boolean {
    if (!value || value === '' || value === null || value === undefined) {
        return true;
    }

    return false;
}

export function hasData(value: any[]): boolean {
    if (value.length !== 0) {
        return true;
    }

    return false;
}

export function tOTime(value: number | string): string {
    if (value.toString().charAt(0) === '0' && value.toString().length === 2) {
        return value.toString();
    }

    if (
        value.toString().split(':')[1] &&
        value.toString().split(':')[1].length === 3
    ) {
        return (value < 10 ? '0' : '') + value.toString().slice(0, -1);
    }

    return ((value < 10 ? '0' : '') + value).toString();
}

export function toTwelve(time: any): any {
    if (empty(time)) {
        return '';
    }

    let hour = time.split(':')[0];

    let min = time.split(':')[1];

    if (empty(min) || empty(hour)) {
        return '';
    }

    let part = hour > 12 ? 'pm' : 'am';

    if (parseInt(hour) === 0) hour = 12;

    min = (min + '').length === 1 ? `0${min}` : min;

    hour = hour > 12 ? hour - 12 : hour;

    hour = (hour + '').length === 1 ? `0${hour}` : hour;

    return `${hour}:${min} ${part}`;
}

export function toFixedTwo(value: number): string {
    return (value < 10 ? '0' : '') + value;
}

export function toSentenceCase(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
