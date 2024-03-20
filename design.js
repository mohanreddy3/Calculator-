function addition()
{
    var a = parseInt(document.getElementById("n1").value);
    var b = parseInt(document.getElementById("n2").value);
    document.getElementById("res").textContent = a+b;
}
function subtraction()
{
    var a = parseInt(document.getElementById("n1").value);
    var b = parseInt(document.getElementById("n2").value);
    document.getElementById("res").textContent = a-b;
}
function Multiplication()
{
    var a = parseInt(document.getElementById("n1").value);
    var b = parseInt(document.getElementById("n2").value);
    document.getElementById("res").textContent = a*b;
}
function Division()
{
    var a = parseInt(document.getElementById("n1").value);
    var b = parseInt(document.getElementById("n2").value);
    document.getElementById("res").textContent = a/b;
}
