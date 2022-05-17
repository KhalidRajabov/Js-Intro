/*2) Bir method olsun iki parametr qəbul etsin və bu parametrlərdən birincini ikinciyə bölüb nəticəni geri qaytarsın.*/

// function Divider(num1, num2){
//     return num1/num2
// }

// alert(Divider(10,5))

















/* 3) Repeat deyə bir method olsun və iki parametr qəbul etsin biri "word" digəri "count" yəni bu şəkildə "Repeat(string word, int count)" bu method göndərilən word-ü göndərilən count qədər yan-yana yazdırıb geri qaytarsın. Məsələn:
 Repeat("Ha!") 1) Ha!
 Repeat("Ha!", 2) Ha!Ha!
 Repeat("Ha!", 3) Ha!Ha!Ha!
*/

// function Repeat(w_count) {
//     /*bunu ozum yazdim, ifsiz yazmaq olur mu bilmirem, bilmek isterdim.*/
//     let haha="Ha!";
//     let a = "";
//     for (let index = 1; index <= w_count; index++) {
//         a+=haha
//         if(index==w_count){
//             console.log(a);
//         }
//     }

//     /*asaghidakini ise internetden tapdim, o bir xettde yazir.*/
//     let array = [];
//     for(let i = 1; i <= w_count; i++)
//     {
//        array.push(haha);
//     }
//     console.log(array.join(''));
// }
// Repeat(5)














/*4) Bir method olsun göndərilən "n" sayda ədədin hamsını toplayıb geri qaytarsın. */

// function Adder(arr) {
//     let a=0;
//     for (let index = 0; index < arr.length; index++) {
//         const element = arr[index];
//         a+=element;
//     }
//     return a;
// }

// console.log(Adder([1,2,3,4,5,6,7,8,9]))












