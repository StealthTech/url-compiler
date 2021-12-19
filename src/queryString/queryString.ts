/**
 * Creates querystring from query parameters object
 * @param query Query parameters object
 * @returns Query string
 */
export const queryString = (query: Record<string, string>): string | null => {
    const entries = Object.entries(query);

    return entries.length && '?' + entries.map(pair => pair.join('=')).join('&') || null;
};
