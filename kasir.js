// // Class Menu
// class Menu {
//     constructor(nama,harga, stok){
//         this.nama = nama;
//         this.harga = harga;
//         this. stok = stok;
//     }
//     kurangiStok(jumlah){
//         if(jumlah > this.stok){
//             return false;
//         }
//         this.stok -=jumlah;
//         return true;
//     }
// }

// // Class Transaksi
// class Transaksi{
//     constructor(menu, jumlah){
//         this.menu = menu;
//         this.jumlah = jumlah;
//         this.pajak = 0.1;
//     }
//     hitungTotal(){
//         let subtotal = this.menu.harga * this.jumlah;
//         let total = subtotal + subtotal * this.pajak;
//         return total;
//     }
//     cetakNota(){
//         console.log("\n===== Nota =====");
//         console.log("Menu :", + this.menu.nama);
//         console.log("Jumlah :", + this.jumlah);
//         console.log("Harga : Rp", + this.menu.harga);
//         console.log("Pajak : 10%");
//         console.log("Total Bayar : Rp",  this.hitungTotal());
//         console.log("Terimakasih\n");
//     }
// }

// // Daftar menu dengan stok
// const daftarMenu =[
//     new Menu("Menu 1", 15000, 20),
//     new Menu("Menu 2", 25000, 10),
//     new Menu("Menu 3", 10000, 7),
//     new Menu("Menu 4", 35000, 25),
//     new Menu("Menu 5", 18000, 12)
// ];

// // Tampilkan daftar menu
// console.log("Daftar Menu : ");
// daftarMenu.forEach((menu, index) => {
//     console.log(`${index + 1}. ${menu.nama} - Rp${menu.harga} (Stok: ${menu.stok})`);
// });

// let pilihan = 3;
// let jumlah = 8;

// console.log("\n Anda memilih:", daftarMenu[pilihan-1].nama);
// console.log("Jumlah:", jumlah);

// // Transaksi
// let menuDipilih = daftarMenu[pilihan-1];

// if(menuDipilih.kurangiStok(jumlah)){
//     const trx = new Transaksi(menuDipilih, jumlah);
//     trx.cetakNota();
//     console.log("Sisa Stok:", menuDipilih.stok);
// }else {
//     console.log(`Maaf stok ${menuDipilih.nama} hanya tersisa ${menuDipilih.stok}.`);
// }



// ===== Parent Class (Abstraction & Encapsulation) =====
class Item {
    #nama;
    #harga;

    constructor(nama, harga) {
        this.#nama = nama;
        this.#harga = harga;
    }

    get nama() {
        return this.#nama;
    }

    get harga() {
        return this.#harga;
    }
}

// ===== Child Class (Inheritance & Encapsulation) =====
class Menu extends Item {
    #stok;

    constructor(nama, harga, stok) {
        super(nama, harga);
        this.#stok = stok;
    }

    kurangiStok(jumlah) {
        if (jumlah > this.#stok) {
            return false;
        }
        this.#stok -= jumlah;
        return true;
    }

    get stok() {
        return this.#stok;
    }
}

// ===== Polymorphism (Class Transaksi bisa cetakNota dengan cara berbeda) =====
class Transaksi {
    constructor(item, jumlah) {
        this.item = item;
        this.jumlah = jumlah;
        this.pajak = 0.1;
    }

    hitungTotal() {
        const subtotal = this.item.harga * this.jumlah;
        return subtotal + subtotal * this.pajak;
    }

    cetakNota() {
        console.log("\n===== Nota =====");
        console.log("Menu :", this.item.nama);
        console.log("Jumlah :", this.jumlah);
        console.log("Harga : Rp", this.item.harga);
        console.log("Pajak : 10%");
        console.log("Total Bayar : Rp", this.hitungTotal());
        console.log("Terimakasih\n");
    }
}

// ===== Subclass TransaksiDigital (Polymorphism) =====
class TransaksiDigital extends Transaksi {
    cetakNota() {
        super.cetakNota();
       
    }
}

// ===== Data Menu =====
const daftarMenu = [
    new Menu("Menu 1", 15000, 20),
    new Menu("Menu 2", 25000, 10),
    new Menu("Menu 3", 10000, 7),
    new Menu("Menu 4", 35000, 25),
    new Menu("Menu 5", 18000, 12)
    
];

// ===== Tampilan Menu =====
console.log("Daftar Menu:");
daftarMenu.forEach((menu, index) => {
    console.log(`${index + 1}. ${menu.nama} - Rp${menu.harga} (Stok: ${menu.stok})`);
});

// ===== Simulasi Pilihan =====
const pilihan = 2; // Mie Ayam
const jumlah = 8;
const menuDipilih = daftarMenu[pilihan - 1];

console.log(`\nAnda memilih: ${menuDipilih.nama}`);
console.log(`Jumlah: ${jumlah}`);

if (menuDipilih.kurangiStok(jumlah)) {
    const trx = new TransaksiDigital(menuDipilih, jumlah); // Polymorphism
    trx.cetakNota();
    console.log(`Sisa Stok: ${menuDipilih.stok}`);
} else {
    console.log(`Maaf, stok ${menuDipilih.nama} hanya tersisa ${menuDipilih.stok}`);
}
