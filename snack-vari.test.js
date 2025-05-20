const { getInitials,createSlug } = require('./snack-vari.js');

// Snack-1
test(`La funzione getInitials restituisce le iniziali di un nome completo.`, ()=>{
  const name = "Mario Rossi";
  const expected = "MR";
  const result = getInitials(name);
  expect(result).toBe(expected);
})


// Snack-2
test("La funzione createSlug restituisce una stringa in lowercase.", () =>{
  const str = "Ciao Mondo";
  const expected = "ciao mondo";
  const result = createSlug(str);
  expect(result).toBe(expected);
})

function average(numbers){
  const sum = numbers.reduce((acc,num) => acc + num, 0);
  return sum / numbers.length;
}

// Snack-3
test("La funzione average calcola la media aritmetica di un array di numeri.",() =>{
  const numbers = [1,2,3,4,5];
  const expected = 3;
  const result = average(numbers);
  expect(result).toBe(expected);
})