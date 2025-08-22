// simbolnya _ dan #
class Car {
    constructor(brand){
        this._carname = brand;
    }
    get carname(){
        return this._carname;
    }
    set carname(x){
        his._carname = x;
    }
}

newcar = new Car ('Pajero');
console.log(newcar.carname); // Output : Pajero
console.log(newcar._carname); // Output : Pajero


// class Car {
//     #carname; // < -- wajib deklarasi untuk private field
//     constructor(brand){
//         this.#carname = brand;
//     }
//     get carname(){
//         return this.#carname;
//     }
//     set carname(x){
//         this.#carname = x;
//     }
// }

// newcar = new Car ('Pajero');
// console.log(newcar.carname); // Output : Pajero
// console.log(newcar.#carname); // Output : Pajero
