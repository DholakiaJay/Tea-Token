con = document.getElementById("con");
jug = document.getElementById("jug");
btn = document.getElementById("btn");
tea = document.getElementById("tea");
coffee = document.getElementById("coffee");
milk = document.getElementById("milk");
water = document.getElementById("water");

tKnob = document.getElementById("t-knob");
bKnob = document.getElementById("b-knob");

waterDrop = document.querySelectorAll(".water-drop")[0];

glass = document.getElementById("glass");
waterglass = document.getElementById("waterglass");

stop = document.getElementById("stopbtn");
start = document.getElementById("startbtn");

drink = document.querySelectorAll(".drink");

stop.addEventListener("click", (e) => {
  e.preventDefault(e);
  waterDrop.classList.add("handleani-stop");
  waterDrop.style.cssText = `background-color:transparent;`;
  waterglass.classList.add("glassani-stop");
  bKnob.style.cssText = `transform: perspective(360px) rotateX(36deg);`;
  glass.style.cssText = `transform: translateX(-180px); transition: all 600ms;`;
});

// start.addEventListener("click", (e) => {
//     e.preventDefault(e);

//     waterDrop.classList.add("handleani");
//     waterDrop.classList.remove("handleani-stop");
//     waterDrop.classList.add("handleani-start");
//     waterglass.classList.add("glassani");
//     waterglass.classList.remove("glassani-stop");
//     waterglass.classList.add("glassani-start");
//     waterDrop.style.cssText = `background-color:inherit;`;
//     bKnob.style.cssText = ` transform: perspective(360px) rotateX(180deg);
//     background-color: silver;`;

//   });

tea.addEventListener("click", (e) => {
  e.preventDefault(e);
  waterDrop.style.cssText = `background-color: #ad6018e7;`;
  waterDrop.classList.add("handleani");
  waterDrop.classList.remove("handleani-stop");
  waterglass.style.cssText = `background-color: #ad6018e7;`;
  waterglass.classList.add("glassani");
  waterglass.classList.remove("glassani-stop");
  bKnob.style.cssText = ` transform: perspective(360px) rotateX(180deg);
background-color: silver;`;

  drink[0].style.cssText = `color:yellow; text-shadow: 2px 2px 5px yellowgreen; transition:all 300ms;`;
  drink[1].style.cssText = `color:transparent;`;
  drink[3].style.cssText = `color:transparent;`;
  drink[2].style.cssText = `color:transparent;`;
});

coffee.addEventListener("click", (e) => {
  e.preventDefault(e);
  waterDrop.style.cssText = `background-color: #fcbb7e;`;
  waterDrop.classList.add("handleani");
  waterDrop.classList.remove("handleani-stop");
  waterglass.classList.remove("glassani-stop");
  waterglass.style.cssText = `background-color: #fcbb7e;`;
  waterglass.classList.add("glassani");
  waterDrop.classList.remove("handleani-stop");
  waterglass.classList.remove("glassani-stop");
  bKnob.style.cssText = ` transform: perspective(360px) rotateX(180deg);
  background-color: silver;`;
  drink[1].style.cssText = `color:yellow; text-shadow: 2px 2px 5px yellowgreen; `;
  drink[3].style.cssText = `color:transparent;`;
  drink[0].style.cssText = `color:transparent;`;
  drink[2].style.cssText = `color:transparent;`;
});

milk.addEventListener("click", (e) => {
  e.preventDefault(e);
  waterDrop.style.cssText = `background-color:#f6f3f1;`;
  waterDrop.classList.add("handleani");
  waterDrop.classList.remove("handleani-stop");
  waterglass.classList.remove("glassani-stop");
  waterglass.style.cssText = `background-color:#f6f3f1;`;
  waterglass.classList.add("glassani");
  waterDrop.classList.remove("handleani-stop");
  waterglass.classList.remove("glassani-stop");
  bKnob.style.cssText = ` transform: perspective(360px) rotateX(180deg);
  background-color: silver;`;
  drink[2].style.cssText = `color:yellow; text-shadow: 2px 2px 5px yellowgreen; `;
  drink[1].style.cssText = `color:transparent;`;
  drink[0].style.cssText = `color:transparent;`;
  drink[3].style.cssText = `color:transparent;`;
});

water.addEventListener("click", (e) => {
  e.preventDefault(e);
  waterDrop.style.cssText = `background-color: #007bff;`;
  waterDrop.classList.add("handleani");
  waterDrop.classList.remove("handleani-stop");
  waterglass.classList.remove("glassani-stop");
  waterglass.style.cssText = `background-color: #007bff;`;
  waterglass.classList.add("glassani");
  waterDrop.classList.remove("handleani-stop");
  waterglass.classList.remove("glassani-stop");
  bKnob.style.cssText = ` transform: perspective(360px) rotateX(180deg);
  background-color: silver;`;
  drink[3].style.cssText = `color:yellow; text-shadow: 2px 2px 5px yellowgreen; `;
  drink[1].style.cssText = `color:transparent;`;
  drink[0].style.cssText = `color:transparent;`;
  drink[2].style.cssText = `color:transparent;`;
});

addGlass =  document.createElement('button');
addGlass.innerHTML = `<b>add</b>`;

document.body.append(addGlass);

addGlass.addEventListener('click',(e)=>
  {
    e.preventDefault();

    newGlass = document.createElement('div');
    newGlass2 = document.createElement('div');

    newGlass.classList.add('glass');
    newGlass2.classList.add('waterglass');

    newGlass.append(newGlass2);
    document.body.append(newGlass)


  })

