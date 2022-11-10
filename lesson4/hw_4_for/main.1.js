// let users = [
//     {name: 'oja'},
//     {name: 'oja'},
//     {name: 'oja'},
//     {name: 'oja'},
//     {name: 'oja'},
//     {name: 'oja'},
//     {name: 'oja'},
//     {name: 'oja'},
//     {name: 'oja'},
//     {name: 'oja'},
//
// ];
//
// console.log(users);
// for (const user of users) {
//     document.write(`
// <div class="user_box" >
// ${user.name}
// </div>
// `)
//
// }

// let users = [
//     {id : 1, name: 'oja'},
//     {id : 2 ,name: 'oja'},
//     {id : 3 ,name: 'oja'},
//     {id : 4 ,name: 'oja'},
//     {id : 5 ,name: 'oja'},
//     { id : 6 ,name: 'oja'},
//     {id :7 ,name: 'oja'},
//     {id :8 ,name: 'oja'},
//     {id : 9 ,name: 'oja'},
//     {id : 10,name: 'oja'},
// ];
// for (const user of users) {
//     document.write (`
// <div class="user_box" >
//         <h3>${user.id}</h3>
//         <p>${user.name}</p>
// </div>
// `)
//
// }

// let users = [
//         {id:1,name : 'max'},
//         {id : 2,name : 'max'},
//         {id :3,name : 'max'},
//         {id :4,name : 'max'},
//         {id : 5,name : 'max'},
//         {id : 6,name : 'max'},
//         {id : 7,name : 'max'},
//         {id : 8,name : 'max'},
//         {id : 9,name : 'max'},
//         {id :10,name : 'max'},
//         {id :11,name : 'max'},
//         {id : 12,name : 'ola'},
//         {id :14,name : 'max'},
//         {id :15,name : 'max'},
//         {id :16,name : 'max'},
//         {id : 17,name : 'max'},
//         {id :18,name : 'max'},
//         {id : 19,name : 'max'},
//         {id : 20,name : 'max'},
//
// ];
// console.log(users.length );
// // console.log(users[11]);
//
// let i = 0;
// while (i <users.length) {
//     let user = users[i];
//     document.write (`
// <div class="user_box" >
//        <h1>${user.id}</h1>
//       <h5>${user.name}</h5>
//
// </div>
// `);
//
//         i++;
// }


let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// for (const user of users) {
//         if  (user.age>30){
//                 console.log(user)
//         }
//
// }
//
// for (const user of users) {
//         if  (user.status){
//                 console.log(user)
//         }
//
//
for (const user of users) {
    if (!user.status) {
        console.log(user)
    }

}


// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
//
//
// listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// for (const listOfItem of listOfItems) {
//     document.write(`
// <div class="user_box" >
//     <ul><h1>${listOfItem[0]}</h1>
//        <li>${listOfItem[0]}</li>
//        <li>${listOfItem[1]}</li>
//        <li>${listOfItem[2]}</li>
//        <li>${listOfItem[3]}</li>
//        <li>${listOfItem[4]}</li>
//        <li>${listOfItem[5]}</li>
//
//
//    </ul>
//
// </div>
// `)
//
// }
//
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (const product of products) {
    document.write(`
<div class="product-card">
    <h3 class="product-title">${product.title} ,price- ${ product.price}</h3>
    <div>
    <img src="" alt="" class="product-image">
    </div >
 </div>
`)

}

// /ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
//     <img src="IMAGE" alt="" class="product-image">
// </div>
// /Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту/



