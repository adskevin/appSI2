class FormUsuarios {
    constructor(controller, seletor){
        this.controller = controller;
        this.seletor = seletor;
    }

    montarForm(usuario){
        if(!usuario){
            usuario = new Usuario();
        }
        var str = `
        <h2>Formulario de Usuarios</h2>
        <div class="d-flex justify-content-center">
        
        <form id="formulario">
            <input type="hidden" id="idUsuario" value="${usuario.id_usuario}" />
            <div class="form-group">
                <label for="txtnome">Nome</label>
                <input type="text" class="form-control" id="txtnome" placeholder="Digite o nome" value="${usuario.nome_usuario ?usuario.nome_usuario :''}">
            </div>
            <div class="form-group">
                <label for="txtnick">Nick</label>
                <input type="text" class="form-control" id="txtnick" placeholder="Digite o nick" value="${usuario.nick ?usuario.nick :''}">
            </div>
            <div class="form-group">
                <label for="txtsenha">Senha</label>
                <input type="text" class="form-control" id="txtsenha" placeholder="Digite a senha" value="${usuario.senha ?usuario.senha :''}">
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
            if(!usuario.id_usuario){
                self.controller.salvar(event);
            }
            else{
                self.controller.editar(usuario.id_usuario,event);
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
        document.querySelector("#txtnick").value="";
        document.querySelector("#txtsenha").value="";
    }

    getDataUsuario(){
        let usuario = new Usuario();
        if(!document.querySelector("#idUsuario").value)
            usuario.id_usuario = document.querySelector("#idUsuario").value;
        usuario.nome_usuario = document.querySelector("#txtnome").value;
        usuario.nick = document.querySelector("#txtnick").value;
        usuario.senha = document.querySelector("#txtsenha").value;
        return usuario;        
    }



}