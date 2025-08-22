// interface Animal{
//     nama : string;
//     suara() : void;
// }

// interface Category{
//     deskripsi : string;
// }

// class Cat implements Animal, Category{
//     nama : string;
//     deskripsi: string; 

//     constructor(nama: string, deskripsi : string){
//         this.nama = nama;
//         this.deskripsi = deskripsi;
//     }
//     suara(): void {
//         console.log(`${this.nama} ${this.deskripsi} says meoww`);
//     }
// }

// const kucing1 = new Cat("Kitty", "Mamalia");
// kucing1.suara();



// Interface Volume

interface Volume{
    volume(): number;
} 

interface LuasPermukaan{
    luasPermukaan() : number;
}

//Class Kubus
class Kubus implements Volume, LuasPermukaan{
    sisi : number;
    constructor(sisi: number){
        this.sisi= sisi;
    }
    volume() : number{
        return this.sisi **3;
    }
        luasPermukaan(): number {
            return 6 * (this.sisi **2);
        }
    }

// Class Balok
class Balok implements Volume, LuasPermukaan{
    panjang : number;
    lebar : number;
    tinggi : number;
    constructor(panjang: number, lebar: number, tinggi: number){
        this.panjang= panjang;
        this.lebar= lebar;
        this.tinggi= tinggi;
    }
    volume(): number {
        return this.panjang * this.lebar * this.tinggi;
    }
    luasPermukaan(): number {
        return 2* (this.panjang * this.lebar + this.panjang * this.tinggi + this.lebar * this.tinggi);
    }
}

// Class Tabung
class Tabung implements Volume, LuasPermukaan{
    jarijari : number;
    tinggi : number;
    constructor(jarijari : number, tinggi : number){
        this.jarijari= jarijari;
        this.tinggi= tinggi;
    }
    volume(): number {
        return Math.PI * this.jarijari **2 * this.tinggi;
    }
    luasPermukaan(): number {
        return 2 * Math.PI * this.jarijari * (this.jarijari + this.tinggi);
    }
}

let bangunRuangList : (Volume & LuasPermukaan) [] = [
    new Kubus(5),
    new Balok(6,7,8),
    new Tabung(7, 9)
];
for (let br of bangunRuangList){
    console.log("Volume:", br.volume().toFixed(2));
    console.log("Luas Permukaan:", br.luasPermukaan().toFixed(2));
}
