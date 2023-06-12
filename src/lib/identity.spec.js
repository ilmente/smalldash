import {
    isUndefined,
    isFunction,
    isStrictlyObject,
    isObject,
    isEmptyArray,
    isEmpty,
    isString,
    isNumber,
    isEqual,
} from './Identity';

test('isUndefined()', () => {
    expect(isUndefined('')).toBe(false);
    expect(isUndefined('abc')).toBe(false);
    expect(isUndefined(NaN)).toBe(false);
    expect(isUndefined(0)).toBe(false);
    expect(isUndefined(123)).toBe(false);
    expect(isUndefined({})).toBe(false);
    expect(isUndefined(new Object)).toBe(false);
    expect(isUndefined(new Date)).toBe(false);
    expect(isUndefined(new Promise(() => {}, () => {}))).toBe(false);
    expect(isUndefined({ a: 1, b: '2' })).toBe(false);
    expect(isUndefined([])).toBe(false);
    expect(isUndefined([1, '2', true, null])).toBe(false);
    expect(isUndefined(function () {})).toBe(false);
    expect(isUndefined(() => {})).toBe(false);
    expect(isUndefined(null)).toBe(false);
    expect(isUndefined(undefined)).toBe(true);
    expect(isUndefined()).toBe(true);
});

test('isFunction()', () => {
    expect(isFunction('')).toBe(false);
    expect(isFunction('abc')).toBe(false);
    expect(isFunction(NaN)).toBe(false);
    expect(isFunction(0)).toBe(false);
    expect(isFunction(123)).toBe(false);
    expect(isFunction({})).toBe(false);
    expect(isFunction(new Object)).toBe(false);
    expect(isFunction(new Date)).toBe(false);
    expect(isFunction(new Promise(() => {}, () => {}))).toBe(false);
    expect(isFunction({ a: 1, b: '2' })).toBe(false);
    expect(isFunction([])).toBe(false);
    expect(isFunction([1, '2', true, null])).toBe(false);
    expect(isFunction(function () {})).toBe(true);
    expect(isFunction(() => {})).toBe(true);
    expect(isFunction(null)).toBe(false);
    expect(isFunction(undefined)).toBe(false);
    expect(isFunction()).toBe(false);
});

test('isStrictlyObject()', () => {
    expect(isStrictlyObject('')).toBe(false);
    expect(isStrictlyObject('abc')).toBe(false);
    expect(isStrictlyObject(NaN)).toBe(false);
    expect(isStrictlyObject(0)).toBe(false);
    expect(isStrictlyObject(123)).toBe(false);
    expect(isStrictlyObject({})).toBe(true);
    expect(isStrictlyObject(new Object)).toBe(true);
    expect(isStrictlyObject(new Date)).toBe(true);
    expect(isStrictlyObject(new Promise(() => {}, () => {}))).toBe(true);
    expect(isStrictlyObject({ a: 1, b: '2' })).toBe(true);
    expect(isStrictlyObject([])).toBe(false);
    expect(isStrictlyObject([1, '2', true, null])).toBe(false);
    expect(isStrictlyObject(function () {})).toBe(false);
    expect(isStrictlyObject(() => {})).toBe(false);
    expect(isStrictlyObject(null)).toBe(false);
    expect(isStrictlyObject(undefined)).toBe(false);
    expect(isStrictlyObject()).toBe(false);
});

test('isObject()', () => {
    expect(isObject('')).toBe(false);
    expect(isObject('abc')).toBe(false);
    expect(isObject(NaN)).toBe(false);
    expect(isObject(0)).toBe(false);
    expect(isObject(123)).toBe(false);
    expect(isObject({})).toBe(true);
    expect(isObject(new Object)).toBe(true);
    expect(isObject(new Date)).toBe(true);
    expect(isObject(new Promise(() => {}, () => {}))).toBe(true);
    expect(isObject({ a: 1, b: '2' })).toBe(true);
    expect(isObject([])).toBe(true);
    expect(isObject([1, '2', true, null])).toBe(true);
    expect(isObject(function () {})).toBe(true);
    expect(isObject(() => {})).toBe(true);
    expect(isObject(null)).toBe(false);
    expect(isObject(undefined)).toBe(false);
    expect(isObject()).toBe(false);
});

