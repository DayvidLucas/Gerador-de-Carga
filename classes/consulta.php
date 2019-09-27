<?php
 
class Consulta{
    
    

    function buscarId($emp){        try {
        //todos os campos foram retirados para proteger os dados
            $campo= '';
            $tabela='';
            $server='';
            $database='';
            $usuario='';
            $senha='';

            $query = "SELECT $campo FROM $tabela WHERE ATIVO = 'S' AND CODEMP = $emp AND TIPVEND <> 'C'";
            $conn = new PDO(`sqlsrv:Server=$server;Database=$database', '$usuario', '$senha`);
            // set the PDO error mode to exception
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
           // echo "Connected successfully"; 
            $resultado = $conn->query($query);
            $lista = $resultado->fetchAll();
            return $lista;



            }
        catch(PDOException $e)
            {
            echo "Connection failed: " . $e->getMessage();
            }
    }




    
}

    
   
