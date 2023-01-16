// fetch('https://jsonplaceholder.typicode.com/users')
//      .then(response=>response.json())
//      .then((users)=>{
//          for (const user of users) {
//              console.log(user);
//
//          }
//      } );
// let target = document.querySelector('.target');
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response=>response.json())
//     .then((users)=> {
//         for (const user of users) {
//             let li = document.createElement('li');
//             li.innerText = user.id + "" + user.name + "" + user.username;
//             target.append(li);
//
//         }
//     })
localStorage.setItem('bgColor', 'green');
const bgColor = localStorage.getItem('bgColor');
localStorage.removeItem('bgColor');


const elementList = document.querySelector('#list');
const elementBtn = elementList.querySelector('button');
const elementUl = elementList.querySelector('ul');

function updateStorage() {
    const data = [];
    for (let element of elementUl.querySelectorAll('li')) {
        data.push(element.textContent);
    }
    localStorage ['items'] = JSON.stringify(data);
}

function updateUl(items) {
     const html = [];
    for (let item of items) {
        html.push (`<li>${item}</li> `)
    }
    elementUl.innerHTML=html.join('');

}

elementBtn.onclick=()=>{
    const elementsLi=elementUl.querySelectorAll('li');
    const newLi=document.createElement ('li');
    newLi.textContent=elementsLi.length + 1;
    elementUl.append(newLi );
    updateStorage();
}

window.onstorage=event =>{
    updateUl(JSON.parse(event.newValue) );
}

localStorage.setItem('bg','rer');
localStorage.setItem('bg','black');
localStorage.setItem('color','purpure');
localStorage.setItem('weather','nice');
localStorage.setItem('weather','bad');
localStorage.setItem('weather','good');
localStorage.setItem('wow','gooder');
newLi.innerText =JSON.stringify ['hello'];
