// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
    drivers.push(name)
}

function destructivelyPrependDriver(name){
    drivers.unshift(name)
}

function destructivelyRemoveLastDriver(){
    drivers.pop()
}

function destructivelyRemoveFirstDriver(){
    drivers.shift()
}

function appendDriver(name){
    newDriver = [...drivers, name]
}

function prependDriver(name){
    newDriver = [name, ...drivers]
}

function removeLastDriver(){
    newDriver = drivers.slice(0, drivers.length - 1)
}

function removeFirstDriver(){
    newDriver = drivers.slice(1)
}