let arr = [];
arr [0]= 22 ;
arr [1]= 'hello' ;
arr [2]= 'ivan' ;
arr [3]= true ;
arr [4]= 'son';
arr [4]= 'octobber';
arr[5] = 'you';
arr[6]= 'last';
arr [7]= 'orang';
arr [8]= 'spring';
arr [9]= 'fun';
console.log(arr);
console.log(arr[8]);

let book1 = {
    title: 'cloud',
    pageCaunt : 345,
    genre : 'legend',
};
console.log(book1);
let book2 = {
    title: 'sky',
    pageCaunt : 445,
    genre : 'comedy',
};
console.log(book2);
let book3 = {
    title: 'coast',
    pageCaunt : 145,
    genre : 'liruka',
};
console.log(book3);
let book4 = {
    title: 'clouds',
    pageCaunt : 1345,
    genre : 'legend',
    authors :[
        {
            name : 'jon',
            age : 66,
        },
        {
            name : 'vova' ,
            age : 55,

        },
    ],
};
console.log(book4);
console.log(book4.authors [0].age);
console.log(book4.authors [1].age);
console.log(book4.authors [1].name);
book4.authors[0].skilles=['js','html'];
console.log(book4);
book4.authors[1].skilles=['html','guj'];
book4.authors[3]='jana';
console.log(book4.authors[3]);
book4.authors[3].name ='inna';
let user = { id:1, name:'olja',
};
console.log(user);
let customer = user ;
console.log(customer);
customer.age = 44 ;
console.log(user);
let user1= { id:1, name:'olja'};
console.log(!!user1);
let arr5= [2999,690,'vanja','ivan',[333,444,555]];
console.log(arr5[4]);
console.log(arr5[4][2]);
arr5[4][3] = 666;
console.log(arr5);
arr5[4][2]= 777;
console.log(arr5[4][2]);

let arr9= [
   {
          name :'jana',
          username :'ivanna',
          password : 177745,
   },

    {
        name :'jana',
        username :'ivanna',
        password : 1111111,
    },
    {
        name :'jana',
        username :'ivanna',
        password : 333333,
    },
    {
        name :'jana',
        username :'ivanna',
        password : 444444,
    },
    {
        name :'jana',
        username :'ivanna',
        password : 555555,
    },
        ]
console.log(arr9)
console.log(arr9[0].password);
console.log(arr9[1].password);
console.log(arr9[2].password);
console.log(arr9[3].password);
console.log(arr9[4].password);