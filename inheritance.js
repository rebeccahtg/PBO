// class Parent {
//     constructor(greeting){
//         this.greting = greeting;
//     }
//     parentSay(){
//         console.log(`${this.greeting} this is the parent class.`);
//     }
// }

// // child class
// class Child extends Parent{
//     constructor(greeting, name){
//         super(greeting);
//         this.name = name;
//     }
//     childSay(){
//         console.log(`${this.greeting},  ${this.name} this is the child`);
//     }
// }

// // instantiate
// var parent1 = new Parent ("Hai");
// parent1.parentSay();



// Cara I
// Parent Class
class BagunDatar {
    luas(){
        return 0;
    }
}

// Child Class Persegi 
class Persegi extends BagunDatar{
    constructor(sisi){
        super(); //memanggil constructor parent 
        this.sisi = sisi;
    }
    luas(){
        return this.sisi * this.sisi;
    }
}

// Child Class Persegi Panjang
class PersegiPanjang extends BagunDatar{
    constructor(panjang, lebar){
        super();
        this.panjang = panjang;
        this.lebar = lebar;
    }
    luas(){
        return this.panjang * this.lebar;
    }
}

// Child Class Segitiga
class Segitiga extends BagunDatar{
    constructor(alas, tinggi){
        super();
        this.alas = alas;
        this.tinggi = tinggi;
    }
    luas(){
        return 0.5 * this.alas * this.tinggi;
    }
}

// Child Class Lingkaran
class Lingkaran extends BagunDatar{
    constructor(jarijari){
        super();
        this.jarijari = jarijari;
        
    }
    luas(){
        return 3.14 * this.jarijari * this.jarijari;
    }
}

// Child Class Jajargenjang
class Jajargenjang extends BagunDatar{
    constructor(alas, tinggi){
        super();
        this.alas = alas;
        this.tinggi = tinggi;
        
    }
    luas(){
        return this.alas * this.tinggi;
    }
}

// instantiate
let persegi = new Persegi(5);
console.log("Luas Persegi :", persegi.luas());

let persegipanjang = new PersegiPanjang(6,6);
console.log("Luas Persegi Panjang :", persegipanjang.luas());

let segitiga = new Segitiga(6,6);
console.log("Luas Segitiga :", segitiga.luas());

let lingkaran = new Lingkaran(6);
console.log("Luas Lingkaran :", lingkaran.luas());

let jajargenjang = new Jajargenjang(6,6);
console.log("Luas Persegi Panjang :", jajargenjang.luas());



// Cara II

// Import readline
// const readline = require('readline');

// // Membuat interface untuk menghubungkan input dan output
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // Parent Class
// class BagunDatar {
//     luas(){
//         return 0;
//     }
// }

// // Child Class Persegi 
// class Persegi extends BagunDatar{
//     constructor(sisi){
//         super();
//         this.sisi = sisi;
//     }
//     luas(){
//         return this.sisi * this.sisi;
//     }
// }

// // Child Class Persegi Panjang
// class PersegiPanjang extends BagunDatar{
//     constructor(panjang, lebar){
//         super();
//         this.panjang = panjang;
//         this.lebar = lebar;
//     }
//     luas(){
//         return this.panjang * this.lebar;
//     }
// }

// // Child Class Segitiga
// class Segitiga extends BagunDatar{
//     constructor(alas, tinggi){
//         super();
//         this.alas = alas;
//         this.tinggi = tinggi;
//     }
//     luas(){
//         return 0.5 * this.alas * this.tinggi;
//     }
// }

// // Child Class Lingkaran
// class Lingkaran extends BagunDatar{
//     constructor(jari){
//         super();
//         this.jari = jari;
        
//     }
//     luas(){
//         return Math.PI * this.jari * this.jari;
//     }
// }

// // Child Class Jajargenjang
// class Jajargenjang extends BagunDatar{
//     constructor(alas, tinggi){
//         super();
//         this.alas = alas;
//         this.tinggi = tinggi;
        
//     }
//     luas(){
//         return this.alas * this.tinggi;
//     }
// }

// // instantiate

// rl.question('Masukkan sisi Persegi : ', (sisi) => {
//     let persegi = new Persegi(parseFloat(sisi));
//   console.log("Luas Persegi : ", persegi.luas());


// rl.question("Masukkan panjang persegi panjang : ", (panjang) => {
//     rl.question("Masukkan lebar persegi panjang: ", (lebar) => {
//         let persegipanjang = new PersegiPanjang(parseFloat(panjang), parseFloat(lebar));
//         console.log("Luas Persegi Panjang : ", persegipanjang.luas());


// rl.question("Masukkan alas Segitiga : ", (alas) => {
//     rl.question("Masukkan tinggi Segitiga: ", (tinggi) => {
//         let segitiga = new Segitiga(parseFloat(alas), parseFloat(tinggi));
//         console.log("Luas Segitiga : ", segitiga.luas());

// rl.question('Masukkan jarijari Lingkaran : ', (jari) => {
//     let lingkaran = new Lingkaran(parseFloat(jari));
//   console.log("Luas Lingkaran : ", lingkaran.luas());


// rl.question("Masukkan alas jajargenjang : ", (alas) => {
//     rl.question("Masukkan tinggi jajargenjang: ", (tinggi) => {
//         let jajargenjang = new Jajargenjang(parseFloat(alas), parseFloat(tinggi));
//         console.log("Luas Jajargenjang : ", jajargenjang.luas());

// rl.close();
//                                     });
//                                  });
//                              });
//                          });
//                      });
//                  });
//              });
//          }); 
                

