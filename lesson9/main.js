console.log(document);
let arr = [11, 22, 33];
console.log(arr);
console.log(document.body);
console.log(document.body.innerHTML );
console.log(document.body.children);
let ulList = document.getElementById('list-1');
console.log(ulList);
let ulMenus=document.getElementsByClassName('menu');
console.log(ulMenus[0]);
let w= document.getElementsByTagName('ul');
console.log(w);

let element=document.querySelector('.menu');
console.log(element);
let menus=document.querySelectorAll('.menu');
console.log(menus);
let liList=document.getElementsByName ('li');
console.log(liList);
// let liListElement=liList[0];
// console.log(liListElement);
// liListElement.innerHTML = 'hello okten';
let users = [
    { name:'zag', age: 22},
    { name:'zag', age: 22},
    { name:'zag', age: 22},
    { name:'zag', age: 22},
    { name:'zag', age: 22},
    { name:'zag', age: 22},
    { name:'zag', age: 22},
    { name:'zag', age: 22},
    { name:'zag', age: 22},
    { name:'zag', age: 22},
    { name:'zag', age: 22},
]

let htmlDivElement=document.createElement('div');
document.body.append(htmlDivElement);
console.log(document.body);
let pList=document.getElementsByName ('p');
console.log(pList);
let c=document.querySelector ('p');
console.log(c);
c.appendChild ('div');
document.body.style.background =(`${e.pageX},${e.pageY},${e.pageY}`);
