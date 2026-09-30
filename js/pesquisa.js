let botao = document.getElementById("btnBuscar");
botao.addEventListener("click", buscar);

function buscar(){
    let produtos = ["Arroz", "Feijão", "Macarrão", "Leite", "Acúçar"];
    let nome = document.getElementById("name").value;
    let encontrado = false;

        for (let i =0;i <produtos.length; i++){
            if (nome.toLowerCase() == produtos [i].toLowerCase()){
                encontrado = true;
            }
        }

        if (encontrado == true){
            document.getElementById("resultado").innerHTML = "Produto Encontrado";
        }
        else{
            document.getElementById("resultado").innerHTML= "Produto não encontrado";
        }
}