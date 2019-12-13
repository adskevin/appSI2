class UsuarioCampanhaAPIService{
    uri = "http://localhost:8080/api/campanha_usuario";

    buscarUsuarioCampanhas(ok, erro){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            //Se finalizou a comunicacao
            if(this.readyState === 4){
                if (this.status === 200) {
                    //Vai chamar o método sucesso definido no controller
                    console.log('this.responseText');
                    console.log(this.responseText);
                    ok(JSON.parse(this.responseText));
                }
                else{
                    //Vai chamar o método trataErro definido no controller
                    erro(this.status);
                }
            }
        };
        xhttp.open("GET", this.uri , true);
        xhttp.send();
    }

    enviarUsuarioCampanha(usuarioCampanha, ok, erro){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            //Se finalizou a comunicacao
            if(this.readyState === 4){
                console.log('this.status');
                console.log(this.status);
                if (this.status === 200) {
                    ok(JSON.parse(this.responseText));
                }
                else{
                    erro(this.status);
                }
            }
        };
        xhttp.open("POST", this.uri, true);
        xhttp.setRequestHeader("Content-Type","application/json");
        xhttp.send(JSON.stringify(usuarioCampanha));
        
    }

    deletarUsuarioCampanha(id,ok,error) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                // ok(JSON.parse(this.responseText));
                ok(this.responseText);
            }
            else if(this.status !== 200){
                error(this.status);
            }
        };
        console.log('id');
        console.log(id);

        xhttp.open("DELETE", this.uri+'/'+id, true);
        xhttp.send();
    }

    buscarUsuarioCampanha(id,ok,error) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                ok(JSON.parse(this.responseText));
            }
            else if(this.status !== 200){
                error(this.status);
            }
        };
        xhttp.open("GET", this.uri+'/'+id, true);
        xhttp.send();
    }

    atualizarUsuarioCampanha(id,usuarioCampanha,ok,error) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                ok(JSON.parse(this.responseText));          
            }
            else if(this.status !== 200){
                error(this.status);
            }
        };
        xhttp.open("PUT", this.uri+'/'+id, true);
        xhttp.setRequestHeader("Content-Type","application/json")
        xhttp.send(JSON.stringify(usuarioCampanha));
    }
}