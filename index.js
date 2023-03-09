 true + 2
// 3
 true - 2
// -1
 '21' + true
// '21true'
 '21' - true
// 20
9999999999999999
// 10000000000000000
0.1+0.2 === 0.3
// false
 3 > 2
// true
 2 > 1
// true
 3 > 2 > 1
// false
 '21' - - 1
// 22
 '1' == 1
// true
 '1' === 1
// false

//------------------ Conversão estrita
console.assert(String(123) === '123', 'explicit convertion to string')
console.assert(123 + '' === '123', 'implicit convertion to string' )

console.assert(('hello' || 123) === 'hello', "|| return the first element")
console.assert(('hello' && 123) === 123, "&& return the last element")


//------------------------

const item = {
    name: 'wesley azevedo',
    age: 29,
    //string : 1 se nao for primitivo , chama o valueOf
     toString() {
         return `Name: ${this.name}, Age: ${this.age}`
     },
    // //number : 1 se nao for primitivo , chama o string
     valueOf(){
         return 007
     },
     //ele tem prioridade na parada!
     [Symbol.toPrimitive](coercionType){
        console.log('trying to convert to', coercionType)
        const types = {
            string: JSON.stringify(this),
            number: '0007'
        }

        return types[coercionType] || types.string
     }

}

// console.log('item',''.concat(item) )
// console.log('valueOf', Number(item))


//Depois de adicionar o toPrimitive

console.log('String',String(item) )
console.log('Number', Number(item))
console.log('Number', new Date(item))