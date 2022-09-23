function NOTAS () {
    var PrimeiraNota = document.querySelector("input#Nota1")
    var SegundaNota  = document.querySelector("input#Nota2")
    var TerceiraNota = document.querySelector("input#Nota3")
    var QuartaNota   = document.querySelector("input#Nota4")
    var QuintaNota   = document.querySelector("input#Nota5")
    var SextaNota    = document.querySelector("input#Nota6")
    var res = window.document.querySelector("div#res")
    var n1  = Number(PrimeiraNota.value)
    var n2  = Number(SegundaNota.value) 
    var n3  = Number(TerceiraNota.value) 
    var n4  = Number(QuartaNota.value) 
    var n5  = Number(QuintaNota.value) 
    var n6  = Number(SextaNota.value)
    var MediaNotas= (n1 + n2 + n3 + n4 + n5 + n6) / 6

    //MAIOR NOTA

    var notas = [n1, n2, n3, n4, n5, n6]

    var maiorValor = 0

    for (var indice = 0; indice < notas.length; indice++) {
        if (maiorValor < notas[indice]){
            maiorValor = notas[indice]
        }
    }

    //MENOR NOTA
    var menorValor = 1000

    for (var indice = 0; indice < notas.length; indice++) {
    if (menorValor > notas[indice]){
    menorValor = notas[indice]
    }
    }

function verificaSituacao (nota) {
    var situacao
    if (nota >= 7) {
        situacao = "<strong>Aprovado</strong>"
    } else if (nota <=5) {
        situacao = "<strong>Reprovado</strong>"
    }else {
        situacao = "<strong>Em Exame</strong>"
    }
    return situacao
}

    // APROVADO OU REPROVADO
    situacao1 = verificaSituacao(n1)
    situacao2 = verificaSituacao(n2)
    situacao3 = verificaSituacao(n3)
    situacao4 = verificaSituacao(n4)
    situacao5 = verificaSituacao(n5)
    situacao6 = verificaSituacao(n6)

    Situacao.innerHTML=
    "O primeiro aluno está: "  + situacao1 + "<br>" +
    " O segundo aluno está: "  + situacao2 + "<br>" + 
    " O terceiro aluno está:"  + situacao3 + "<br>" + 
    " O quarto aluno está:  "  + situacao4 + "<br>" + 
    " O quinto aluno está:  "  + situacao5 + "<br>" + 
    " O sexto aluno está:   "  + situacao6
    
    MaiorNota.innerHTML = "A <strong>Maior</strong> nota digitada foi: " + maiorValor
    MenorNota.innerHTML = "A <strong>Menor</strong> nota digitada foi: " + menorValor
    res.innerHTML =  "As <strong>notas</strong> digitadas foram: " + n1 +
    ", " + n2 + ", " + n3 + ", " + n4+ ", " + n5 + ", " + n6 
    Media.innerHTML = "A <strong>Média</strong> das notas é igual a " + MediaNotas
}