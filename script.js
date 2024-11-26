

/*let priceTicket = priceKm * kmPasseggero
const priceUnder18 = priceTicket * (1 - discountUnder18 / 100);
const priceOver65 = priceTicket * (1 - discountOver65 / 100);
let finalPrice

if (agePassenger < 18){
    finalPrice = priceUnder18
    console.log('Il prezzo finale è pari a', finalPrice .toFixed(2));
}
else if (agePassenger > 65){
    finalPrice = priceOver65
    console.log('Il prezzo finale è pari a', finalPrice .toFixed(2));
}
else {
    console.log('Il prezzo totale del ticket è', priceTicket .toFixed(2));

}
console.log(finalPrice)*/

const priceKm = 0.21;
const discountUnder18 = 20;
const discountOver65 = 40;

const name = document.getElementById('name-input');
const km = document.getElementById('km-input');
const menuAge = document.getElementById('age-input');
const form = document.getElementById('info');
const btn = document.getElementById('calc');
const span = document.getElementById('price');
console.log(km.value)


btn.addEventListener('click',()=>{
let priceTicket = priceKm * km.value
const priceUnder18 = priceTicket * (1 - discountUnder18 / 100);
const priceOver65 = priceTicket * (1 - discountOver65 / 100);
let finalPrice


console.log(menuAge.value)
if (menuAge.value === '1'){
    finalPrice = priceUnder18
    span.innerText = finalPrice.toFixed(2);
}
else if (menuAge.value === '3'){
    finalPrice = priceOver65
    console.log('Il prezzo finale è pari a', finalPrice .toFixed(2));
}
else {
    console.log('Il prezzo totale del ticket è', priceTicket .toFixed(2));

}
 console.log(km.value)
})
