<?php
    class Usuario_Campanha {
        public $id_campanha_usuario;
        public $id_campanha;
        public $id_usuario;

        function __construct($id_campanha_usuario, $id_campanha, $id_usuario){
            $this->id_campanha_usuario = $id_campanha_usuario;
            $this->id_campanha = $id_campanha;
            $this->id_usuario = $id_usuario;
        }
    }
?>