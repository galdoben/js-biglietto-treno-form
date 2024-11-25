const priceKm = 0.21;
const discountUnder18 = 20;
const discountOver65 = 40;

let priceTicket = priceKm * kmPasseggero
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
console.log(finalPrice)


const name = document.querySelector(input-group-a);
const km = document.querySelector(input-group-b);
const menuAge = document.querySelector(form-select);