function calculateSquare(length) {
    return `The area is: ${length**2}, The perimiter is: ${length*4}`
}

function calculateRect(length, width) {
    return `The area is: ${length*width}, The perimiter is: ${length*2+width*2}`
}

function calculateSimpleInterest(P, N, R) {
    R /= 100
    return `The Simple Interest is: ${(P*N*R)}`
}

let map = {
    square: calculateSquare,
    rectangle: calculateRect,
    interest: calculateSimpleInterest,
}

function getElement(id) {
    return document.getElementById(id).value
}

function parseSquare() {
    var length = getElement("squarelength")
    alert(calculateSquare(length))
}

function parseRect() {
    var length = getElement("rectlength")
    var height = getElement("heightlength")
    alert(calculateRect(length, height))
}

function parseSimpleInterest() {
    var P = getElement("princamount")
    var N = getElement("time")
    var R = getElement("annualrate")
    alert(calculateSimpleInterest(P,N,R))
}


