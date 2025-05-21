// console.log ("Hello World");
// document . getElementById ("title") . innerHTML= "Hello world" ;
// let sum = 50+40;
// console.log(sum);
// if (sum > 100) {
//     console.log ('Expensive')
// }else {
//     console.log('cheep');
// }

// let FirstName = 'Ali';
// console.log (FirstName);
// let age = "Soriful";
// console.log (age)


// var a = 'peace be upon you';
// console.log(a);


// var a = 10;
// var a = 40;
// a = 'bangladesh';
// console.log(a);

// let b = 30;
// console.log(b);

// let fruits = 'mango';
// console . log (`${fruits} is my Fov, ${fruits} i like to eat`);



// let a = 5;
// let b = 5;
// console . log (a==b);
// console.log(a===b);
// console.log(a != b);
// console .log (a==b);
// console.log(a !==b);



// let FirstName = 'Ali';
// let FullName = 'My name is "Ali"';
// console.log(FullName);
// console.log(typeof FirstName);
// let age = 30;
// let ageNew = 30.5;
// let age2 = FinalName + 5 + 10;



// const language2 = new Array ('Html','CSS','Java Script','PHP',true,50);

// const language = ['Html','CSS','Java Script','PHP',true,50];

// language [4] = 'Tailwind CSS';
// language [5] = 'React.js';
// language [6] = 'Laravel';
// language [7] = 'Vue.js';
// language [8] = 'Bootstrip';


// console.log(language);
// console.log(language.join('*'));
// console.log(language[language.length -1]);

// const X = [1,2,3,4];
// const Y = [1,2,3,4];
// const P = [2,3,4];
// const Z = X.concat(Y,P);
// console.log(Z);



// console.log (Math.pow(3,2));
// console.log(Math.PI);
// console.log(Math.sin(30*Math.PI/180));
// console.log(Math.random().toFixed(2)*10+1);


// let upperValue = 6;
// let lowerValue = 1;
// let resultValue = Math.ceil(Math.random() * upperValue);
// console.log(resultValue);

// const FullName = 'Ali Hosen';
// const country = 'Bangladesh';
// const sen = 'I \'m form Bangladesh';
// const sen2 = "Bill get sent me \"Hi soriful\" ";
// const sen3 = "Bill get sent me \n \"Hi soriful\" ";
// console.log(sen3);
// console.log(sen2);
// console.log(sen);
// console.log(FullName,country);


// const x = 9999999999999;
// const y = 0.7;
// const z = 0.6;

// console.log((y*10 + z*10)/10);



// const myDate = new Date ();
// console.log(myDate);

// console.log(myDate.toLocaleDateString);


// let car = ['BMW','Toyota' , 'bold' , 'tesla' , 'lambargini'];
// console.log(car [0]);
// console.log(car [1]);
// console.log(car [2]);
// console.log(car [3]);
// console.log(car [4]);

// for (let i = 0; i < car.length; i++){
//     console.log(car [i]);
// }


// let car = 'bently';
// console.log(car);
// if (true) {
//     console.log(car);
//     let bike = 'R15';
//     console.log(bike);
// }

// function FirstName () {
//     let cycle = 'duronto';
//     console.log(cycle);
//     function lastName () {
//         let fruits = 'mango'
//         console.log(fruits);
//     }
//     lastName();
// }
// FirstName()


// var FirstName = 'Ali';
// console.log( FirstName );



// const greenLine = {
//     bus: 'Green Line Paribahon',
//     bCode: 'GL',
//     ticket: [],
//     book(setNumber, name){
//         console.log(
//             `${name} booked a seat on ${this.bus} ticket ${this.bCode}-${setNumber}`);
//             this.ticket.push({ ticketInfo: `${this.bCode}-${setNumber}`, name });
//     },
// };
// greenLine.book ('C1','Ali Hossain');
// greenLine.book ('C2','Rayyan Hossain');
// console.log(greenLine);



// let headTitle = document.querySelector ('h1');
// // headTitle.innerText = 'hi soriful';
// headTitle.innerText = headTitle.innerText + 'World I am Hear';

// let boxes = document.querySelectorAll ('.box');
// boxes[0].innerText = 'New text';
// boxes[1].innerText = 'New text';

// let newNum = 1;
// for (box of boxes) {
//     box.innerText = `Box No ${newNum}`; newNum++;
// }

// let learnBtn = document.createElement('button');
// learnBtn.innerText = 'Learn More';

// let heroArea = document.querySelector('.hero');
// heroArea.append(learnBtn);



// const body = document.getElementById('body');
// const button = document.querySelectorAll('li');

// const redColor = document.querySelector('.red');
// redColor.addEventListener('click', function (){
//     body.styley.backgroundColor = '#ff7675';
// });
// const greenColor = document.querySelector('.green');
// greenColor.addEventListener('click', function (){
//     body.style.backgroundColor = '#55efc4';
// });
// button.forEach(function (value){
//     value.addEventListener('click', function (){
//         let className = this.classList.value;
//         body.style.backgroundColor = className;
//         console.log(className);
//     })


// button.forEach(function (value) {
//     value.addEventListener('click', function () {
//       let className = this.classList[0];
//       let color = '';
//       if (className === 'red') {
//         color = '#ff7675';
//       }
//       if (className === 'green') {
//         color = '#55efc4';
//       }
//       if (className === 'blue') {
//         color = '#74b9ff';
//       }
//       if (className === 'pink') {
//         color = '#fd79a8';
//       }
//       if (className === 'purple') {
//         color = '#a29bfe';
//       }
//       body.style.backgroundColor = color;
//       console.log(className);
//       console.log(color);
//     });
//   });

