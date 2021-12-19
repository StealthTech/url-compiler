import {queryString} from './queryString';

describe('Function `querystring`', () => {
    test('Querystring with empty `query` object passed should return null', () => {
        const received = queryString({});
        const expected: null = null;

        expect(received).toBe(expected);
    });

    test('Querystring with non-empty `query` object (one pair) passed should return valid querystring', () => {
        const query = { a: 'b' };
        const received = queryString(query);
        const expected = '?a=b';

        expect(received).toBe(expected);
    });

    test('Querystring with non-empty `query` object (several pairs) passed should return valid querystring', () => {
        const query = { a: 'b', c: 'd' };
        const received = queryString(query);
        const expected = '?a=b&c=d';

        expect(received).toBe(expected);
    });
});
