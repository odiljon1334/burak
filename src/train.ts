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

// BSSR BURAK (Traditinal API + Rest API)
// SPA BURAK (Rest API)
// SPA NESTAR (GraphQLI API)

// VALIDATION: FRONTEND vs PIPE vs BACKEND vs DB
// VALIDATION: CLIENT vs DTO vs SERVER vs SCHEMA

// ZE-TASK:

// Shunday function yozing, uni  string parametri bolsin. String ichida takrorlangan harflarni olib tashlab qolganini qaytarsin
// MASALAN: removeDuplicate('stringg') return 'string'



function removeDuplicate(str: string): string {
    return str
      .split("")
      .filter((char, index) => str.indexOf(char) === index)
      .join("");
  }

  const result = removeDuplicate('stringg');
  console.log('ZE-TASK: =>', result);
  
  

// TASK ZD

// Shunday function yozing. Bu function o'ziga, parametr sifatida
// birinchi oddiy number, keyin yagona array va uchinchi bo'lib oddiy number
// qabul qilsin. Berilgan birinchi number parametr, arrayning tarkibida indeks bo'yicha hisoblanib,
// shu aniqlangan indeksni uchinchi number parametr bilan alashtirib, natija sifatida
// yangilangan arrayni qaytarsin.

// MASALAN: changeNumberInArray(1, [1,3,7,2], 2) return [1,2,7,2];

// Yuqoridagi misolda, birinchi raqam bu '1' va arrayning '1'chi indeksi bu 3.
// Bizning function uchinchi berilgan '2' raqamini shu '3' bilan almashtirib,
// yangilangan arrayni qaytarmoqda.

// function changeNumberInArray(num1: number, arr: number[], num2: number) {
//     arr.forEach((value, index) => {
//         if (index === num1) {
//             arr[index] = num2;
//         }
//     });
//     return arr;
// }
// // Call
// const result = changeNumberInArray(1, [1, 3, 7, 2], 2);
// console.log('TASK-ZD:', result);



// ZA-TASK:
// Shunday function yozing, u array ichidagi objectlarni “age” qiymati boyicha sortlab bersin.
// MASALAN: sortByAge([{age:23}, {age:21}, {age:13}]) return [{age:13}, {age:21}, {age:23}]

// function sortByAge(arr: { age: number }[]) {
//     return arr.slice().sort((a, b) => a.age - b.age);
// }
//
// const result = sortByAge([{age:23}, {age:21}, {age:13}]);
// console.log('result: =>', result);

// TASK ZC

// Selisy (°C) shkalasi bo'yicha raqam qabul qilib, uni
// Ferenhayt (°F) shkalisaga o'zgaritib beradigan function yozing.

// MASALAN: celsiusToFahrenheit(0) return 32;
// MASALAN: celsiusToFahrenheit(10) return 50;

// Yuqoridagi misolda, 0°C, 32°F'ga teng.
// Yoki 10 gradus Selsiy, 50 Farenhaytga teng.

// °C va °F => Tempraturani o'lchashda ishlatiladigan o'lchov birligi.

// function celsiusToFahrenheit1(celsius: number): number {
//     return (celsius * 9) / 5 + 32;
// }
// // Call
// const result1 = celsiusToFahrenheit1(0);
// console.log("ZC-TASK: =>", result1); 


// ZB-TASK:

// Shunday function yozing, uni 2 ta number parametri bolsin va berilgan sonlar orasidan random raqam return qilsin
// MASALAN: randomBetween(30, 50) return 45
// function randomBetween(min: number, max: number): number {
//     return (Math.random() * (max - min + 1) + min) | 0;
// }
// // Call
// const result = randomBetween(30, 50);
// console.log('ZB-TASK: =>', result);
  



// Z-TASK:
//
// Shunday function yozing, u sonlardan tashkil topgan array qabul qilsin. Function arraydagi juft sonlarni yigindisini qaytarsin
// MASALAN: sumEvens([1,2,3]) return 2

// function sumEvents(arr: number[]) {
//     // Buyerda bizni arrayimizni ichida tashkil topkan sonlardan
//     // juft sonlarni yigindisini saqlaymiz
//     let doubleNum = 0;
//     // for loop orqalik arr.length loop qilib i mizni sonini tenlab olamiz
//     for (let i = 0; i < arr.length; i++) {
//         // i 3ga teng va uni foiz orqalik juft sonini doubleNum ga saqlab, qaytaryapmiz.
//         if (arr[i] % 2 === 0) {
//             doubleNum += arr[i];
//         }
//     }
//     return doubleNum;
// }
// const result = sumEvents([1, 2, 3]);
// console.log("result: =>", result);


// Y-TASK:
// Shunday function yozing, uni 2 ta array parapetri bolsin. Function ikkala arrayda ham ishtirok etgan qiymatlarni bir arrayda qaytarsin
// MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]

// function findIntersection2(arr1: number[], arr2: number[]) {
//     return arr1.filter(value => arr2.includes(value));
// }
// // Call
// const result = findIntersection2([1, 2, 3], [3, 2, 0]);
// console.log('result: =>', result);

// TASK X

// Shunday function yozing, uni object va string parametrlari bo'lsin.
// Bu function, birinchi object parametri tarkibida, kalit sifatida ikkinchi string parametri
// necha marotaba takrorlanganlini sanab qaytarsin.

// Eslatma => Nested object'lar ham sanalsin

// MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

