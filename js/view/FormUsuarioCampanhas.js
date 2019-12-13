class FormUsuarioCampanhas {
    constructor(controller, seletor){
        this.controller = controller;
        this.seletor = seletor;
    }

    montarForm(usuarioCampanha){
        if(!usuarioCampanha){
            usuarioCampanha = new UsuarioCampanha();
        }
        var str = `
        <h2>Formulario de Usuario-Campanhas</h2>
        <form id="formulario">
            <input type="hidden" id="id_campanha_usuario" value="${usuarioCampanha.id_campanha_usuario}" />
            <label for="id_campanha">Campanha:</label>
            <input type="text" id="id_campanha" value="${usuarioCampanha.id_campanha ?usuarioCampanha.id_campanha :''}">
            <br />
            <label for="id_usuario">Usuario:</label>
            <input type="text" id="id_usuario" value="${usuarioCampanha.id_usuario ?usuarioCampanha.id_usuario :''}">
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
            if(!usuarioCampanha.id_campanha_usuario){
                self.controller.salvar(event);
            }
            else{
                self.controller.editar(usuarioCampanha.id_campanha_usuario,event);
            }
            //this.controller.salvar.bind(this.controller,event);
        }        
        form.onreset = function(event){
            self.controller.limpar(event);
            //this.controller.salvar.bind(this.controller,event);
        }        
    }

    limparFormulario(){
        document.querySelector("#id_campanha_usuario").value="";
        document.querySelector("#id_campanha").value="";
        document.querySelector("#id_usuario").value="";
    }

    getDataUsuarioCampanha(){
        let usuarioCampanha = new UsuarioCampanha();
        if(!document.querySelector("#id_campanha_usuario").value)
        usuarioCampanha.id_campanha_usuario = document.querySelector("#id_campanha_usuario").value;
        usuarioCampanha.id_campanha = document.querySelector("#id_campanha").value;
        usuarioCampanha.id_usuario = document.querySelector("#id_usuario").value;
        return usuarioCampanha;        
    }



}