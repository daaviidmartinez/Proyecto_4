//Definimos zona de variables

var numero1=[2,6,5,4,5,5];
var numero2=[4,6,6,3,2,6];
var numero3=[3,4,1,2,6,3];
var numero4=[1,4,2,5,6,1];
var numero5=[5,5,3,2,2,1];
var numero6=[4,1,4,3,1,3];

var color1=["Blue","Yellow","Pink","Red","Yellow","Blue"];
var color2=["Blue","White","Pink","Red","Yellow","Blue"];
var color3=["Blue","Yellow","Blue","Red","Red","Red","Pink"];
var color4=["Green","White","Pink","Blue","Red","Yellow"];
var color5=["Green","White","Green","Green","White","Yellow"];
var color6=["Green","White","Pink","White","Green","Yellow"];

var long1=numero1.length;
var long2=numero2.length;
var long3=numero3.length;
var long4=numero4.length;
var long5=numero5.length;
var long6=numero6.length;
var i=0;



var posInicial=[0,0]
var posFinal=[0,0]
var filaInicial=[0]
var filaFinal=[0]
var columnaInicial=[0]
var columnaFinal=[0]

//Inicializamos la primera funcion

function casillaAleatoria() {
  columnaInicial=Math.floor(Math.random()*6 + 1);
  posInicial[0]=columnaInicial;
  filaInicial=Math.floor(Math.random()*6 + 1);
  posInicial[1]=filaInicial;
  columnaFinal=Math.floor(Math.random()*6 + 1);
  posFinal[0]=columnaFinal;
  filaFinal=Math.floor(Math.random()*6 + 1);
  posFinal[1]=filaFinal
}
//Llamamos a la funcion
casillaAleatoria()

//Inicializamos la segunda funcion
function iniciaTablero() {
document.write("<table>");
document.write("<tr>");
  for (let i = 0; i < long1; i++) {
    if (posInicial[0]==1 && posInicial[1]==i+1) {
        document.write(`<td style="background-color:${color1[i]};font-size:50px; border: 5px solid black">${numero1[i]}</td>`)
      }
    else if (posFinal[0]==2 && posFinal[1]==i+1) {
      document.write(`<td style="background-color:${color1[i]};font-size:50px; border: 5px solid grey">${numero1[i]}</td>`)
    }
    else {
      document.write(`<td style="background-color:${color1[i]};font-size:50px; border: 5px solid white">${numero1[i]}</td>`);
     }
  }
document.write("</tr>")

  for (let i = 0; i < long2; i++) {
    if (posInicial[0]==2 && posInicial[1]==i+1) {
        document.write(`<td style="background-color:${color2[i]};font-size:50px; border: 5px solid black">${numero2[i]}</td>`)
      }
    else if (posFinal[0]==3 && posFinal[1]==i+1) {
      document.write(`<td style="background-color:${color2[i]};font-size:50px; border: 5px solid grey">${numero2[i]}</td>`)
    }
    else {
      document.write(`<td style="background-color:${color2[i]};font-size:50px; border: 5px solid white">${numero2[i]}</td>`);
    }
}
document.write("</tr>")

for (let i = 0; i < long3; i++) {
  if (posInicial[0]==3 && posInicial[1]==i+1) {
      document.write(`<td style="background-color:${color3[i]};font-size:50px; border: 5px solid black">${numero3[i]}</td>`)
    }
  else if (posFinal[0]==4 && posFinal[1]==i+1) {
    document.write(`<td style="background-color:${color3[i]};font-size:50px; border: 5px solid grey">${numero3[i]}</td>`)
  }
  else {
    document.write(`<td style="background-color:${color3[i]};font-size:50px; border: 5px solid white">${numero3[i]}</td>`);
  }

}
document.write("</tr>")

for (let i = 0; i < long4; i++) {
  if (posInicial[0]==4 && posInicial[1]==i+1) {
      document.write(`<td style="background-color:${color4[i]};font-size:50px; border: 5px solid black">${numero4[i]}</td>`)
    }
  else if (posFinal[0]==5 && posFinal[1]==i+1) {
    document.write(`<td style="background-color:${color4[i]};font-size:50px; border: 5px solid grey">${numero4[i]}</td>`)
  }
  else {
    document.write(`<td style="background-color:${color4[i]};font-size:50px; border: 5px solid white">${numero4[i]}</td>`);
  }
}
document.write("</tr>")


for (let i = 0; i < long5; i++) {
  if (posInicial[0]==5 && posInicial[1]==i+1) {
      document.write(`<td style="background-color:${color5[i]};font-size:50px; border: 5px solid black">${numero5[i]}</td>`)
    }
  else if (posFinal[0]==6 && posFinal[1]==i+1) {
    document.write(`<td style="background-color:${color5[i]};font-size:50px; border: 5px solid grey">${numero5[i]}</td>`)
  }
  else {
    document.write(`<td style="background-color:${color5[i]};font-size:50px; border: 5px solid white">${numero5[i]}</td>`);
  }
}
document.write("</tr>")


for (let i = 0; i < long6; i++) {
  if (posInicial[0]==6 && posInicial[1]==i+1) {
      document.write(`<td style="background-color:${color6[i]};font-size:50px; border: 5px solid black">${numero6[i]}</td>`)
    }
  else if (posFinal[0]==1 && posFinal[1]==i+1) {
    document.write(`<td style="background-color:${color6[i]};font-size:50px; border: 5px solid grey">${numero6[i]}</td>`)
  }
  else {
    document.write(`<td style="background-color:${color6[i]};font-size:50px; border: 5px solid white">${numero6[i]}</td>`);
  }

}
document.write("</tr>")

  }

console.log(posInicial);
//Llamamos a la segunda funcion
iniciaTablero()
