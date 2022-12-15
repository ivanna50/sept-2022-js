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
fetch('https://reqres.in/api/users')
     .then(response=>response.json())
     .then((value)=> {
         let {data} = value;
         console.log(data);

         for (const user of data) {
             let div = document.createElement('div')
             div.classList.add('user_box');
             let h2 = document.createElement('h1')
             h2.innerText = `${user.id}${user.first_name}${user.last_name}`;
             div.append(h2);
             document.body.append(div);
             let img = document.createElement('img')
             img.src = user.avatar;
             div.append (img);
         }


     })