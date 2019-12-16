class TabelaConvites{
    constructor(controller, seletor){
        this.controller = controller;
        this.seletor = seletor;
    }
    
    montarTabela(convites){

        var title = document.querySelector("title");
        title.innerHTML = "Convites";

        var str=`
        <h2>Tabela de Convites</h2>
        <button id="novo" class="btn btn-success">Novo Convite</button>
        <div class="d-flex justify-content-center">
        <div>
        <table class="table table-striped">
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Usuario</th>
                <th scope="col">Campanha</th>
                <th scope="col">Status</th>
                <th colspan="2" scope="col">Ação</th>
            </tr>

        ${convites.map(function(convite) {
            return `
            <tr id=${convite.id_convite}>
                <td>${convite.id_convite}</td>
                <td>${convite.id_usuario}</td>
                <td>${convite.id_campanha}</td>
                <td>${convite.status}</td>
                <td><a class="edit" href="#">Editar</a></td>
                <td><a class="delete" href="#">Deletar</a></td>
            </tr>
            `;                
        }).join("")}
        </table>
        </div>        
        </div>
        <button class="btn btn-warning go_back">Voltar</button>     
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
            const id = linkDelete.parentNode.parentNode.id;
            linkDelete.onclick = function(event){
                self.controller.deletarConvite(id);
            }
        }

        const linksEdit = document.querySelectorAll(".edit");
        for(let linkEdit of linksEdit)
        {
            const id = linkEdit.parentNode.parentNode.id;
            //Outra forma de tratar o evento (click) - nesse caso deve ter bind
            const self = this;
            linkEdit.onclick = function(event){
                self.controller.carregaFormularioComConvite(id, event);
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