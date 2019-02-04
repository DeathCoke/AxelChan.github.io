var firstName;
var secondName;
var thirdName;
var fourthName;
var fifthName;
var sixthName;
var firstPrice;
var secondPrice;
var thirdPrice;
var fourthPrice;
var fifthPrice;
var sixthPrice;
var oneTotal = 0;
var twoTotal = 0;
var threeTotal = 0;
var fourTotal = 0;
var fiveTotal = 0;
var sixTotal = 0;
var sum;
var total = [];

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.stage == 200) {
  var coffee = JSON.parse(this.responseText);
    oneName = coffee.order[0].cafe.name
    twoName = coffee.order[0].brewed.name
    threeName = coffee.order[0].cappaccino.name
    fourName = coffee.order[0].mocha.name
    fiveName = coffee.order[0].muffin.name
    sixName = coffee.order[0].eclair.name
    onePrice = coffee.order[0].cafe.price
    twoPrice = coffee.order[0].brewed.price
    threePrice = coffee.order[0].cappaccino.price
    fourPrice = coffee.order[0].mocha.price
    fivePrice = coffee.order[0].muffin.price
    sixPrice = coffee.order[0].eclair.price
    document.getElementById('firstName').innerHTML = firstName;
    document.getElementById('firstPrice').innerHTML = firstPrice;
    document.getElementById('secondName').innerHTML = secondName;
    document.getElementById('secondPrice').innerHTML = secondPrice;
    document.getElementById('thirdName').innerHTML = thirdName;
    document.getElementById('thirdPrice').innerHTML = thirdPrice;
    document.getElementById('fourthName').innerHTML = fourthName;
    document.getElementById('fourthPrice').innerHTML = fourthPrice;
    document.getElementById('fifthName').innerHTML = fifthName;
    document.getElementById('fifthPrice').innerHTML = fifthPrice;
    document.getElementById('sixthName').innerHTML = sixthName;
    document.getElementById('sixthPrice').innerHTML = sixthPrice;
  }
};
xmlhttp.open("GET", "cafe.json", true);
xmlhttp.send();
function add1() {
   oneTotal = document.getElementById('oneQ').value * firstPrice;
   const li = document.createElement('li');
   const textLog = document.createTextNode(firstName + " x " + document.getElementById('oneQ').value +" = $"+ oneTotal.toFixed(2));
   li.appendChild(textLog);
   const logText = document.getElementById('list');
   logText.appendChild(li);
   total.push(oneTotal);
  sum = total.reduce(add, 0);
  function add(a, b) {
    return a + b;
  }
  document.getElementById('grandTotal').innerHTML = "Cost: $" + sum.toFixed(2);
}

function add2() {
  twoTotal = document.getElementById('twoQ').value * secondPrice;
  const li = document.createElement('li');
  const textLog = document.createTextNode(secondName + " x " + document.getElementById('twoQ').value +" = $"+ twoTotal.toFixed(2));
  li.appendChild(textLog);
  const logText = document.getElementById('list');
  logText.appendChild(li);
  total.push(twoTotal);
  sum = total.reduce(add, 0);
  function add(a, b) {
    return a + b;
  }
  document.getElementById('grandTotal').innerHTML = "Cost: $" + sum.toFixed(2);
}

function add3() {
  threeTotal = document.getElementById('threeQ').value * thirdPrice;
  const li = document.createElement('li');
  const textLog = document.createTextNode(thirdName + " x " + document.getElementById('threeQ').value +" = $"+ threeTotal.toFixed(2));
  li.appendChild(textLog);
  const logText = document.getElementById('list');
  logText.appendChild(li);
  total.push(threeTotal);
  sum = total.reduce(add, 0);
  function add(a, b) {
    return a + b;
  }
  document.getElementById('grandTotal').innerHTML = "Cost: $" + sum.toFixed(2);
}

function add4() {
  fourTotal = document.getElementById('fourQ').value * fourthPrice;
  const li = document.createElement('li');
  const textLog = document.createTextNode(fourthName + " x " + document.getElementById('fourQ').value +" = $"+ fourTotal.toFixed(2));
  li.appendChild(textLog);
  const logText = document.getElementById('list');
  logText.appendChild(li);
  total.push(fourTotal);
  sum = total.reduce(add, 0);
  function add(a, b) {
    return a + b;
  }
  document.getElementById('grandTotal').innerHTML = "Cost: $" + sum.toFixed(2);
}

function add5() {
  fiveTotal = document.getElementById('fiveQ').value * fifthPrice;
  const li = document.createElement('li');
  const textLog = document.createTextNode(fifthName + " x " + document.getElementById('fiveQ').value +" = $"+ fiveTotal.toFixed(2));
  li.appendChild(textLog);
  const logText = document.getElementById('list');
  logText.appendChild(li);
  total.push(fiveTotal);
  sum = total.reduce(add, 0);
  function add(a, b) {
    return a + b;
  }
  document.getElementById('grandTotal').innerHTML = "Cost: $" + sum.toFixed(2);
}

function add6() {
  sixTotal = document.getElementById('sixQ').value * sixthPrice;
  const li = document.createElement('li');
  const textLog = document.createTextNode(sixthName + " x " + document.getElementById('sixQ').value +" = $"+ sixTotal.toFixed(2));
  li.appendChild(textLog);
  const logText = document.getElementById('list');
  logText.appendChild(li);
  total.push(sixTotal);
  sum = total.reduce(add, 0);
  function add(a, b) {
    return a + b;
  }
  document.getElementById('grandTotal').innerHTML = "Cost: $" + sum.toFixed(2);

  function check() {
    var listing = document.getElementById('list').innerText;
      localStorage.setItem('totalSum', sum);
      localStorage.setItem('totally', listing);
      location.href = "cafe.html";
    }
