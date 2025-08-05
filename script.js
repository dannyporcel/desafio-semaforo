const tempoLuz = { /*definir tempo*/
  vermelho: 40000,
  amarelo: 5000,
  verde: 60000
};

let timeoutAtual = null;/*vazio*/

function desligarTodas() {
  document.getElementById('luz-vermelho').style.backgroundColor = '#333'; //cor cinza #333
  document.getElementById('luz-amarelo').style.backgroundColor = '#333';
  document.getElementById('luz-verde').style.backgroundColor = '#333';
}

function ligarLuz(cor) {
  // Limpa o temporizador anterior
  if (timeoutAtual) /* se vazio ->null*/
  clearTimeout(timeoutAtual);

  // Executa função de desligar todas as luzes
  desligarTodas();

  // Mapeia cor visual e especifica cor (somente em inglês)
  const coresVisuais = {
    vermelho: 'red',
    amarelo: 'yellow',
    verde: 'limegreen'
  };

  // Acende a luz correta
  const luz = document.getElementById('luz-' + cor);/*concatena luz-nomecor */

  if (luz) { /* se há luz então...*/
    luz.style.backgroundColor = coresVisuais[cor];

    // Definir tempo de desligamento
    timeoutAtual = setTimeout(() => { /*utilizado função arrow */
      desligarTodas();
    }, tempoLuz[cor]); /* depois do tempo aguardado em tempoLuz, será executado desligarTodas() */
  }


}
