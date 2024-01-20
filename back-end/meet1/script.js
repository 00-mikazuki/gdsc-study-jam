// console.log("Hello World");

// ini komentar satu baris

/*
ini
komentar
multi baris
*/

/**
 * ini
 * komentar 
 * dokumentasi
 */

// Tipe Data Primitive
// String (kata / kalimat)
// Number -> integer, float
// > integer (bilangan bulat)
// > float (bilangan desimal)
// Boolean (true, false)
// Undefined
// Null

// Tipe Data Nonprimitive
// Struktur Data

// Variable
// var
// let
// const

// let sesuatu; // Deklarasi Variable
// sesuatu = 1; // assignment
// let benda = "Tas"; // inisialisasi

// console.log(benda);
// console.log(typeof benda); // menampilkan tipe data dari variabel
// console.log("Benda ini " + benda); // concatenate
// console.log(`Benda ini ${benda}`); // template literals

// var vs let vs const
// let a;
// var a;
// console.log(a);


// Operator
// Operator Aritmatika (+, -, /, *, %, **)
// Operator Logika (and &&, or ||, not !)
// Operator Perbandingan (>, <, ==, >=, <=, !=, ===)


// Control Flow
// let a  = 15;
// let b = 16;
// if (a) {
//   console.log(a)
// }

// if (a > b) {
//   console.log("a > b");
// } else if(a < b) {
//   console.log("a < b")
// } else {
//   console.log("salah");
// }

// Operator Ternary
// let nama = (15 < 8) ? "Sabil" : "Ahmad";
// console.log(nama);

// Switch Case
// let hewan = "kucing";
// switch (hewan) {
//   case "kucing":
//     console.log("kucing")
//     break;
//   case "anjing":
//     console.log("anjing")
//     break;
//   default:
//     console.log("lainnya");
//     break;
// }


// Type Data Nonprimitive
// array = []
// object = {}

// let angka = [1,2, 3, "angka", true];
// console.log(angka[3]);

// let dataMahasiswa = {
//   nama: "Juan",
//   umur: "18"
// }

// console.log(dataMahasiswa['nama']);


// destructuring assignment

// object destructuring
// let { nama, umur } = dataMahasiswa;
// console.log(nama);
// console.log(umur);

// array destructuring
// let [a, b] = angka;
// console.log(a);
// console.log(b);


// Perulangan
// For
// While

// for(let i = 0; i < angka.length; i++) {
//   console.log(angka[i]);
// }

// let i = 0;
// while(i < angka.length) {
//   console.log(angka[i]);
//   i++;
// }


// Function


// function declaration
// sayHello();
// function sayHello() {
//   console.log("Hello");
// }

// function expression
// let hello = function(nama) {
//   return `Hello ${nama}`;
// }
// hello('Juan');

// arrow function
// let hello = (nama) => `Hello ${nama}`;
// console.log(hello('Juan'));


// challenge
let out = "";
for(let i = 1; i <= 20; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    out += "fish bash" + " ";
  } else if (i % 3 == 0) {
    out += "fish" + " ";
  } else if(i % 5 == 0) {
    out += "bash" + " ";
  } else {
    out += i + " ";
  }
} 
console.log(out);