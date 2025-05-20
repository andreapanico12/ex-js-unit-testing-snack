// FUNZIONE SNACK 1
function getInitials(name){
  const nameParts = name.split(" ");
  const initials = nameParts.map(part => part.charAt(0).toUpperCase()).join("");
  return initials;
}

// FUNZIONE SNACK 2, 4, 6
// La funzione createSlug è stata modificata per includere la funzionalità di sostituzione degli spazi con '-'
// La funzione createSlug è stata modificata per includere la funzionalità di gestione degli errori

function createSlug(str){
  if (!str || typeof str !== 'string') {
    throw new Error("Il titolo non può essere vuoto o non valido.");
  }
  return str.toLowerCase().replace(/\s+/g, '-')
}

// FUNZIONE SNACK 3
function average(numbers){
  const sum = numbers.reduce((acc,num) => acc + num, 0);
  return sum / numbers.length;
}

// FUNZIONE SNACK 5
function isPalindrome(str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

// FUNZIONE SNACK 7, 8
const originalPosts = [
  { id: 1, title: "Post 1", slug: "Contenuto del post 1" },
  { id: 2, title: "Post 2", slug: "Contenuto del post 2" },
  { id: 3, title: "Post 3", slug: "Contenuto del post 3" }
];

function findPostById(posts, id) {
  return posts.find(post => post.id === id);
}

function addPost(posts, post) {
  posts.push(post);
}
function removePost(posts, post) {
  const index = posts.findIndex(p => p.id === post.id);
  if (index !== -1) {
    posts.splice(index, 1);
  }
}


module.exports = {
  getInitials,
  createSlug,
  average,
  isPalindrome,
  originalPosts,
  findPostById,
  addPost,
  removePost
};