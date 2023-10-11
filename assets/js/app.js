// This array represents the weights of the 9 balls
const ballArray = [1, 1, 1, 1, 1, 1, 1, 1, 1];

// Ask for the oddball (the ball that will be heavier) and make the corresponding 
// ball in the array heavier
// This way, the user input is not stored in any variable so you can't cheat this way
ballArray[prompt('Select the oddball [0-8]', 3)] = 1.2;

const ball0 = document.createElement("div");
ball0.innerHTML = '0';
ball0.className = 'ball column box m-4 has-background-primary-light';
const div0 = document.querySelector('#ball-list');
div0.appendChild(ball0);

const ball1 = document.createElement("div");
ball1.innerHTML = '1';
ball1.className = 'ball column box m-4 has-background-primary-light';
const div1 = document.querySelector('#ball-list');
div1.appendChild(ball1);

const ball2 = document.createElement("div");
ball2.innerHTML = '2';
ball2.className = 'ball column box m-4 has-background-primary-light';
const div2 = document.querySelector('#ball-list');
div2.appendChild(ball2);

const ball3 = document.createElement("div");
ball3.innerHTML = '3';
ball3.className = 'ball column box m-4 has-background-primary-light';
const div3 = document.querySelector('#ball-list');
div3.appendChild(ball3);

const ball4 = document.createElement("div");
ball4.innerHTML = '4';
ball4.className = 'ball column box m-4 has-background-primary-light';
const div4 = document.querySelector('#ball-list');
div4.appendChild(ball4);

const ball5 = document.createElement("div");
ball5.innerHTML = '5';
ball5.className = 'ball column box m-4 has-background-primary-light';
const div5 = document.querySelector('#ball-list');
div5.appendChild(ball5);

const ball6 = document.createElement("div");
ball6.innerHTML = '6';
ball6.className = 'ball column box m-4 has-background-primary-light';
const div6 = document.querySelector('#ball-list');
div6.appendChild(ball6);

const ball7 = document.createElement("div");
ball7.innerHTML = '7';
ball7.className = 'ball column box m-4 has-background-primary-light';
const div7 = document.querySelector('#ball-list');
div7.appendChild(ball7);

const ball8 = document.createElement("div");
ball8.innerHTML = '8';
ball8.className = 'ball column box m-4 has-background-primary-light';
const div8 = document.querySelector('#ball-list');
div8.appendChild(ball8);

if (ballArray[0] == '1.2') {
  ball0.className = 'ball column box m-4 has-background-primary has-border-primary-dark';
  document.getElementById("result-1").innerHTML = "left is heavier";
  document.getElementById("conclusion-1").innerHTML = "oddball must be in [0, 1, 2]";
  document.getElementById("left-2").innerHTML = "[0]";
  document.getElementById("right-2").innerHTML = "[1]";
  document.getElementById("result-2").innerHTML = "left is heavier";
  document.getElementById("conclusion-2").innerHTML = "oddball is [0]";
}
else if (ballArray[1] == '1.2') {
  ball1.className = 'ball column box m-4 has-background-primary has-border-primary-dark';
  document.getElementById("result-1").innerHTML = "left is heavier";
  document.getElementById("conclusion-1").innerHTML = "oddball must be in [0, 1, 2]";
  document.getElementById("left-2").innerHTML = "[0]";
  document.getElementById("right-2").innerHTML = "[1]";
  document.getElementById("result-2").innerHTML = "right is heavier";
  document.getElementById("conclusion-2").innerHTML = "oddball is [1]";
}
else if (ballArray[2] == '1.2') {
  ball2.className = 'ball column box m-4 has-background-primary has-border-primary-dark';
  document.getElementById("result-1").innerHTML = "left is heavier";
  document.getElementById("conclusion-1").innerHTML = "oddball must be in [0, 1, 2]";
  document.getElementById("left-2").innerHTML = "[0]";
  document.getElementById("right-2").innerHTML = "[1]";
  document.getElementById("result-2").innerHTML = "balanced";
  document.getElementById("conclusion-2").innerHTML = "oddball is [2]";
}
else if (ballArray[3] == '1.2') {
  ball3.className = 'ball column box m-4 has-background-primary has-border-primary-dark';
  document.getElementById("result-1").innerHTML = "right is heavier";
  document.getElementById("conclusion-1").innerHTML = "oddball must be in [3, 4, 5]";
  document.getElementById("left-2").innerHTML = "[3]";
  document.getElementById("right-2").innerHTML = "[4]";
  document.getElementById("result-2").innerHTML = "left is heavier";
  document.getElementById("conclusion-2").innerHTML = "oddball is [3]";
}
else if (ballArray[4] == '1.2') {
  ball4.className = 'ball column box m-4 has-background-primary has-border-primary-dark';
  document.getElementById("result-1").innerHTML = "right is heavier";
  document.getElementById("conclusion-1").innerHTML = "oddball must be in [3, 4, 5]";
  document.getElementById("left-2").innerHTML = "[3]";
  document.getElementById("right-2").innerHTML = "[4]";
  document.getElementById("result-2").innerHTML = "right is heavier";
  document.getElementById("conclusion-2").innerHTML = "oddball is [4]";
}
else if (ballArray[5] == '1.2') {
  ball5.className = 'ball column box m-4 has-background-primary has-border-primary-dark';
  document.getElementById("result-1").innerHTML = "right is heavier";
  document.getElementById("conclusion-1").innerHTML = "oddball must be in [3, 4, 5]";
  document.getElementById("left-2").innerHTML = "[3]";
  document.getElementById("right-2").innerHTML = "[4]";
  document.getElementById("result-2").innerHTML = "balanced";
  document.getElementById("conclusion-2").innerHTML = "oddball is [5]";
}
else if (ballArray[6] == '1.2') {
  ball6.className = 'ball column box m-4 has-background-primary has-border-primary-dark';
  document.getElementById("result-1").innerHTML = "balanced";
  document.getElementById("conclusion-1").innerHTML = "oddball must be in [6, 7, 8]";
  document.getElementById("left-2").innerHTML = "[6]";
  document.getElementById("right-2").innerHTML = "[7]";
  document.getElementById("result-2").innerHTML = "left is heavier";
  document.getElementById("conclusion-2").innerHTML = "oddball is [6]";
}
else if (ballArray[7] == '1.2') {
  ball7.className = 'ball column box m-4 has-background-primary has-border-primary-dark';
  document.getElementById("result-1").innerHTML = "balanced";
  document.getElementById("conclusion-1").innerHTML = "oddball must be in [6, 7, 8]";
  document.getElementById("left-2").innerHTML = "[6]";
  document.getElementById("right-2").innerHTML = "[7]";
  document.getElementById("result-2").innerHTML = "right is heavier";
  document.getElementById("conclusion-2").innerHTML = "oddball is [7]";
}
else if (ballArray[8] == '1.2') {
  ball8.className = 'ball column box m-4 has-background-primary has-border-primary-dark';
  document.getElementById("result-1").innerHTML = "balanced";
  document.getElementById("conclusion-1").innerHTML = "oddball must be in [6, 7, 8]";
  document.getElementById("left-2").innerHTML = "[6]";
  document.getElementById("right-2").innerHTML = "[7]";
  document.getElementById("result-2").innerHTML = "balanced";
  document.getElementById("conclusion-2").innerHTML = "oddball is [8]";
}

document.getElementById("left-1").innerHTML = "[0, 1, 2]";
document.getElementById("right-1").innerHTML = "[3, 4, 5]";