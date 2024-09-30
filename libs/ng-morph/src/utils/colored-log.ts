/**
 * @deprecated
 */
export function processLog(message: string): void {
    console.info('\x1B[36m%s\x1B[0m', message);
}

/**
 * @deprecated
 */
export function errorLog(message: string): void {
    console.info('\x1B[31m%s\x1B[0m', message);
}

/**
 * @deprecated
 */
export function successLog(message: string): void {
    console.info('\x1B[32m%s\x1B[0m', message);
}

/**
 * @deprecated
 */
export function infoLog(message: string): void {
    console.info('\x1B[34m%s\x1B[0m', message);
}

/**
 * @deprecated
 */
export function titleLog(message: string): void {
    console.info('\x1B[35m', message);
}

/**
 * @deprecated
 */
export const SMALL_TAB_SYMBOL = '  '; // @note: if you use \t then we have big gaps

/**
 * @deprecated
 */
export const START_SYMBOL = '🚀';

/**
 * @deprecated
 */
export const FINISH_SYMBOL = '🏆';

/**
 * @deprecated
 */
export const REPLACE_SYMBOL = '⚡️';

/**
 * @deprecated
 */
export const PROCESSING_SYMBOL = '> ';

/**
 * @deprecated
 */
export const SUCCESS_SYMBOL = '✅ ';
