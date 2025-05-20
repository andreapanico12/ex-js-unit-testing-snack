// FUNZIONE SNACK 1
function getInitials(name){
  const nameParts = name.split(" ");
  const initials = nameParts.map(part => part.charAt(0).toUpperCase()).join("");
  return initials;
}

// FUNZIONE SNACK 2
function createSlug(str){
  return str.toLowerCase();
}

// FUNZIONE SNACK 3
function average(numbers){
  const sum = numbers.reduce((acc,num) => acc + num, 0);
  return sum / numbers.length;
}


module.exports = {
  getInitials,
  createSlug,
  average
};