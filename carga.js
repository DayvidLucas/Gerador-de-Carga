var opcao ="Producao"
var iniciogerar = "http://10.10.0.3:9090/disproldados/public/service/importadados/importaparcial/"
var inicioEnviar = "http://10.10.0.3:9090/disproldados/public/service/web2tc/syncdbweb2dbpda/"



// SELECAO QUAL TIPO DE CARGA IRA ENVIAR
 $("input[name='ambiente']").change(function(){
opcao = ($("input[name=ambiente]:checked").val())


    if(opcao=="Producao")
    {
        iniciogerar = "http://10.10.0.3:9090/disproldados/public/service/importadados/importaparcial/"
        inicioEnviar = "http://10.10.0.3:9090/disproldados/public/service/web2tc/syncdbweb2dbpda/"
    }
    else if(opcao=="Homologacao")
    {
        iniciogerar = "http://10.10.0.3:8080/disproldados/public/service/importadados/importaparcial/"
        inicioEnviar = "http://10.10.0.3:8080/disproldados/public/service/web2tc/syncdbweb2dbpda/"
    }

})      
var opcaoGerar=""
var cTop =  "cliente,tipopedido,condtipopedido,tipopedidocli"
var cPreco ="tabelapreco,itemtabelapreco,produto,tributacao,tributacaovlbase"
var cPolitica ="descpromocional,descmaxprodcli"
var cVerba = "verbasaldo"
var cEstoque= "estoque"
var cMeta = "meta"
var cCompleta ="estoque,tabelapreco,itemtabelapreco,produto,descquantidade,condpagtotabpreco,condicaopagamento,tabelaprecocli,cliente,parceiro,tipopedidocli"
var cFicha ="titulofinanceiro,fichafinanceira"
var cargaGerada =""
var result = []
var ultimasCargas = []
var ultimosVendedores = []
 

//GERA AS CARGAS
//Pega os value passando e envia cada tipo de carga
function gerar(txt){ 
    
    if(txt=="Cliente")
    {        
        cargaGerada= txt
        abrePopup(iniciogerar + cTop) 
        
    }
    else if(txt=="Politica"){
        cargaGerada= txt
        abrePopup(iniciogerar + cPolitica)
      
    }
    else if(txt=="Verba"){
        cargaGerada= txt
        abrePopup(iniciogerar + cVerba)
        
    }
    else if(txt=="Estoque"){
        cargaGerada= txt
        abrePopup(iniciogerar + cEstoque)
    }
    else if(txt=="Produto"){
        cargaGerada= txt
        abrePopup(iniciogerar + cPreco)
    }  
    else if(txt=="Meta"){
        cargaGerada= txt
        abrePopup(iniciogerar + cMeta)
    }
    else if(txt=="Ficha"){
        cargaGerada= txt
        abrePopup(iniciogerar + cFicha)
    }
    else if(txt=="Meta"){
        cargaGerada= txt
        abrePopup(iniciogerar + cMeta)
    }
    else if(txt=="Completa"){
        cargaGerada= txt
        abrePopup(iniciogerar + cCompleta)
    }        
}





//ENVIANDO CARGAS
function enviar(){
    var cod = $("#codVendedor").val()
    //VALIDACAO SE FOI GERADO ANTES E SE EXISTE COD DE VENDEDOR
    if(cod=="" || cod.length<1){
        alert("Você precisa inserir os códigos para enviar a carga!")
    }
    else if(cargaGerada==""){
        alert("Você precisa gerar uma carga antes de Enviar")
       // location.reload()
    }
        //INICIO DO ENVIO
        
    else{

        if(cargaGerada=="Cliente"){
            
            if(confirm("Enviar a carga gerada para o(s) código(s): " + cod)){
                ultimasCargas.push(cargaGerada)
                ultimosVendedores.push(cod)                 
                abrePopup(inicioEnviar + cTop + "/" + cod)
                cargaGerada=""                          
            }
           
        }
        else if(cargaGerada=="Politica"){
           
            if(confirm("Enviar a carga gerada para o(s) código(s): " + cod)){
                ultimasCargas.push(cargaGerada)
                ultimosVendedores.push(cod)                  
                abrePopup(inicioEnviar + cPolitica + "/" + cod)
                cargaGerada=""                
            }
                  
        }
        else if(cargaGerada=="Verba"){
            if(confirm("Enviar a carga gerada para o(s) código(s): " + cod)){
                ultimasCargas.push(cargaGerada)
                ultimosVendedores.push(cod)                 
                abrePopup(inicioEnviar + cVerba + "/" + cod)
                cargaGerada=""                         
            }   
        }
        else if(cargaGerada=="Estoque"){
            if(confirm("Enviar a carga gerada para o(s) código(s): " + cod)){
                ultimasCargas.push(cargaGerada)
                ultimosVendedores.push(cod) 
                abrePopup(inicioEnviar + cEstoque + "/" + cod)
                cargaGerada=""                           
            }                 
        }
        else if(cargaGerada=="Produto"){
            if(confirm("Enviar a carga gerada para o(s) código(s): " + cod)){
                ultimasCargas.push(cargaGerada)
                ultimosVendedores.push(cod) 
                abrePopup(inicioEnviar + cPreco + "/" + cod)
                cargaGerada=""                           
            }                  
        }
        else if(cargaGerada=="Meta"){
            if(confirm("Enviar a carga gerada para o(s) código(s): " + cod)){
                ultimasCargas.push(cargaGerada)
                ultimosVendedores.push(cod) 
                abrePopup(inicioEnviar + cMeta + "/" + cod)
                cargaGerada=""                           
            }                  
        }
        else if(cargaGerada=="Completa"){
            if(confirm("Enviar a carga gerada para o(s) código(s): " + cod)){
                ultimasCargas.push(cargaGerada)
                ultimosVendedores.push(cod) 
                abrePopup(inicioEnviar + cCompleta + "/" + cod)
                cargaGerada=""                           
            }                  
        }
        else if(cargaGerada=="Ficha"){
            if(confirm("Enviar a carga gerada para o(s) código(s): " + cod)){
                ultimasCargas.push(cargaGerada)
                ultimosVendedores.push(cod) 
                abrePopup(inicioEnviar + cFicha + "/" + cod)
                cargaGerada=""                           
            }                  
        }
        else{

         console.log(cargaGerada)   
         $(".btn-enviar").attr("target","")
         alert("Algo deu errado!")
        }
        retornaCargas()
        $("#cargaSelecionada").text("") 
    }
}

