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
            console.log('Last User activity :' + (new Date ));
            resolve();
        }, 1000);
    });
}

// Function to delete the last post
function deleteLastPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                posts.pop();
                resolve();
            } else {
                reject('No posts to delete');
            }
        }, 1500);
    });
}

// Create a post, update user activity, and handle post deletion
 const createAndUpdatePost = async () => {
    try {
        const createPosts =  createPost({ title: 'Post three', body: 'This is the Body of the Post three' });
        const updateLastUserActivityTimes =  updateLastUserActivityTime();

        await Promise.all([createPosts, updateLastUserActivityTimes]);


        console.log('All promises resolved:');
        posts.forEach((post) => {
            console.log(post.title);
        });

        await deleteLastPost();
        console.log('Posts after deletion:');
        posts.forEach((post) => {
            console.log(post.title);
        });
    } catch (error) {
        console.error(error);
    }

    return 'Session Completed'
}

createAndUpdatePost().then((msg) => console.log(msg));
