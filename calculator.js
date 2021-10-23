var cont = true;
let rows = [];
var min;
var max;
var avg = 0;
var total = 0;
document.write("<table>");
document.write("<tr><th>x</th><th>op</th><th>y</th><th>result</th></tr>");
do {
    var x = prompt("Value of x");
    var op = prompt("Operator");
    var y = prompt("Value of y");
    cont = confirm("Continue?");
    var result;
    var reg = /[%\+/\-\*]/;
    if (isNaN(x) || isNaN(y)) {
        result = "wrong input number";
    }
    else {
        x = parseInt(x);
        y = parseInt(y);
        if (!op.match(reg)) {
            result = "computation error";
        }
        else {
            if (op.match(/\+/)) {
                result = x + y;
            }
            else if (op.match(/\-/)) {
                result = x - y;
            }
            else if (op.match(/\//)) {
                result = x / y;
            }
            else if (op.match(/\*/)) {
                result = x * y;
            }
            else {
                result = x % y;
            }
            if (isNaN(min)) {
                min = result
            }
            if (result < min) {
                min = result;
            }
            if (isNaN(max)) {
                max = result;
            }
            if (result > max) {
                max = result;
            }
            total += result;
            avg += 1;
        }
    }
    var text = "<tr><td>" + x + "</td><td>" + op + "</td><td>" + y + "</td><td>" + result + "</td></tr>";
    document.write(text);

}
while(cont == true);
document.write("</table>");
avg = total / avg;
document.write("<table>");
document.write("<tr><th>Min</th><th>Max</th><th>Average</th><th>Total</th></tr>");
document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg + "</td><td>" + total + "</td></tr>");
document.write("</table>");