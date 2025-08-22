// interface Animal{
//     nama : string;
//     suara() : void;
// }
//Class Kubus
var Kubus = /** @class */ (function () {
    function Kubus(sisi) {
        this.sisi = sisi;
    }
    Kubus.prototype.volume = function () {
        return Math.pow(this.sisi, 3);
    };
    Kubus.prototype.luasPermukaan = function () {
        return 6 * (Math.pow(this.sisi, 2));
    };
    return Kubus;
}());
// Class Balok
var Balok = /** @class */ (function () {
    function Balok(panjang, lebar, tinggi) {
        this.panjang = panjang;
        this.lebar = lebar;
        this.tinggi = tinggi;
    }
    Balok.prototype.volume = function () {
        return this.panjang * this.lebar * this.tinggi;
    };
    Balok.prototype.luasPermukaan = function () {
        return 2 * (this.panjang * this.lebar + this.panjang * this.tinggi + this.lebar * this.tinggi);
    };
    return Balok;
}());
// Class Tabung
var Tabung = /** @class */ (function () {
    function Tabung(jarijari, tinggi) {
        this.jarijari = jarijari;
        this.tinggi = tinggi;
    }
    Tabung.prototype.volume = function () {
        return Math.PI * Math.pow(this.jarijari, 2) * this.tinggi;
    };
    Tabung.prototype.luasPermukaan = function () {
        return 2 * Math.PI * this.jarijari * (this.jarijari + this.tinggi);
    };
    return Tabung;
}());
var bangunRuangList = [
    new Kubus(5),
    new Balok(6, 7, 8),
    new Tabung(7, 9)
];
for (var _i = 0, bangunRuangList_1 = bangunRuangList; _i < bangunRuangList_1.length; _i++) {
    var br = bangunRuangList_1[_i];
    console.log("Volume:", br.volume());
    console.log("Luas Permukaan:", br.luasPermukaan());
}
