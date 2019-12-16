class FormCampanhas {
    constructor(controller, seletor){
        this.controller = controller;
        this.seletor = seletor;
    }

    montarForm(campanha){
        if(!campanha){
            campanha = new Campanha();
        }
        var str = `
        <h2>Formulario de Campanhas</h2>
        <div class="d-flex justify-content-center">
        
        <form id="formulario">
            <input type="hidden" id="id_campanha" value="${campanha.id_campanha}" />
            <div class="form-group">
                <label for="txtnome">Nome</label>
                <input type="text" class="form-control" id="txtnome" placeholder="Digite o nome" value="${campanha.nome_campanha ?campanha.nome_campanha :''}">
            </div>
            <div class="form-group">
                <label for="txtdescr">Descrição</label>
                <input type="text" class="form-control" id="txtdescr" placeholder="Digite a descrição" value="${campanha.descr_campanha ?campanha.descr_campanha :''}">
            </div>
            <div class="form-group">
                <label for="txtidmestre">Id Mestre</label>
                <input type="text" class="form-control" id="txtidmestre" placeholder="Digite o id do mestre" value="${campanha.id_mestre ?campanha.id_mestre :''}">
            </div>
            <button type="submit" class="btn btn-success" id="btnsalvar">Salvar</button>
            <button type="reset" class="btn btn-danger">Cancelar</button>
            <br />
        </form>

        </div>
        `;
        var containerForm = document.querySelector(this.seletor);
        containerForm.innerHTML = str;

        var form = document.querySelector("#formulario");
        const self = this;
        form.onsubmit = function(event){
            if(!campanha.id_campanha){
                self.controller.salvar(event);
            }
            else{
                self.controller.editar(campanha.id_campanha,event);
            }
            //this.controller.salvar.bind(this.controller,event);
        }        
        form.onreset = function(event){
            self.controller.limpar(event);
            //this.controller.salvar.bind(this.controller,event);
        }        
    }

    limparFormulario(){
        document.querySelector("#txtnome").value="";
        document.querySelector("#txtdescr").value="";
        document.querySelector("#txtidmestre").value="";
    }

    getDataCampanha(){
        let campanha = new Campanha();
        if(!document.querySelector("#id_campanha").value)
        campanha.id_campanha = document.querySelector("#id_campanha").value;
        campanha.nome_campanha = document.querySelector("#txtnome").value;
        campanha.descr_campanha = document.querySelector("#txtdescr").value;
        campanha.id_mestre = document.querySelector("#txtidmestre").value;
        return campanha;        
    }



}