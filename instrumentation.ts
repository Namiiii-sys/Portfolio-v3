export async function register() {
    if (typeof window === 'undefined') {
        // @ts-ignore
        if (typeof global.localStorage !== 'undefined' && typeof global.localStorage.getItem === 'undefined') {
            // @ts-ignore
            delete global.localStorage;
        }
    }
}
