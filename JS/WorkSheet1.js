// var Sample = [20 , 30, 40 ,50];

// console.log(Sample[1]);

// const harishData = [

//     {
//         id:1,
//         batch:'second'

//     }
// , {
//     id:2,
//     batch:'second'

// }

// ];

//  const mapdata = harishData.map(function(data){

//     return data.batch
// }).filter(function(datas){
//     return datas.id === 1;
// })
// console.log(mapdata);
// const harishDataJSON = JSON.stringify(harishData);
// console.log(harishDataJSON);

// function addNumbers(){

//     return 2 + 3;
// }

// console.log( addNumbers());

// const addNum = () => 4*4;

// console.log(addNum());




// function Person( fname,lname,dob){
//     this.fname = fname;
//     this.lname = lname;
//     this.dob = new Date(dob); // date object in JS
   
// }

// Person.prototype.fullName = function(){

//     return ` ${this.fname} ${this.lname}`
// }






// 

// const userList = document.querySelector('#users');
// const myForm = document.querySelector('#my-form')
// const nameInput = document.querySelector('#name')
// const emailInput = document.querySelector('#email')
// // 


// myForm.addEventListener('submit',onSubmit);


// function onSubmit(e){

// e.preventDefault();


// const lis = document.createElement('li');
// const datas = document.createTextNode(`${nameInput.value} : ${emailInput.value} `);
// lis.appendChild(datas);

// userList.appendChild(lis);





// }


class User{


    constructor ( username, email, password){

        this.username = username;
        this.email = email;
        this.password = password; 
    }


    register(){

        console.log(this.username +'is now registered');
    }
}
var hari = new User("Harish","harish@gmail.com",'Hari1611');

hari.register();