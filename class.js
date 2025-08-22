class Car{
    constructor(brand){
        this.brand = brand;
    }
}

//Instantiate the class
var mobil1 = new Car ('Pajero');
console.log(mobil1.brand);
//Instantiate second object
var mobil2 = new Car ('Toyota');
console.log(mobil2.brand);


class peserta{
    constructor(nama,umur,proglat){
        this.nama = nama;
        this.umur = umur;
        this.proglat = proglat;
    }
}

var data = new peserta('Rebecca', 24, 'Pengembangan Web');

console.log('Nama   : ',data.nama);
console.log('Umur   : ',data.umur);
console.log('Proglat   : ',data.proglat);

