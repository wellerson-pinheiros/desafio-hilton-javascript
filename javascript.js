function calcular(){
let nub = 1

let res = window.prompt(`qual é o resultado de ${nub} + ${nub} `)

if( parseInt(res) !==  2 ){
window.alert ('erro')
}     else(
      sequencia()
)
}

function sequencia (){
      for(res = 2; res < 1000; res = res + res){
          let respostausuario = window.prompt(`qual o resultado de ${res} + ${res}`) 
             let usuarioresposta = parseInt(respostausuario)
            if(respostausuario != res + res){
                  window.alert('erro, tente denovo')

            }break;
}

}
calcular()