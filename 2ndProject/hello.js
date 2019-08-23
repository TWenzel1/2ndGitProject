// console.log("Hello World!");
// console.log("Hello");
// let word=[1,2,3,4,5];
// word.reverse();
// word.sort();
// word.forEach(item=>console.log(item));
// for (const item of word) {
//     console.log(item);
    
// }
// let hello="hello";
// console.log(hello.length);
// let zebraOne=13;
// let zebraTwo=12;

// if (zebraOne>zebraTwo) {
//     console.log("zebraOne");
// } else if(zebraOne<zebraTwo) {
//     console.log("zebraTwo");
// }
// else{console.log("neither");}

// let Andrew=56;
// let John=56;
// let Tim=56;

// function getTallest(Andrew, John, Tim) {
//     if(Andrew>John&& Andrew>Tim){return `Andrew is the tallest at ${Andrew}.`;}
//     else if(Andrew<John&& John>Tim){return `John is the tallest at ${John}.`;}
//     else if(Tim>John&& Andrew<Tim){return `Tim is the tallest at ${Tim}.`;}
//     else{return "No one is the tallest.";}
// }
// console.log(getTallest(Andrew,John,Tim));


// let hi="some string";
// let hi1=hi.toUpperCase();
// let hello="another";
// let hello1=hello.substr(0,1);

// let hola="hola";
// let hola1=hola.length;
// let hollo="hollo";
// let hollo1=hollo.replace("o","l");
// let mojo="mojo";
// let mojo1=mojo.charAt(2);
// let modo="modo";
// let modo1=modo.concat(mojo);

// console.log(modo1);

// let jump=2;
// console.log(getjump(jump))


// function getjump(jump) {
//     let date= new Date();
//     let sec= date.getSeconds();
//     let hour=date.getHours();
//     let counter=0;
//     for (let i = hour; i < sec;i+=jump) {
//         console.log(i);
//         counter++;
//     }
//     return counter;
    
// }

function average(...numbers) {
    let total=0;
    for (const num of numbers) {
        total+= num;
    }
    return total/numbers.length;
}
console.log(average(2,6));
console.log(average(2,3,4));

function ave(...arrs){
    let word="";
    for(let arr of arrs){
        word+= arr;
    }
    return word;
}
console.log(ave("Hello ","World", "! ", 2));
let numbers=[1,2,3,4,5];
console.log(...numbers);
let numbersHigh= [6,7,8,9,10];
let allNumbers= [...numbers,...numbersHigh];
console.log(...allNumbers);








