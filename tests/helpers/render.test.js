import {render} from '../../src/helpers/render';

describe('Function `helpers/render`', () => {
    const BASE_URL = 'https://npmjs.com';

    test('Render with empty object passed as `context` parameter should return base url', () => {
        const received = render(BASE_URL, {});
        expect(received).toBe(BASE_URL);
    });

    test('Render with non-empty object passed as `context` parameter should return rendered url', () => {
        const context = { test: 'value' };
        const url = `${BASE_URL}/{test}/`;
        const expected = `${BASE_URL}/value/`;
        const received = render(url, context);

        expect(received).toBe(expected);
    });

    test('Render with not existing template key in object passed as `context` parameter should ignore it', () => {
        const context = { test: 'value', test1: 'value1' };
        const url = `${BASE_URL}/{test}/`;
        const expected = `${BASE_URL}/value/`;
        const received = render(url, context);

        expect(received).toBe(expected);
    });

    test('Render with non-existing template key in base url should ignore it', () => {
        const context = {};
        const url = `${BASE_URL}/{test}/`;
        const received = render(url, context);

        expect(received).toBe(url);
    });
});
