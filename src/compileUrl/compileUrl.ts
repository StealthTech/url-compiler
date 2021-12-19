import {renderUrl} from '../renderUrl';
import {queryString} from '../queryString';
import {handleTrailingSlash} from '../handleTrailingSlash';


interface CompileParams {
    query?: Record<string, string>; // Query params object
    context?: Record<string, string>; // Url render parameters (ex. https://npmjs.com/package/{name}/ => {name: 'url-compiler'})
    hash?: string | null; // Url hash
    lowerCase?: boolean; // Convert url to lowercase
    trailingSlash?: boolean; // Append trailing slash
}

/**
 *
 * @param baseUrl Base url template
 * @param params Url compilation parameters
 * @returns Compiled url
 */
export const compileUrl = (baseUrl: string, params: CompileParams = {}) => {
    const {
        query = {},
        context = {},
        hash = null,
        lowerCase = false,
        trailingSlash = false
    } = params;

    const renderedUrl = renderUrl(baseUrl, context);
    const _url = handleTrailingSlash(renderedUrl, trailingSlash);

    const _query = queryString(query);

    const _hash = hash && `#${hash}`;

    const result = [_url, _hash, _query].filter(item => item).join('');

    return lowerCase ? result.toLowerCase() : result;
};
