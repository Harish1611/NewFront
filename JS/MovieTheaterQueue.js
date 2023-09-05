// Normal Case

// console.log('Person1: show ticket');
// console.log('Person2: show ticket');


// const promiseWifeBringingTicket = new Promise( ( resolve, reject ) => {

//     setTimeout( () => {

//         resolve('ticket')
//     }, 3000)

// } );

// const getPopcorn =   promiseWifeBringingTicket.then((msg) => {
//     console.log( 'Wife: I have the tickets');
//     console.log( 'Husband: We should Go In');
//     console.log( 'Wife: Im Hungry');
//     return new Promise( (resolve, reject) => {
//         resolve( `${msg} Popcorn` );
//     })

// });

// const getDrinks = getPopcorn.then((msg) => {

   
//     console.log( 'Husband: I got some popcorn, We should Go In');
//     console.log( 'Wife: we need drinks');
//     return new Promise( (resolve, reject) => {
//         resolve( `${msg} drinks` );
//     })})

//     getDrinks.then((msg) => {
//     console.log(msg);
// })
// console.log('person4: show ticket');
// console.log('person5: show ticket');


// Instead of above mess we can write using async await 



console.log('Person1: show ticket');
console.log('Person2: show ticket');

const preMovie = async () => {

    const promiseWifeBringingTicket = new Promise ((resolve, reject) => {

        setTimeout(() => {
            resolve('ticket')
        }, 3000)
    });
    
    const getPopcorn = new Promise ((resolve, reject) => { resolve('Popcorn')});

    const getButter = new Promise ((resolve, reject) => { resolve('butter')});

    const getColdDrinks = new Promise ((resolve, reject) => { resolve('Drinks')});


//    let ticket = await promiseWifeBringingTicket;

//    console.log( `Wife: I have the ${ticket}`);
//    console.log( 'Husband: We should Go In');
//    console.log( 'Wife: Im Hungry');
   

//    let popcorn = await getPopcorn;

//    console.log( `Husband: I got some  ${popcorn}, We should Go In`);
//    console.log( 'Wife: we need butter');
  
//    let butter = await getButter;

//    console.log( `Husband: I got some  ${butter}, We should Go In`);
//    console.log( 'Wife: we need drinks');

//    let Drinks = await getColdDrinks;
   
//    console.log( `Husband: I got the  ${Drinks}, We should Go In`);

//    return ticket;



// Now using promise.all to call all the promises simultaneously   
let ticket = await promiseWifeBringingTicket;

let [popcorn,butter,drinks] = await Promise.all([getPopcorn,getButter,getColdDrinks]);

console.log(`${popcorn},${butter},${drinks}`)
return ticket;  



}

preMovie().then( (msg) => {
    console.log(`person3: shows ${msg}`)
})
console.log('person4: show ticket');
console.log('person5: show ticket');