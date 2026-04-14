
function zad1() {
    let a = +a1.value, b = +b1.value;
    r1.innerText = b === 0 ? "Nie można dzielić przez 0" : a / b;
}

function zad2() {
    let a = +a2.value, b = +b2.value, c = +c2.value, d = +d2.value;
    if (b === 0 || d === 0) {
        r2.innerText = "Nie można dzielić przez 0";
    } else {
        r2.innerText = a/b + c/d;
    }
}

function zad3() {
    let a = +a3.value, b = +b3.value;
    if (b - 4 === 0) {
        r3.innerText = "Dzielenie przez 0";
    } else {
        r3.innerText = (a + 6) / (b - 4);
    }
}

function zad4() {
    let n = +n4.value;
    r4.innerText = n % 2 === 0 ? "Parzysta" : "Nieparzysta";
}

function zad5() {
    let a = +a5.value, b = +b5.value;
    if (b === 0) {
        r5.innerText = "Nie można dzielić przez 0";
    } else {
        r5.innerText = a % b === 0 ? "Podzielna" : "Niepodzielna";
    }
}

function zad6() {
    let n = +n6.value;
    if (n > 0) r6.innerText = "Dodatnia";
    else if (n < 0) r6.innerText = "Ujemna";
    else r6.innerText = "Zero";
}

function zad7() {
    let a = +a7.value, b = +b7.value, c = +c7.value;
    r7.innerText = Math.max(a, b, c);
}

function zad8() {
    let arr = [+a8.value, +b8.value, +c8.value];
    arr.sort((x,y)=>x-y);
    r8.innerText = arr.join(", ");
}