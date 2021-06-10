//number of decimal places for $
const DEC_PLCS = 2;

export const formatAsMoney = (amt : number) =>
  `$${amt ? amt.toFixed(DEC_PLCS) : "0.00"}`;