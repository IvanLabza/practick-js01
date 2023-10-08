// Використовуючи функцію if...else,
// напишіть код, який запитуватиме:
// "Яка офіційна назва JavaScript?"
// Якщо користувач вводить "ECMAScript",
// то показати через alert: "Вірно!"
// інакше відобразити:"Не знаєте? ECMAScript!"

// const messeng = prompt("Яка офіційна назва JavaScript?");
// if (messeng=="ECMAScript"){
// alert("Вірно!");
// } else {
//     alert("Не знаєте? ECMAScript!");
// }


//2. Напишіть програму, яка отримає від користувача
//число (кількість хвилин) і виведе у консоль
//Рядок у форматі годин і хвилин
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10

// const timeMinutes = Number(prompt("Введіть число яке потрібно перетворити на години"));

// const timeHour = Math.round(timeMinutes / 60);

// const timeRound = timeMinutes % 60;



// if (timeMinutes > 60) {

//     const ourTime = `${timeMinutes} === ${timeHour}:${timeRound}`;

//     alert(ourTime);
// } else if (timeMinutes < 10) {

//     const ourTime = `${timeMinutes} === ${"00"}:0${timeRound}`;
    
//     alert(ourTime);
// }else {
//     const ourTime = `${timeMinutes} === ${"00"}:${timeRound}`;

//     alert(ourTime);
// }

//варіант 2



// 3.  Напишіть цикл, який виводить у консоль числа від max до min за спаданням
//  Виведіть у консоль  усіх парних чисел від min до max

// const min = prompt("Min число");

// const maxUser = prompt("Max число");

// for (let max = maxUser; min <= max; max--) {
//     if (max % 2 === 0) {
//         console.log(max);
//     } else {
//         continue;
//     }
// }


 // 4. Напишіть код, який запитуватиме
//Логін за допомогою prompt і логувати результат
//В консоль браузера


//Якщо відвідувач вводить "Адмін",
//то prompt запитує пароль.
//Якщо нічого не ввели або натиснута клавіша Esc
//Вивести рядок "Скасовано"
// Інакше вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введено пароль "Я головний", то вивести рядок "Здрастуйте!"
//інакше виводити рядок "Невірний пароль!"
// const userLogin = prompt("Введите имя пользоватиля");
// console.log(userLogin);
// const password = "Я головний";
// if (userLogin === "Адмін") {
//     const userPass = prompt("Введіть пароль");
//     if (userPass) {
//         if (password === userPass) {
//             alert("Здрастуйте!");
//         } else {
//             alert("Невірний пароль!");
//         }
//     } else {
//         alert("Скасовано");
//     }
// } else {
//     alert("Я вас не знаю");
// }

// 5. При завантаженні сторінки користувачеві пропонується
// В prompt ввести число. Введення додається до значення
// Змінної total.
// Операція введення числа триває до того часу,
// Поки користувач не натисне кнопку Cancel в prompt.
// Після того, як користувач припинив введення натиснувши накнопку Cancel,
//  показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
// Робити перевірку,що користувач ввів саме число, а не довільний набір символів не потрібно.

// let number = Number(prompt("Введіть число"));

// let total = 0;

// let bulianNum = false;
// do {
//     if (number) {
//         bulianNum = true;
//         total = total + number;
//         number = Number(prompt("Введіть число"));
//     } else {
//         bulianNum = false;
//         const leter = `Загальна сума введених чисел дорівнює ${total}.`;
//         console.log(leter);
        

//     }

// } while (bulianNum)
 












//Напишіть через свіч пошуку автора мови програмування
// пишемо назву мови у шаблонному рядку отримує відповідь мова та автор
// PHP Расмус Лердорф
// C# група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта //Вільтаумота
// Swift Кріс Латтнер
// JS Брендан Ейх
// Java Джеймс Гослінг
// Python Гвідо ван Россум

// const author = prompt('Please type in the programming language name').toLowerCase();
// const autorBook = ["php","c#","swift","js","java","python"];
// switch (author) {
//     case autorBook[0]:
//         console.log("Расмус Лердорф");
//         break;
//     case autorBook[1]:
//         console.log("група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота");
//         break;
//     case autorBook[2]:
//         console.log("Кріс Латтнер");
//         break;
//     case autorBook[3]:
//         console.log("Брендан Ейх");
//         break;
//     case autorBook[4]:
//         console.log("Джеймс Гослінг");
//         break;
//     case autorBook[5]:
//         console.log("Гвідо ван Россум");
//         break;
//     default:
//         console.log("нема автора")

// }



// Запитати у користувача ім’я, пошту , телефон,
// та показати у консолі "користувач __ використовує  __ пошту __ телефон"
// const userName = prompt("Введіть своє ім'я"); 
// const userMail = prompt("Введіть свою почту");
// const userPhone = prompt("Введіть свій телефон");

// const messeng = `користувач ${userName} використовує ${userMail} пошту ${userPhone} телефон`;
// alert(messeng);