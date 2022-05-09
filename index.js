var opcao= document.querySelector("select");
    var btn= document.querySelector("button");
        var mensagem= document.querySelector("#sz");
            var caixinha= document.querySelector("#condida");
                    var exibepara= document.querySelector("#exibemensagem");
                        var radiocod= document.querySelector("#i");
                            var radiodecod= document.querySelector("#j");
                                var chave= document.querySelector("#metodo");
                                    var rest= document.querySelector(".results");
                                        var div= document.querySelector("#myDIV")

opcao.addEventListener("change", function(acao){
    div.style.display="block";
        if(acao.target.value== "cifra"){
            caixinha.style.display= "block"
        }
            else{
                caixinha.style.display= "none"
                    }
});
btn.addEventListener("click", function(clique){
                    clique.preventDefault()
                    rest.style.display="block"
});

radiocod.addEventListener("click", function(){
                         btn.innerText= "CODIFICAR!"
});

radiodecod.addEventListener("click", function(){
                                btn.innerText="DECODIFICAR"
});

btn.addEventListener("click", function(){
    if(radiocod.checked && opcao.value=="cifra"){
        exibepara.innerText= codcifra(parseInt(chave.value), mensagem.value);
        }
            else if(radiocod.checked && opcao.value=="base"){
                exibepara.innerText= codbase(mensagem.value)
            }
                else if(radiodecod.checked && opcao.value== "cifra")
                {
                        exibepara.innerText= decodcifra(parseInt(chave.value), mensagem.value);
                    }
                        else if(radiodecod.checked && opcao.value== "base")
                        {
                                exibepara.innerText= decodbase(mensagem.value);
                            
        }
    });
//creio que irá funcionar assim, mas caso não funcione, copie e cole abaixo das funções.
        function codcifra (chave, mensagem){
            var mensagemcifrada= ""
        var largada= 0;
            for(var i=0; i<mensagem.length; i++)
            {
                    if(mensagem.charCodeAt(i)>= 65 && mensagem.charCodeAt(i)<=90)
                    {
                            largada=(((mensagem.charCodeAt(i)-65)+chave)%26)+65;
                        }
                            else if(mensagem.charCodeAt(i)>=97 && mensagem.charCodeAt(i)<= 122)
                            {
                                    largada= (((mensagem.charCodeAt(i)-97)+chave)%26)+97;
                                }
                                    else if(mensagem.charCodeAt(i)== 32)
                                    {
                                            largada= 32
                                        }
                
         mensagemcifrada+= String.fromCharCode(largada);
            }
    return mensagemcifrada;
    }

        function decodcifra (chave, mensagem){
            var mensagemcifrada= ""
        var largada= 0;
            for(var i=0; i<mensagem.length; i++)
            {
                if(mensagem.charCodeAt(i)>=65 && mensagem.charCodeAt(i)<=90)
                {
                    if((mensagem.charCodeAt(i)-65)- chave<0)
                    {
                            largada=(((mensagem.charCodeAt(i)-65)-chave+26)%26)+65;
                        }
                            else{
                                largada=(((mensagem.charCodeAt(i)-65)-chave)%26)+65;
                            }
                    }
                                else if(mensagem.charCodeAt(i)>= 97 && mensagem.charCodeAt(i)<= 122)
                                    {
                                      if((mensagem.charCodeAt(i)-97)- chave<0)
                                      {
                                          largada=(((mensagem.charCodeAt(i)-97)-chave+26)%26)+97;
                                        }
                                                else{
                                                    largada=(((mensagem.charCodeAt(i)-97)-chave)%26)+97;
                                                }
                                            }
                                            else if(mensagem.charCodeAt(i)==32)
                                            {
                                                largada= 32
                                                }
                                        mensagemcifrada+=String.fromCharCode(largada)
                                        }
                                    return mensagemcifrada;
                                }

            function codbase(mensagem)
            {
                return btoa(mensagem)
                }
                
                function decodbase(mensagem)
                {
                        return atob(mensagem)
                    }