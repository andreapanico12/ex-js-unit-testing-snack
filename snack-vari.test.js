const { getInitials, createSlug, average, isPalindrome, posts, findPostById } = require('./snack-vari.js');

// Snack-1
describe("getInitials", () => {
  test("restituisce le iniziali di un nome completo", () => {
    const name = "Mario Rossi";
    const expected = "MR";
    const result = getInitials(name);
    expect(result).toBe(expected);
  });
});

// Snack-2, Snack-4, Snack-6
describe("createSlug", () => {
  test("restituisce una stringa in lowercase", () => {
    const str = "Aspettami";
    const expected = "aspettami";
    const result = createSlug(str);
    expect(result).toBe(expected);
  });

  test("sostituisce gli spazi con -", () => {
    const str = "Ciao Mondo";
    const expected = "ciao-mondo";
    const result = createSlug(str);
    expect(result).toBe(expected);
  });

  test("lancia un errore se il titolo è vuoto o non valido", () => {
    expect(() => createSlug("")).toThrow("Il titolo non può essere vuoto o non valido.");
    expect(() => createSlug(null)).toThrow("Il titolo non può essere vuoto o non valido.");
    expect(() => createSlug(undefined)).toThrow("Il titolo non può essere vuoto o non valido.");
  });
});

// Snack-3
describe("average", () => {
  test("calcola la media aritmetica di un array di numeri", () => {
    const numbers = [1, 2, 3, 4, 5];
    const expected = 3;
    const result = average(numbers);
    expect(result).toBe(expected);
  });
});

// Snack-5
describe("isPalindrome", () => {
  test("verifica se una stringa è un palindromo", () => {
    const str = "abba";
    const expected = true;
    const result = isPalindrome(str);
    expect(result).toBe(expected);
  });
});

// Snack-7
describe("findPostById", () => {
  test("restituisce il post corretto dato l'array di post e l'id", () => {
    const id = 2;
    const expected = { id: 2, title: "Post 2", slug: "Contenuto del post 2" };
    const result = findPostById(posts, id);
    expect(result).toEqual(expected);
  });
});
