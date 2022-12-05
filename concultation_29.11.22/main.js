// let w = 'hello';
// console.log(w);
// const cutString = (str, n)=>{
//     const arr = [];
//     for (let i = 0; i < str.length; i+=n) {
//         arr.push(str.slice(i,n + 1));
//     }
//     return arr;
// }
// let ww = cutString('gjyfgtrnbkfh', 3);
// console.log(ww);
// let str = 'HTML JavaScript PHP';
// const insert_dash=(str)=>str.split(' ').join('-').toUpperCase();
// let insert_dash1=insert_dash(str);
// console.log(insert_dash(str));
// let sl='I want to pease wery well!!!';
//
// console.log(sl.split());
// let slowo=['HTML JavaScript PHP'];
// let join = slowo.join(' ------let slowo=[\'HTML JavaScript PHP\'];\n');
// console.log(join);
// let str = '!!#Ha@@  ..^&*9rr&&y  >>..Pott***765er';
// const norm=(str)=>{
//     let string=str.split('')
//     return string
// }
// let norm1=norm(str);
// console.log(norm1);
// let str = "hevvy metai is very impotent";
// const capitalaze=(str)=>str.split('').map(value=>value[0].toUpperCase()+value.slice(1).join(''));
// console.log(capitalaze(str));
// let str = "hevvy, metai ,is very, impotent";
// let arr = [1, 2, 3, 4, 5, 6];
// let w = str.split(' ');
// console.log(w);
// console.log(str.substring (2 ,7));
// console.log(str);
// console.log(str.indexOf('i'));
// console.log(str.replace('i', 'l'));
// console.log(str);
// console.log(str.charAt(10));
// let concat = arr.concat(str);
// console.log(concat);
// let split = str.split('');
// console.log(split)
// let join=arr.join('****')
// console.log(join);
// console.log(arr.splice(1, 2, 11, 55));
// console.log(arr);
// console.log(arr.push(123));
// console.log(arr.push(223));
// console.log(arr.unshift(33));
// console.log(arr);
// // console.log(arr.join('***'));
// // console.log(arr);
// console.log(arr.slice(2, 8,));
// console.log(arr);
// console.log(arr.splice(3, 3, 2));
// console.log(arr);
// let arr = [love my  people  an my life'];'
// console.log(str.split(' '));
// let capitalize=(str)=>str.split(' ').map(value=>value [0].toUpperCase()+value.slice(1)).join(' ');
// console.log(capitalize(str));
// console.log(arr.join(' ********'));
// let str = 'hello Okten ';
// for (const strElement of str) {
//     console.log(strElement);
//
// }
// let numb = [1, 3, 4, 5, 6, 7, 7, 6];
// let join = numb.join('****');
// console.log(join);
// let str1 = str.split('');
// console.log(str1);
// let str2 = 'html-scc-java';
// let split = str2.split('-');
// console.log(split);
// let join1 = split.join(' , ');
// console.log(join1);
// let numb2 = numb.join('***');
// console.log(numb2);
// let data = '21-12-2022';
// let reverse = data.split('-').reverse().join('-');
// console.log(reverse);
// let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr5);
// let stringify = JSON.stringify(arr5);
// console.log(stringify);
// let split1 = stringify.split(',');
// console.log(split1);
// let parse = JSON.parse(stringify);
// console.log(parse);
// let str = 'xxvvxxvvxxvvxxvvxxvvxxvvxxxxxxxxxxxxxxx';
// console.log(str);
// for (let i = 0; i < str.length; i+=1) {
//
//     console.log(str[i]+str[i] +str[i]);
//
// }

// let users = [
//     {name : 'vasuluna',age : 31, status: false} ,
//     {name : 'orusya',age : 53, status: true} ,
//     {name : 'anna',age : 44, status: false} ,
//     {name : 'viktor',age : 22, status: true} ,
//     {name : 'vova',age : 66, status: true} ,
//
// ]
// let user1= {name : 'vasuluna',age : 31, status: false,
//     wife:
//         {name: 'olia', age: 33},

// }
// console.log(user1);
// let {name, age ,wife:{name:wifeName,age:wifeAge}} = user1;
// console.log(name,age,wifeName,wifeAge );

// let reduce=users.reduce((accum,item )=> {
//         accum.names.push(item.name);
//         accum.ages.push(item.age);
//         return accum
// },{names:[],ages:[]});
// console.log(reduce);
// let filter = users.filter(value =>{
//     age < 53;
//
// });
// console.log(filter);
//
// function userBuilder(name,age) {
//     let user={name, age};
//     return{
//         getName(){
//             return user.name;
//         },
//         getAge(){
//             return user.age;
//         },
//         setAge (age){
//             if(age >0){
//                 user.age=age;
//             }
//         },
//     }
// }
// let builder=userBuilder('vasia',44);
// console.log(builder);
// console.log(builder.getAge);
// builder.setAge(-11);
// console.log(builder.setAge());
// function User(name,age,status){
//     this.name=name;
//     this.age=age;
//     this.status=status;
//
// }
// let user1=User;
// console.log(user1);
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
// let reduce=users.reduce((accum ,value)=> {
//     accum.names.push(value.name);
//     accum.ages.push(value.age);
//     return accum
// },[names:[], ages:[]});
// console.log(reduce);
// let[{name,age,status},user2]=users;
// console.log(user2);
// let user=  {name: 'max', age: 30, status: true},
const greeting=function () {
    console.log('hi');
};
console.log(greeting);
let user  = {
    name: 'vasia',
    age: 33,
    greeting:function (msg){
        console.log(this);
        return `${msg} my name is ${user.name}`
    }
}
console.log(user.greeting('hi'));
console.log(user.greeting('hello'));
// console.log(user.vitanny('hi'));