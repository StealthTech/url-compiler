/**
 * Adds or removes trailing slash according to passed parameter
 * @param {string} url Url to check
 * @param {boolean} isTrailingSlashNeeded Does url need to have trailing slash or not to
 * @returns {string}
 */
export const handleTrailingSlash = (url, isTrailingSlashNeeded) => {
    const hasTrailingSlash = url.endsWith('/');

    if (isTrailingSlashNeeded) {
        if (!hasTrailingSlash) {
            return url + '/';
        }
    } else {
        if (hasTrailingSlash) {
            return url.slice(0, -1)
        }
    }

    return url;
};
