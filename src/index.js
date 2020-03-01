const _renderUrlContext = (url, context) => {
    const wrap = (param) => `{${param}}`;
    const reducer = (acc, key) => acc.replace(wrap(key), context[key]);

    return Object.keys(context).reduce(reducer, url);
};

const _handleTrailingSlash = (url, trailingSlash) => {
    return url.endsWith('/') && !trailingSlash ? url.slice(0, -1) : url;
};

const _stringifyQuery = (query) => {
    const queryEntries = Object.entries(query);
    return queryEntries.length && '?' + queryEntries.map(pair => pair.join('=')).join('&') || null;
};

/**
 * Compile parameters object
 * @typedef {object} CompileParameters
 * @property {object} query Query params object
 * @property {object} context Base url parameters (ex. https://npmjs.com/package/{name}/ => {name: 'url-compiler'})
 * @property {string} hash Url hash
 * @property {boolean} lowerCase Convert url to lowercase
 * @property {boolean} trailingSlash Append trailing slash
 */

/**
 *
 * @param {string} url Base url template
 * @param {CompileParameters} params Url compilation parameters
 * @returns {string} Compiled url
 */
const compile = (url, {
    query = {},
    context = {},
    hash = null,
    lowerCase = false,
    trailingSlash = false
}) => {
    const renderedUrl = _renderUrlContext(url, context);
    const _url = _handleTrailingSlash(renderedUrl, trailingSlash);

    const _query = _stringifyQuery(query);

    const _hash = hash && `#${hash}`;

    const result = [_url, _hash, _query].filter(item => item).join('');

    return lowerCase ? result.toLowerCase() : result;
};

module.exports = {
    compile
};
