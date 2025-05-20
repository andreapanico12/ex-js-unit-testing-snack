// FUNZIONE SNACK 1
function getInitials(name){
  const nameParts = name.split(" ");
  const initials = nameParts.map(part => part.charAt(0).toUpperCase()).join("");
  return initials;
}

// FUNZIONE SNACK 2 e 4
// La funzione createSlug è stata modificata per includere la funzionalità di sostituzione degli spazi con '-'
function createSlug(str){
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