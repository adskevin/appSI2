class TabelaUsuarios{
    constructor(controller, seletor){
        this.controller = controller;
        this.seletor = seletor;
    }
    
    montarTabela(usuarios){
        var str=`
        <h2>Tabela de Usuarios</h2>
        <a id="novo" href="#">Novo</a>
        <div id="center">
        <div class="div_table" id="tabela_usuarios">

        <table id="table">
            <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Nick</th>
                <th colspan="2">Ação</th>
            </tr>

        ${usuarios.map(function(usuario) {
            return `
            <tr id=${usuario.id_usuario}>
                <td>${usuario.id_usuario}</td>
                <td>${usuario.nome_usuario}</td>
                <td>${usuario.nick}</td>
                <td><a class="edit" href="#">Editar</a></td>
                <td><a class="delete" href="#">Deletar</a></td>
            </tr>
            `;                
        }).join("")}
        </table>
        <br>
        </div>
        </div>
        <a class="go_back" href="#">Voltar</a>  
        `;

        var tabela = document.querySelector(this.seletor);
        tabela.innerHTML = str;


        const self = this;
        const linkNovo = document.querySelector("#novo");
        linkNovo.onclick = function(event){
            self.controller.carregarFormulario(event);
        }

        const linksDelete = document.querySelectorAll(".delete");
        for(let linkDelete of linksDelete)
        {
            const id_usuario = linkDelete.parentNode.parentNode.id;
            linkDelete.onclick = function(event){
                self.controller.deletarUsuario(id_usuario);
            }
        }

        const linksEdit = document.querySelectorAll(".edit");
        for(let linkEdit of linksEdit)
        {
            const id = linkEdit.parentNode.parentNode.id;
            //Outra forma de tratar o evento (click) - nesse caso deve ter bind
            const self = this;
            linkEdit.onclick = function(event){
                self.controller.carregaFormularioComUsuario(id, event);
            }
            // linkEdit.addEventListener("click",this.controller.carregaFormularioComProduto.bind(this.controller,id));
        }

        const go_back = document.querySelector(".go_back");
        go_back.onclick = function(event){
            const linksInicio = new LinksInicio(this,"main");
            linksInicio.exibirLinks();
        };

    }

}