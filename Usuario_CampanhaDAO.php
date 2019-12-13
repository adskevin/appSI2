<?php
    include_once 'Usuario_Campanha.php';
	include_once 'PDOFactory.php';

    class Usuario_CampanhaDAO
    {
        public function inserir(Usuario_Campanha $usuario_campanha)
        {
            $qInserir = "INSERT INTO usuario_campanha(id_campanha_usuario, id_campanha, id_usuario) VALUES (:id_campanha_usuario, :id_campanha, :id_usuario)";            
            $pdo = PDOFactory::getConexao();
            $comando = $pdo->prepare($qInserir);
            $comando->bindParam(":id_campanha_usuario",$usuario_campanha->id_campanha_usuario);
            $comando->bindParam(":id_campanha",$usuario_campanha->id_campanha);
            $comando->bindParam(":id_usuario",$usuario_campanha->id_usuario);
            $comando->execute();
            $usuario_campanha->id_campanha_usuario = $pdo->lastInsertId();
            return $usuario_campanha;
        }

        public function deletar($id_campanha_usuario)
        {
            $qDeletar = "DELETE from usuario_campanha WHERE id_campanha_usuario=:id_campanha_usuario";
            $pdo = PDOFactory::getConexao();
            $comando = $pdo->prepare($qDeletar);
            $comando->bindParam(":id_campanha_usuario",$id_campanha_usuario);
            $comando->execute();
        }

        public function atualizar(Usuario_Campanha $usuario_campanha)
        {
            $qAtualizar = "UPDATE usuario_campanha SET id_campanha=:id_campanha, id_usuario=:id_usuario WHERE id_campanha_usuario=:id_campanha_usuario";          
            $pdo = PDOFactory::getConexao();
            $comando = $pdo->prepare($qAtualizar);
            $comando->bindParam(":id_campanha",$usuario_campanha->id_campanha);
            $comando->bindParam(":id_usuario",$usuario_campanha->id_usuario);
            $comando->bindParam(":id_campanha_usuario",$usuario_campanha->id_campanha_usuario);
            $comando->execute();
            return $usuario_campanha;    
        }

        public function listar()
        {
		    $query = 'SELECT * FROM usuario_campanha';
    		$pdo = PDOFactory::getConexao();
	    	$comando = $pdo->prepare($query);
    		$comando->execute();
            $usuario_campanhas=array();	
		    while($row = $comando->fetch(PDO::FETCH_OBJ)){
			    $usuario_campanhas[] = new Usuario_Campanha($row->id_campanha_usuario,$row->id_campanha,$row->id_usuario);
            }
            return $usuario_campanhas;
        }

        public function buscarPorId($id_campanha_usuario)
        {
 		    $query = 'SELECT * FROM usuario_campanha WHERE id_campanha_usuario=:id_campanha_usuario';		
            $pdo = PDOFactory::getConexao(); 
		    $comando = $pdo->prepare($query);
		    $comando->bindParam ('id_campanha_usuario', $id_campanha_usuario);
		    $comando->execute();
		    $result = $comando->fetch(PDO::FETCH_OBJ);
		    return new Usuario_Campanha($result->id_campanha_usuario,$result->id_campanha,$result->id_usuario);           
        }
    }
?>