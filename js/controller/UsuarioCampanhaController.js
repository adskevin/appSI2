class UsuarioCampanhaController {
    
    constructor(){
        this.usuarioCampanhaService = new UsuarioCampanhaAPIService();
        this.tabelaUsuarioCampanhas = new TabelaUsuarioCampanhas(this,"main");
        this.formUsuarioCampanhas = new FormUsuarioCampanhas(this,"main");

    }

    carregarFormulario(event){
        event.preventDefault();
        this.formUsuarioCampanhas.montarForm();
    }
    carregarUsuarioCampanhas() {
        const self = this;
        //definição da função que trata o buscar produtos em caso de sucesso        
        const sucesso = function(usuarioCampanhas){
            console.log('self');
            console.log(self);
            self.tabelaUsuarioCampanhas.montarTabela(usuarioCampanhas);
        }
        // definição da função que trata o erro ao buscar produtos
        const trataErro = function(statusCode){
            console.log("Erro: "+statusCode)
        }

        this.usuarioCampanhaService.buscarUsuarioCampanhas(sucesso, trataErro);
        
    }

    salvar(event){
        event.preventDefault();
        var usuarioCampanha = this.formUsuarioCampanhas.getDataUsuarioCampanha();
        this.salvarCampanha(usuarioCampanha);
    }

    salvarCampanha(usuarioCampanha){
        const self = this;
        const sucesso = function(usuarioCampanha) {                
        console.log('usuarioCampanha');
        console.log(usuarioCampanha);
            self.carregarUsuarioCampanhas();
            self.formUsuarioCampanhas.limparFormulario();
        }

        const trataErro = function(statusCode) {
            console.log("Erro: "+statusCode)
        }

        this.usuarioCampanhaService.enviarUsuarioCampanha(usuarioCampanha, sucesso, trataErro);
    }

    limpar(event){
        this.formUsuarioCampanhas.limparFormulario();
        this.carregarUsuarioCampanhas();
    }

    deletarUsuarioCampanha(id, event){
        const self = this;
        this.usuarioCampanhaService.deletarUsuarioCampanha(id, 
            //colocar direto a funcao no parametro
            //nao precisa criar a variavel ok e erro
            function() {
                self.carregarUsuarioCampanhas();
            },
            function(status) { 
                console.log(status);
            }
        );
    }

    carregaFormularioComUsuarioCampanha(id, event){
        event.preventDefault();             
        
        const self = this;
        const ok = function(usuarioCampanha){
            self.formUsuarioCampanhas.montarForm(usuarioCampanha);
        }
        const erro = function(status){
            console.log(status);
        }

        this.usuarioCampanhaService.buscarUsuarioCampanha(id,ok,erro);   
    }

    editar(id,event){
        event.preventDefault();
    
        let usuarioCampanha = this.formUsuarioCampanhas.getDataUsuarioCampanha();
        
        const self = this;

        this.usuarioCampanhaService.atualizarUsuarioCampanha(id,usuarioCampanha, 
            function() {
                self.formUsuarioCampanhas.limparFormulario();
                self.carregarUsuarioCampanhas();
            },
            function(status) {
                console.log(status);
            } 
        );

    }

}

