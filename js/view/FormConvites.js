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
        <form id="formulario">
            <input type="hidden" id="id_convite" value="${convite.id_convite}" />
            <label for="id_usuario">Usuario:</label>
            <input type="text" id="id_usuario" value="${convite.id_usuario ?convite.id_usuario :''}">
            <br />
            <label for="id_campanha">Campanha:</label>
            <input type="text" id="id_campanha" value="${convite.id_campanha ?convite.id_campanha :''}">
            <br />
            <label for="status">Status:</label>
            <input type="text" id="status" value="${convite.status ?convite.status :''}">
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