class ConviteController {
    
    constructor(){
        this.conviteService = new ConviteAPIService();
        this.tabelaConvites = new TabelaConvites(this,"main");
        this.formConvites = new FormConvites(this,"main");

    }

    carregarFormulario(event){
        event.preventDefault();
        this.formConvites.montarForm();
    }
    carregarConvites() {
        const self = this;
        //definição da função que trata o buscar produtos em caso de sucesso        
        const sucesso = function(convites){
            console.log('self');
            console.log(self);
            self.tabelaConvites.montarTabela(convites);
        }
        // definição da função que trata o erro ao buscar produtos
        const trataErro = function(statusCode){
            console.log("Erro: "+statusCode)
        }

        this.conviteService.buscarConvites(sucesso, trataErro);
        
    }

    salvar(event){
        event.preventDefault();
        var convite = this.formConvites.getDataConvite();
        this.salvarConvite(convite);
    }

    salvarConvite(convite){
        const self = this;
        const sucesso = function(convite) {                
        console.log('convite');
        console.log(convite);
            self.carregarConvites();
            self.formCampanhas.limparFormulario();
        }

        const trataErro = function(statusCode) {
            console.log("Erro: "+statusCode)
        }

        this.conviteService.enviarConvite(convite, sucesso, trataErro);
    }

    limpar(event){
        this.formConvites.limparFormulario();
        this.carregarConvites();
    }

    deletarConvite(id, event){
        const self = this;
        this.conviteService.deletarConvite(id, 
            //colocar direto a funcao no parametro
            //nao precisa criar a variavel ok e erro
            function() {
                self.carregarConvites();
            },
            function(status) { 
                console.log(status);
            }
        );
    }

    carregaFormularioComConvite(id, event){
        event.preventDefault();             
        
        const self = this;
        const ok = function(convite){
            self.formConvites.montarForm(convite);
        }
        const erro = function(status){
            console.log(status);
        }

        this.conviteService.buscarConvite(id,ok,erro);   
    }

    editar(id,event){
        event.preventDefault();
    
        let convite = this.formConvites.getDataConvite();
        
        const self = this;

        this.conviteService.atualizarConvite(id,convite, 
            function() {
                self.formConvites.limparFormulario();
                self.carregarConvites();
            },
            function(status) {
                console.log(status);
            } 
        );

    }

}

