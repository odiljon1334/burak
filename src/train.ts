console.log("TRAIN AREA!");
 // G-TASK
 // Define
function getHighestIndex(arr: number []) {
    let index = 0;

    for(let i = 0; i < arr.length; i++){
        // agar arraymizni  [i]nchi indexi katta bo'lsa arrayimizni indexdan
        // u katta emas for loop ishga tushadi.
        // endi arrayimizni [i]nchi indexi 1ga teng u katta emas.
        // for loop ishga tushmedi.  
        if(arr[i] > arr[index]) {
            // yuqorida xosil qilib olgan o'zgaruvchimizni qiymati 0 ga tenglab olgandik
            // endi [i]ning qiymati 1 ga teng indeximizni qiymatini i ga tenglab olib uni return qilib olamiz.
            index = i;
        }
    }
    return index;
}
 // Call
const result = getHighestIndex([5, 21, 12, 21, 8]);
console.log('G-TASK:', result);