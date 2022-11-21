// const square = (a, b) => a * b;
// console.log(square(10, 10));
// console.log(square(12, 23));
// function squareCircle (r){
//     return Math.PI * Math.pow(r, 2);
//     let res =  Math.PI * Math.pow(r, 2);
// }
// console.log(squareCircle(11));
// console.log(squareCircle(88));
// function show (text) {
//     document.write (`
//     <p class="sss" >${text}</p>
//     `)
// }
// show('I love life');
// show('I love life!!!!!');
// function ulTe (text ,num){
//     document.write (`<ul>`);
//     for (let i = 0; i < num; i++) {
//         document.write (`
//         <li class="sss" >${text}</li>
//         `)
//     }
//     document.write (`</ul>`);
// }
//
// console.log(ulTe('hello', 5));
// // console.log(ulTe('hi', 5));
// let users = [
//     {id :1 , name:'vasya', age: 55},
//     {id :1 , name:'vasya', age: 55},
//     {id :1, name:'vasya', age: 55},
//     {id :12, name:'vasya', age: 575},
//
// ]
// function showDoc (array) {
//     for (const item of array) {
//         for (const Key in item) {
//         }
//         document.write(`
//     <div>
//         <p>${item.key.id} ${item.key.name} ${item.age}</p>
//     </div>
//    `)
//     }
// }
//
// console.log(showDoc(users));
//
// const arr = [ 6, 8, 9, 6, 7, 7, 2];
// function min (array){
//    let  min= arr[0];
//     for (const item of array) {
//         if (item < min) {
//             min = item
//         }
//
//     }
//     return min
// }
//
// console.log(min(arr));
// // //
// // // console.log(minim(arr));
// // // const arr = [ 6, 8, 9, 6, 7, 7, 1];
// // // const min =function (array) {
// // //     let min = arr[0];
// // //     for (const item of  array) {
// // //         if (item < min) {
// // //             min = item;
// // //         }
// // //     }
// // //     return min;
// // // }
// // // console.log(min(arr));
// // const arr = [1, 2, 3, 4, 5, 6, 7, 7, 88, 88,];
// // function suma(array) {
// //     let suma = 0;
// //     for (const item of array) {
// //         suma = suma + item
// //     }
// //     return suma
// // }
// //
// // console.log(suma(arr));
// let arr = [4, 6, 8, 9, 3, 7, 1];
// let res = Math.min(...arr);
// console.log(res);
// //
// let arr = [1, 4, 5, 7, 8, 9, 5, 77, 33, 888];
// function max (array) {
//     let max = arr[0];
//     for (const item of array) {
//         if (item>max){
//             max = item
//         }
//        return max
//     }
// }
//
// console.log(max(arr));
// function  foo(...arguments) {
//     let min = arguments [0];
//     let max =  arguments [0];
//     for (const item  of arguments ) {
//         if (item >max) {
//             max = item;
//         }
//         if( item <min) {
//             min = item;
//         }
//         console.log(max);
//
//     }
//     return min;
//     console.log(max);
// }
// foo(1, 2, 2, 3, 3, 3, 3, 3,);
// let foo1 = foo(1, 2, 2, 3, 3, 3, 3, 3,);
// console.log(foo1);
//
// const arr = [1, 2, 3,5,6,5,6,];
// function foo (arr){
//     let newArr = [];
//     for (let i = arr.length ;j=0, i >= 0; i--) {
//         newArr[j++] = arr[i];
//     }
//     return newArr;
// }
//
// console.log(foo(arr));
// const foo = (...arguments) => arguments.length  === 2 ? arguments[0]+arguments[1] : arguments[0];
// let foo1 = foo('h','i');
// console.log(foo1);
//
const arr = [
    {name: 'Rima', age: 55},
    {model: 'Counry',status : true},
];
function foo (array){

    let newArr = [];
    for (let i = 0 , j =0; i < array.length; i++) {
        for (const key in array[i]){
            newArr [j++] = key;
        }

    }
    return newArr;
}

console.log(foo(arr));