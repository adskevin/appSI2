class LinksInicio{
    constructor(controller, seletor){
        this.controller = controller;
        this.seletor = seletor;
    }
    
    exibirLinks(){
        var str=`
        <h2>Sistema de Cadastro</h2>
        <a id="usuarios" href="#">Usuários</a>
        <br>     
        <a id="campanhas" href="#">Campanhas</a>
        <br>
        <a id="usuario_campanha" href="#">Usuário_Campanha</a>
        <br>
        <a id="convite" href="#">Convite</a>
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

    }
}