console.log("TRAIN AREA!");
/* Project Standards:
    -Logging Standards
    -Naming Standards
    function, method, variable => camalCase
    class => PascalCase
    folder => KEBAB-CASE
    css => sake_case
*/

/*
    Traditional Api 
    Rest Api
    Graphql Api
    ...
*/

/*
    Traditional FrontEnd Development => BSSR (Admin) => EJS
    Modern FrontEnd Development => SPA (Users) => REACT
*/


// I-TASK
// Define
function majorityElement(arr: number[]) {
    return arr.sort((arr1) =>
        arr.filter(ele => ele === arr1).length
    )[arr.length - 1];
}
//Call
const result = majorityElement([1, 2, 3, 4, 5, 4, 3, 4]);
console.log('I-TASK:', result);
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