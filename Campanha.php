<?php
    class Campanha {
        public $id_campanha;
        public $nome_campanha;
        public $descr_campanha;
        public $id_mestre;

        function __construct($id_campanha, $nome_campanha, $descr_campanha, $id_mestre){
            $this->id_campanha = $id_campanha;
            $this->nome_campanha = $nome_campanha;
            $this->descr_campanha = $descr_campanha;
            $this->id_mestre = $id_mestre;
        }
    }
?>