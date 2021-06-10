export const REQUIRED_MESSAGE = "Required field";

/**
 * Returns a 'Required Message' if val is null or undefined
 * @param val Feild Value
 * @returns The 'Required Message' or false
 */
export const required = (val: any) => !val && !(val === 0) && REQUIRED_MESSAGE;
