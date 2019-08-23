var count = null;
counter1 = 0;
counter2 = 0;
counter3 = 0;
counter4 = 0;
counter5 = 0;
counter6 = 0;
counter7 = 0;
counter8 = 0;
counter9 = 0;
counter10 = 0;
counter11 = 0;
counter12 = 0;
counter13 = 0;
counter14 = 0;
counter15 = 0;
counter16 = 0;
let counter = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let car = [];
car[0] = car1;
car[1] = car2;
car[2] = car3;
car[3] = car4;
car[4] = car5;
car[5] = car6;
car[6] = car7;
car[7] = car8;

var chickenPoints = 0;
var chickenpoints = 0;
var chickenLives = 3;

function start() {
    document.getElementById("start1").style.visibility = "hidden";
    document.getElementById("chicken").style.visibility = "visible";
    if (count == null) {
        var myTimer1 = setTimeout(car1start, 0010);
        var myTimer2 = setTimeout(car2start, 6000);
        var myTimer3 = setTimeout(car3start, 20000);
        var myTimer4 = setTimeout(car4start, 12000);
        var myTimer5 = setTimeout(car5start, 2000);
        var myTimer6 = setTimeout(car6start, 8000);
        var myTimer7 = setTimeout(car7start, 14000);
        var myTimer8 = setTimeout(car8start, 17000);
        var myTimer9 = setTimeout(car9start, 0010);
        var myTimer10 = setTimeout(car10start, 4000);
        var myTimer11 = setTimeout(car11start, 8000);
        var myTimer12 = setTimeout(car12start, 8000);
        var myTimer13 = setTimeout(car13start, 12000);
        var myTimer14 = setTimeout(car14start, 16000);
        var myTimer15 = setTimeout(car15start, 20000);
        var myTimer16 = setTimeout(car16start, 19000);
        gameTimer();
    }
    count = count + 1;
}

function car1start() {
    var inTimer1 = setInterval(car1f, 12);
}
function car1f() {
    anyCar(0, 1, -300);
}

function anyCar(carNum, offset, offScreen) {
    counter[carNum]++;
    var left1 = parseInt(window.getComputedStyle(car[carNum], null).left);
    car1.style.left = (left1 + offset) + "px";

    var chicken1EndTop = parseInt(window.getComputedStyle(chicken, null).top);
    var chicken1EndLeft = parseInt(window.getComputedStyle(chicken, null).left);
    var car1EndTop = parseInt(window.getComputedStyle(car[carNum], null).top);
    var car1EndLeft = parseInt(window.getComputedStyle(car[carNum], null).left);
    var car1Width = parseInt(window.getComputedStyle(car[carNum], null).width);

    if (chicken1EndTop == car1EndTop && (chicken1EndLeft + 40 > car1EndLeft && chicken1EndLeft < car1EndLeft + car1Width))
        endChicken();

    if (counter[carNum] > 1950) {
        car[carNum].style.left = offScreen + "px";
        counter[carNum] = 0;
    }

}

function car2start() {
    var inTimer2 = setInterval(car2f, 12);
}
function car2f() {

    counter2++;
    var left2 = parseInt(window.getComputedStyle(car2, null).left);
    car2.style.left = (left2 + 1) + "px";

    var chicken2EndTop = parseInt(window.getComputedStyle(chicken, null).top);
    var chicken2EndLeft = parseInt(window.getComputedStyle(chicken, null).left);
    var car2EndTop = parseInt(window.getComputedStyle(car2, null).top);
    var car2EndLeft = parseInt(window.getComputedStyle(car2, null).left);
    var car2Width = parseInt(window.getComputedStyle(car2, null).width);

    if (chicken2EndTop == car2EndTop && (chicken2EndLeft + 40 > car2EndLeft && chicken2EndLeft < car2EndLeft + car2Width)) {
        endChicken();
    }
    if (counter2 > 1950) {
        car2.style.left = "-300px";
        counter2 = 0;
    }
}

function car3start() {
    var inTimer3 = setInterval(car3f, 12);
}
function car3f() {

    counter3++;
    var left3 = parseInt(window.getComputedStyle(car3, null).left);
    car3.style.left = (left3 + 1) + "px";

    var chicken3EndTop = parseInt(window.getComputedStyle(chicken, null).top);
    var car3EndTop = parseInt(window.getComputedStyle(car3, null).top);
    var chicken3EndLeft = parseInt(window.getComputedStyle(chicken, null).left);
    var car3EndLeft = parseInt(window.getComputedStyle(car3, null).left);
    var car3Width = parseInt(window.getComputedStyle(car3, null).width);

    if (chicken3EndTop == car3EndTop && (chicken3EndLeft + 40 > car3EndLeft && chicken3EndLeft < car3EndLeft + car3Width)) {
        endChicken();
    }

    if (counter3 > 1950) {
        car3.style.left = "-300px";
        counter3 = 0;
    }
}

