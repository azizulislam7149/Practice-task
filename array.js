console.log(32);
var fruits = ['banana', 'mango', 'coconut', 'guava', 'litch'];
console.log(fruits);
console.log(fruits[3]);
fruits[2]= 'jumbura';
console.log(fruits);
var turists = ['cox-s Bazzer','sajek vally', 'sylet'];
console.log(turists);
turists.push('bandurban');
console.log(turists);
turists.push('kuakata','sundarbon');
console.log(turists);
turists.pop()
console.log(turists);

var books=['bangla book','english book','math book'];
console.log(books)
 if(books.includes('java')){
    console.log('no need add java script book')
 }
 else{
    console.log('must be added the book')

 }

 const cheekArray = []
 console.log(Array.isArray(cheekArray));
 const cheekArray1 = '[]';
 if(!Array.isArray(cheekArray1)){
    console.log('create a new array')
 }
 else{
    console.log('no need creating a new array');
 }
 const firstArr = ['afiya', 'abdullah'];
 const secondArr = ['aziz', 'moriom']
 const addAll = firstArr.concat(' ') + secondArr.concat(' ');
 console.log(addAll);

 const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
 console.log(colors);
 const reverseColor = colors
 console.log(reverseColor.reverse());

 const numbers = [12, 98, 5, 41, 23, 78, 46];
 for(const number of numbers){
    if(number % 2 === 0){
        console.log('even number', number)
    }
 }
 let numbersi = [12, 98, 5, 41, 23, 78, 46];
 for(let i = 0 ; i< numbersi.length;i= i+2){
    console.log('for loop- even number', numbersi[i]);
 }
 var numbers1 = ['Tom', 'Tim', 'Tin', 'Tik']
 var result = '';
 for(const number of numbers1){
    console.log(number);
    const concatenate =result += number;
    console.log(result);
 }
 const statement = 'I am a hard working person'
//  const reversedStatement = statement.split(' ').reverse().join(' ');
const makeSplit = statement.split(' ');
console.log(makeSplit);
const makeReversed = makeSplit.reverse();
console.log(makeReversed);
const makeJoin =makeReversed.join(' ');
console.log(makeJoin);

