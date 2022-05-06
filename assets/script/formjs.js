function Sucess() {
    var nome = document.querySelector("#nome")
    var sobrenome = document.querySelector("#sobrenome")
    var data = document.querySelector("#data")
    var numero = document.querySelector("#numero")
    var email = document.querySelector("#email")
    var arquivo = document.querySelector("#enviarArquivo")

    if (!nome["value"] == '') {
        if (!sobrenome["value"] == '') {
            if (!data["value"] == '') {
                if (!numero["value"] == '') {
                    if (!email["value"] == '' && email["value"].includes("@")) {
                        if (!arquivo["value"] == ''){
                            var pergunta = confirm("Seus dados foram recebidos, confirme-os abaixo:\n"+nome["value"]+" "+sobrenome["value"]+"\n"+data["value"]+"\n"+numero["value"]+"\n"+email["value"]+"")

                            if (pergunta == true){
                                alert("Seu formulário foi computado com sucesso, boa sorte!");
                                document.getElementById("formInfo").action = "index.html";
                            }else {
                                alert("Seu formulário não foi enviado.");
                            } 
                        } else {
                            alert("Arquivo invalido.");
                        }
                    } else {
                        alert("E-mail invalido.");
                    }
                } else {
                    alert("Número invalido.");
                }
            } else {
                alert("Data invalida.");
            }
        } else {
            alert("Sobrenome invalido.");
        }
    } else {
        alert("Nome invalido.");
    }
};