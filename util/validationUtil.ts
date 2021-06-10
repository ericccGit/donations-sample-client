export const REQUIRED_MESSAGE = "Required field";
export const required = (val : any) => !val && !(val === 0) && REQUIRED_MESSAGE;