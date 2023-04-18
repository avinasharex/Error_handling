try{
function getPerson(n, a){
    this.personName = String(n); 
    this.age = Number(a);
}
const person = new getPerson(09, "fgyhg");
console.log(person);
}catch (e){
    console.log(e);
}

