//TODO:==============================
// Напишіть функцію min(a,b), яка повертає менше чисел a і b.
// const a = Number(prompt("1"));
// const b = Number(prompt("2"));

// function min(a, b) {
//     const velue = Math.min(a, b);
//     console.log(velue);
// }

// min(a, b);
//TODO:===========================
// Створіть масив styles з елементами «Джаз» та «Блюз».
//Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
//Видалить перший елемент масиву і виведіть його в консоль.
//Вставте «Реп» і «Реггі» на початок масиву.

// const styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-рол");
// console.log(styles);
// styles.splice(1, 1, "Класика");
// console.log(styles);


//TODO:==============================
// Напишіть функцію pow(x,n), яка повертає x до ступеня n.
// Інакше висловлюючись, множить x він n разів і повертає результат.
// const x = Number(prompt("x"));
// const n = Number(prompt("n"));
// function pow(x, n) {
//     const number = Math.pow(x, n);
//     console.log(number);
// }

// pow(x, n);

//У нас є об'єкт, в якому зберігатимуться зарплати
//Нашої команди
//Напишіть код для сумування всіх зарплат і
//Збережіть його результат у змінній sum.
//Якщо об'єкт salaries порожній, то результат має бути 0


// let summCash = 0;

// const salaries = {
//     Alex: 1000,
//     Natalia: 680,
//     Grisha: 1580,
//     Artem: 550,
// };

// for (const cash in salaries) {
//     summCash = (salaries[cash])+ summCash;
// }

// console.log(summCash);

//Напишіть функцію, яка приймає два аргументи і
// повертає всі числа, які діляться на дільник.
// Перший аргумент – це масив чисел, а другий – дільник.

// const x = [5,66,22,53,85,100,155];
// const y = 5;


// function foo(x, y) {
//     const arr = [];
//     for (const argument of x) {
//         if (argument % y === 0) {
//             arr.push(argument);
//         }
      
//     }
//     console.log(arr);
    
// }

// foo(x, y);

// Паліндром

//Паліндром - слово, речення чи послідовність символів, яка абсолютно однаково
//читається як у звичному напрямку, так і у зворотному.
//Наприклад, "Anna" - це
//паліндром, а "table" і "John" - ні.

// const name = "table";

// function foo(name) {
//     const userName = name.split('').reverse().join('');
//     if (userName === name) {
//         console.log("Паліндром")
//     } else {
//         console.log("ні")
//     }
//     }
// foo(name);




// FizzBuzz
// Потрібно перебрати усі числа  від 1 до n. Треба вивести у консоль
// числа, де n - це ціле число, з такими умовами:

// виведення fizz замість чисел, кратних 3;
// виведення buzz замість чисел, кратних 5;
// виведення fizzbuzz замість чисел, кратних як 3, і 5.


// const n = prompt("number");


// for (const number = 1; number <= n; number++) {
//     if (number % 3 === 0) {
//         console.log("fizz");
//     } else if (number % 5 === 0) {
//         console.log("buzz");
//   }
    
// }



// Пошук голосних

//Потрібно написати функцію, яка приймає рядок як аргумент і повертає
//кількість голосних, які містяться в рядку.
//Голосними є "a", "e", "i", "o", "u".


// const vocal = ["a", "e", "i", "o", "u"];
// const messeng = "orem, ipsum dolor sit amet consectetur adipisicing elit. Maiores sapiente tempore debitis facilis ex recusandae, assumenda repellendus dicta voluptas quibusdam, magni consequuntur? Aliquid ipsam impedit esse, a saepe magnam officiis.";
// function foo(vocal, messeng) {
//     const arr = messeng.split("");
   
        
//     const x = 0;
//     console.log(x)
//         if (arr.includes(vocal)) {
//             x += 1;
//         }

//     return x;
// }

// foo(vocal, messeng);
// console.log(foo(vocal, messeng));

//  function fuString(string) {
//    const newArray = ["a", "e", "i", "o", "u"];
//    let quantity = 0;

//    for (const str of string.toLowerCase()) {
//      if (newArray.includes(str)) {
//       quantity += 1;
//      }
//    }
//      return quantity;
//  }

// fuString("orem, ipsum dolor sit amet consectetur adipisicing elit. Maiores sapiente tempore debitis facilis ex recusandae, assumenda repellendus dicta voluptas quibusdam, magni consequuntur? Aliquid ipsam impedit esse, a saepe magnam officiis");
// console.log(fuString("orem, ipsum dolor sit amet consectetur adipisicing elit. Maiores sapiente tempore debitis facilis ex recusandae, assumenda repellendus dicta voluptas quibusdam, magni consequuntur? Aliquid ipsam impedit esse, a saepe magnam officiis"));




// /Напишіть ф-цію calcTotalPrice(stones, stonesName),
// //яка приймає масив об'єктів та
// //рядок під назвою каменю.
// //Функція  повертає загальну вартість каменів
// //з таким ім'ям, ціною та кількістю з об'єкта
//



// Створіть об'єкт calculator із трьома методами
// read(a, b) - приймає два аргументи та зберігає їх
// як властивості об'єкта
// sum() повертає суму збережених значень
// mult() перемножує збережені значення та повертає результат




// Для вихідного об'єкта після виклику методу `atTheOldToad.removePotion('Dragon breath')`, у властивості `potions` буде масив `[ { name: 'Speed potion', price: 460 }, { name: 'Stone skin', price: 520 } ]`
// Для вихідного об'єкта після виклику методу `atTheOldToad.removePotion('Speed potion')`, у властивості `potions` буде масив `[ { name: 'Dragon breath', price: 780 }, { name: 'Stone skin', price: 520 }]`
// Для вихідного об'єкта після виклику методу `atTheOldToad.updatePotionName('Dragon breath', 'Polymorth')`, у властивості `potions` буде масив `[{ name: 'Speed potion', price: 460 }, { name: 'Polymorth', price: 780 }, { name: 'Stone skin', price: 520 } ]`
// Для вихідного об'єкта після виклику методу `atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion')`, у властивості `potions` буде масив `[{ name: 'Speed potion', price: 460 }, { name: 'Dragon breath', price: 780 }, { name: 'Invulnerability potion', price: 520 } ]`



// // ПРОТОТИПНЕ НАСЛІДУВАННЯУ
// У кожного обєкта є свойство __proto__ В цому свойстві лежить посилання на інший обєкт prototype.
// // Обїявити функцію конструктор і зробити прототип в який будем озаписувати всі функції



// Задача написати функцію якак буде перемножати всі числа які є в підмаисвах і повертати результат.arr