//BOTAO ENVIAR GERANDO CARGA
$("#enviar").click(function(){
    
    enviar()
})
//GERANDO E SELECIOANDO EMPRESA

    

function validar( obj , e )
{
    var tecla = ( window.event ) ? e.keyCode : e.which
    if ( tecla == 8 || tecla == 0 )
        return true
    if ( tecla != 44 && tecla < 48 || tecla > 57 )
        return false
}


//gerar carga
$("#soCarga").click(function(){
    cargaGerada = ($("#selecaoCarga option:selected").val())
    if(cargaGerada=="escolher"){
        alert("Escolha uma opção")
       
    }
    else{
        enviar()
    }
  
})

$("#soGerar").click(function(){
    cargaGerada = ($("#selecaoGerar option:selected").val())
    if(cargaGerada=="escolher"){
        alert("Escolha uma opção")
       
    }
    else{
        gerar(cargaGerada);
    }
  
})



function abrePopup(end)
{
    
	window.open(end, 'Pagina', 'STATUS=NO, TOOLBAR=NO, LOCATION=NO, DIRECTORIES=NO, RESISABLE=NO, SCROLLBARS=YES, TOP=200, LEFT=700, WIDTH=370, HEIGHT=200')
}

setInterval(() => {
    $(".timer").text(mostrarData())
}, 1000)


function mostrarData(){
    var data = new Date()
    var dia = data.getDate()
    var mes = data.getMonth() +1
    var ano = data.getFullYear()
    var hora = data.getHours()
    var min = data.getMinutes()
    var seg = data.getSeconds()

    var dataCompleto = `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
    return dataCompleto
    
}

function mostrarHora(){
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var seg = data.getSeconds()
    var horaCompleta = ` ${hora}:${min}:${seg}`
    return horaCompleta
    
}


function retornaCargas(){   
        var nomesCarga=[];
           
            ultimasCargas.forEach(x=>{
            if(x=="IGNORAR"){
                nomesCarga.push("| Preço | Produto | Tributação | Tabela |")
            }
            else{
                nomesCarga.push(x)
            }

        })
        for(i=0;i<nomesCarga.length;i++){
            result.push(`<tr>
                <td>${nomesCarga[i]}</td>
                <td>${mostrarHora()}</td>
                <td>${ultimosVendedores[i]}</td>
                <td>${opcao}</td>
                </tr>`)
        }     
        $("#dadosCarga").html(result)
        ultimasCargas=[]
        ultimosVendedores=[]
        
        $("#codVendedor").val("");
        $("#selecaoCarga").val("escolher")
        $("#selecaoGerar").val("escolher")
}


//DEFINE O QUE SERA ESCRITO QUANDO MUDAR O TIPO DE CARGA ENVIADA

function tipoGerar(){
    opcaoGerar =($("#selecaoGerar option:selected").val())
    if(opcaoGerar=="Completa"){
        $("#cargaSelecionada").text("Completa")
    }
    else if(opcaoGerar=="Cliente"){
        $("#cargaSelecionada").text("Cliente - TOP - TIPO NEG.")
    }
    else if(opcaoGerar=="Politica"){
        $("#cargaSelecionada").text("Politica de Desconto")
    }
    else if(opcaoGerar=="Verba"){
        $("#cargaSelecionada").text("Verba")
    }
    else if(opcaoGerar=="Estoque"){
        $("#cargaSelecionada").text("Estoque")
    }
    else if(opcaoGerar=="Produto"){
        $("#cargaSelecionada").text("Preço - Produto - Tributação - Tabela")
    }
    else if(opcaoGerar=="Meta"){
        $("#cargaSelecionada").text("Meta")
    }
    else if(opcaoGerar=="Ficha"){
        $("#cargaSelecionada").text("Ficha Financeira - Tit. Financeiro")
    }
    
    
    

}



function codEmpresa(){
    let empresa =($("#selecaoEmpresa option:selected").val())
    
   
    
    if(empresa==2){
        console.log(emp2)
        $("#codVendedor").val(emp2)      

    }
    else if(empresa==9){
        console.log(emp9)
        $("#codVendedor").val(emp9)
        
        
    }
    else if(empresa==4){
        $("#codVendedor").val(emp4)
        console.log(emp9)
        
        
    }
    else if(empresa==5){
        console.log(emp5)
        $("#codVendedor").val(emp5)
        
        
    }
    else if(empresa==3){
        console.log(emp3)
        $("#codVendedor").val(emp3)
        
        
    }
    else if(empresa=="escolher"){
        alert("Escolha uma empresa para enviar");
    }
    $("#enviarEmpresa").click(function(){
       // cargaGerada = ($("#selecaoCarga option:selected").val())
        enviar();
        $("#selecaoEmpresa").val("escolher")
    }) 
    empresa=""
    
    
    
        
}



