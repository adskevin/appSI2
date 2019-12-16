class FormConvites {
    constructor(controller, seletor){
        this.controller = controller;
        this.seletor = seletor;
    }

    montarForm(convite){
        if(!convite){
            convite = new Convite();
        }
        var str = `
        <h2>Formulario de Convites</h2>

        <div class="d-flex justify-content-center">
        
        <form id="formulario">
            <input type="hidden" id="id_convite" value="${convite.id_convite}" />
            <div class="form-group">
                <label for="id_usuario">Id Usuario</label>
                <input type="text" class="form-control" id="id_usuario" placeholder="Digite o nome" value="${convite.id_usuario ?convite.id_usuario :''}">
            </div>
            <div class="form-group">
                <label for="id_campanha">Id Campanha</label>
                <input type="text" class="form-control" id="id_campanha" placeholder="Digite o id da campanha" value="${convite.id_campanha ?convite.id_campanha :''}">
            </div>
            <div class="form-group">
                <label for="status">Status</label>
                <input type="text" class="form-control" id="status" placeholder="Status pode ser 0 ou 1" value="${convite.status ?convite.status :''}">
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
            if(!convite.id_convite){
                self.controller.salvar(event);
            }
            else{
                self.controller.editar(convite.id_convite,event);
            }
            //this.controller.salvar.bind(this.controller,event);
        }        
        form.onreset = function(event){
            self.controller.limpar(event);
            //this.controller.salvar.bind(this.controller,event);
        }        
    }

    limparFormulario(){
        document.querySelector("#id_convite").value="";
        document.querySelector("#id_usuario").value="";
        document.querySelector("#id_campanha").value="";
        document.querySelector("#status").value="";
    }

    getDataConvite(){
        let convite = new Convite();
        if(!document.querySelector("#id_convite").value)
        convite.id_convite = document.querySelector("#id_convite").value;
        convite.id_usuario = document.querySelector("#id_usuario").value;
        convite.id_campanha = document.querySelector("#id_campanha").value;
        convite.status = document.querySelector("#status").value;
        return convite;        
    }



}