// Yuqoridagi misolda, birinchi argument object, ikkinchi argument 'model'.
// Funktsiya, shu ikkinchi argument 'model', birinchi argument object
// tarkibida kalit sifatida 2 marotaba takrorlanganligi uchun 2 soni return qilmoqda

// function countOccurrences(obj: any, str: string) {
//     let count = 0;

//     for (let key in obj) {
//         if (key === str) count++;
//         if(typeof obj[key] === 'object' && obj[key] !== null) {
//             count += countOccurrences(obj[key], str)
//         }
//     }
//     return count
// }
// // Call
// const result = countOccurrences(
//     {
//         model: 'Bugatti', 
//         steer: {
//             model: 'HANKOOK', size: 30,  
//         },
//     },
//          'model'
// );
// console.log('TASK-X: =>', result);




// W-TASK
// function chunkArr(arr: number[], numSize: number) {
//     const newArr = [];
//     for(let i = 0; i < arr.length; i += numSize) {
//       newArr.push(arr.slice(i, i + numSize));
//     }
//     return newArr;
// }
// // Call
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = chunkArr(array, 3);
// console.log('W-TASK: =>', result);


// V-TASk 
// function countChars(str: string): Record<string, number> {
//     const result: Record<string, number> = {};
    
//     str.split('').forEach(char => {
//       result[char] = (result[char] || 0) + 1;
//     });
  
//     return result;
//   }
// // Call
// const result = countChars("hello");
// console.log('V-TASK:', result);




// U-TASK 
// function sumOdds(sum: number) {
//     let count = 0;
//     for (let i = 1; i < sum; i += 2) {
//         count++;
//     }
//     return count;
// }
// // Call
// console.log(sumOdds(9));  
// console.log(sumOdds(11));

// T-TASK
// function mergeSortedArrays(num: number[], setNum: number[]) {
//     const sortNum = [...num, ...setNum].sort((a, b) => a - b);

//     return sortNum;

// }
// // Call
// const result = mergeSortedArrays([0,3,4,31], [4,6,30]);
// console.log('result:', result);

// S-TASK 
// function missingNumber(num: number[]) {
//     let arrNums = num.length * (num.length + 1) / 2;

//     let allNums = num.reduce((ele, nums) => ele + nums, 0);

//     return arrNums - allNums;
// }

// // Call
// const result = missingNumber([3, 0, 1]);
// console.log('S-TASK:', result);

// R-TASK
// Define 
// function calculate(str: string){
//     // Bu yerda split('+') methodi orqali unga shart berib
//     // stringni ichidan raqamlarni ajratib olyapmiz!
//     const getNumber = str.split('+').map(Number);

//     // Bu joyda reduce() methodi yordamida ajratilgan numberni bir biriga qo'shib olyapmiz,
//     // va hosil bo'lgan natijani qaytaryapmiz!
//     return getNumber.reduce((num, ele) => num + ele);
    
// }
// // Call
// const result = calculate("1+3");
// console.log('R-TASK:', result);

// Q-TASK
// Define
// function hasProperty(obj: object, key: string) {
//     return key in obj;
// }
// const result = hasProperty({name: "BMW", model: "M3"}, "model");
// console.log('Q-TASK:', result);

// P-TASK
// Define
// function objectToArray(obj: {[key: string]: any}) {
//     return Object.entries(obj);
// }
// // Call
// const result = objectToArray({ a: 10, b: 20 });
// console.log('P-TASK:', result); 


// O-TASK
// Define
// function calculateSumOfNumbers(values: any[]) {
//     // reduce: Har bir elementni tekshiradi
//     return values.reduce((sum, value) => {
//         // Bu yerda agar qiymat number bo'lsa, sumga qo'shiladi.
//         // Agar qiymat string, boolean yoki object bo'lsa, hisobga olinmaydi.
//         if (typeof value === 'number') {
//             return sum + value;
//         }
//         // Bu yerda esa yuqoridagi qiymatlarni qo'shib qaytaryapmiz.
//         return sum;
//     }, 0);
// }

// // Call
// const result = calculateSumOfNumbers([10, "10", {son: 10}, true, 35]);
// console.log('O-TASK:', result);

// N-TASK
// Define
// function palindromCheck(str: string) {
//     // Stringni kichik harflarga o'tkazamiz va bo'sh joylar hamda boshqa belgilarni olib tashlaymiz
//     const newPalindrom = str.toLocaleLowerCase().replace(/[^a-z0-9]/g, '');
//     //  Stringni harflarga bo'lib, teskari qilib, keyin yana stringga birlashtiramiz.
//     const newReverse = newPalindrom.split('').reverse().join('');
//     // Asl string va teskari o'qilgan stringni taqqoslaymiz. Agar ular teng bo'lsa, true qaytadi, aks holda false.
//     return newReverse === newPalindrom;
// }
// // Call
// const result = palindromCheck("son");
// console.log('N-TASK:', result);

// M-TASK
// Define
// function getSquareNumbers(arr: number[]) {
//     return arr.map(ele => ({
//         number: ele,
//         square: ele * ele
//     }));
// }

// // Call
// const result = getSquareNumbers([1, 2, 3]);
// console.log('M-TASK:', result);


// L-TASK
// Define
// function reverseSentence(str: string) {
//     const isReverse = str.split(' ');
//     let sentence =  isReverse.map(ele => ele.split('').reverse().join(''));

//     return sentence.join(' ');
// }
// //Call
// const result = reverseSentence("we like coding!");
// console.log('L-TASK:', result);

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