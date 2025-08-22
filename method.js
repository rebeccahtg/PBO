// class Car {
//     // method 
//     sound() {
//         return "vromm... bip.. bip"
//     }
// }

// // instantiate
// var mobil1 = new Car();
// console.log(mobil1.sound());

// method dengan parameter
// class Car{
//     // method
//     sound(x){
//         return x + ", suara mobil saya vromm... bip.. bip";
//     }
// }

// // instantiate
// var mobil2 = new Car();
// console.log(mobil2.sound("hello"));

// tipe data, control program di class

// class Car {
//     constructor(kecepatan){
//         this.kecepatan = kecepatan;
//     }

//     get kecepatan(){
//         return this._kecepatan;
//     }

//     set kecepatan(jumlah){
//         if(jumlah < 0){
//             throw new Error('Kecepatan tidak boleh negatif!');
//         }
//         this._kecepatan = jumlah;
//     }

//     info(){
//         console.log(`Mobil memiliki kecepatan ${this.kecepatan} km/jam`);
//         if (this.kecepatan > 0){
//             console.log('Mobil sedang berjalan');
//         } else {
//             console.log('Mobil sedang berhenti');
//         }
//     }
// }

// // Instansiasi
// try {
//     var mobil = new Car(0);  // Akan melempar error
//     mobil.info();              // Tidak akan dijalankan karena error
// } catch (error) {
//     console.log('Kecepatan tidak boleh negatif!');
// }




// class Car {
//     constructor(kecepatan){
//         this.kecepatan = kecepatan;
//     }
//     get kecepatan(){
//         return this._kecepatan; //_ artinya private dalam js
//     }
//     set kecepatan(jumlah){
//         if(jumlah < 0){
//             throw new Error('Kecepatan tidak boleh negatif!');
//         }
//         this._kecepatan = jumlah;
//     }
//     info(){
//         console.log(`Mobil memiliki kecepatan ${this.kecepatan} km/jam`);
//         if (this.kecepatan > 0){
//             console.log('Mobil sedang berjalan');
//         }else {
//             console.log('Mobil sedang berhenti');
//         }
//     }
// }

// // // // instantiate
// try{
//     var mobil = new Car(-80);
//     mobil.info();
// }catch (error){
//     console.log('Kecepatan tidak boleh negatif');
// }
// var mobil = new Car(-60);
// if (mobil.kecepatan >=0){
//     mobil.info();
// }
// mobil.info();

class peserta {
    constructor(nama,umur,proglat, nilai, grade){
         this.nama = nama;
        this.umur = umur;
        this.proglat = proglat;
        this.grade = grade;
        this.nilai = nilai;
    }
    get grade(){
        return this._grade;
    }
    set grade(nilai){
        if(nilai > 100){
            throw new Error('Nilai harus 0-100');
        }else {
            this._grade = nilai;
        }
    }
    Grade(){
        if (this.grade >=89){
            return "A";
        }else if (this.grade >=79){
            return "B";
        }else if (this.grade >=69){
            return "C";
        }else if (this.grade >=59){
            return "D";
        }else {
            return "Tidak Lulus"
        }
        
    }
    info(){
console.log(`Nama   : ${this.nama}`);
console.log(`Umur   : ${this.umur}`);
console.log(`Proglat   : ${this.proglat}`);
console.log(`Nilai   : ${this.nilai}`);
console.log(`Grade  : ${this.Grade()}`);
    }
   
}
try{
    var data = new peserta ('Rebecca', 24, 'Pengembangan Web', 80);
    data.info();
}catch (error){
    console.error("Gagal memuat data :", error.message);
}


