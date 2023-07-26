const input = document.querySelector('#currencyinput');
const output = document.querySelector("#output");

input.addEventListener('input', (e) =>{
    output.style.visibility = "visible"
    let metical = e.target.value;
    document.getElementById('dollar').innerHTML = metical * 0.016;
    document.getElementById('euro').innerHTML = metical * 0.014;
    document.getElementById('yen').innerHTML = metical * 2.16;
})