<?php
    include_once 'Convite.php';
	include_once 'PDOFactory.php';

    class ConviteDAO
    {
        public function inserir(Convite $convite)
        {
            $qInserir = "INSERT INTO convite(id_usuario, id_campanha, status) VALUES (:id_usuario,:id_campanha,:status)";            
            $pdo = PDOFactory::getConexao();
            $comando = $pdo->prepare($qInserir);
            $comando->bindParam(":id_usuario",$convite->id_usuario);
            $comando->bindParam(":id_campanha",$convite->id_campanha);
            $comando->bindParam(":status",$convite->status);
            $comando->execute();
            $convite->id_convite = $pdo->lastInsertId();
            return $convite;
        }

        public function deletar($id_convite)
        {
            $qDeletar = "DELETE from convite WHERE id_convite=:id_convite";            
            $pdo = PDOFactory::getConexao();
            $comando = $pdo->prepare($qDeletar);
            $comando->bindParam(":id_convite",$id_convite);
            $comando->execute();
        }

        public function atualizar(Convite $convite)
        {
            $qAtualizar = "UPDATE convite SET id_usuario=:id_usuario, id_campanha=:id_campanha, status=:status WHERE id_convite=:id_convite";          
            $pdo = PDOFactory::getConexao();
            $comando = $pdo->prepare($qAtualizar);
            $comando->bindParam(":id_usuario",$convite->id_usuario);
            $comando->bindParam(":id_campanha",$convite->id_campanha);
            $comando->bindParam(":status",$convite->status);
            $comando->bindParam(":id_convite",$convite->id_convite);
            $comando->execute(); 

            return $convite;
        }

        public function listar()
        {
		    $query = 'SELECT * FROM convite';
    		$pdo = PDOFactory::getConexao();
	    	$comando = $pdo->prepare($query);
    		$comando->execute();
            $usuarios=array();	
		    while($row = $comando->fetch(PDO::FETCH_OBJ)){
			    $convites[] = new Convite($row->id_convite,$row->id_usuario,$row->id_campanha,$row->status);
            }
            return $convites;
        }

        public function buscarPorId($id_convite)
        {
 		    $query = 'SELECT * FROM convite WHERE id_convite=:id_convite';		
            $pdo = PDOFactory::getConexao(); 
		    $comando = $pdo->prepare($query);
		    $comando->bindParam ('id_convite', $id_convite);
		    $comando->execute();
		    $result = $comando->fetch(PDO::FETCH_OBJ);
		    return new Convite($result->id_convite,$result->id_usuario,$result->id_campanha,$result->status);           
        }
    }
?>