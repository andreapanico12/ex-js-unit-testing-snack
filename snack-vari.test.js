const { getInitials, createSlug, average, isPalindrome } = require('./snack-vari.js');

// Snack-1
test(`La funzione getInitials restituisce le iniziali di un nome completo.`, ()=>{
  const name = "Mario Rossi";
  const expected = "MR";
  const result = getInitials(name);
  expect(result).toBe(expected);
})


// Snack-2
test("La funzione createSlug restituisce una stringa in lowercase.", () =>{
  const str = "Aspettami";
  const expected = "aspettami";
  const result = createSlug(str);
  expect(result).toBe(expected);
})

// Snack-3
test("La funzione average calcola la media aritmetica di un array di numeri.",() =>{
  const numbers = [1,2,3,4,5];
  const expected = 3;
  const result = average(numbers);
  expect(result).toBe(expected);
})

// Snack-4
test("La funzione createSlug sostituisce gli spazi con -.", () =>{
  const str = "Ciao Mondo";
  const expected = "ciao-mondo";
  const result = createSlug(str);
  expect(result).toBe(expected);
})

// Snack-5
test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
  const str = "abba";
  const expected = true;
  const result = isPalindrome(str);
  expect(result).toBe(expected);
})

// Snack-6
test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () =>{
  const str = "";
  expect(() => createSlug(str)).toThrow("Il titolo non può essere vuoto o non valido.");
  const str2 = null;
  expect(() => createSlug(str2)).toThrow("Il titolo non può essere vuoto o non valido.");
  const str3 = undefined;
  expect(() => createSlug(str3)).toThrow("Il titolo non può essere vuoto o non valido.");
})
// Snack-7
const posts = [
  { id: 1, title: "Post 1", slug: "Contenuto del post 1" },
  { id: 2, title: "Post 2", slug: "Contenuto del post 2" },
  { id: 3, title: "Post 3", slug: "Contenuto del post 3" }
];


test("La funzione findPostById restituisce il post corretto dato l'array di post e l'id", () => {
  const id = 2;
  const expected = { id: 2, title: "Post 2", slug: "Contenuto del post 2" };
  const result = findPostById(posts, id);
  expect(result).toEqual(expected);

})