function car4start() {
    var inTimer4 = setInterval(car4f, 12);
}
function car4f() {

    counter4++;
    var left4 = parseInt(window.getComputedStyle(car4, null).left);
    car4.style.left = (left4 + 1) + "px";

    var chicken4EndTop = parseInt(window.getComputedStyle(chicken, null).top);
    var car4EndTop = parseInt(window.getComputedStyle(car4, null).top);
    var chicken4EndLeft = parseInt(window.getComputedStyle(chicken, null).left);
    var car4EndLeft = parseInt(window.getComputedStyle(car4, null).left);
    var car4Width = parseInt(window.getComputedStyle(car4, null).width);

    if (chicken4EndTop == car4EndTop && (chicken4EndLeft + 40 > car4EndLeft && chicken4EndLeft < car4EndLeft + car4Width)) {
        endChicken();
    }
    if (counter4 > 1950) {
        car4.style.left = "-300px";
        counter4 = 0;
    }
}

function car5start() {
    var inTimer5 = setInterval(car5f, 12);
}
function car5f() {

    counter5++;
    var left5 = parseInt(window.getComputedStyle(car5, null).left);
    car5.style.left = (left5 + 1) + "px";

    var chicken5EndTop = parseInt(window.getComputedStyle(chicken, null).top);
    var car5EndTop = parseInt(window.getComputedStyle(car5, null).top);
    var chicken5EndLeft = parseInt(window.getComputedStyle(chicken, null).left);
    var car5EndLeft = parseInt(window.getComputedStyle(car5, null).left);
    var car5Width = parseInt(window.getComputedStyle(car5, null).width);

    if (chicken5EndTop == car5EndTop && (chicken5EndLeft + 40 > car5EndLeft && chicken5EndLeft < car5EndLeft + car5Width)) {
        endChicken();
    }

    if (counter5 > 1950) {
        car5.style.left = "-300px";
        counter5 = 0;
    }
}

function car6start() {
    var inTimer6 = setInterval(car6f, 12);
}
function car6f() {

    counter6++;
    var left6 = parseInt(window.getComputedStyle(car6, null).left);
    car6.style.left = (left6 + 1) + "px";

    var chicken6EndTop = parseInt(window.getComputedStyle(chicken, null).top);
    var car6EndTop = parseInt(window.getComputedStyle(car6, null).top);
    var chicken6EndLeft = parseInt(window.getComputedStyle(chicken, null).left);
    var car6EndLeft = parseInt(window.getComputedStyle(car6, null).left);
    var car6Width = parseInt(window.getComputedStyle(car6, null).width);

    if (chicken6EndTop == car6EndTop && (chicken6EndLeft + 40 > car6EndLeft && chicken6EndLeft < car6EndLeft + car6Width)) {
        endChicken();
    }
    if (counter6 > 1950) {
        car6.style.left = "-300px";
        counter6 = 0;
    }
}

function car7start() {
    var inTimer7 = setInterval(car7f, 12);
}
function car7f() {

    counter7++;
    var left7 = parseInt(window.getComputedStyle(car7, null).left);
    car7.style.left = (left7 + 1) + "px";

    var chicken7EndTop = parseInt(window.getComputedStyle(chicken, null).top);
    var car7EndTop = parseInt(window.getComputedStyle(car7, null).top);
    var chicken7EndLeft = parseInt(window.getComputedStyle(chicken, null).left);
    var car7EndLeft = parseInt(window.getComputedStyle(car7, null).left);
    var car7Width = parseInt(window.getComputedStyle(car7, null).width);

    if (chicken7EndTop == car7EndTop && (chicken7EndLeft + 40 > car7EndLeft && chicken7EndLeft < car7EndLeft + car7Width)) {
        endChicken();
    }

    if (counter7 > 1950) {
        car7.style.left = "-300px";
        counter7 = 0;
    }
}

