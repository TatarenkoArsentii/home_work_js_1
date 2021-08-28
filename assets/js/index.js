let body = document.body;
// task 7
let createTable = () => {
  let table = document.createElement("table"),
    p = document.createElement("p");
  for (let i = 1; i <= 9; i++) {
    let tr = document.createElement("tr");
    for (let j = 1; j <= 9; j++) {
      let td = document.createElement("td"),
        res = j * i;
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

createTable();

// task 6
// let multipleValue = () => {
//   let userVaslue = prompt("first value"),
//     num = prompt("second value"),
//     result = Math.round(userVaslue / num) * num,
//     p = document.createElement("p");
//   if (userVaslue < num) {
//     result = "первое число должно быть больше второго";
//   }
//   p.innerHTML = "Task 6";
//   body.appendChild(p);
//   return result;
// };

// let p1 = document.createElement("p");

// let multipleResult = multipleValue();
// body.appendChild(p1);
// p1.innerText = multipleResult;

// task 5
console.log("Task 5");
let multNumbers = (lim1, lim2) => {
  while (lim1 <= lim2) {
    let result = lim1 * lim2;
    lim1++;
    console.log(result);
  }
};

let answer = multNumbers(2, 9);

// Task 4
console.log("Task 4");
let limNumbers = () => {
  let lim1 = 1,
    lim2 = 30,
    num = 2,
    result;

  for (; lim1 < lim2; lim1++) {
    result = Math.round(lim1 / num) * num;
    console.log(result);
  }
};
limNumbers();

// Task 3
console.log("Task 3");
let equation = () => {
  let x = -2,
    lim2 = 2,
    y;
  for (; x <= lim2; x += 0.5) {
    y = -2.4 * Math.pow(x, 2) + 5 * x - 3;
    console.log(y);
  }
};

equation();

// Task 2
let pizzaCost = () => {
  let weight = 900,
    price = 135,
    discount = 0.03,
    sum = (weight / 100) * price;
  if (weight >= 1000 || sum >= 500) {
    return sum * (1 - discount);
  }
  return sum;
};

alert(pizzaCost());
