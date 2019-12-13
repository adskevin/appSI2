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
        <form id="formulario">
            <input type="hidden" id="id_campanha" value="${campanha.id_campanha}" />
            <label for="txtnome">Nome:</label>
            <input type="text" id="txtnome" value="${campanha.nome_campanha ?campanha.nome_campanha :''}">
            <br />
            <label for="txtdescr">Descrição:</label>
            <input type="text" id="txtdescr" value="${campanha.descr_campanha ?campanha.descr_campanha :''}">
            <br />
            <label for="txtidmestre">Id_Mestre:</label>
            <input type="text" id="txtidmestre" value="${campanha.id_mestre ?campanha.id_mestre :''}">
            <br />
            <br />
            <input type="submit" id="btnsalvar" value="Salvar">
            <input type="reset" value="Cancelar">
            <br />
        </form>
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