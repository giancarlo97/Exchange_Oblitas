function convertir() {
    let valore = parseInt(document.getElementById("valor").value);
    let resultado = 0;
    let dolar = 300;
    let euro = 400;
    if (document.getElementById("uno").checked){
        resultado = valore / dolar;
        alert("El cambio de Pesos a Dolares es: U$D" + resultado.toFixed(2));
    }
    else if (document.getElementById("dos").checked){
        resultado = valore / euro;
        alert("El cambio de Pesos a Euros es: EUR$" + resultado.toFixed(2));
    }
    else{
        alert("Por favor, complete los casilleros");
    }
}

function tabla() {
    let entrada =prompt("Cuantos dolares quiere comprar, use 'ESC' para salir");

    while(entrada != "ESC"){
        switch (entrada){
            case "100":
                alert("Son $30000");
                break;
            case "200":
                alert("Son $60000");
                break;
            case "300":
                alert("Son $90000");
                break;
            case "400":
                alert("Son $120000");
                break;
            case "500":
                alert("Son $150000");
                break;
            case "600":
                alert("Son $180000");
                break;
            case "700":
                alert("Son $210000");
                break;
            case "800":
                alert("Son $240000");
                break;
            case "900":
                alert("Son $270000");
                break;
            case "1000":
                alert("Son $300000");
                break;
            default:
                alert("Ingrese multiplos de 100, muchas gracias");
                break;
        }
        entrada = prompt("Cuantos dolares quiere comprar, use 'ESC' para salir"); 
    }
}
