<?php
    class Convite {
        public $id_convite;
        public $id_usuario;
        public $id_campanha;
        public $status;

        function __construct($id_convite, $id_usuario, $id_campanha, $status){
            $this->id_convite = $id_convite;
            $this->id_usuario = $id_usuario;
            $this->id_campanha = $id_campanha;
            $this->status = $status;
        }
    }
?>