class CampanhaController {
    
    constructor(){
        this.campanhaService = new CampanhaAPIService();
        this.tabelaCampanhas = new TabelaCampanhas(this,"main");
        this.formCampanhas = new FormCampanhas(this,"main");

    }

    carregarFormulario(event){
        event.preventDefault();
        this.formCampanhas.montarForm();
    }
    carregarCampanhas() {
        const self = this;
        //definição da função que trata o buscar produtos em caso de sucesso        
        const sucesso = function(campanhas){
            console.log('self');
            console.log(self);
            self.tabelaCampanhas.montarTabela(campanhas);
        }
        // definição da função que trata o erro ao buscar produtos
        const trataErro = function(statusCode){
            console.log("Erro: "+statusCode)
        }

        this.campanhaService.buscarCampanhas(sucesso, trataErro);
        
    }

    salvar(event){
        event.preventDefault();
        var campanha = this.formCampanhas.getDataCampanha();
        this.salvarCampanha(campanha);
    }

    salvarCampanha(campanha){
        const self = this;
        const sucesso = function(campanha) {                
        console.log('campanha');
        console.log(campanha);
            self.carregarCampanhas();
            self.formCampanhas.limparFormulario();
        }

        const trataErro = function(statusCode) {
            console.log("Erro: "+statusCode)
        }

        this.campanhaService.enviarCampanha(campanha, sucesso, trataErro);
    }

    limpar(event){
        this.formCampanhas.limparFormulario();
        this.carregarCampanhas();
    }

    deletarCampanha(id, event){
        const self = this;
        this.campanhaService.deletarCampanha(id, 
            //colocar direto a funcao no parametro
            //nao precisa criar a variavel ok e erro
            function() {
                self.carregarCampanhas();
            },
            function(status) { 
                console.log(status);
            }
        );
    }

    carregaFormularioComCampanha(id, event){
        event.preventDefault();             
        
        const self = this;
        const ok = function(campanha){
            self.formCampanhas.montarForm(campanha);
        }
        const erro = function(status){
            console.log(status);
        }

        this.campanhaService.buscarCampanha(id,ok,erro);   
    }

    editar(id,event){
        event.preventDefault();
    
        let campanha = this.formCampanhas.getDataCampanha();
        
        const self = this;

        this.campanhaService.atualizarCampanha(id,campanha, 
            function() {
                self.formCampanhas.limparFormulario();
                self.carregarCampanhas();
            },
            function(status) {
                console.log(status);
            } 
        );

    }

}

