// let users = [{name: 'vasja', age: 44, status: false}, {name: 'ola', age: 46, status: false}, {
//     name: 'vova',
//     age: 33,
//     status: false
// }, {name: 'inna', age: 66, status: true}, {name: 'max', age: 22, status: false}, {
//     name: 'vasuluna',
//     age: 49,
//     status: true
// }, {name: 'vlad', age: 42, status: false}, {name: 'ira', age: 55, status: false}, {
//     name: 'ivan',
//     age: 24,
//     status: true
// }, {name: 'petja', age: 49, status: false}];
// console.log(users);
// for (let user of users) {
//     if (!user.status) {
//         document.write(`
// <div class="user_box" >
//      <h3>  ${user.name}${user.age} </h3>
//      <p>  ${user.status}</p>
//
// </div>
// `);
//     }
// }
// let products= [
//     {
//         title: 'milk',
//         prase: 54,
//         form :' oval',
//     },
//     {
//         title: 'milk',
//         prase: 45,
//         form :'square' ,
//     },
//     {
//         title: 'milk',
//         prase: 44,
//         form :'square' ,
//     },
//     {
//         title: 'milk',
//         prase: 33,
//         form :'square' ,
//     },
//     {
//         title: 'milk',
//         prase: 22,
//         form :'square' ,
//     },
// ]
// for (const product  of products ) {
//     document.write (`
// <div class="user_box">
// <h2>${product.title }</h2>
// <p>${product.prase }</p>
// ${product.form  }</p>
// </div>
// `
//     )
//
// }
let users = [{name: 'vasja', age: 44, status: false}, {name: 'ola', age: 46, status: false}, {
    name: 'vova', age: 33, status: false
}, {name: 'inna', age: 66, status: true}, {name: 'max', age: 22, status: false}, {
    name: 'vasuluna', age: 49, status: true
}, {name: 'vlad', age: 42, status: false}, {name: 'ira', age: 55, status: false},


    {
        name: 'ivan', age: 24, status: true
    }, {name: 'petja', age: 49, status: false}];
console.log(users.length);

for (let i = 0; i < users.length; i = i++) {
    document.write(`<h1>${user.name}</h1>`);
}

