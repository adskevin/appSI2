class UsuarioAPIService{
    uri = "http://localhost:8080/api/usuarios";

    buscarUsuarios(ok, erro){
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

    enviarUsuario(usuario, ok, erro){
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
        xhttp.send(JSON.stringify(usuario));
        
    }

    deletarUsuario(id_usuario,ok,error) {
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
        console.log('id_usuario');
        console.log(id_usuario);

        xhttp.open("DELETE", this.uri+'/'+id_usuario, true);
        xhttp.send();
    }

    buscarUsuario(id,ok,error) {
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

    atualizarUsuario(id,usuario,ok,error) {
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
        xhttp.send(JSON.stringify(usuario));
    }
}