const REGEX_SEPARATOR = /(?:\W|_)|(?=[A-Z])/;

function splitBySeparator(input: string): string[] {
    return input.split(REGEX_SEPARATOR).filter((fragment) => Boolean(fragment));
}

function toCharArray(input: string): string[] {
    return input.split('').filter((fragment) => Boolean(fragment));
}

export function toString(input: unknown): string {
    return `${input}`;
}

export function toLowerCase(input: string): string {
    return input.toLowerCase();
}

export function toUpperCase(input: string): string {
    return input.toUpperCase();
}

export function capitalize(input: string): string {
    if (!input) {
        return input;
    }

    const [firstLetter, ...letters] = toCharArray(input);
    const upperCaseHead = toUpperCase(firstLetter);
    const tail = letters.join('');

    return `${upperCaseHead}${tail}`;
}

export function toCapitalCase(input: string): string {
    if (!input) {
        return input;
    }

    const [firstLetter, ...letters] = toCharArray(input);
    const upperCaseHead = toUpperCase(firstLetter);
    const lowerCaseTail = toLowerCase(letters.join(''));

    return `${upperCaseHead}${lowerCaseTail}`;
}

export function toKebabCase(input: string): string {
    return splitBySeparator(input).map(toLowerCase).join('-');
}

export function toSnakeCase(input: string): string {
    return splitBySeparator(input).map(toLowerCase).join('_');
}

export function toLowerCamelCase(input: string): string {
    if (!input) {
        return input;
    }

    const [firstFragment, ...fragments] = splitBySeparator(input);
    const lowerCaseHead = toLowerCase(firstFragment);
    const capitalCaseTail = fragments.map(toCapitalCase).join('');

    return `${lowerCaseHead}${capitalCaseTail}`;
}

export function toCamelCase(input: string): string {
    return capitalize(toLowerCamelCase(input));
}
