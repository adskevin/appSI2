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
        <form id="formulario">
            <input type="hidden" id="idUsuario" value="${usuario.id_usuario}" />
            <label for="txtnome">Nome:</label>
            <input type="text" id="txtnome" value="${usuario.nome_usuario ?usuario.nome_usuario :''}">
            <br />
            <label for="txtnick">Nick:</label>
            <input type="text" id="txtnick" value="${usuario.nick ?usuario.nick :''}">
            <br />
            <label for="txtsenha">Senha:</label>
            <input type="text" id="txtsenha" value="${usuario.senha ?usuario.senha :''}">
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