//1

const num = Number(prompt('Insira um número qualquer'))

if(num % 2 === 0){
    if(num % 3 === 0){
        console.log(`O número ${num} é divisível por 2 e por 3 ao mesmo tempo.`)
    }else{
        console.log(`O número ${num} é divisível apenas por 2.`)
    }
}else if(num % 3 === 0){
    console.log(`O número ${num} é divisível apenas por 3.`)
}else{
    console.log(`O número ${num} não é divisível por 2 ou por 3.`)
}


//Outra conferência menos completa

if(num % 2 === 0){
    console.log(`O número ${num} é divisível por 2.`)
}if(num % 3 === 0){
    console.log(`O número ${num} é divisível por 3.`)
}else{
    console.log(`O número ${num} não é divisível por 2 ou por 3.`)
}



//2
if(num % 2 === 0 || num % 3 === 0){
    if(num % 2 === 0 && num % 3 === 0){
        console.log(`O número ${num} é divisível por 2 e por 3 ao mesmo tempo.`)
    }else{
        console.log(`O númmero ${num} é divisível por 2 ou por 3.`)
    }
}else{
    console.log(`O número ${num} não é divisível por 2 ou por 3.`)
}
