function cal(){
   const a = parseFloat(document.getElementById('numero').value);
   const b = parseFloat(document.getElementById('Nu').value);
   const calculo = document.getElementById('calculo').value;
   let resultado


switch (calculo){
    case 'soma':
     resultado = a + b ;
    break;

    case 'subtracao':
      resultado = a - b;
    break;

    case 'multiplicacao':
      resultado = a * b;
    break;

    case 'divisao':
       resultado = b !== 0 ? a/b: 'Erro: Divisão por zero.';
    break;

}
 document.getElementById('resultado').textContent = `O valor é  ${resultado}`;
}

function lim (){
    document.getElementById('resultado').innerText = '';

}