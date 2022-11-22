// let str = 'hello Okten';
// console.log(str);
// console.log(str[0]);
// console.log(typeof str);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.startsWith('he'));
// console.log(str.endsWith('en'));
// let toUpperCase = str.toUpperCase();
// console.log(toUpperCase);
// let s = str.concat('!!!!!');
// console.log(s);
// console.log(str.substring(0, 7));
// console.log(str);
// console.log(str.indexOf('h'));
// console.log(str.indexOf('e'));
// console.log(str.indexOf('n'));
// console.log(str.indexOf('o'));
// console.log(str.indexOf('e', 5));
// let charAt = str.charAt(8);
// console.log(charAt);
// console.log(str.replace('e', '!'));
// console.log(str.replaceAll('e', 'eee'));
// let split = str.split('');
// console.log(split);
// let arr = [];
// console.log(typeof arr);
// console.log(Array.isArray(arr));
// arr[arr.length] = 'asdasd0';
// console.log(arr.length);
// arr.push('new element1');
// arr.push('new element2');
// arr.push('new element3');
// arr.push('new element4');
// arr.push('new element5');
// arr.push('new element6');
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);
// let join = arr.join('*****');
// console.log(join);
// let num = [1, 2, 3, 4, 5];
// let concat = (arr.concat(num));
// console.log(concat);
// console.log(concat.splice(0, 4));
// console.log(arr);
// console.log(concat.splice(0, 2, '4444,'));
// console.log(concat.indexOf('l'));
// let arr = [11, 33, 55, 7];
// let num = arr.reverse();
// console.log(arr);
// let str = ' asd ';
// console.log(str.length);
// let s = str.trim();
// console.log(s.length );
let users = [
    { name:'vasuluna', age: 95,status :true},
    { name:'vasuluna', age: 45,status :false},
    { name:'vasuluna', age: 85,status :true},
    { name:'vasuluna', age: 45,status :true},
    { name:'vasuluna', age: 75,status :false},
    { name:'vasuluna', age: 65,status :true},
    { name:'vasuluna', age: 35,status :false},
    { name:'vasuluna', age: 25,status :true},
    {name:'max', age: 55,status:true},
    {name:'olya', age: 55,status:false},
    {name:'ivan', age: 575,status:true},
]
// // users.forEach(function (value, index, array) {
// //     console.log(value);
// //     console.log(index);
// //
// // });
// // users.forEach(value => console.log(value));
// // users.filter(user=>user.age>45 && user.status);
// // console.log(filter);
// //  users.map((value, index ) => {
// //
// //     return { id:index +1,name:value.name}
// // })
// // console.log(map);
// let sort= users.sort((u1 ,u2))=>{
//     return u2.age-u1.age
// }
// console.log(sort);
// users.map((value, index) => {
//     return {id: index + 1, name: value.name, age: value.age, status: value.status}
// // })