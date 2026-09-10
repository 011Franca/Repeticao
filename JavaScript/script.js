let saida, i;

function contar(){
    saida = ""
    for(i=0;i<10;i++){
        saida = saida + i + "<br>";
    }

    document.getElementById("resultado").innerHTML = saida;
}

let saida2, i2;

function contar1(){
    saida2 = ""
    for(i2=10;i2>0;i2--){
        saida2 = saida2 + i2 + "<br>";
    }

    document.getElementById("resultado1").innerHTML = saida2;
}

let saida3,a,inicio;

function ContarAteCem(){
    inicio = Number(document.getElementById("inicio").value);
    saida3 = ""
    for(a = inicio; a <=100 ;  a++){
        saida3 = saida3 + a + "<br>";
    }

    document.getElementById("ateCem").innerHTML = saida3;
}

let x,y,z;

function Multiplicar(){
    x = Number(document.getElementById("x").value);
    z = ""
    for(y = 0; y <= 10 ;  y++){
        z = z + x + "x" + y + "=" + x*y + "<br>";
    }

    document.getElementById("tabuada").innerHTML = z;
}

let saida5,q;

function Gerar(){
    saida5 = ""
    for(q = 0; q <= 5; q++){
        saida5 = saida5 + '<div class = "caixa"></div>'
    }

    document.getElementById("quadrado").innerHTML = saida5;
}