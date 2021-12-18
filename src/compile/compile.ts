import {render} from '../render';
import {querystring} from '../querystring';
import {handleTrailingSlash} from '../handle-trailing-slash';


interface CompileParams {
    query?: Record<string, string>; // Query params object
    context?: Record<string, string>; // Url render parameters (ex. https://npmjs.com/package/{name}/ => {name: 'url-compiler'})
    hash?: string | null; // Url hash
    lowerCase?: boolean; // Convert url to lowercase
    trailingSlash?: boolean; // Append trailing slash
}

/**
 *
 * @param url Base url template
 * @param params Url compilation parameters
 * @returns Compiled url
 */
export const compile = (url: string, {
    query = {},
    context = {},
    hash = null,
    lowerCase = false,
    trailingSlash = false
}: CompileParams = {}) => {
    const renderedUrl = render(url, context);
    const _url = handleTrailingSlash(renderedUrl, trailingSlash);

    const _query = querystring(query);

    const _hash = hash && `#${hash}`;

    const result = [_url, _hash, _query].filter(item => item).join('');

    return lowerCase ? result.toLowerCase() : result;
};
