// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let asd = 'hello world';
// console.log(asd);
// console.log(asd.length);
// let w = 'lorem ipsum' ;
// console.log(w.length );
// let w1 = 'javascript is cool';
// console.log(w1.length);
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let asd = 'hello world';
// console.log(asd.toUpperCase());
// // console.log(asd.length);
// let w = 'lorem ipsum' ;
// console.log(w.toUpperCase());
// console.log(w.length );
// let w1 = 'javascript is cool';
// console.log(w1.toUpperCase());
// console.log(w1.length);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let w = 'HELLO WORLD';
// console.log(w.toLowerCase());
// let w1 = 'LOREM IPSUM';
// console.log(w1.toLowerCase());
// let w3='JAVASCRIPT IS COOL';
// console.log(w3.toLowerCase());
//

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
// let str = ' dirty string '
// console.log(str.length);
// let s = str.trim();
// console.log(s.length);
// - Напишіть функці ю stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let str = 'Ревуть воли як ясла повні';
// let split = str.split(',');
// console.log(split);
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
//
//
// // // - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let nums = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// let map = nums.map((value )=> value + '');
// console.log(map);
// console.log(typeof map[0]);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
// let nubs = [11, 21, 3];
// let sortNums = (dir , arr)=>{
//     if (dir === 'ascending'){
//         nums.sort((a ,b)=>a-b);
//     } else if (dir === 'descending'){
//        nubs.sort((a ,b)=>b - a);
//     }
//     return nubs
// }
// console.log(sortNums('ascending ', nubs));
// console.log(sortNums('descending', nubs));
//
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
  {title: 'Python Complex', monthDuration: 6},
   {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// let filter = coursesAndDurationArray.sort((a ,b)=>{
//     return a.monthDuration-b.monthDuration
// } );
// console.log(filter);


let filter = coursesAndDurationArray.filter(( item)=>item. monthDuration>5);
console.log(filter);


// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
// let decks = [
//     {cardSuit:'Spade', value: 6, color:'Black'},
//     {cardSuit:'Clubs', value: 6, color:'Black'},
//     {cardSuit:'Hearts', value: 6, color:'Red'},
//     {cardSuit:'Diamonds', value: 6, color:'Red'},
//     {cardSuit:'Spade', value: 7, color:'Black'},
//     {cardSuit:'Clubs', value: 7, color:'Black'},
//     {cardSuit:'Hearts', value: 7, color:'Red'},
//     {cardSuit:'Diamonds', value: 7, color:'Red'},
//     {cardSuit:'Spade', value: 8, color:'Black'},
//     {cardSuit:'Clubs', value: 8, color:'Black'},
//     {cardSuit:'Hearts', value: 8, color:'Red'},
//     {cardSuit:'Diamonds', value: 8, color:'Red'},
//     {cardSuit:'Spade', value: 9, color:'Black'},
//     {cardSuit:'Clubs', value: 9, color:'Black'},
//     {cardSuit:'Hearts', value: 9, color:'Red'},
//     {cardSuit:'Diamonds', value: 9, color:'Red'},
//     {cardSuit:'Spade', value: 10, color:'Black'},
//     {cardSuit:'Clubs', value: 10, color:'Black'},
//     {cardSuit:'Hearts', value: 10, color:'Red'},
//     {cardSuit:'Diamonds', value: 10, color:'Red'},
//     {cardSuit:'Spade', value: 'Jack', color:'Black'},
//     {cardSuit:'Clubs', value: 'Jack', color:'Black'},
//     {cardSuit:'Hearts', value: 'Jack', color:'Red'},
//     {cardSuit:'Diamonds', value: 'Jack', color:'Red'},
//     {cardSuit:'Spade', value: 'Queen', color:'Black'},
//     {cardSuit:'Clubs', value: 'Queen', color:'Black'},
//     {cardSuit:'Hearts', value: 'Queen', color:'Red'},
//     {cardSuit:'Diamonds', value: 'Queen', color:'Red'},
//     {cardSuit:'Spade', value: 'King', color:'Black'},
//     {cardSuit:'Clubs', value: 'King', color:'Black'},
//     {cardSuit:'Hearts', value: 'King', color:'Red'},
//     {cardSuit:'Diamonds', value: 'King', color:'Red'},
//     {cardSuit:'Spade', value: 'Ace', color:'Black'},
//     {cardSuit:'Clubs', value: 'Ace', color:'Black'},
//     {cardSuit:'Hearts', value: 'Ace', color:'Red'},
//     {cardSuit:'Diamonds', value: 'Ace', color:'Red'}
// ];
// let find = decks.filter(item => item.cardSuit ==='Spade' && item.value === 'Ace');
// console.log(find);

// let find = decks.filter(item=> item.value===6);
// console.log(find);
//
// let find = decks.filter(item=> item.color === 'Red');
// console.log(find);
//
// let find = decks.filter(item=> item.cardSuit === 'Diamonds');
// console.log(find);
//
// let find = decks.filter(item=> item.cardSuit === 'Clubs' && item.value >8);
// console.log(find);
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
// let reduce= decks.reduce((accumulator ,item)=>{
//
// // Додатково по reduce
// //   if (item.cardSuit==='Spade' ) {
//          accumulator.spades.push(item);
//      }else if (item.cardSuit ==='Diamonds'){
//          accumulator.diamonds.push(item);
//      }else if (item.cardSuit ==='Hearts'){
//          accumulator.hearts.push(item);
//      }else  (item.cardSuit ==='Clubs')
//     {
//          accumulator.clubs.push(item);
//      }
//      return accumulator ;
//
//  }, {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// });
//
// console.log(reduce);