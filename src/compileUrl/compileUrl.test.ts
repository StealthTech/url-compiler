import {compileUrl} from './compileUrl';


describe('Function `compile`', () => {
    const BASE_URL = 'https://npmjs.com';

    test('Compile with no `CompileParameters` should return base url', () => {
        const received = compileUrl(BASE_URL);
        expect(received).toBe(BASE_URL);
    });

    test('Compile with `query` compile parameter (one `key: value` pair) should return url with querystring', () => {
        const params = {
            query: { a: 'b' }
        };
        const received = compileUrl(BASE_URL, params);
        const expected = `${BASE_URL}?a=b`;
        expect(received).toBe(expected);
    });

    test('Compile with `query` compile parameter (several `key: value` pairs) should return url with querystring', () => {
        const params = {
            query: { a: 'b', c: 'd' }
        };
        const received = compileUrl(BASE_URL, params);
        const expected = `${BASE_URL}?a=b&c=d`;
        expect(received).toBe(expected);
    });

    test('Compile with `hash` compile parameter should return url with hash', () => {
        const params = {
            hash: 'test'
        };
        const received = compileUrl(BASE_URL, params);
        const expected = `${BASE_URL}#test`;
        expect(received).toBe(expected);
    });

    test('Compile with `context` compile parameter should return url with rendered context', () => {
        const params = {
            context: { test: 'value' }
        };
        const url = `${BASE_URL}/{test}`;

        const received = compileUrl(url, params);
        const expected = `${BASE_URL}/value`;

        expect(received).toBe(expected);
    });

    test('Compile with `lowerCase = true` compile parameter should return url in lowercase', () => {
        const params = {
            lowerCase: true
        };
        const url = `${BASE_URL}/TEST`;

        const received = compileUrl(url, params);
        const expected = `${BASE_URL}/test`;

        expect(received).toBe(expected);
    });

    test('Compile with `lowerCase = false` compile parameter should return url as is', () => {
        const params = {
            lowerCase: false
        };
        const url = `${BASE_URL}/TEST`;

        const received = compileUrl(url, params);
        const expected = `${BASE_URL}/TEST`;

        expect(received).toBe(expected);
    });

    test('Compile with `trailingSlash = true` compile parameter should return url with trailing slash', () => {
        const params = {
            trailingSlash: true
        };
        const url = `${BASE_URL}/test`;

        const received = compileUrl(url, params);
        const expected = `${BASE_URL}/test/`;

        expect(received).toBe(expected);
    });

    test('Compile with `trailingSlash = false` compile parameter should return url with no trailing slash', () => {
        const params = {
            trailingSlash: false
        };
        const url = `${BASE_URL}/test/`;

        const received = compileUrl(url, params);
        const expected = `${BASE_URL}/test`;

        expect(received).toBe(expected);
    });

    test('Compile with all params set', () => {
        const params = {
            query: {
                foo: 'bar',
            },
            context: {
                package: 'url-compiler',
            },
            hash: 'usage',
            trailingSlash: true,
            lowerCase: true,
        }
        const url = `${BASE_URL}/PACKAGES/{package}`;

        const received = compileUrl(url, params);
        const expected = `${BASE_URL}/packages/url-compiler/#usage?foo=bar`;

        expect(received).toBe(expected);
    })
});
