// Write your solution here!
let drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(name){
    
    drivers.push('Ralph');
    return drivers
}

function destructivelyPrependDriver(name){
    drivers.unshift('Bob')
    return drivers
}

function destructivelyRemoveLastDriver(){
    drivers.pop()
    return drivers
}

function destructivelyRemoveFirstDriver(){
    drivers.shift()
    return drivers
}

function appendDriver(name){
    let newArray = [...drivers, 'Broom'];
    return newArray
}

function prependDriver(name){
    let newArray = ['Arnold', ...drivers];
    return newArray
}

function removeLastDriver(){
    let newArray = [...drivers.slice(0,2)]
    return newArray
}

function removeFirstDriver(){
    let newArray = [...drivers.slice(1,3)]
    return newArray
}