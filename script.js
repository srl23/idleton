let showCount = document.getElementById("counter");

let houseCount = document.getElementById("houses-owned");
let apartmentCount = document.getElementById("apartments-owned");
let condoCount = document.getElementById("condos-owned");

let money = 0;
let income = 1;

let houseValue = 1;
let apartmentValue = 5;
let condoValue = 10;

let house = 0;
let apartment = 0;
let condo = 0;

function countUp() {
    money += income;
    updateViews();
}

function buyHouse() {
    if(money >= 1) {
        money -= 1;
        income += houseValue;
        house++;
        console.log(house);
        houseCount.innerHTML = "Houses: " + house;
        updateViews();
    } else {
        //nothing
    }
}

function buyApartment() {
    if(money >= 100) {
        money -= 100;
        income += apartmentValue;
        apartment++;
        console.log(apartment);
        apartmentCount.innerHTML = "Apartments: " + apartment;
        updateViews();
    } else {
        //nothing at all
    }
}

function buyCondo() {
    if(money >= 250) {
        money -= 250;
        income += condoValue;
        condo++;
        console.log(condo);
        condoCount.innerHTML = "Condos: " + condo;
        updateViews();
    } else {
        //nothing here boss
    }
}

let interval = setInterval(countUp, 1000);

function updateViews() {
    showCount.innerHTML = "Money: " + money;
}