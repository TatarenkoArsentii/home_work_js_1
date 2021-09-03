let body = document.body;
// task 7
let createTableTr = () => {
  let tr = document.createElement("tr");
  return tr;
};

let createTableTd = () => {
  let td = document.createElement("td");
  return td;
};

let createTable = (arg1, arg2) => {
  let table = document.createElement("table"),
    p = document.createElement("p");
  for (let i = 1; i <= 9; i++) {
    let tr = arg1();
    for (let j = 1; j <= 9; j++) {
      let td = arg2();
      let res = j * i;
      td.innerText = res;
      tr.appendChild(td);
      td.className = "td";
    }
    table.appendChild(tr);
  }
  p.innerText = "Task 7";
  body.appendChild(p);
  body.appendChild(table);
};

createTable(createTableTr, createTableTd);

// task 6
let createElem = () => {
  let p = document.createElement("p");
  p.innerHTML = "Task 6";
  body.appendChild(p);
};

let multipleValue = () => {
  let userVaslue = prompt("first value - user value"),
    num = prompt("second value - num"),
    result = Math.round(userVaslue / num) * num;
  return result;
};

let p1 = document.createElement("p");

let multipleResult = multipleValue(createElem());
body.appendChild(p1);
p1.innerText = `Ближайшее число кратное num =  ${multipleResult}`;

// task 5
console.log("Task 5");
let multNumbers = (lim1, lim2) => {
  while (lim1 <= lim2) {
    let result = lim1 * lim2;
    lim1++;
    console.log(result);
  }
};

multNumbers(2, 9);

// Task 4
console.log("Task 4");
let limNumbers = () => {
  let lim1 = 1,
    lim2 = 30,
    num = 3,
    result;

  for (; lim1 < lim2; lim1++) {
    result = Math.round(lim1 / num) * num;
    console.log(result);
  }
};
limNumbers();

// Task 3
console.log("Task 3");
let equation = (x, lim2) => {
  let y;
  for (; x <= lim2; x += 0.5) {
    y = -2.4 * Math.pow(x, 2) + 5 * x - 3;
    console.log(y);
  }
};

equation(-2, 2);

// Task 2
console.log("Task 2");
let pizzaCost = function () {
  let sum = (arguments[0] / 100) * arguments[1];
  if (arguments[0] >= 1000 || sum >= 500) {
    return sum * (1 - arguments[2]);
  }
  return sum;
};
console.log(pizzaCost(/*Weight*/ 900, /* price */ 135, /* discount */ 0.03));
// Task arrey
console.log("Task arrey");
let myArr1 = () => {
  let arr1 = [1, 2, 3, 4, 5, 6, 7, "home", "work"],
    arr2 = [4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, "home", "done"];

  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      arr1.push(arr2[i]);
    }
  }

  return arr1;
};

let myArr2 = () => {
  let arr3 = [1, 2, 2, 3, 4, 3, 4, 5, 6, 7, "home", "work"];
  arr4 = [1, 2, 3, 4, 5, 5, 5, 5, 6, 7, 8, 9, "home", "done"];

  arr4.forEach((elem) => arr3.push(elem));
  arr3 = [...new Set(arr3)];

  return arr3;
};

console.log(myArr1());
console.log(myArr2());

let myArr3 = (arr1, arr2) => {
  let arr3 = arr1.concat(arr2),
    result = [];
  for (let str of arr3) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  console.log(result);
};
myArr3([1, 2, 3, 4, 5, 6, 7], [4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15]);
let myArr4 = (arr1, arr2) => {
  let arr11 = arr1.join();
  let arr12 = arr2.join();
  let arr13 = `${arr11},${arr12}`;
  let arr14 = arr13.split(",");
  console.log(arr13);
  console.log(arr14);

  let result1 = [];
  for (let str of arr14) {
    if (!result1.includes(str)) {
      result1.push(str);
    }
  }

  console.log(result1);
};
myArr4([1, 2, 3, 4, 5, 6, 7], [4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15]);
