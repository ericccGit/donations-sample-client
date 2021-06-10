//number of decimal places for $
const DEC_PLCS = 2;

/**
 * Converts a number to a formatted money ($) string.
 * @param amt Money Amount
 * @returns Formatted money string
 */
export const formatAsMoney = (amt: number) =>
  `$${amt ? amt.toFixed(DEC_PLCS) : "0.00"}`;
