const url = new URL(location.href);
const id = url.searchParams.get('data');

const conteiner = document.createElement('div');
document.body.append(conteiner);
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(value => value.json())
    .then(value => {
        for (const item in value) {
            console.log(value);

            const{id,name,username,email,address,company}=value
            console.log(value[item].name);
            console.log(value[item].username);


            const userDiv = document.createElement('div')
            userDiv.innerText = `${item}${value[item]}`;


            if (typeof value[item] !== 'object') {
                userDiv.innerText = `${item} ${value[item]}`;
                userDiv.classList.add('nice');


            } else {
                userDiv.innerText = `${item}`;

                for (const key in value[item]) {
                    const userInnerDiv = document.createElement('div');
                    if (typeof value[item][key] !== 'object') {
                        userInnerDiv.innerText = `${key}---${value[item]}`;
                    } else {
                        userInnerDiv.innerText = `${key} :`;


                        for (const element in value[item][key]) {
                            const htmlDivElement = document.createElement('div');
                            if (typeof value[item][key][element] !== 'object') {
                                htmlDivElement.innerText = `${element}--${value[item][key][element]}`;

                            }
                            userInnerDiv.append(htmlDivElement);

                        }
                    }
                    userDiv.append(userInnerDiv);
                }
            }
            conteiner.append(userDiv);
            conteiner.classList.add('one');
        }
    });

const target = document.querySelector('.target ');
const btn = document.querySelector('.btn');
const block2 = document.createElement('div');
conteiner.append(block2);
block2.classList.add('two');
btn.onclick = function () {
    // const conteiner = document.createElement('div');


    fetch(` https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(value => value.json())
        .then(posts => {
            console.log(posts);
            for (const post of posts) {
                const postUser = document.createElement('div');
                postUser.innerText = ` ${post.title}`;
                postUser.classList.add('user');
                conteiner.append(postUser);
                // userDiv.append(postUser);
                const a = document.createElement('a');
                a.innerText = 'detalis about post';
                a.href = 'post_detalis.html?asd=' + JSON.stringify(post);
                a.classList.add('click');

                conteiner.append(a,block2,btn);

            }
        })

}
