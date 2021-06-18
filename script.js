let showCount = document.getElementById("counter");
let count = 0;

function countUp() {
    count += 1;
    console.log(count);
    updateViews();
}

let interval = setInterval(countUp, 1000);

function updateViews() {
    showCount.innerHTML = count;
}