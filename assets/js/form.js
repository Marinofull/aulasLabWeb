/*JAVASCRIPT

    Ao clicar no botão de enviar do formulário deve aparecer os dados digitados abaixo do formulário.
    Cada vez que clica no botão aparecem os dados (acumulativo).
    Na apresentação dos dados utilize o efeito de expandir e ocultar os dados do contato.
    Os scripts devem estar em um arquivo externo.
*/

var count = 0;

function insertParada () {
    // var e = document.createElement("p");
    // e.value= "texto";
    // document.getElementById('trashArea').innerHTML = "texto";

    var name, email, purpouse, text, checkbox, date;

    name = document.getElementById("nameForm").value;
    email = document.getElementById("emailForm").value;
    purpouse = document.getElementById("optForm").ELEMENT_NODE;
    text = document.getElementById("textForm").value;

    if(name == "" || email == "" || purpouse == 0 || text == ""){
        return;
    }

    checkbox = document.getElementById("checkboxForm").value;
    date = new Date();

    purpouseString = translatePurpouse(purpouse);
    checkboxString = translateCheckbox(checkbox);
    // tam = document.getElementById('trashArea').length;
    // tam = tam*3 + 1;

    var newChild = "\<p><a id=\"elementChildDate\" href='#trashArea' onclick=\"hideStuff('elementResult"+count+"', this)\">Contato de : "+date+"</a></p>\n\
    <div id='elementResult"+count+"' class=\"elementResult\">\n\
        <div class=\"elementDivTittle\" >\n\
            <p class=\"elementResultTitles\" ><span>Nome: </span>"+name+"</p>\n\
            <p class=\"elementResultTitles\" ><span>E-mail: </span>"+email+"</p>\n\
            <p class=\"elementResultTitles\" ><span>Propósito: </span>"+purpouseString+"</p>\n\
        </div>\n\
        <div class=\"elementDivMessage\" >\n\
            <p class=\"elementResultMessage\" ><span>Mensagem: </span>"+text+"</p>\n\
        </div>\n\
        <p class=\"elementResultTitles elementCheckbox\" ><span>Acept: </span>"+checkboxString+"</p>\n\
    </div><hr>";

    document.getElementById('trashArea').innerHTML += newChild;
    // document.getElementsByClassName('trashArea').innerHTML += newChild; It don't works on Firefox

    count++
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
    return (value )? "true" : "false";
}

function showStuff(id, me) {
    document.getElementById(id).style.display = 'block';
    var attr = "hideStuff('"+id+"', this); return false;";
    me.setAttribute("onclick", attr);
}
function hideStuff(id, me) {
    document.getElementById(id).style.display = 'none';
    var attr = "showStuff('"+id+"', this); return false;";
    me.setAttribute("onclick", attr);
}
