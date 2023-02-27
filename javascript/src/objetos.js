class User {
    constructor(id, name, idade){
        this.id = id;
        this.name = name;
        this.idade = idade;
    }

    call(){ console.log(` calling ${this.name} on id ${this.id} with your ${this.idade} years old `); }

}


const user01 = new User();
user01.id = 01;
user01.name = 'Jhon';
user01.idade = 23;
user01.call();


const user02 = new User();
user02.id = 02
user02.name = "Pedro"
user02.idade = 30;
user02.call();

const user03 = new User();
user03.id = 03
user03.name = "Maria"
user03.idade = 28;
user03.call();

const car01 = new Object()
car01["marca"] = "fiat";

const car02 = new Object()
car02.marca = "ford";

console.log(Object.keys(user01))
console.log(Object.keys(user02))
console.log(Object.keys(user03))
console.log(Object.keys(car01))
console.log(Object.keys(car02))

// console.log(Object.values(user01))
// console.log(Object.values(user02))
// console.log(Object.values(user03))

console.log(Object.entries(user01))
// console.log(Object.entries(user02))
// console.log(Object.entries(user03))

user01.idade = user01.idade + 1;

console.log(Object.entries(user01))

Object.defineProperty(user01, 'cpf', {
    enumerable: true,
    writable: true,
    value: '000.000.000-00'
})

user01.cpf = '111.111.111-11';

console.log(Object.entries(user01))

console.log(user01)

const empresa = "EBAC"

user01.empresa = empresa
user02.empresa = empresa
user03.empresa = "Google"

console.log(user01)
console.log(user02)
console.log(user03)

user01.filhos = { 
    filho01 : "Matheus",
    filho02 : "Carol" 
}

console.log(user01)

console.log(Object.entries(user01.filhos))