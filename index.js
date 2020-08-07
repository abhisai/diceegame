var a = document.getElementsByClassName("img1");
var b = document.getElementsByClassName("img2");
var z = 0;
if (z != 0)
{
    gameFn();
    z = z + 1;
}

  function gameFn()
{
  var p1 = Math.random();
  p1 = (p1 * 6) + 1;
  var p2 = Math.random();
  p2 = (p2 * 6) + 1;
  var b1 = Math.floor(p1);
  var b2 = Math.floor(p2);
  if (b1 == 1)
  {
    a[0].src="dice1.png";
  }else if (b1 == 2) {
    a[0].src="dice2.png";
  }else if (b1 == 3) {
    a[0].src="dice3.png";
  }else if (b1 == 4) {
    a[0].src="dice4.png";
  }else if (b1 == 5) {
    a[0].src="dice5.png";
  }else if (b1 == 6) {
    a[0].src="dice6.png";
  }
  if (b2 == 1)
  {
    b[0].src="dice1.png";
  }else if (b2 == 2) {
    b[0].src="dice2.png";
  }else if (b2 == 3) {
    b[0].src="dice3.png";
  }else if (b2 == 4) {
    b[0].src="dice4.png";
  }else if (b2 == 5) {
    b[0].src="dice5.png";
  }else if (b2 == 6) {
    b[0].src="dice6.png";
  }
  document.getElementsByClassName("btn")[0].style.display ="none";
  if ( b1 == b2)
  {
    document.getElementById("h11").style.display = "block";
    document.getElementById("h11").innerHTML="DRAW !!!";
  }else if (b1 > b2) {
    document.getElementById("h11").style.display = "block";
    document.getElementById("h11").innerHTML=" 🚩 P1 WON ";
  }else if (b1 < b2) {
    document.getElementById("h11").style.display = "block";
    document.getElementById("h11").innerHTML="P2 WON 🚩";
  }
}

function reActivate()
{
    document.getElementsByClassName("btn")[0].style.display = "block";
    document.getElementById("h11").style.display ="none";
}
