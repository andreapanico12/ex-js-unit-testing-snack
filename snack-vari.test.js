const { getInitials } = require('./snack-vari.js');

// Snack-1
test(`La funzione getInitials restituisce le iniziali di un nome completo.`, ()=>{
  const name = "Mario Rossi";
  const expected = "MR";
  const result = getInitials(name);
  expect(result).toBe(expected);
})

