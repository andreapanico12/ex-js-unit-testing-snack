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


module.exports = {
  getInitials,
  createSlug,
  average,
  isPalindrome
};