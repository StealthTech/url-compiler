/**
 * Renders context parameters to url template (params should be wrapped to curly braces in url template)
 * @param template Url template with wrapped to curly braces context params names
 * @param context Url context object
 * @returns Rendered url
 */
export const renderUrl = (template: string, context: Record<string, string>) => {
    const wrap = (param: string) => `{${param}}`;
    const reducer = (acc: string, key: string) => acc.replace(wrap(key), context[key]);

    return Object.keys(context).reduce(reducer, template);
};