function car8start() {
    var inTimer8 = setInterval(car8f, 12);
}
function car8f() {

    counter8++;
    var left8 = parseInt(window.getComputedStyle(car8, null).left);
    car8.style.left = (left8 + 1) + "px";

    var chicken8EndTop = parseInt(window.getComputedStyle(chicken, null).top);
    var car8EndTop = parseInt(window.getComputedStyle(car8, null).top);
    var chicken8EndLeft = parseInt(window.getComputedStyle(chicken, null).left);
    var car8EndLeft = parseInt(window.getComputedStyle(car8, null).left);
    var car8Width = parseInt(window.getComputedStyle(car8, null).width);

    if (chicken8EndTop == car8EndTop && (chicken8EndLeft + 40 > car8EndLeft && chicken8EndLeft < car8EndLeft + car8Width)) {
        endChicken();
    }
    if (counter8 > 1950) {
        car8.style.left = "-300px";
        counter8 = 0;
    }
}
function car9start() {
    var inTimer9 = setInterval(car9f, 12);
}
function car9f() {

    counter9++;
    var left9 = parseInt(window.getComputedStyle(car9, null).left);
    car9.style.left = (left9 - 1) + "px";

    var chicken9EndTop = parseInt(window.getComputedStyle(chicken, null).top);
    var chicken9EndLeft = parseInt(window.getComputedStyle(chicken, null).left);
    var car9EndTop = parseInt(window.getComputedStyle(car9, null).top);
    var car9EndLeft = parseInt(window.getComputedStyle(car9, null).left);
    var car9Width = parseInt(window.getComputedStyle(car9, null).width);

    if (chicken9EndTop == car9EndTop && (chicken9EndLeft + 40 > car9EndLeft && chicken9EndLeft < car9EndLeft + car9Width))
        endChicken();

    if (counter9 > 1950) {
        car9.style.left = "1600px";
        counter9 = 0;
    }
}

function car10start() {
    var inTimer10 = setInterval(car10f, 12);
}
function car10f() {

    counter10++;
    var left10 = parseInt(window.getComputedStyle(car10, null).left);
    car10.style.left = (left10 - 1) + "px";

    var chicken10EndTop = parseInt(window.getComputedStyle(chicken, null).top);
    var car10EndTop = parseInt(window.getComputedStyle(car10, null).top);
    var chicken10EndLeft = parseInt(window.getComputedStyle(chicken, null).left);
    var car10EndLeft = parseInt(window.getComputedStyle(car10, null).left);
    var car10Width = parseInt(window.getComputedStyle(car10, null).width);

    if (chicken10EndTop == car10EndTop && (chicken10EndLeft + 40 > car10EndLeft && chicken10EndLeft < car10EndLeft + car10Width)) {
        endChicken();
    }
    if (counter10 > 1950) {
        car10.style.left = "1600px";
        counter10 = 0;
    }
}

function car11start() {
    var inTimer11 = setInterval(car11f, 12);
}
function car11f() {

    counter11++;
    var left11 = parseInt(window.getComputedStyle(car11, null).left);
    car11.style.left = (left11 - 1) + "px";

    var chicken11EndTop = parseInt(window.getComputedStyle(chicken, null).top);
    var car11EndTop = parseInt(window.getComputedStyle(car11, null).top);
    var chicken11EndLeft = parseInt(window.getComputedStyle(chicken, null).left);
    var car11EndLeft = parseInt(window.getComputedStyle(car11, null).left);
    var car11Width = parseInt(window.getComputedStyle(car11, null).width);

    if (chicken11EndTop == car11EndTop && (chicken11EndLeft + 40 > car11EndLeft && chicken11EndLeft < car11EndLeft + car11Width)) {
        endChicken();
    }

    if (counter11 > 1950) {
        car11.style.left = "1600px";
        counter11 = 0;
    }
}

function car12start() {
    var inTimer12 = setInterval(car12f, 12);
}
function car12f() {

    counter12++;
    var left12 = parseInt(window.getComputedStyle(car12, null).left);
    car12.style.left = (left12 - 1) + "px";

    var chicken12EndTop = parseInt(window.getComputedStyle(chicken, null).top);
    var car12EndTop = parseInt(window.getComputedStyle(car12, null).top);
    var chicken12EndLeft = parseInt(window.getComputedStyle(chicken, null).left);
    var car12EndLeft = parseInt(window.getComputedStyle(car12, null).left);
    var car12Width = parseInt(window.getComputedStyle(car12, null).width);

    if (chicken12EndTop == car12EndTop && (chicken12EndLeft + 40 > car12EndLeft && chicken12EndLeft < car12EndLeft + car12Width)) {
        endChicken();
    }
    if (counter12 > 1950) {
        car12.style.left = "1600px";
        counter12 = 0;
    }
}

function car13start() {
    var inTimer13 = setInterval(car13f, 12);
}
function car13f() {

    counter13++;
    var left13 = parseInt(window.getComputedStyle(car13, null).left);
    car13.style.left = (left13 - 1) + "px";

    var chicken13EndTop = parseInt(window.getComputedStyle(chicken, null).top);
    var car13EndTop = parseInt(window.getComputedStyle(car13, null).top);
    var chicken13EndLeft = parseInt(window.getComputedStyle(chicken, null).left);
    var car13EndLeft = parseInt(window.getComputedStyle(car13, null).left);
    var car13Width = parseInt(window.getComputedStyle(car13, null).width);

    if (chicken13EndTop == car13EndTop && (chicken13EndLeft + 40 > car13EndLeft && chicken13EndLeft < car13EndLeft + car13Width)) {
        endChicken();
    }

    if (counter13 > 1950) {
        car13.style.left = "1600px";
        counter13 = 0;
    }
}

