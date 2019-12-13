<?php
    include_once 'Usuario.php';
	include_once 'PDOFactory.php';

    class UsuarioDAO
    {
        public function inserir(Usuario $usuario)
        {
            // var_dump($usuario);
            $qInserir = "INSERT INTO usuario(nome_usuario, nick, senha) VALUES (:nome_usuario,:nick,:senha)";            
            $pdo = PDOFactory::getConexao();
            $comando = $pdo->prepare($qInserir);
            $comando->bindParam(":nome_usuario",$usuario->nome_usuario);
            $comando->bindParam(":nick",$usuario->nick);
            $comando->bindParam(":senha",$usuario->senha);
            $comando->execute();
            $usuario->id_usuario = $pdo->lastInsertId();
            return $usuario;
        }

        public function deletar($id_usuario)
        {
            $qDeletar = "DELETE from usuario WHERE id_usuario=:id_usuario";            
            $pdo = PDOFactory::getConexao();
            $comando = $pdo->prepare($qDeletar);
            $comando->bindParam(":id_usuario",$id_usuario);
            $comando->execute();
        }

        public function atualizar(Usuario $usuario)
        {
            $qAtualizar = "UPDATE usuario SET nome_usuario=:nome_usuario, nick=:nick, senha=:senha WHERE id_usuario=:id_usuario";          
            $pdo = PDOFactory::getConexao();
            $comando = $pdo->prepare($qAtualizar);
            $comando->bindParam(":nome_usuario",$usuario->nome_usuario);
            $comando->bindParam(":nick",$usuario->nick);
            $comando->bindParam(":senha",$usuario->senha);
            $comando->bindParam(":id_usuario",$usuario->id_usuario);
            $comando->execute(); 

            return $usuario;
        }

        public function listar()
        {
		    $query = 'SELECT * FROM usuario';
    		$pdo = PDOFactory::getConexao();
	    	$comando = $pdo->prepare($query);
    		$comando->execute();
            $usuarios=array();	
		    while($row = $comando->fetch(PDO::FETCH_OBJ)){
			    $usuarios[] = new Usuario($row->id_usuario,$row->nome_usuario,$row->nick,$row->senha);
            }
            return $usuarios;
        }

        public function buscarPorId($id_usuario)
        {
 		    $query = 'SELECT * FROM usuario WHERE id_usuario=:id_usuario';		
            $pdo = PDOFactory::getConexao(); 
		    $comando = $pdo->prepare($query);
		    $comando->bindParam ('id_usuario', $id_usuario);
		    $comando->execute();
		    $result = $comando->fetch(PDO::FETCH_OBJ);
		    return new Usuario($result->id_usuario,$result->nome_usuario,$result->nick,$result->senha);           
        }
    }
?>