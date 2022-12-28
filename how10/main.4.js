let url = new URL(location.href);
let post = url.searchParams.get('asd');
console.log(post);
let parse = JSON.parse(post);
console.log(parse);

const father = document.createElement('div');

father.classList.add('father');

document.body.append(father);
for (const item in parse) {


    const postDiv = document.createElement("div");
    postDiv.innerText = `userId--${parse.userId}
                         id--${parse.id}
                         title---${parse.title}
                         body---${parse.body}`;
    postDiv.classList.add('clas');


    father.append(postDiv);
}

const block = document.createElement('div');
document.body.append(block);
block.classList.add('block');



fetch('https://jsonplaceholder.typicode.com/posts/'+parse.id +'/comments')
    .then(value => value.json())
    .then(value => {
        console.log(value);
        const {postId, id, name, email, body} = value;
        console.log(value[0].postId);
        console.log(value[1].name);
        console.log(value[1].id);
        console.log(value[2].id);
        console.log(value[3].id);

        for (const item in value) {
            const postD = document.createElement('div');
            document.body.append(postD);
            postD.innerText =` postId--${value[item].postId}
                               id--${value[item].id} 
                               name--${value[item].name}
                               email--${value[item].email}
                               body--${value[item].body}`
            postD.classList.add('great');
            block.append (postD);



        }







        // for (const item in value ) {
        //     const{postId,id,name,email,body}=value
        //     const divComment = document.createElement('div');
        //
        //
        //
        //     if (typeof value [item] !== 'object') {
        //         divComment.innerText = `${item}----${value [item]}`;
        //
        //     } else {
        //         divComment.innerText = `${item}`;
        //
        //
        //
        //         for (const key in value[item]) {
        //             const divInnerCom = document.createElement('div');
        //             if (typeof value[item][key] !== 'object') {
        //                 divInnerCom.innerText = `${key}---${value[item]}`;
        //                 divInnerCom.classList.add('four');
        //             } else {
        //                 divInnerCom.innerText = `${key}`;
        //                 for (const elem in value[item][key]) {
        //                     const divComValue = document.createElement('div');
        //                     if (typeof value[item][key][elem] !== 'object ') {
        //                         divComValue.innerText = `${elem}--${value[item][key][elem]}`;
        //
        //                     }
        //                     divInnerCom.append(divComValue);
        //                 }
        //             }
        //             divComment.append(divInnerCom);
        //             divComment.classList.add('three');
        //         }
        //         block.append(divComment);
        //
        //
        //     }
        //
        //     block.append(divComment);
        //
        // }

    })
father.append(block);




