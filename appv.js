function hello() {
    console.log('Hello', this)
}

const person = {
    name: 'Alex',
    age: 29,
    sayHello: hello,
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${this.job}`)
        console.log(`Phone is ${this.phone}`)
        console.groupEnd()
    }
}

const Tom = {
    name: 'Tom',
    age: 31
}

// person.logInfo.bind(Tom, 'Frontend', '067-777-77-77')()
person.logInfo.call(Tom, 'Frontend', '067-777-77-77')

//------------
const array =[1,2,3,4,5]
function multBy(arr,n) {
  return arr.map(i => i*n)
  }
// console.log(multBy(array,5));
Array.prototype.multBy = function(n) {
    return this.map(i => i*n)   
}

console.log(array.multBy(3));
//Теперь для того, чтобы изменять эл-ты каждого массива, даже нового массива, нам не нужно вызывать новую функцию.

//Пишем свою функцию bind

function bind(context, fn) {
    return function(...args) {
        fn.apply(context, args)
    }
}

function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {name: 'Сергей', age: 22, job: 'Frontend'}
const person2 = {name: 'Анастасия', age: 19, job: 'SMM'}


bind(person1, logPerson)()
bind(person2, logPerson)()

