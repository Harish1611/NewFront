// const posts = [
//     { title:'Post one', body:'This is the Body of the Post one'},
//     { title:'Post two', body:'This is the Body of the Post two'}
//  ];


//  function getPosts(){

//     setTimeout(() => {

//         let output = '';
//         posts.forEach((post,index) => {
//             output += `<li> ${post.title} </li>`
//         });

//         document.body.innerHTML = output;

//     }, 1000);
    
//  }

// function createPost(post){
//     return new Promise((resolve, reject) => {
      
//         setTimeout(() => {

//             posts.push(post);


//             const errors = false;

//             if(!errors){

//                 resolve();
//             }
//             else{
//                 reject('Something broke internally')
//             }
//         }, 2000);

//     })
   
// }
// function updateLastUserActivityTime(){
//    return new Promise( (resolve, reject ) => {
    
//     setTimeout( () => {
 
//         console.log( 'lastActivity : ' + ( new Date));
//         resolve();
//     },1000)

//    })
// }
// //  createPost( {title:'Post Three', body:'This is post three'}).then( getPosts ).catch(err => console.log(err));


// // Promise.all



// Promise.all([createPost, updateLastUserActivityTime]).then( (values) => {
//     console.log(values);
// })
 
  
const posts = [
    { title: 'Post one', body: 'This is the Body of the Post one' },
    { title: 'Post two', body: 'This is the Body of the Post two' }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li> ${post.title} </li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const errors = false;
            if (!errors) {
                resolve();
            } else {
                reject('Something broke internally');
            }
        }, 2000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('User activity updated' + ( new Date ));
            resolve();
        }, 1000);
    });
}

// Function to delete the last post
function deleteLastPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const deletedPost = posts.pop();
                console.log(`Post deleted: ${deletedPost.title}`);
                resolve();
            } else {
                reject('No posts to delete');
            }
        }, 1500);
    });
}

// Create a post, update user activity, and handle post deletion using Promises
createPost({ title: 'Post three', body: 'This is the Body of the Post three' })
    .then(() => {
        console.log('Post created: Post three');
        return updateLastUserActivityTime();
    })
    .then(() => {
        console.log('All promises resolved:');
        posts.forEach((post) => {
            console.log(post.title);
        });
        return deleteLastPost();
    })
    .then(() => {
        console.log('Posts after deletion:');
        posts.forEach((post) => {
            console.log(post.title);
        });
    })
    .catch((error) => {
        console.error(error);
    });
