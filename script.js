let showCount = document.getElementById("counter");
let houseCount = document.getElementById("houses-owned");
let money = 0;
let house = 0;
let income = 1;

let houseValue = 1;

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

let interval = setInterval(countUp, 1000);

function updateViews() {
    showCount.innerHTML = "Money: " + money;
}