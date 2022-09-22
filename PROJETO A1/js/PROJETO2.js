    var btGerar = document.querySelector("button#btGerar")
    var btverifica = document.querySelector("button#btverifica")
    var txt = document.querySelector("div#sla")
    var chute = document.querySelector("input#chute")
    var tentativatxt = document.querySelector("div#txttentativa") 
    var txtclassificacao = document.querySelector("div#classificacao")
    var chuteNum = Number(chute)
    var numeroSorteado = 0;
    var tentativas = 0;
    btverifica.addEventListener("click", verifica);
    btGerar.addEventListener("click", gerar);
        

    function gerar() {
            
        numeroSorteado =  Math.round(Math.random()*100)
        console.log(numeroSorteado)
        sla.innerHTML = 'O número mágico já foi sorteado, qual você acha que é ?'
        btGerar.disabled = true;
        btverifica.disabled = false;
    }
        
    function reiniciar() {

        btverifica.innerHTML = "Enviar chute"
        btverifica.removeEventListener("click", reiniciar);
        btverifica.addEventListener("click", verifica);
        btverifica.disabled = false;
        resultado.innerHTML = " "
        tentativatxt.innerHTML = " "
        txtclassificacao.innerHTML = " "
        chute.value = ""
        gerar();
        tentativas = 0;
        sla.innerHTML = "Outro número já foi sorteado, qual você acha que é agora? "
        }

        
    function verifica() {

        if (numeroSorteado == chute.value) {
        tentativas++
        resultado.innerHTML = 'Parabéns, você Acertou na sua '
        tentativatxt.innerHTML = tentativas +"° tentativa"
        btverifica.innerHTML = "Tentar Novamente?"
        btverifica.removeEventListener("click", verifica);
        btverifica.addEventListener("click", reiniciar);;

            switch (tentativas) {
                case 1: 
                case 2:
                    txtclassificacao.innerHTML = "Você foi classificado com 5 ESTRELAS";
                    break;
                case 3:
                case 4:
                case 5: 
                    txtclassificacao.innerHTML = "Você foi classificado com 4 ESTRELAS";
                    break;
                case 6:
                case 7:
                case 8:
                    txtclassificacao.innerHTML = "Você foi classificado com 3 ESTRELAS";
                    break;
                case 9:
                case 10:
                    txtclassificacao.innerHTML = "Você foi classificado com 2 ESTRELAS";
                    break;
                default:
                    txtclassificacao.innerHTML = "Você foi classificado com 1 ESTRELA :(";
                    break;
                
            }
            } else if (numeroSorteado > chute.value){ 
                tentativas++
                txttentativa.innerHTML = "Tentativa: " + tentativas;
                resultado.innerHTML = 'Você Errou e o numero sorteado é MAIOR que ' + chute.value
            } else if (numeroSorteado < chute.value) {
                tentativas++
                txttentativa.innerHTML = "Tentativa: " + tentativas;
                resultado.innerHTML = `Você errou e o número sorteado é MENOR que ${chute.value}`
            }
        }


    
    
