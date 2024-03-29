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

        <div class="d-flex justify-content-center">
        
        <form id="formulario">
            <input type="hidden" id="id_campanha_usuario" value="${usuarioCampanha.id_campanha_usuario}" />
            <div class="form-group">
                <label for="id_campanha">Id Campanha</label>
                <input type="text" class="form-control" id="id_campanha" placeholder="Digite o id da campanha" value="${usuarioCampanha.id_campanha ?usuarioCampanha.id_campanha :''}">
            </div>
            <div class="form-group">
                <label for="id_usuario">Id Usuário</label>
                <input type="text" class="form-control" id="id_usuario" placeholder="Digite o id do usuário" value="${usuarioCampanha.id_usuario ?usuarioCampanha.id_usuario :''}">
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