
const conteiner = document.createElement('div');
document.body.append(conteiner );



fetch('https://jsonplaceholder.typicode.com/users')
    .then (value =>value.json())
    .then(value => {

        console.log(value);
        for (const item of value) {


            const userDiv=document.createElement('div');

            userDiv.innerText =`${item.id} ${item.name}`;
            // userDiv.classList.add('text');

            conteiner.append(userDiv);
            const anchor=document.createElement('a');
            anchor.innerText = 'Click me';
            anchor.classList.add('butt');
            userDiv.append(anchor );
            anchor.href=`detalis.html?data=${item.id}`;
            userDiv.classList.add('block');
            conteiner.classList.add('center');

        }
    });