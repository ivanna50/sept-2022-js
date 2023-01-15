// <!--В index.html-->
// <!--1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users-->
// const conteiner=document.createElement ('div');
// document.body.append(conteiner);
//
// fetch(' https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(value => {
//         let {data} = value;
//         // console.log(value);
//
//         for (const user of value) {
//             let userDiv = document.createElement('div');
//
//
//
//
//             userDiv .innerText =`${user.id} ${user.name}`;
//             conteiner.append (userDiv);
//
//             let a=document.createElement ('a');
//             a.innerText ='Click me';
//             a.href=`user-details.html?data=${user.id}`;
//             userDiv.append (a);
//
//             let button=document.createElement ('button');
//             button.innerText ='show me';
//             userDiv.append(button);
//
//
//
//
//
//         }
//     })
// let user={name:'ivan',age:33,status:true};
// for (const Key in user) {
//     // console.log(Key);
//     console.log(Key,user[Key]);
// }
//     let arr=[11,22,33,44,55,true,'asd'];
//     let newArr=[];
//     for (let i = 0; j=0, i < arr.length; i++) {
//         if(typeof arr[i]==='number'){
//             newArr=arr[i];
//             j++
//         }
//     }
// console.log(newArr);
let world = ['a', 'd', 's'];
let str = '';
for (let i = 0; i < world.length; i++) {
    str += world[i];
}
console.log(str);
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

function foo(array) {
    let newArr = [];
    for (let i = array.length - 1, j = 0; i > 0; i--) {
        newArr[j] = array[i];
        j++
    }
    return newArr;
}

console.log(foo(arr));
console.log(arr.length);
const arr1 = [
    {name: 'ivan', age: 33},
    {model: 'fabija'},
]

function Key(array) {
    let key1 = [];
    for (let i = 0, j = 0; i < array.length; i++) {
        for (const Key in array[i]) {
            key1[j++] = array[i][Key];

        }
    }
    return key1;
}

console.log(Key(arr1));
let user2 = {name: 'kokos', age: 44, wife: {name: 'valia', age: 22}};
let {name, age, wife: {name: wifeName, age: wifeAge}} = user2;
console.log(name, wifeName, wifeAge);


const newButton = document.getElementById('newButton');

function changeBacground() {
    document.body.style.background = 'grey';

}

newButton.addEventListener('click', changeBacground);

function sum(a) {
    return function (b) {
        return a + b;
    };
}

console.log(sum(3,)(2));
console.log(sum(44,)(23));

// let users=[
//     {name:'ivan',age:22,status:true},
//     {name:'ivana',age:32,status:true},
//     {name:'ivanko',age:62,status:false},
//     {name:'ivannna',age:44,status:true},
// ]

// let sort=users.sort(a,b) => a.name >b.name ? 1 :-1)),
// console.log(sort);

let user1;
user1 = 'vova';
console.log(user1);

let sayHi = function (who) {
    console.log(`HELLOY ${who}`);
};
sayHi('Ivan');

let users1 = [
    {name: 'Taras', surname: 'viva'},
    {name: 'Tarasa', surname: 'vivakl'}
]
// function  fullName (arr) {
//     return function (item) {
//         for (const field of item) {
//           let {field.name,field.surname}=item
//         }
//         return `${field.name} -${field.surname}`
//
//     }
//
// }
// let fullNames=fullName('sac')('dftyuuu');
// console.log(fullNames);


flyjet.onclick = function () {
    flyjet.classList.add('growing');
};
const foo1 = (...arguments) => arguments.length === 2 ? arguments[0] + arguments[1] : arguments[0];
let foo2 = foo1(1);
console.log(foo2);
let users = [
    {name: 'ivan', age: 22, status: true},
    {name: 'ivana', age: 32, status: true},
    {name: 'ivanko', age: 62, status: false},
    {name: 'ivannna', age: 44, status: true},
]
let reduse = users.reduce((accum, user) => {
    if (user.status) {
        accum.StatusT.push(user)
    } else {
        accum.StatusF.push(user)
    }
    return accum
}, {StatusT: [], StatusF: []})
console.log(reduse);
let sort = users.sort((a, b) => {
    return a.age - b.age
});
console.log(sort);

// function explorer (htmlElement){
//     console.log(htmlElement);
//     let children=htmlElement.children;
//     if(children.length!==0){
//         for (const child of children) {
//             explorer(child);
//
//         }
//     }
// }
// explorer(document.body );

// setTimeout (()=>
// {console.log(22);
// } 105 );
// console.log(document.body.children);

function sumTo(n) {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumTo(100));

function sumTo1(n) {
    if (n === 1) return 1;
    return n + sumTo1 (n-1)
}
console.log(sumTo1 (3));
// <!--2 Вивести id,na,me всіх user в index.html. Окремий блок для кожного user.-->

// <!--3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули-->
//
//
// <!--На странице user-details.html:-->
// <!--4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули-->

// <!--5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера-->
// <!--(для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)-->
//     <!--6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.-->
//
//     <!--На странице post-details.html:-->
//     <!--7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .-->
//     <!--8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)-->
//
// <!--Стилизація проєкта - -->
// <!--index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.-->
//
// <!--user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.-->
// <!--блоки з короткою іфною про post - в ряд по 5 .-->
//
// <!--post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.-->
// <!--Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)-->