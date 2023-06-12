/* eslint-disable @typescript-eslint/ban-types */

export function isUndefined(item: unknown): item is undefined {
    return typeof item === 'undefined';
}

export function isFunction(item: unknown): item is Function {
    return typeof item === 'function';
}

export function isStrictlyObject(item: unknown): item is Object {
    return Boolean(item) && !Array.isArray(item) && typeof item === 'object';
}

export function isObject(item: unknown): boolean {
    return Array.isArray(item) || isFunction(item) || isStrictlyObject(item);
}

export function isEmptyArray(item: unknown): item is [] {
    return Array.isArray(item) && item.length === 0;
}

export function isEmpty(item: unknown): boolean {
    if (!item || isEmptyArray(item)) {
        return true;
    }

    // @ts-ignore
    const isObjectInstance = item.constructor?.name === 'Object';
    const isObjectWithoutOwnProps = isStrictlyObject(item) && Object.keys(item).length === 0;

    return isObjectInstance && isObjectWithoutOwnProps;
}

export function isString(item: unknown): item is string {
    return typeof item === 'string';
}

export function isNumber(item: unknown): item is number {
    return typeof item === 'number' && !Number.isNaN(item);
}

export function isEqual(item: unknown, comparison: unknown): boolean {
    const isSameType = typeof item === typeof comparison;

    if (!isSameType) {
        return false;
    }

    const itemSerialized = JSON.stringify(item);
    const comparisonSerialized = JSON.stringify(comparison);

    return itemSerialized === comparisonSerialized;
}
