class TabelaCampanhas{
    constructor(controller, seletor){
        this.controller = controller;
        this.seletor = seletor;
    }
    
    montarTabela(campanhas){

        var title = document.querySelector("title");
        title.innerHTML = "Campanhas";

        var str=`
        <h2>Tabela de Campanhas</h2>
        <button id="novo" class="btn btn-success">Nova Campanha</button>
        <div class="d-flex justify-content-center">
        <div>
        <table class="table table-striped">
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Nome</th>
                <th scope="col">Descrição</th>
                <th scope="col">Id_Mestre</th>
                <th colspan="2" scope="col">Ação</th>
            </tr>

        ${campanhas.map(function(campanha) {
            return `
            <tr id=${campanha.id_campanha}>
                <td>${campanha.id_campanha}</td>
                <td>${campanha.nome_campanha}</td>
                <td>${campanha.descr_campanha}</td>
                <td>${campanha.id_mestre}</td>
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
                self.controller.deletarCampanha(id);
            }
        }

        const linksEdit = document.querySelectorAll(".edit");
        for(let linkEdit of linksEdit)
        {
            const id = linkEdit.parentNode.parentNode.id;
            //Outra forma de tratar o evento (click) - nesse caso deve ter bind
            const self = this;
            linkEdit.onclick = function(event){
                self.controller.carregaFormularioComCampanha(id, event);
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