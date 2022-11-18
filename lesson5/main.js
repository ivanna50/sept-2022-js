//
// function per(a ,b) {
//     let result =(a+b)*2;
//
//     console.log(result );
//     return result ;
//
// }
// per (10, 20);
// // per (15,35);
// function write(productTitle ,price ,discr) {
//     document.write (`
//         <div>
//             <h2>${productTitle}  ${price}</h2>
//             <p>${discr}</p>
//         </div>
//     `)
// }
//     write ('milk','55' , 'cukjjf' );
//    write('meat','44','main');
// function calculator (a ,b , action){
//     if ( action === '+') {
//         return a + b;
//     }
// }
//
// let data = calculator(44 ,55 ,'+') ;
// console.log(data);
// function arrayPrinterf(arr) {
//     for (const arrElement of arr) {
//         console.log(arrElement);
//
//     }
// }
// arrayPrinterf ([11 ,22 ,33 ,55 ,66]);
// let users = [
//     {name:'vasya',age: 88,status : true},,
//     {name:'vasya',age :88,status : true},
//     {name:'vasya',age :88,status : true},
//     {name:'vasya',age :88,status : true},
//     {name:'vasya',age :88,status : true},
// ];
// arrayPrinterf (users);
// function asd (){
//     console.log(arguments );
// }
//
// asd(123, 88, 'name', 'str', 77);
// // asd('fase', 'age', 55, 77, 77, 'false');
// function calc(){
//     if (arguments.length ===2){
//         return arguments [0] + arguments [1];
//     }else if(arguments.length ===3){
//         return arguments [0]-arguments [1]-arguments [2];
//     }
//     return 0
// }
// console.log(calc(35 ,33) );
// console.log(calc(99 ,33 ,22));
// console.log(calc(99 ,33 ,22 ,88));
//
// function asd(...xxx) {
//     console.log(xxx);
// }
// asd(1, 2, 3, 8 ,9 ,);
// let asd = function () {
//     console.log(arguments);
// }
// // asd();
// let user = { imya : 'vasya',
//     greeting: function () {
//         console.log(user.imya);
//         console.log(`hello my name is ${user.imya}`)
//         // console.log(this);
//     }
//     wife : {
//
//     }
// }





// let w =88;
// console.log(w);
//
// //     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function plosha(a ,b) {
//     return a * b;
// }
// console.log(plosha (12,22));

// // - створити функцію яка обчислює та повертає площу кола з радіусом r
// function ploshaCircle ( r){
//     return Math.PI *Math.pow (r ,2);
// }
// console.log (ploshaCircle(5) );

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом
// function plochaCilindr (h ,r){
//     return plochaCilindr = Math.PI * Math.pow(r ,2);
//
// }
// console.log(plochaCilindr(5,5));



// // - створити функцію яка приймає масив та виводить кожен його елемент

// function arrayPrinter (arr){
//     for (const arrElement of arr) {
//         console.log(arr);
//     }
// }
// arrayPrinter([2 ,2 ,3 ,4 ,'asd','www']);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function addText (text){
//     document.write (`
//     <div>
//         <p>${text}</p>
//
//     </div>
//     `)
// }
// addText ('i need help becouse I do not very nice');

// // // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function creatUl(text) {
//     document.write(`
//     <ul>
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
//     </ul>
//     `)
// }
// creatUl ('fhjuub');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом,
//  який є числовим (тут використовувати цикл)

// function creatUl(text ,itemLi) {
//     document.write(`<ul`);
//        document.write (`
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
//         `) ;
//       document.write(`</ul>`);
//
//     if (itemLi > 0 ,itemLi <10){
//         itemLi ===3
//     }
//     else if (itemLi >10) {
//         itemLi ===6
//     }
// return 0 ;
// }
// creatUl ('sun', 3);
// creatUl ('sun', 6);
// creatUl ('sun', 44);
//

// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function arrayPrinter (arr){
//     for (let i = 0 ,j=0; i < arr.length; i++) {
//         newArr = arr[i];
//         j++;
//       console.log(newArr[j]);
//     }
// arrayPrinter (['voda', 1, 2, 5,6,6,7,7,7,7 ,'sky']) ;
// console.log(newArr );

// }
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
//
// function writeDoc (arr){
//     for (const arrElement of arr) {
//         document.write ( `
//         <div>
//             <p> ${name}  ${ age }</p>
//
//         </div>`)
//
//     }
// }
// let users = [
//     {id :1 ,name :'vasya , age :33'},
//     {id :1 ,name :'vasya , age :33'},
//     {id :1 ,name :'vasya , age :33'},
// ]
// console.log(writeDoc(users));
// - створити функцію яка повертає найменьше число з масиву
// const foo= [1, 2, 3, 4, 5, 6, 8, 9,];
// const min = function (array) {
//     let min = arr [0]
//     for (const item of array) {
//         if (item < min){
//             min = item
//         }
//     }
//     return min
// }
// let foo1 = foo(arr);
// console.log(foo1);
//
// let greeting = function (text) {
//     console.log('hi');
// }
//
// greeting ();
// let w = 'hello'
// console.log(w);