test('isEmptyArray()', () => {
    expect(isEmptyArray('')).toBe(false);
    expect(isEmptyArray('abc')).toBe(false);
    expect(isEmptyArray(NaN)).toBe(false);
    expect(isEmptyArray(0)).toBe(false);
    expect(isEmptyArray(123)).toBe(false);
    expect(isEmptyArray({})).toBe(false);
    expect(isEmptyArray(new Object)).toBe(false);
    expect(isEmptyArray(new Date)).toBe(false);
    expect(isEmptyArray(new Promise(() => {}, () => {}))).toBe(false);
    expect(isEmptyArray({ a: 1, b: '2' })).toBe(false);
    expect(isEmptyArray([])).toBe(true);
    expect(isEmptyArray([1, '2', true, null])).toBe(false);
    expect(isEmptyArray(function () {})).toBe(false);
    expect(isEmptyArray(() => {})).toBe(false);
    expect(isEmptyArray(null)).toBe(false);
    expect(isEmptyArray(undefined)).toBe(false);
    expect(isEmptyArray()).toBe(false);
});

test('isEmpty()', () => {
    expect(isEmpty('')).toBe(true);
    expect(isEmpty('abc')).toBe(false);
    expect(isEmpty(NaN)).toBe(true);
    expect(isEmpty(0)).toBe(true);
    expect(isEmpty(123)).toBe(false);
    expect(isEmpty({})).toBe(true);
    expect(isEmpty(new Object)).toBe(true);
    expect(isEmpty(new Date)).toBe(false);
    expect(isEmpty(new Promise(() => {}, () => {}))).toBe(false);
    expect(isEmpty({ a: 1, b: '2' })).toBe(false);
    expect(isEmpty([])).toBe(true);
    expect(isEmpty([1, '2', true, null])).toBe(false);
    expect(isEmpty(function () {})).toBe(false);
    expect(isEmpty(() => {})).toBe(false);
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty()).toBe(true);
});

test('isString()', () => {
    expect(isString('')).toBe(true);
    expect(isString('abc')).toBe(true);
    expect(isString(NaN)).toBe(false);
    expect(isString(0)).toBe(false);
    expect(isString(123)).toBe(false);
    expect(isString({})).toBe(false);
    expect(isString(new Object)).toBe(false);
    expect(isString(new Date)).toBe(false);
    expect(isString(new Promise(() => {}, () => {}))).toBe(false);
    expect(isString({ a: 1, b: '2' })).toBe(false);
    expect(isString([])).toBe(false);
    expect(isString([1, '2', true, null])).toBe(false);
    expect(isString(function () {})).toBe(false);
    expect(isString(() => {})).toBe(false);
    expect(isString(null)).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString()).toBe(false);
});

test('isNumber()', () => {
    expect(isNumber('')).toBe(false);
    expect(isNumber('123')).toBe(false);
    expect(isNumber(NaN)).toBe(false);
    expect(isNumber(0)).toBe(true);
    expect(isNumber(123)).toBe(true);
    expect(isNumber({})).toBe(false);
    expect(isNumber(new Object)).toBe(false);
    expect(isNumber(new Date)).toBe(false);
    expect(isNumber(new Promise(() => {}, () => {}))).toBe(false);
    expect(isNumber({ a: 1, b: '2' })).toBe(false);
    expect(isNumber([])).toBe(false);
    expect(isNumber([1, '2', true, null])).toBe(false);
    expect(isNumber(function () {})).toBe(false);
    expect(isNumber(() => {})).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber()).toBe(false);
});

test('isEqual()', () => {
    expect(isEqual('', '')).toBe(true);
    expect(isEqual('', '123')).toBe(false);
    expect(isEqual(NaN, NaN)).toBe(true);
    expect(isEqual(0, 0)).toBe(true);
    expect(isEqual(0, '0')).toBe(false);
    expect(isEqual(0, false)).toBe(false);
    expect(isEqual([], [])).toBe(true);
    expect(isEqual([1, 2], [1, 2])).toBe(true);
    expect(isEqual([1, 2], [1, 3])).toBe(false);
    expect(isEqual([{}, {}], [{}, {}])).toBe(true);
    expect(isEqual([{a:1}, {}], [{a:1}, {}])).toBe(true);
    expect(isEqual([{a:2}, {}], [{a:1}, {}])).toBe(false);
    expect(isEqual({}, {})).toBe(true);
    expect(isEqual({a:1}, {})).toBe(false);
    expect(isEqual({a:1}, {a:1})).toBe(true);
    expect(isEqual({a:[1,2]}, {a:[1,2]})).toBe(true);
    expect(isEqual({a:[1,2]}, {a:[1,'2']})).toBe(false);
    expect(isEqual(null, null)).toBe(true);
    expect(isEqual(undefined, null)).toBe(false);
    expect(isEqual()).toBe(true);
});
