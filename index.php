<!DOCTYPE html>
<html lang="pt">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
  <link rel="stylesheet" href="bootstrap/css/bootstrap.css">  
  <link rel="stylesheet" href="carga.css">
  <?php require_once 'classes/consulta.php' ?>

  
  <link rel="shortcut icon" type="image/x-icon" href="cargaIcon.ico">
  <title>Gerar carga </title>
</head>

<body>
  <div class="container-fluid">
    <h3><span class="timer">Starting...</span></h3>

   
    <?php 
    /*
    // 2-LUMADE 9-PET 4-COLOR 5-MINAS 3-PETMED
      $consulta = new Consulta();    
      $listaP = $consulta->buscarId(9);
      $listaL = $consulta->buscarId(2);
      $listaC = $consulta->buscarId(4);
      $listaM = $consulta->buscarId(5);
      $listaPm = $consulta->buscarId(3);    
    echo "<script>      
        var emp9='';  
        var emp2='';
        var emp4='';
        var emp5='';
        var emp3='';  
      </script>";
      foreach ($listaPm as $i => $campo) {
        $campo= 'CODVEND';
        $tamanho = sizeof($listaPm)-1;
        $result = $listaPm[$i][$campo] ;
        if($i==$tamanho){   
        echo "<script>      
        emp3 += $result;  
        </script>";
        }
        else{
        echo "<script>     
        emp3 += $result + ',';  
        </script>";
        }        
    }

      foreach ($listaM as $i => $campo) {
        $campo= 'CODVEND';
        $tamanho = sizeof($listaM)-1;
        $result = $listaM[$i][$campo] ;
        if($i==$tamanho){   
        echo "<script>      
        emp5 += $result;  
        </script>";
        }
        else{
        echo "<script>     
        emp5 += $result + ',';  
        </script>";
        }        
    }

      foreach ($listaC as $i => $campo) {
        $campo= 'CODVEND';
        $tamanho = sizeof($listaC)-1;
        $result = $listaC[$i][$campo] ;
        if($i==$tamanho){   
        echo "<script>      
        emp4 += $result;  
        </script>";
        }
        else{
        echo "<script>     
        emp4 += $result + ',';  
        </script>";
        }        
    }

      foreach ($listaL as $i => $campo) {
        $campo= 'CODVEND';
        $tamanho = sizeof($listaL)-1;
        $result = $listaL[$i][$campo] ;
        if($i==$tamanho){   
        echo "<script>      
        emp2 += $result;  
        </script>";
        }
        else{
        echo "<script>     
        emp2 += $result + ',';  
        </script>";
        }        
    } 


    foreach ($listaP as $i => $campo) {
      $campo= 'CODVEND';
      $tamanho = sizeof($listaP)-1;
      $result = $listaP[$i][$campo] ;
      if($i==$tamanho){   
        echo "<script>      
        emp9 += $result;  
      </script>";
      }
      else{
        echo "<script>     
        emp9 += $result + ',';  
      </script>";
      }        
    }    
      */
    ?> 

    <div class="container">
      <div class="row">
        <div class="col">
          <table class="table table-striped table-dark tabela-carga" style="width:400px;">
            <thead>
              <tr>
                <th scope="col" colspan="2" class="text-center">
                  <h5>Importar Cargas </h5>
                </th>
              </tr>
              <tr>
                <th scope="col" colspan="2" class="text-center">
                  <INPUT TYPE="RADIO" name="ambiente" VALUE="Producao" checked> Produção
                  <INPUT TYPE="RADIO" name="ambiente" VALUE="Homologacao"> Homologação
                </th>                
              </tr>
            </thead>
            
            <tr id="linhaDif">
                <td colspan="2">Descrição:&nbsp; &nbsp;  <spam id="cargaSelecionada"></spam></td>                
            </tr>

            <tr>
              <td>
                <label for="selecaoGerar">Carga: </label>
                <select onchange="tipoGerar()" id="selecaoGerar">
                  <option value="escolher" selected disabled hidden></option>
                  <option value="Completa">Completa</option>
                  <option value="Cliente">Cliente</option>
                  <option value="Politica">Politica</option>
                  <option value="Verba">Verba</option>
                  <option value="Estoque">Estoque</option>
                  <option value="Produto">Produto</option>
                  <option value="Meta">Meta</option>
                  <option value="Ficha">Ficha Financeira</option>
                </select> 
              </td>
              <td class="cl-center">
                <a class="btn btn-primary" id="soGerar" role="button"> Gerar</a>
              </td>
              
            </tr> 
      

            <tfoot>
              <tr>
                <td><label for="Cod">Cod. Vendedor: </label> </td>
                <td class="cl-center"><input type="text" id="codVendedor" onkeypress="return validar( this , event );"
                    placeholder="Separe por virgula" size="15"></td>

              </tr>
              <tr>
                <td>Enviar após gerar carga:</td>
                <td class="cl-center">
                  <a class="btn btn-danger btn-enviar" id="enviar" role="button">Enviar</a>
                </td>
              </tr>
              <tr>
                <td>Enviar por empresa: [OFF]
                <form action="consulta.php" method="POST">
                  <select id="selecaoEmpresa" disabled onchange="codEmpresa()">                 
                    <option value="escolher" selected disabled hidden></option>
                    <option value="2">Lumade</option>    
                    <option value="9">Disprol Pet</option>
                    <option value="4">Color</option>
                    <option value="5">Minas Pet</option>
                    <option value="3">Pet Med</option>
                  </select>
                </form>
                </td>
                <td class="cl-center">
                  <a class="btn btn-danger btn-enviar" id="enviarEmpresa" role="button">Enviar</a>
                </td>


              </tr>
              <tr>

  
                <td><label for="selecaoCarga">Enviar sem gerar: </label>
                  <select id="selecaoCarga">
                    <option value="escolher" selected disabled hidden></option>
                    <option value="Completa">Completa</option>
                    <option value="Cliente">Cliente</option>
                    <option value="Politica">Politica</option>
                    <option value="Verba">Verba</option>
                    <option value="Estoque">Estoque</option>
                    <option value="Produto">Produto</option>
                    <option value="Meta">Meta</option>
                    <option value="Ficha">Ficha Financeira</option>
                  </select> </td>
                <td class="cl-center">
                  <a class="btn btn-danger btn-enviar" id="soCarga" role="button">Enviar</a>
                </td>
              </tr>
              
            </tfoot>
          </table>
        </div>
        <div class="col">


                  <!--SEGUNDA TABELA DE HISTÓRICO-->

          <table class="table horarios" style="width:400px;">
            <thead>
              <tr>
                <td colspan="4" class="text-center">
                  <h5>Histórico de cargas</h5>
                </td>
              </tr>
              <tr>
                <th scope="col">Carga</th>
                <th scope="col">Hora</th>
                <th scope="col">Cod. Vendedor</th>
                <th scope="col">Ambiente</th>
              </tr>
            </thead>


            <tbody id="dadosCarga">

            </tbody>

            </table>

        </div>
        
      </div>
    </div>    
  </div>

  <div class="footer">
      <div class="row justify-content-center">
      <div class="col-4">
        <p class="info-footer">LUMADE COMERCIAL E DISTRIBUIDORA EIRELI 
                               </br>
                  Endereço:	Rua 17 de Outubro, 196 - Centro - Piraí - Cep 27175000
                  </p>
      </div>
      
      <div class="col-4">
        <p class="info-footer">Developed by
        <br> Dayvid Lucas da Silva Nunes</p>
      </div></div>
    </div>

</body>

<script src="bootstrap/js/jquery.min.js"></script>
<script src="carga.js"></script>

</html>