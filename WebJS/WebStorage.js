localStorage.setItem('myCat', 'Tom');
const cat = localStorage.getItem('myCat');
localStorage.removeItem('myCat');
localStorage.clear();
console.log(cat)
localStorage.clear();


sessionStorage.setItem('myCat', 'Tom');
const dog = sessionStorage.getItem('myCat');
sessionStorage.removeItem('myCat');
sessionStorage.clear();
console.log(dog)
sessionStorage.clear();
