function problem1() {
    console.log("Hello World");
    document.getElementById("problem1").innerHTML = "Hello World";
}
function problem2(name2, text2) {
    var text3 = text2.toString().split(" ");
    for (var count = 0; count < text3.length; count++) {
        if (text3[count] == "RICH_GUY,") {
            text3[count] = name2 + ",";
        }
        if (text3[count] == "RICH_GUY:\n") {
            text3[count] = name2 + ":\n";
        }
        text2 = text3.join(" ");
    }
    console.log(text2);
    document.getElementById("text2").innerHTML = text2;
}
function problem3(number) {
    num2 = Number((number - 32) * 5 / 9).toFixed(1);
    console.log(num2);
    document.getElementById("problem3").innerHTML = num2;
}
function problem4(number) {
    var rate = 0;
    if (number > 5 || number < 1) {
        alert("Invalid weight");
        console.log("Invalid weight");
    }
    else {
        if (number == 1)
            rate = 0.98;
        else if (number == 2)
            rate = 1.19;
        else if (number == 3)
            rate = 1.40;
        else if (number == 4)
            rate = 1.61;
        else if (number == 5)
            rate = 1.82;
        else {
            alert("Invalid weight");
            console.log("Invalid weight");
        }
        console.log("$" + Number(rate).toFixed(2));
        document.getElementById("problem4").innerHTML = "$" + Number(rate).toFixed(2);
    }
}
function problem5(apr, term, amount) {
    var amount2 = (1 + apr / 100);
    for ( i = 1; i < term; i++ ) {
        amount2 *= (1 + apr / 100);
     }
     amount2 = amount2 * amount;
    console.log("$" + Number(amount2).toFixed(2));
    document.getElementById("problem5").innerHTML = "$" + Number(amount2).toFixed(2);
}