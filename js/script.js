let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let horario = document.getElementById("horario");

let myForm = document.getElementById("my-form");
let userList = document.getElementById("users");

myForm.addEventListener("submit", clicar);

function clicar(e){
    e.preventDefault();
    //1° Cria um novo elemteno HTML <li> em memóra (ainda não visível na página);
    let itemLi=document.createElement("li")
    //2° Prepara para insenri um elemento "filho" dentro da tag <li>
    itemLi.appendChild(
    //3° Cria um texto puro cotendo as informações formatadas
    document.createTextNode(
    //4° Junta os valores digitados nos inputs usando Template Literais
        `${nameInput.value} : ${emailInput.value} : ${horario.value}`
    )
    )

    userList.appendChild(itemLi);
}