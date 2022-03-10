function btn() {
    let text = document.getElementById("charat").innerHTML;
    let letter = text.charAt(5);


    document.getElementById("letter").innerHTML = letter;
}

function btn1() {
    let text1 = "sea";
    let text2 = "food";
    let result = text1.concat(text2);
    document.getElementById("concat").innerHTML = result;
}

function btn2() {
    let text = "Hello world";
    let result = text.endsWith("world");

    document.getElementById("demo").innerHTML = result;
}