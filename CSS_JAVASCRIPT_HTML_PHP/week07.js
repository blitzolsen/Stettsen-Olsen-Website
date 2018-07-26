function onLoad() {
    headerReplace();
    setAllBoxestoZero();
}
function onResetCart() {
    document.getElementById("before_tax").innerHTML = (0).toFixed(2);
    document.getElementById("tax").innerHTML = (0).toFixed(2);
    document.getElementById("shipping").innerHTML = (0).toFixed(2);
    document.getElementById("grand_total").innerHTML = (0).toFixed(2);
    document.getElementById("cart_items").innerHTML = "";
    document.getElementById("cart_items2").value = "";
    document.getElementById("tax2").value = "";
    document.getElementById("shipping2").value = "";
    document.getElementById("grand_total2").value = "";


    setAllBoxestoZero();
}
function headerReplace() {
    document.getElementById("welcome").style.visibility = "hidden";
    var x = document.createElement("IMG");
    x.setAttribute("src", "hello.png");
    document.getElementById("site_heading").appendChild(x);
}
function setAllBoxestoZero() {
    document.getElementById("item1").value = "0";
    document.getElementById("item2").value = "0";
    document.getElementById("item3").value = "0";
    document.getElementById("item4").value = "0";
    document.getElementById("item5").value = "0";
    document.getElementById("item6").value = "0";
}
function validateNumber(numb) {
    var x;
    x = document.getElementById(numb).value;
    if (x >= 1 && x <= 100 && x != "") {
        addToCart(numb);
    }
    else {
        alert("That is not a valid entry. Try a number between 1 and 100.")
    }
}
function addToCart(item) {
    var x = item + "_price";
    var n = String(document.getElementById(item + "_name").innerHTML);
    var y = document.getElementById(x).textContent.slice(1, 7);
    var t = Number(y).toFixed(2);
    var z = document.getElementById(item).value;
    var u = (t * z).toFixed(2);
    var a = Number(document.getElementById("before_tax").textContent).toFixed(2);
    a = +a + +u;
    document.getElementById("before_tax").innerHTML = a.toFixed(2);
    document.getElementById("tax").innerHTML = (a * 0.07).toFixed(2);
    document.getElementById("tax2").value = (a * 0.07).toFixed(2);
    document.getElementById("shipping").innerHTML = (30).toFixed(2);
    document.getElementById("shipping2").value = (30).toFixed(2);
    document.getElementById("grand_total").innerHTML = (a * 0.07 + a + 30).toFixed(2);
    document.getElementById("grand_total2").value = (a * 0.07 + a + 30).toFixed(2);
    document.getElementById("cart_items").innerHTML += n + "    $" + u + "<br>";
    document.getElementById("cart_items2").value += n + "    $" + u + "<br>";
}
// verification methods
function verifyName(theName, theClass) {
    var _name =/[A-Za-z]/;
    var isGood = _name.test(theName);
    if (isGood) {
        document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';
    }
    // put error back up after initial value is gone
    else
        document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
}
function verifyAddress(theAddress, theClass) {
    var _address = /^\d+\s[A-z]+\s[A-z]+/g;
    var isGood = _address.test(theAddress);
    if (isGood) {
        document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';
    }
    // put error back up after initial value is gone
    else
        document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
}
function verifyCity(theCity, theClass) {
    var _city =/[A-Za-z]/;
    var isGood = _city.test(theCity);
    if (isGood) {
        document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';
    }
    // put error back up after initial value is gone
    else
        document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
}
function verifyState(theState, theClass) {
    var _state = /^\s?\b([A-Z][A-Z])\b\s?$/;
    var states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
                  'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
                  'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
                  'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
                  'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];
    var isGood = _state.test(theState.trim());
    var isState = false;
    for(var count = 0; count < states.length; count++){
        if(theState.trim() == states[count]){
            isState = true;
        }
    }
    if (isGood) {
        document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';
    }
    // put error back up after initial value is gone
    else
        document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
}
function verifyZip(theZip, theClass) {
    var _zip = /^\d{5}$/;
    var isGood = _zip.test(theZip);
    if (isGood) {
        document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';
    }
    // put error back up after initial value is gone
    else
        document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
}
function verifyPhone(thePhone, theClass) {
    var _phone = /^(\d{3})-(\d{3})-(\d{4})$/g;
    var isGood = _phone.test(thePhone);
    if (isGood) {
        document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';
    }
    // put error back up after initial value is gone
    else
        document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
}
function verifyCard(theCard, theClass) {
    var _cnn = /^\s?(\d{4}) ?(\d{4}) ?(\d{4}) ?(\d{4})\s?$/;
    var isGood = _cnn.test(theCard);
    if (isGood) {
        document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';
    }
    // put error back up after initial value is gone
    else
        document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
}
function onResetForm() {
    resetInput("first_name");
    resetInput("last_name");
    resetInput("address");
    resetInput("address_city");
    resetInput("address_state");
    resetInput("address_zip");
    resetInput("phone_number");
    resetInput("card_number");
    document.getElementByName("first_name").focus();
}
function onSubmit() {   
       // alert("Thank you for your business. We look forward to serving you again.");
}