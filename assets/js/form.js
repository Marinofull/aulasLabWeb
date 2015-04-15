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
    purpouse = document.getElementById("optForm").ELEMENT_NODE;
    text = document.getElementById("textForm").value;
    checkbox = document.getElementById("checkboxForm").value;

    purpouseString = translatePurpouse(purpouse);
    checkboxString = translateCheckbox(checkbox);

    var newChild = "\<div id=\"elementResult\">\n\
        <div id=\"elementDivTittle\" >\n\
            <p id=\"elementResultTitles\" ><span>Nome: </span>"+name+"</p>\n\
            <p id=\"elementResultTitles\" ><span>E-mail: </span>"+email+"</p>\n\
            <p id=\"elementResultTitles\" ><span>Propósito: </span>"+purpouseString+"</p>\n\
        </div>\n\
        <div id=\"elementDivMessage\" >\n\
            <p id=\"elementResultMessage\" ><span>Mensagem: </span>"+text+"</p>\n\
        </div>\n\
        <p id=\"elementResultTitles\" ><span>Acept: </span>"+checkboxString+"</p>\n\
    </div><hr>";

    document.getElementById('trashArea').innerHTML += newChild;
}

function translatePurpouse (value) {
    var s;

    switch (value){
        case 1:
            s = "Contato Profissional";
            break;
        case 2:
            s = "Consultoria";
            break;
        case 3:
            s = "Palestra";
            break;
        case 4:
            s = "Cumê Água";
            break;
        default:
            break;
    }

    return s;
}

function translateCheckbox (value) {
    return (value)? "true" : "false";
}
