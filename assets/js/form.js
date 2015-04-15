/*JAVASCRIPT

    Ao clicar no botão de enviar do formulário deve aparecer os dados digitados abaixo do formulário.
    Cada vez que clica no botão aparecem os dados (acumulativo).
    Na apresentação dos dados utilize o efeito de expandir e ocultar os dados do contato.
    Os scripts devem estar em um arquivo externo.
*/

function insertParada () {
    // var e = document.createElement("p");
    // e.value= "texto";
    // document.getElementById('trashArea').innerHTML = "texto";

    var name, email, purpouse, text, checkbox;

    name = document.getElementById("nameForm").value;
    email = document.getElementById("emailForm").value;
    purpouse = document.getElementById("optForm").value;
    text = document.getElementById("textForm").value;
    checkbox = document.getElementById("checkboxForm").value;

    var c = "\<div>\n\
        name<p>"+name+"</p>\n\
        em<p>"+email+"</p>\n\
        pu<p>"+purpouse+"</p>\n\
        t<p>"+text+"</p>\n\
        ch<p>"+checkbox+"</p>\n\
    </div>";

    document.getElementById('trashArea').innerHTML += c;

}
