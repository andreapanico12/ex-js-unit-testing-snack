const { getInitials, createSlug, average, isPalindrome, originalPosts, findPostById, addPost, removePost } = require('./snack-vari.js');



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

// Snack-7, snack-8


let posts;

beforeEach(() => {
  posts = [...originalPosts];
})
afterEach(() => {
  posts = null;
})



describe("Posts", () => {
  test("restituisce il post corretto dato l'array di post e l'id", () => {
    const id = 2;
    const expected = { id: 2, title: "Post 2", slug: "Contenuto del post 2" };
    const result = findPostById(posts, id);
    expect(result).toEqual(expected);
  });
  test("Dopo aver aggiunto un post con la funzione addPost, l'array posts deve contenere un elemento in più.", () =>{
    const initialLength = posts.length;
    const newPost = { id: 4, title: "Post 4", slug: "Contenuto del post 4" };

    addPost(posts, newPost);
    expect(posts.length).toBe(initialLength + 1);
    expect(posts).toContainEqual(newPost);
  
  })
  test("Dopo aver rimosso un post con la funzione removePost, l'array posts deve contenere un elemento in meno.", () =>{
    const initialLength = posts.length;
    const postToRemove = { id: 1, title: "Post 1", slug: "Contenuto del post 1" };

    removePost(posts, postToRemove);
    expect(posts.length).toBe(initialLength - 1);
  })

  test("lancia un errore se si aggiunge un post con id già esistente", () => {
    const newPost = { id: 1, title: "Post duplicato", slug: "slug unico" };

    expect(() => addPost(posts, newPost)).toThrow("Id già esistente");
  });

  test("lancia un errore se si aggiunge un post con slug già esistente", () => {
    const newPost = { id: 99, title: "Post duplicato", slug: "Contenuto del post 2" };

    expect(() => addPost(posts, newPost)).toThrow("Slug già esistente");
  });



});

