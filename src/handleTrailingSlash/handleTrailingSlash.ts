/**
 * Adds or removes trailing slash according to passed parameter
 * @param url Url to check
 * @param isTrailingSlashNeeded Does url need to have trailing slash or not to
 * @returns Clean url with/without a trailing slash
 */
export const handleTrailingSlash = (url: string, isTrailingSlashNeeded: boolean) => {
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
