function stringToHTML() {
    var str = document.getElementById("text").value;
    var fonts = 2;
    var everyother = new Number(document.getElementById("everyother").value);
    var html = "";
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === "\n") {
            html += "<br>";
            continue;
        }
        var fontnumber = Math.floor(i / everyother) % fonts + 1;
        html += "<span class='font" + fontnumber + "'>" + str.charAt(i) + "</span>";
    }
    
    var element = document.getElementById("html");
    element.innerHTML = html;

    for (var i = 1; i <= fonts; i++) {
        var elements = document.getElementsByClassName("font"+i);

        for (var k = 0; k < elements.length; k++) {
            if (i == 1) {
                elements[k].style.fontFamily = document.getElementById("font1").value;
                elements[k].style.backgroundColor = document.getElementById("font1bg").value;
                elements[k].style.color = document.getElementById("font1color").value;
            } 
            else if (i == 2) {
                elements[k].style.fontFamily = document.getElementById("font2").value;
                elements[k].style.backgroundColor = document.getElementById("font2bg").value;
                elements[k].style.color = document.getElementById("font2color").value;
            }
        }
    }
}
