const sampleArray = [469, 755, 244, 245, 758, 450, 302, 
    17, 712, 71, 456, 21, 398, 339, 882, 
    848, 179, 535, 940, 472];

//Retorna números de 1 a 25
function kata1(){
    let array = []
    for(let i = 1; i <= 25; i++){
        array.push(i)
    }
    return array
}
console.log(kata1())

//Retorna números de 25 a 1
function kata2(){
    let array = []
    for(let i = 25; i >= 1; i--){
        array.push(i)
    }
    return array
}
console.log(kata2())

//Retorna números de -1 a -25
function kata3(){
    let array = []
    for(let i = -1; i >= -25; i--){
        array.push(i)
    }
    return array
}
console.log(kata3())

//Retorna números de -25 a -1
function kata4(){
    let array = []
    for(let i = -25; i <= -1; i++){
        array.push(i)
    }
    return array
}
console.log(kata4())

//Retorna ímpares de 25 até -25
function kata5(){
    let array = []
    for(let i = 25; i >= -25; i--){
        if(i % 2 !== 0){
            array.push(i)
        }
    }
    return array
}
console.log(kata5())

//Retorna números divisíveis por 3 até 100
function kata6(){
    let array = []
    for(let i = 3; i <= 100; i++){
        if(i % 3 === 0){
            array.push(i)
        }
    }
    return array
}
console.log(kata6())

//Retorna números divisíveis por 7 até 100
function kata7(){
    let array = []
    for(let i = 7; i <= 100; i++){
        if(i % 7 === 0){
            array.push(i)
        }
    }
    return array
}
console.log(kata7())

//Retorna números divisíveis por 3 e por 7, a partir do 100
function kata8(){
    let array = []
    for(let i = 100; i >=1; i--){
        if(i % 3 === 0 || i % 7 === 0){
            array.push(i)
        }
    }
    return array
}
console.log(kata8())

//Retorna números ímpares divisíveis por 5 até 100
function kata9(){
    let array = []
    for(let i = 5; i <= 100; i++){
        if(i % 2 !== 0 && i % 5 === 0){
            array.push(i)
        }
    }
    return array
}
console.log(kata9())

//Retorna os elementos do SampleArray
function kata10(){
    return sampleArray
}
console.log(kata10())

//Retorna todos os pares de SampleArray
function kata11(){
    let newArray = []
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] % 2 === 0){
            newArray.push(sampleArray[i])
        }
    }
    return newArray
}
console.log(kata11())

//Retorna todos os impares de sampleArray
function kata12(){
    let newArray = []
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] % 2 !== 0){
            newArray.push(sampleArray[i])
        }
    }
    return newArray
}
console.log(kata12())

//Retorna números divisíveis por 8 em sampleArray
function kata13(){
    let newArray = []
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] % 8 === 0){
            newArray.push(sampleArray[i])
        }
    }
    return newArray
}
console.log(kata13())

//Retorna o quadrado de cada elemento de sampleArray
function kata14(){
    let newArray = []
    for(let i = 0; i < sampleArray.length; i++){
        newArray.push(sampleArray[i] * sampleArray[i])
    }
    return newArray
}
console.log(kata14())

//Retorna a soma dos números de 1 a 20
function kata15(){
    let total = 0
    for(let i = 0; i <= 20; i++){
        total += i
    }
    return total
}
console.log(kata15())

//Retorna a soma de todos os elementos de sampleArray
function kata16(){
    let total = 0
    for(let i = 0; i < sampleArray.length; i++){
        total += sampleArray[i]
    }
    return total
}
console.log(kata16())

//Retorna o menor elemento de sampleArray
function kata17(){
    let valorMinimo = null
    for(let i = 1; i <= sampleArray.length; i++){
        if(i === 1){
            valorMinimo = sampleArray[i]
        }
        else if(sampleArray[i] < valorMinimo){
            valorMinimo = sampleArray[i]
        }
    }
    return valorMinimo
}
console.log(kata17())

//Retorna o maior elemento de sampleArray
function kata18(){
    let valorMaximo = null
    for(let i =1; i <= sampleArray.length; i++){
        if(i === 1){
            valorMaximo = sampleArray[i]
        }
        else if(sampleArray[i] > valorMaximo){
            valorMaximo = sampleArray[i]
        }
    }
    return valorMaximo
}
console.log(kata18())