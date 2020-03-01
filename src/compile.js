import {render} from './helpers/render';
import {querystring} from './helpers/querystring';
import {handleTrailingSlash} from './helpers/handle-trailing-slash';


/**
 * Compile parameters object
 * @typedef {object} CompileParameters
 * @property {object} query Query params object
 * @property {object} context Url render parameters (ex. https://npmjs.com/package/{name}/ => {name: 'url-compiler'})
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
export const compile = (url, {
    query = {},
    context = {},
    hash = null,
    lowerCase = false,
    trailingSlash = false
} = {}) => {
    const renderedUrl = render(url, context);
    const _url = handleTrailingSlash(renderedUrl, trailingSlash);

    const _query = querystring(query);

    const _hash = hash && `#${hash}`;

    const result = [_url, _hash, _query].filter(item => item).join('');

    return lowerCase ? result.toLowerCase() : result;
};
