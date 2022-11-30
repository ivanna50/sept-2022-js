// let a ;
// console.log(a.name);
//
// function divider(a ,b ){
//     if(b===0){
//         throw new Error('ovovov b is zero');
//     }
//     return a/b ;
// }
// try {
//     divider (10 ,0);
// }
// catch (e){
//     console.log(e);
//     console.log(divider(10, 2));
// }
// finally {
//     console.log('asd');
// }
// let user ;
// console.log(user?.name?.wife?.age);
// let name1 = 'vasia';
// let age1 = 44;
// let user1= {name1, age1};
// console.log(name1, age1);
// let s = 'hi';
// console.log(s);
// let user = {name:'kokos', age: 55,wife:{name:'olya',age:33}};
// let {age, name} = user;
// console.log(age, name);
// console.log(age);
// let {name, age, wife, wife: {name: wName, age: wAge}} = user;
// console.log(name, age, wName, wAge);
// let user2 = {...user};
// console.log(user2);
// user3= {...user,status:true, id: 1};
// console.log(user3);
// user4 = {...user};
// console.log(user4);
// user4.wife.name = 'vasuluna';
// console.log(user4);
// console.log(user);
// const copy=(obj)=>JSON.parse (JSON.stringify (obj));
// const copy=(user=>JSON.parse (JSON.stringify (user)));
// // console.log(user);
// const copy1= (user=>JSON.stringify (JSON.parse (user)));
// console.log(copy1);

const suits = [
    {cardSuit: 'heart', color: 'red'},
    {cardSuit: 'diamound', color: 'red'},
    {cardSuit: 'spade', color: 'black'},
    {cardSuit: 'clubs', color: 'black'},
]
const cardNames = [6, 7, 8, 9, 10, 'jask', 'queen', 'kibg', 'ace'];
const deck = [];
for (const suit of suits) {
    for (const cardName of cardNames) {
        const card = {
            cardSuit: suit.cardSuit,
            value: cardName,
            color: suit.color,

        }
        deck.push(card);
    }
}
console.log(deck);
// console.log(deck.splice(0, 5));
// console.log(deck);

 // let filter=deck.filter(dec)=>cardName>5 ;
// console.log(filter);
        // accumulator.cards.push.(car
// return accumulator;
//
// },{cards:[]});
// console.log(cards);
// const copy = (suits) => JSON.parse(JSON.stringify(suits));
// let obj={name:'olja', age: 55}
// function copy(obj){
    // return JSON.parse(JSON.stringify(obj));
// }
// function userBuilder (name,age){
//     let user= {name,age};
//     return {
//         setAge:function (age){
//             if (typeof age ===string){
//                 throw new Error('not number');
//             }else {
//                 user.age = age
//             }
//
//         }
//     }
// }

// console.log(user);
// let builder= userBuilder ('asd',123);
// console.log(builder);
// builder.setAge(100);
// console.log(builder.user.age);
//
// let s = "hello world";
// let split = s.split();
// console.log(split);

// // console.log(deck, reverse);
//  let arr = [
//     {name: 'vasyarrrr', age: 44},
//     {name: 'vasyarrr', age: 43},
//     {name: 'vasyar', age: 45},
//     {name: 'vasya', age: 47},
// ];
// // // console.log(arr.reverse);
// // arr.push('asd');
// // console.log(arr);
// // arr.push('asd');
// // console.log(arr);
// // console.log(arr.pop());
// // console.log(arr);
// // arr.unshift('asd','tyhf',"name",'anna');
// // console.log(arr);
// // console.log(arr.join('--'));
// // let s = [1, 3, 4, 5,];
// // let as = arr.concat(s);
// // console.log(as);
// // as.splice(1, 3);
// // console.log(as);
// // console.log(as.includes('@   '));
// // let map = as.map(value => {
// //     return {name:value.name,
// //         age:value.age +9
// //
// // }
// // });
// // console.log(map);
// // let find = arr.find(value =>value.age=== 44);
// // console.log(find);
// // console.log(arr.every(value => name === 'vasya'));
// // let sort = arr.sort((a, b) => {
// //     return a.age - b.age
// // });
// // console.log(sort);
// // let sort1 = arr.sort((a, b) => {
// //     if (a.name > b.name) {
// //         return 1
// //     }
// //     if (a.name < b.name) {
// //         return -1
// //     }
// //     if (a.name === b.name) {
// //         return 0
// //     }
// //
// // });
// // console.log(sort1);
// arr.reduce((accum, value) => {
//     if (arr.age ===45) {
//         accum.ageW.push(value );
//     } else {
//         accum.ageT.push(value );
//     }
//     return accum
//
// }, {ageW:[], ageT:[]});
// let newArr = arr.reduce;
// console.log(newArr);
let arr = [
    {name: 'vasyarrrr', age: 44},
    {name: 'vasyarrr', age: 43},
    {name: 'vasyar', age: 45},
    {name: 'vasya', age: 47},
];
arr.forEach(value =>console.log(value));



