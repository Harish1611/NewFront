const posts = [];
function create2ndPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST2'});
            resolve()
        }, 3000)
    }) 
}
function create3rPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST3'});
            resolve();
        }, 2000)
    }) 
}

function deletePost(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(posts.length > 0){
                const poppedElement  = posts.pop();
                resolve(poppedElement);
            } else {
                reject("ERROR: ARRAY IS EMPTY")
            }
        }, 1000)
    })
}

//Modify the lines below and use .then and .catch smartly to get the correct output.
// create2ndPost()
// deletePost()
// create3rPost()
// deletePost()
// deletePost()
// deletePost()

create2ndPost().then( () => {
    deletePost().then( (element) => {
        console.log(element.title);
        create3rPost().then( () => {
            deletePost().then( (element2) => {
                console.log(element2.title);
                deletePost().then( (element3) => {
                      console.log(element3.title);
                      deletePost().then( (element) => {
                            console.log(element);
                      
                      
                      }).catch(err => console.log(err))
                })
            })
            
        } )
        
    })
})



