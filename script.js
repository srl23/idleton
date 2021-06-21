let showCount = document.getElementById("counter");

let houseCount = document.getElementById("houses-owned");
let apartmentCount = document.getElementById("apartments-owned");
let condoCount = document.getElementById("condos-owned");
let storefrontCount = document.getElementById("storefronts-owned");
let officeSpaceCount = document.getElementById("officespace-owned");

let money = 0;
let income = 1;

let houseValue = 1;
let apartmentValue = 5;
let condoValue = 10;
let storefrontValue = 25;
let officeSpaceValue = 50;

let house = 0;
let apartment = 0;
let condo = 0;
let storefront = 0;
let officeSpace = 0;

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

function buyStoreFront() {
    if(money >= 500) {
        money -= 500;
        income += storefrontValue;
        storefront++;
        console.log(storefront);
        storefrontCount.innerHTML = "Storefronts: " + storefront;
        updateViews();
    } else {
        //nope nothing. are you reading these?
    }
}

function buyOfficeSpace() {
    if(money >= 1000) {
        money -= 1000;
        income += officeSpaceValue;
        officeSpace++;
        console.log(officeSpace);
        officeSpaceCount.innerHTML = "Office Space: " + officeSpace;
        updateViews();
    } else {
        //nothing here but comments
    }
}

let interval = setInterval(countUp, 1000);

function updateViews() {
    showCount.innerHTML = "Money: " + money;
}