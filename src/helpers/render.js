/**
 * Renders context parameters to url template (params should be wrapped to curly braces in url template)
 * @param {string} url Url template with wrapped to curly braces context params names
 * @param {object} context Url context object
 * @returns {string}
 */
export const render = (url, context) => {
    const wrap = (param) => `{${param}}`;
    const reducer = (acc, key) => acc.replace(wrap(key), context[key]);

    return Object.keys(context).reduce(reducer, url);
};