function car14start() {
    var inTimer14 = setInterval(car14f, 12);
}
function car14f() {

    counter14++;
    var left14 = parseInt(window.getComputedStyle(car14, null).left);
    car14.style.left = (left14 - 1) + "px";

    var chicken14EndTop = parseInt(window.getComputedStyle(chicken, null).top);
    var car14EndTop = parseInt(window.getComputedStyle(car14, null).top);
    var chicken14EndLeft = parseInt(window.getComputedStyle(chicken, null).left);
    var car14EndLeft = parseInt(window.getComputedStyle(car14, null).left);
    var car14Width = parseInt(window.getComputedStyle(car14, null).width);

    if (chicken14EndTop == car14EndTop && (chicken14EndLeft + 40 > car14EndLeft && chicken14EndLeft < car14EndLeft + car14Width)) {
        endChicken();
    }
    if (counter14 > 1950) {
        car14.style.left = "1600";
        counter14 = 0;
    }
}

function car15start() {
    var inTimer15 = setInterval(car15f, 12);
}
function car15f() {

    counter15++;
    var left15 = parseInt(window.getComputedStyle(car15, null).left);
    car15.style.left = (left15 - 1) + "px";

    var chicken15EndTop = parseInt(window.getComputedStyle(chicken, null).top);
    var car15EndTop = parseInt(window.getComputedStyle(car15, null).top);
    var chicken15EndLeft = parseInt(window.getComputedStyle(chicken, null).left);
    var car15EndLeft = parseInt(window.getComputedStyle(car15, null).left);
    var car15Width = parseInt(window.getComputedStyle(car15, null).width);

    if (chicken15EndTop == car15EndTop && (chicken15EndLeft + 40 > car15EndLeft && chicken15EndLeft < car15EndLeft + car15Width)) {
        endChicken();
    }

    if (counter15 > 1950) {
        car15.style.left = "1600";
        counter15 = 0;
    }
}

function car16start() {
    var inTimer16 = setInterval(car16f, 12);
}
function car16f() {

    counter16++;
    var left16 = parseInt(window.getComputedStyle(car16, null).left);
    car16.style.left = (left16 - 1) + "px";

    var chicken16EndTop = parseInt(window.getComputedStyle(chicken, null).top);
    var car16EndTop = parseInt(window.getComputedStyle(car16, null).top);
    var chicken16EndLeft = parseInt(window.getComputedStyle(chicken, null).left);
    var car16EndLeft = parseInt(window.getComputedStyle(car16, null).left);
    var car16Width = parseInt(window.getComputedStyle(car16, null).width);

    if (chicken16EndTop == car16EndTop && (chicken16EndLeft + 40 > car16EndLeft && chicken16EndLeft < car16EndLeft + car16Width)) {
        endChicken();
    }
    if (counter16 > 1950) {
        car16.style.left = "1600";
        counter16 = 0;
    }
}



function moveChicken(event) {
    var x = event.key;

    switch (x) {
        case ("i"): if (count != null) {
            var top = parseInt(window.getComputedStyle(chicken, null).top);
            chicken.style.top = (top - 65) + "px";
        }
            if (top < 130) {
                chicken.style.top = "660px";
                chicken.style.left = "668px";
                chickenPoints++;
                chickenPoints1 = chickenPoints * 100;
                var chickenPointsString = "Chicken Points: " + chickenPoints1;
                document.getElementById("chickpts").innerHTML = chickenPointsString;
            }
            break;
        case ("j"):
            var left = parseInt(window.getComputedStyle(chicken, null).left);
            chicken.style.left = (left - 65) + "px";
            break;
        case ("l"):
            var right = parseInt(window.getComputedStyle(chicken, null).left);
            chicken.style.left = (right + 65) + "px";
            break;
        case ("k"):
            var down = parseInt(window.getComputedStyle(chicken, null).top);
            chicken.style.top = (down + 65) + "px";
            break;
    }
}

function endChicken() {
    chicken.style.top = "660px";
    chicken.style.left = "668px";
    chickenLives = chickenLives - 1;
    var chickenLivesString = "Lives: " + chickenLives;
    document.getElementById("chickLives").innerHTML = chickenLivesString;

    if (chickenLives == 0) {
        location.replace("0htmlEndProject2.html");
    }
}
function gameTimer() {
    var gmTimer = setInterval(countdown, 1000);
    var gmCounter = 100;
    function countdown() {
        gmCounter = gmCounter - 1;
        var tmLeft = "Time Left: " + gmCounter;
        document.getElementById("timeLeft").innerHTML = tmLeft;
        if (gmCounter == 0) {
            endChicken();
        }
    }
}