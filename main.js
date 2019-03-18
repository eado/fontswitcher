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
            elements[k].style.fontFamily = document.getElementById("font"+i).value;
            elements[k].style.backgroundColor = document.getElementById("font"+i+"bg").value;
            elements[k].style.color = document.getElementById("font"+i+"color").value;
            elements[k].style.fontSize = document.getElementById("font"+i+"size").value + "em";

            if (document.getElementById("font"+i+"bold").checked) {
                elements[k].style.fontWeight = "bold";
            } 
            
            if (document.getElementById("font"+i+"italic").checked) {
                elements[k].style.fontStyle = "italic";
            }

            if (document.getElementById("font"+i+"capital").checked) {
                elements[k].innerHTML = elements[k].innerHTML.toUpperCase();
            }
        }
    }
}
