let users = [
    {skilles : [ 'js' , 'html',] ,id : 1, name :'vova',age : 36, status : false},
    {id : 1, name :'vina',age : 72, status : true},
    {id : 1, name :'vulf',age : 46, status : false},
    {id : 1, name :'vavud',age : 46, status : true},
];
console.log(users);
console.log(users[0].age);
console.log(users[0].skilles [1]);

let a = 100;
let b =a;
console.log(b);
b = 500;
console.log(b);
console.log(a);

let  user= { name : 'vasja' ,};
console.log(user);
let user2 = user ;
console.log(user2);
user2.age = 66;
console.log(user2);
console.log(user);
user.skilles = ['js', 'html','java'];
console.log(user);
console.log(user2);

let books = [
    {
        title: 'boots and foots',
        page: 999,
        genre: ['comedy', 'fantastiks'],
        autours: [
            {
                name: 'vitja',
                age: 33,
                status: false,
            },
            {
                name: 'vitalia',
                age: 55,
                status: false,
            },
        ],
    },

    {
        title: 'boots and footses',
        page: 888,
        genre: ['comedy', 'fantastiks'],
        autours: [
            {
                name: 'vitjaanna',
                age: 34,
                status: false,
            },
            {
                name: 'vitalia',
                age: 77,
                status: false,
            },
        ],

    },
];

console.log(books);
console.log(books[0].autours[0]);
console.log(books[0].page);
console.log(books[1].autours[1]);
console.log(books[1].genre[1]);
books.skills=[ 'js', 'java'];
console.log(books.skills );
books[0].title='grey';
console.log(books.title);
console.log(books[0].title);
console.log(books[1].title);
console.log(books[1].genre[0]);
console.log(books[1].autours [0]);
let w1 = 'hello';
let w2 = 'okten';
let  rezult = w1 + '    ' + '     '  +w2;
console.log(rezult);
let arr = [1,2,3,4,5,6,7];
console.log(!!arr);
let ad =[] ;
console.log(!!ad);
// let g =null ;
// console.log(!!g);
let arr1= [33,44,55,66,77,88,99,11,23,34,45,56,67,78];
console.log(arr1.length );
arr1[14]= 44;
console.log(arr1);
books[1].autours[1]['surname']='pupkin';
console.log(books[1].autours[1]);
books[1].autours[1]['ckills'] = ['js' ,'java'];
console.log(books[1].autours[1]);
console.log(books[1].autours[1]);
let d8 = 'vanja';
console.log(d8);
books[1].autours[0]['surname'] = 'ivanov';
console.log(books[1].autours[0]);
books[1].autours[0]['genre'[2]]=['liruka'];
console.log(books[1].autours[0]['genre'[2]]);
console.log(books[1].autours[0]);
books[0].title='can';
console.log(books[0].title);
console.log(books[0]);
let people5 = [
    {name :'ivan',age: 32 ,status : 'falce'},
    {name :'ivan',age: 32 ,status : 'falce'},
    {name :'vaca',age: 37,status : 'falce'},
    {name :'mana',age :23,status : 'falce'},
    {name :'ola',age :33 ,status : 'falce'},

];
people5[5] = 'name : lola';
console.log(people5);
people5.skills = ['js', 'java'];
console.log(people5);
let world = 'hello okten';
console.log(world);

