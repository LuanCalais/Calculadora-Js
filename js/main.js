function calcular(tipo, valor){
    if(tipo === 'acao'){

        if(valor === 'c'){
            //Limpa o visor
            document.getElementById('resultado').value = ''
        }

        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
            document.getElementById('resultado').value += valor//imprime a operação com os valores digitados
        }

        if(valor === '='){
            var valor_campo = eval(document.getElementById('resultado').value)
            document.getElementById('resultado').value = valor_campo /*
                                                                      A palavra eval transforma as possíveis strings que seriam concatenadas
                                                                      em uma operação aritimética, por exemplo uma entrada de 24 + 32
                                                                      sem o eval resulta em = 2432
                                                                      com o eval resulta em = 56
                                                                     */
        }

    }else if(tipo ==='valor'){
        document.getElementById('resultado').value += valor//imprime os valores digitados
    }
}