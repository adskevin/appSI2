const linksInicio = new LinksInicio(this,"main");

var body = document.querySelector("body");
body.onload = function () {
    linksInicio.exibirLinks();
}

