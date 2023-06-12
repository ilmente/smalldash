import {
    toString,
    toLowerCase,
    toUpperCase,
    capitalize,
    toCapitalCase,
    toKebabCase,
    toSnakeCase,
    toLowerCamelCase,
    toCamelCase,
} from './string';

test('toString()', () => {
    expect(toString('')).toEqual('');
    expect(toString(123)).toEqual('123');
    expect(toString({})).toEqual('[object Object]');
    expect(toString(null)).toEqual('null');
    expect(toString()).toEqual('undefined');
});

test('toLowerCase()', () => {
    expect(toLowerCase('')).toEqual('');
    expect(toLowerCase('A')).toEqual('a');
    expect(toLowerCase('ABC')).toEqual('abc');
    expect(toLowerCase('A_b_c')).toEqual('a_b_c');
});

test('toUpperCase()', () => {
    expect(toUpperCase('')).toEqual('');
    expect(toUpperCase('a')).toEqual('A');
    expect(toUpperCase('abc')).toEqual('ABC');
    expect(toUpperCase('A_b_c')).toEqual('A_B_C');
});

test('capitalize()', () => {
    expect(capitalize('')).toEqual('');
    expect(capitalize('a')).toEqual('A');
    expect(capitalize('abc')).toEqual('Abc');
    expect(capitalize('abc DEF')).toEqual('Abc DEF');
});

test('toCapitalCase()', () => {
    expect(toCapitalCase('')).toEqual('');
    expect(toCapitalCase('a')).toEqual('A');
    expect(toCapitalCase('abc')).toEqual('Abc');
    expect(toCapitalCase('abc DEF')).toEqual('Abc def');
});

test('toKebabCase()', () => {
    expect(toKebabCase('')).toEqual('');
    expect(toKebabCase('a')).toEqual('a');
    expect(toKebabCase('abc')).toEqual('abc');
    expect(toKebabCase('abc DEF')).toEqual('abc-d-e-f');
    expect(toKebabCase('abc_def')).toEqual('abc-def');
    expect(toKebabCase('abcDef')).toEqual('abc-def');
});

test('toSnakeCase()', () => {
    expect(toSnakeCase('')).toEqual('');
    expect(toSnakeCase('a')).toEqual('a');
    expect(toSnakeCase('abc')).toEqual('abc');
    expect(toSnakeCase('abc DEF')).toEqual('abc_d_e_f');
    expect(toSnakeCase('abc-def')).toEqual('abc_def');
    expect(toSnakeCase('abcDef')).toEqual('abc_def');
});

test('toLowerCamelCase()', () => {
    expect(toLowerCamelCase('')).toEqual('');
    expect(toLowerCamelCase('a')).toEqual('a');
    expect(toLowerCamelCase('abc')).toEqual('abc');
    expect(toLowerCamelCase('abc DEF')).toEqual('abcDEF');
    expect(toLowerCamelCase('abc-def')).toEqual('abcDef');
    expect(toLowerCamelCase('abc_def')).toEqual('abcDef');
});

test('toCamelCase()', () => {
    expect(toCamelCase('')).toEqual('');
    expect(toCamelCase('a')).toEqual('A');
    expect(toCamelCase('abc')).toEqual('Abc');
    expect(toCamelCase('abc DEF')).toEqual('AbcDEF');
    expect(toCamelCase('abc-def')).toEqual('AbcDef');
    expect(toCamelCase('abc_def')).toEqual('AbcDef');
});
