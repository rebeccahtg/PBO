class Car {
    constructor(kecepatan) {
        // Validasi input kecepatan
        if (kecepatan < 0) {
            console.log("Kecepatan tidak boleh negatif!");
            this._kecepatan = 0; // Set default ke 0 agar tidak undefined
        } else {
            this._kecepatan = kecepatan;
        }
    }

    get kecepatan() {
        return this._kecepatan;
    }

    set kecepatan(jumlah) {
        if (jumlah < 0) {
            console.log("Kecepatan tidak boleh negatif!");
        } else {
            this._kecepatan = jumlah;
        }
    }

    info() {
        console.log(`Mobil memiliki kecepatan ${this.kecepatan} km/jam`);
        if (this.kecepatan > 0) {
            console.log("Mobil sedang berjalan");
        } else {
            console.log("Mobil sedang berhenti");
        }
    }
}

// Test case
let mobil = new Car(-80); // Akan menampilkan: Kecepatan tidak boleh negatif!
mobil.info();             // Akan menampilkan info kecepatan = 0
