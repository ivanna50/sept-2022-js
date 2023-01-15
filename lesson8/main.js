//
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname, email, phone) {
//     this.id=id;
//     this.name=name;
//     this.surname=surname ;
//     this.email=email ;
//     this.phone=phone ;
// }
//
// let users = [];
// let user1=new User(1,'vova','titov','37655@0966',0997654323);
// let user2=new User(2,'viver','fgyy','37655@0998',0985554343);
// let user3=new User(3,'ola','nbcgt','37655@444',0987654777);
// let user4=new User(4,'vasuluna','bbat','37655rrrr',0987699999);
// let user5=new User(5,'orusa','hfgyt','fgtt55@0998',0987654333);
// let user6=new User(6,'jan','tftrd','fvbhhh5@0998',0987657733);
// let user7=new User(7,'ann','mkoihh','hjuuyy5@0998',0987654993);
// let user8=new User(8,'vovik','sdhu','ddftt55@0998',0987654311);
// let user9=new User(9,'marta','lokjhh','rffg55@0998',0987654333);
// let user10=new User(10,'vitalik','dddhov','fddrrr@0998',0987654322);
//
// // console.log(user9);
// users.push (user1,user2 ,user3 ,user4 ,user5 ,user6 ,user7 ,user8 ,user9 ,user10 );
// console.log(users);


// //
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filter = users.filter(user=>user.id%2===0);
// console.log(filter);
//
// //
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sort= users.sort((a ,b)=>{
//     return b.id-a.id
// });
// console.log(sort);
// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів
// class Client extends User {
//     constructor(id, name, surname, email, phone, orders) {
//         super(id, name, surname, email, phone);
//         this.orders = orders;
//     }
// }
// // створити пустий масив, наповнити його 10 об'єктами Client
// let client= [];
// let  client1 = new Client (1,'olexsa','avfrdd','asdee@777',0982658888, ['1' ,'11','33']);
// let  client2 = new Client (2,'olexsa','avfrdd','asdee@777',0982658888, ['1' ,'11','44']);
// let  client3 = new Client (3,'olexsa','avfrdd','asdee@777',0982658888, ['1' ,'11','33','44']);
// let  client4 = new Client (4,'olexsa','avfrdd','asdee@777',0982658888, ['1' ,'11','55']);
// let  client5 = new Client (5,'olexsa','avfrdd','asdee@777',0982658888, ['1' ,'11','ghytt']);
// let  client6 = new Client (6,'olexsa','avfrdd','asdee@777',0982658888, ['1' ,'11','eeee','tihfyy']);
// let  client7 = new Client (7,'olexsa','avfrdd','asdee@777',0982658888, ['1' ,'11','gdftrii']);
// let  client8= new Client (8,'olexsa','avfrdd','asdee@777',0982658888, ['1' ,'11','dfgtt','gdftt']);
// let  client9 = new Client (9,'olexsa','avfrdd','asdee@777',0982658888, ['1' ,'11']);
// let  client10 = new Client (10,'olexsa','avfrdd','asdee@777',0982658888, ['1' ,'11']);
// console.log(client2);
// client.push (client1 ,client2 ,client3,client4,client5,client6,client7,client8,client9,client10);
// console.log(client);
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sort1= client.sort((a,b)=>{
//     if(a.orders<b.orders )
//     return 1;
//     if(a.orders>b.orders )
//         return -1;
//     if(a.orders===b.orders )
//         return 0;
// })
// console.log(sort1);
// //
// //
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

function Car(model, made, year, max_speed, volume) {
    this.model = model;
    this.made = made;
    this.year = year;
    this.max_speed = max_speed;
    this.volume = volume;
    this.drive = function () {
        return `їдемо зі швидкістю ${max_speed} на годину`
    }
    this.info = function () {
        console.log(`model:this.model,made ,year `);
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.max_speed = this.max_speed + newSpeed;
    }
    this.changeYear = function (newValue) {
        this.year = newValue;
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

let car = new Car('oktavia', 'shexu', 2015, 200, 1, 3);
console.log(car);
car.info();
car.changeYear(2000);
car.increaseMaxSpeed(55);
car.addDriver('vazy');


console.log(car.drive());
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSyearpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//
class Popelushka {
    constructor(name, year, size) {
        this.name = name;
        this.year = year;
        this.size = size;
    }
}

let popelushka1 = new Popelushka('anna', 18, 36);
let popelushka2 = new Popelushka('anna', 19, 38);
let popelushka3 = new Popelushka('annabel', 21, 35);
let popelushka4 = new Popelushka('anna', 31, 37);
let popelushka5 = new Popelushka('anna', 41, 39);
let popelushka = [];
popelushka.push(popelushka1, popelushka2, popelushka3, popelushka4, popelushka5);
console.log(popelushka);

class Princ {
    constructor(name, year, size) {
        this.name = name;
        this.year = year;
        this.size = size;
    }
}

let princ1 = new Princ('jon', 24, 35);
let princ2 = new Princ('jonson', 24, 40);
let princes = [];
princes.push(princ1, princ2);
console.log(princes);
for (const value of popelushka) {
    for (const item of princes) {


        if (value.size === item.size) {

            console.log(`she is my prinsesa ${value.name}`)
        }

    }
}
