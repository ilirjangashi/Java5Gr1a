let eHene = 95;
let eMarte = 80;
let eMerkure = 115;

let gjithsej = eHene + eMarte + eMerkure;
let ore = gjithsej / 60;
let minuta = gjithsej % 60;

console.log("Gjithsej ne minuta:" + gjithsej);
console.log("Koha ne ore:" + ore.toFixed(2));
console.log("Minutat e mbetura:" + minuta);