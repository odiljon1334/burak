console.log("TRAIN AREA!");
/* Project Standards:
    -Logging Standards
    -Naming Standards
    function, method, variable => camalCase
    class => PascalCase
    folder => KEBAB-CASE
    css => sake_case
*/

/* Request:
    Traditional Api
    Rest Api
    Graphql Api
    ...
*/

/* FrontEnd Development:
    Traditional FrontEnd Development => BSSR (Admin) => EJS
    Modern FrontEnd Development => SPA (Users) => REACT
*/

/* Cookies:
  request + join qiladi.
  Self Destroy => O'zini o'zi yo'q qolish hususiyatiga ega.
*/

/** Validation:
    FrontEnd validation,
    BackEnd validation,
    Database validation.
*/

// L-TASK
// Define
function reverseSentence(str: string) {
    const isReverse = str.split(' ');
    let sentence =  isReverse.map(ele => ele.split('').reverse().join(''));

    return sentence.join(' ');
}
//Call
const result = reverseSentence("we like coding!");
console.log('L-TASK:', result);

//K-TASK
// Define
// function countVowels(str: string) {
//     let isStr = "aieouAIUOE";
//     return str.split('').filter(ele => isStr.includes(ele)).length;
// }
// // Call
// const result = countVowels("string");
// console.log('K-TASK:', result);

// J-TASK
//Define
// function findLongestWord(str: string) {
//     // Bu yerda split(' ') methodi bizga str ni bo'sh joylar orqali bo'lib 
//     // bizga array qaytaradi ["I", "come", "from", "Uzbekistan"]
//     return str.split(' ').sort((str1, str2) => str2.length - str1.length)[0];
//     // sort() methodi yordamida arrayni ichidagi so'zlarni uzunligiga qarab tartiblab beryapti
//     // ["Uzbekistan", "come", "from", "I"] 
//     // Va bizni misolda arrayni ichidagi eng uzun so'z arrayni [0] chi indexga to'g'ri keladi.
// }
// // Call
// const result = findLongestWord("I come from Uzbekistan");
// console.log('J-TASK:', result);

// I-TASK
// Define
// function majorityElement(arr: number[]) {
//     return arr.sort((arr1) =>
//         arr.filter(ele => ele === arr1).length
//     )[arr.length - 1];
// }
// //Call
// const result = majorityElement([1, 2, 3, 4, 5, 4, 3, 4]);
// console.log('I-TASK:', result);
// H2-TASK
// Define 
// function getDigits(str: string) {
//     // replace methodida /\D raqam bo'lmagan barcha elementlarni olib tashlayi 
//     // replace methodida /\d esa raqamlarni olib tashlaydi
//     // replace '' bo'sh string biz hosil qilmoqchi bo'lgan qiymatni o'zini chiqarib beradi.
//     return str.replace(/\D/g, '');
// }
// const result = getDigits("m14i1t");
// console.log('H2-TASK:', result);

// H-TASK
//define
// function getPositive(arrInt: number[]) {
//     const arr = arrInt.filter(num => num > 0).join('');
//     return arr;
// }
// const result = getPositive([1, -4, 2]);
// console.log('H-TASK:', result);

// G-TASK
// Define
// function getHighestIndex(arr: number []) {
//     let index = 0;

//     for(let i = 0; i < arr.length; i++){
//         // agar arraymizni  [i]nchi indexi katta bo'lsa arrayimizni indexdan
//         // u katta emas for loop ishga tushadi.
//         // endi arrayimizni [i]nchi indexi 1ga teng u katta emas.
//         // for loop ishga tushmedi.  
//         if(arr[i] > arr[index]) {
//             // yuqorida xosil qilib olgan o'zgaruvchimizni qiymati 0 ga tenglab olgandik
//             // endi [i]ning qiymati 1 ga teng indeximizni qiymatini i ga tenglab olib uni return qilib olamiz.
//             index = i;
//         }
//     }
//     return index;
// }
//  // Call
// const result = getHighestIndex([5, 21, 12, 21, 8]);
// console.log('G-TASK:', result);