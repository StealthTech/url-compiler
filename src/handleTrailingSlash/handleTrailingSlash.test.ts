import {handleTrailingSlash} from './handleTrailingSlash';

describe('Function `handleTrailingSlash`', () => {
    const BASE_URL = 'https://npmjs.com';

    test('Handling should remove trailing slash if `isTrailingSlashNeeded = false`', () => {
        const url = `${BASE_URL}/`;
        const received = handleTrailingSlash(url, false);

        expect(received).toBe(BASE_URL);
    });

    test('Handling should return url as is if url has no trailing slash and `isTrailingSlashNeeded = false`', () => {
        const received = handleTrailingSlash(BASE_URL, false);

        expect(received).toBe(BASE_URL);
    });

    test('Handling should return url with trailing slash if `isTrailingSlashNeeded = true`', () => {
        const received = handleTrailingSlash(BASE_URL, true);
        const expected = `${BASE_URL}/`;

        expect(received).toBe(expected);
    });

    test('Handling should return url as is if url has trailing slash and `isTrailingSlashNeeded = true`', () => {
        const url = `${BASE_URL}/`;
        const received = handleTrailingSlash(url, true);

        expect(received).toBe(url);
    });
});
