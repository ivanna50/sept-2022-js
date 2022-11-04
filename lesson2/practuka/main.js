let users = [
    {skilles : [ 'js' , 'html',] ,id : 1, name :'vova',age : 36, status : false},
    {id : 1, name :'vavud',age : 46, status : true},
    {id : 1, name :'vina',age : 72, status : true},
    {id : 1, name :'vulf',age : 46, status : false},
];
console.log(users);
console.log(users[0].age);
console.log(users[0].skilles [1])

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