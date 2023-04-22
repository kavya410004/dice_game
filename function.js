var n1 = Math.random();
var n2 = Math.random();
n1 = Math.floor(n1 * 6) + 1 ;
n2 = Math.floor(n2 * 6) + 1 ;
var a =  "images/dice-" + n1 + ".png" ;
var b = "images/dice-" + n2 + ".png";
document.querySelector(".dice-img-1").setAttribute("src",a);
document.querySelector(".dice-img-2").setAttribute("src",b);
if (n1 === n2)
{
    document.querySelector(".title").textContent = "Draw!!";
}
else if(n1 > n2)
{
    document.querySelector(".title").textContent = "🚩Player 1 wins !!" ;
}
else{
    document.querySelector(".title").textContent = "Player 2 wins !!🚩" ;
}
