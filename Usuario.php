<?php
    class Usuario {
        public $id_usuario;
        public $nome_usuario;
        public $nick;
        public $senha;

        function __construct($id_usuario, $nome_usuario, $nick, $senha){
            $this->id_usuario = $id_usuario;
            $this->nome_usuario = $nome_usuario;
            $this->nick = $nick;
            $this->senha = $senha;
        }
    }
?>