<?php
    include_once 'Campanha.php';
	include_once 'PDOFactory.php';

    class CampanhaDAO
    {
        public function inserir(Campanha $campanha)
        {
            $qInserir = "INSERT INTO campanha(nome_campanha, descr_campanha, id_mestre) VALUES (:nome_campanha, :descr_campanha, :id_mestre)";            
            $pdo = PDOFactory::getConexao();
            $comando = $pdo->prepare($qInserir);
            $comando->bindParam(":nome_campanha",$campanha->nome_campanha);
            $comando->bindParam(":descr_campanha",$campanha->descr_campanha);
            $comando->bindParam(":id_mestre",$campanha->id_mestre);
            $comando->execute();
            $campanha->id_campanha = $pdo->lastInsertId();
            return $campanha;
        }

        public function deletar($id_campanha)
        {
            $qDeletar = "DELETE from campanha WHERE id_campanha=:id_campanha";            
            $pdo = PDOFactory::getConexao();
            $comando = $pdo->prepare($qDeletar);
            $comando->bindParam(":id_campanha",$id_campanha);
            $comando->execute();
        }

        public function atualizar(Campanha $campanha)
        {
            $qAtualizar = "UPDATE campanha SET nome_campanha=:nome_campanha, descr_campanha=:descr_campanha, id_mestre=:id_mestre WHERE id_campanha=:id_campanha";          
            $pdo = PDOFactory::getConexao();
            $comando = $pdo->prepare($qAtualizar);
            $comando->bindParam(":nome_campanha",$campanha->nome_campanha);
            $comando->bindParam(":descr_campanha",$campanha->descr_campanha);
            $comando->bindParam(":id_mestre",$campanha->id_mestre);
            $comando->bindParam(":id_campanha",$campanha->id_campanha);
            $comando->execute();   
            return $campanha;     
        }

        public function listar()
        {
		    $query = 'SELECT * FROM campanha';
    		$pdo = PDOFactory::getConexao();
	    	$comando = $pdo->prepare($query);
    		$comando->execute();
            $campanhas=array();	
		    while($row = $comando->fetch(PDO::FETCH_OBJ)){
			    $campanhas[] = new Campanha($row->id_campanha,$row->nome_campanha,$row->descr_campanha,$row->id_mestre);
            }
            return $campanhas;
        }

        public function buscarPorId($id_campanha)
        {
 		    $query = 'SELECT * FROM campanha WHERE id_campanha=:id_campanha';		
            $pdo = PDOFactory::getConexao(); 
		    $comando = $pdo->prepare($query);
		    $comando->bindParam ('id_campanha', $id_campanha);
		    $comando->execute();
		    $result = $comando->fetch(PDO::FETCH_OBJ);
		    return new Campanha($result->id_campanha,$result->nome_campanha,$result->descr_campanha,$result->id_mestre);           
        }
    }
?>