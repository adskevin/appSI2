<?php
    include_once('Usuario.php');
    include_once('UsuarioDAO.php');

    // $usuario = new Usuario(0, "Kevin5", "zKewin5", "12345");

			
    $dao= new UsuarioDAO;    
    // $usuario = $dao->inserir($usuario);

    $usuario = $dao->buscarPorId(1);
    print_r($usuario);
    $usuario = new Usuario($usuario->id_usuario, "Kevin56", "zKewin56", "12345");
    $dao->atualizar($usuario);

    // $dao->deletar(5);				


    // $usuarios =  $dao->listar();	
    // print_r($usuarios);
?>