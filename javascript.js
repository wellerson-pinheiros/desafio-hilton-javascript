function calcular(){
let nub = 1

let res = window.prompt(`qual é o resultado de ${nub} + ${nub} `)

if( res !=  2 ){
window.alert ('erro')
}     else(
      sequencia()
)
}

function sequencia (){
      for(let  res = 1; res = 2; res *2){
            window.prompt(`resultado de ${res} + ${res}`)
      }
}