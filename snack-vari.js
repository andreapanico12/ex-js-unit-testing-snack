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
module.exports = {
  getInitials,
  createSlug
};