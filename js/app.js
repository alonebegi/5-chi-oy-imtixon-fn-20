// 5masala
//5
// function getSumBetweenNumbers(n, n1) {
//    let present = 0;
//    for (let i = n; i <= n1; i++) {
//      present += i;
//    }
//    return present;
// }
// console.log(getSumBetweenNumbers(10, 20));
// console.log(getSumBetweenNumbers(-5, 5));


// 3masala
// function isPrime(a) {
//   if (a <= 1) {
//     return false;
//   }
//   console.log(Math.sqrt(a));
//   for (let i = 2; i <= Math.sqrt(a); i++) {
//     if (a % i == 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isPrime(7));
// console.log(isPrime(12));
// console.log(Math.sqrt(25));

// 6masala
// function getElements(arr){
//     let somekode = [];
//     for(let i = 0; i < arr.length; i++){
//         let kode = arr[i];
//         if(arr.indexOf(kode,i + 1)=== -1 && arr.indexOf(kode) === i){
//             somekode.push(kode);
//         }
//     }
//     return somekode;
// }
// let arr = [1,6,9,4,3];
// console.log(getElements(arr));

// 7masala
// function removes(arr){
//     let any = [];
//     let result = [];
//     for(let i = 0; i < arr.length; i++){
//         let jovob = arr[i];
//         if(!any[jovob]){
//             any[jovob] = true;
//             result.push(jovob)
//         }
//     }
//     return result;
// }

// let arr = [1,2,4,4,7,7,9,9];
// console.log(removes(arr));

// 8masala
// let arr = [1,2,4,5,6,7,8];
// let n = 2;
// let j = 5;
// function removeIndexses(arr,n,j){
//     if(n <= 0 ,j >= arr.length, n >= j) {
//         return "fals";
//     }
//     arr.splice(n,j - n + 1);
//     return arr;
// }

// console.log(removeIndexses(arr, n , j));

// 9masala
// const book = [
//     {
//         title : "halqa",
//         author: "akrom Malik",
//         alreadyRead: false,
//     },
//     {
//         title : "dunyo ishlari",
//         author: "Hoshimov O ",
//         alreadyRead: true,
//     },
// ];
// book.forEach((book, index) =>{
//     if(book.alreadyRead){
//         console.log(`${book.author} ning " ${book.title}" oqilgan`);
//     }else{
//         console.log(`${book.author}ni "${book.title}" oqilmagan`);
//     }
// })