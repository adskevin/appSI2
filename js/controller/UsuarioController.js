class UsuarioController {
    
    constructor(){
        this.usuarioService = new UsuarioAPIService();
        this.tabelaUsuarios = new TabelaUsuarios(this,"main");
        this.formUsuarios = new FormUsuarios(this,"main");

    }

    carregarFormulario(event){
        event.preventDefault();
        this.formUsuarios.montarForm();
    }
    carregarUsuarios() {
        const self = this;
        //definição da função que trata o buscar produtos em caso de sucesso        
        const sucesso = function(usuarios){
            console.log('self');
            console.log(self);
            self.tabelaUsuarios.montarTabela(usuarios);
        }
        // definição da função que trata o erro ao buscar produtos
        const trataErro = function(statusCode){
            console.log("Erro: "+statusCode)
        }

        this.usuarioService.buscarUsuarios(sucesso, trataErro);
        
    }

    salvar(event){
        event.preventDefault();
        var usuario = this.formUsuarios.getDataUsuario();
        this.salvarUsuario(usuario);
    }

    salvarUsuario(usuario){
        const self = this;
        const sucesso = function(usuario) {                
        console.log('usuario2');
        console.log(usuario);
            self.carregarUsuarios();
            self.formUsuarios.limparFormulario();
        }

        const trataErro = function(statusCode) {
            console.log("Erro: "+statusCode)
        }

        this.usuarioService.enviarUsuario(usuario, sucesso, trataErro);
    }

    limpar(event){
        this.formUsuarios.limparFormulario();
        this.carregarUsuarios();
    }

    deletarUsuario(id_usuario, event){
        const self = this;
        this.usuarioService.deletarUsuario(id_usuario, 
            //colocar direto a funcao no parametro
            //nao precisa criar a variavel ok e erro
            function() {
                self.carregarUsuarios();
            },
            function(status) { 
                console.log(status);
            }
        );
    }

    carregaFormularioComUsuario(id, event){
        event.preventDefault();             
        
        const self = this;
        const ok = function(usuario){
            self.formUsuarios.montarForm(usuario);
        }
        const erro = function(status){
            console.log(status);
        }

        this.usuarioService.buscarUsuario(id,ok,erro);   
    }

    editar(id,event){
        event.preventDefault();
    
        let usuario = this.formUsuarios.getDataUsuario();
        
        const self = this;

        this.usuarioService.atualizarUsuario(id,usuario, 
            function() {
                self.formUsuarios.limparFormulario();
                self.carregarUsuarios();
            },
            function(status) {
                console.log(status);
            } 
        );

    }

}

