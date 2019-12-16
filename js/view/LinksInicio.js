class LinksInicio{
    constructor(controller, seletor){
        this.controller = controller;
        this.seletor = seletor;
    }
    
    exibirLinks(){

        var title = document.querySelector("title");
        title.innerHTML = "Página Inicial";

        var str=`
        <h2>Sistema de Cadastro</h2>
        <br>
        <button type="button" class="btn btn-primary botoes_link_inicio" id="usuarios">Usuários</button>
        <br>
        <button type="button" class="btn btn-primary botoes_link_inicio" id="campanhas">Campanhas</button>
        <br>
        <button type="button" class="btn btn-primary botoes_link_inicio" id="usuario_campanha">Usuário-Campanhas</button>
        <br>
        <button type="button" class="btn btn-primary botoes_link_inicio" id="convite">Convites</button>
        `;

        var main = document.querySelector(this.seletor);
        main.innerHTML = str;

        const linkUsuarios = document.querySelector("#usuarios");
        linkUsuarios.onclick = function(){
            const usuarioController = new UsuarioController();
            usuarioController.carregarUsuarios();
        }

        const linkCampanhas = document.querySelector("#campanhas");
        linkCampanhas.onclick = function(){
            const campanhaController = new CampanhaController();
            campanhaController.carregarCampanhas();
        }

        const linkUsuarioCampanhas = document.querySelector("#usuario_campanha");
        linkUsuarioCampanhas.onclick = function(){
            const usuarioCampanhaController = new UsuarioCampanhaController();
            usuarioCampanhaController.carregarUsuarioCampanhas();
        }

        const linkConvites = document.querySelector("#convite");
        linkConvites.onclick = function(){
            const conviteController = new ConviteController();
            conviteController.carregarConvites();
        }

    }
}