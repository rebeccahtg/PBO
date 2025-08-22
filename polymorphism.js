
// // Overriding
// class Vehicle{
//     sound(){
//         console.log("This vechile make a sound");
//     }
// }
// class Car extends Vehicle{
//     sound(){
//         console.log("Vrom... vrom");
//     }
// }

// class Bike extends Vehicle{
//     sound(){
//         console.log("Ring.... ring");
//     }
// }

// var vechile1 = new Vehicle();
// vechile1.sound();
// var vechile2 = new Car();
// vechile2.sound();


// // Overloading
// class TypeNumber{
//     constructor(number){
//         this.number = number;
//         if(typeof number === "string"){
//             this.keterangan = `Ini bukan angka, tapi string : ${this.number}`;
//         }else {
//             this.keterangan = `Ini adalah angka: ${number}`;
//         }
//     }
//     info(){
//         console.log(this.keterangan);
//     }
// }

// var number1 = new TypeNumber("Hallo");
// number1.info();

// Parent Class
class BagunRuang {
    volume(){
        return 0;
    }
}

// Child Kubus
class Kubus extends BagunRuang{
    constructor(sisi){
        super(); //memanggil constructor parent 
        this.sisi = sisi;
    }
    volume(){
        return this.sisi **3;
    }
}

// Child Class Balok
class Balok extends BagunRuang{
    constructor(panjang, lebar,tinggi){
        super();
        this.panjang = panjang;
        this.lebar = lebar;
        this.tinggi = tinggi;
    }
    volume(){
        return this.panjang * this.lebar * this.tinggi;
    }
}

// Child Class Tabung
class Tabung extends BagunRuang{
    constructor(jarijari, tinggi){
        super();
        this.jarijari = jarijari;
        this.tinggi = tinggi;
    }
    volume(){
        return Math.PI * this.jarijari **2 * this.tinggi;
    }
}

let BagunDatarList = [
    new Kubus(5),
    new Balok(10,2,9),
    new Tabung(8,9)
];

for (let br of BagunDatarList) {
    console.log(`Volume ${br.constructor.name}:`, br.volume());
}