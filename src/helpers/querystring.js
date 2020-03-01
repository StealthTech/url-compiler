/**
 * Creates querystring from query parameters object
 * @param {string} query Query parameters object
 * @returns {string|null}
 */
export const querystring = (query) => {
    const entries = Object.entries(query);

    return entries.length && '?' + entries.map(pair => pair.join('=')).join('&') || null;
};
