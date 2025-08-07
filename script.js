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

    // Definir tempo de desligamento com função setTimeout
    setTimeout(() => { /*utilizado função arrow  sintaxe -> setTimeout(funcao, delay, parametros…)*/ 
      desligarTodas();}// parametro 1 com função anonima
      , tempoLuz[cor]); /* parametro 2 de tempo/delay */
  }

}

let cicloAtivo = false; // controle para iniciar/parar o ciclo

function ligarLuzAuto() {
  if (cicloAtivo) return; // evita múltiplas chamadas simultâneas, se estiver true já sai da função
  cicloAtivo = true; //settado para verdade

  function cicloSemaforo() {
    if (!cicloAtivo) return; 

    ligarLuz('verde');

    setTimeout(() => { /*utilizado função arrow  sintaxe -> setTimeout(funcao, delay, parametros 1, 2,3......)*/ 
      ligarLuz('amarelo');

      setTimeout(() => {
        ligarLuz('vermelho');

        setTimeout(() => {
          cicloSemaforo(); // repete o ciclo com recursão
        }, tempoLuz.vermelho);

      }, tempoLuz.amarelo);

    }, tempoLuz.verde);
  }
///////////////////////////////
  cicloSemaforo(); // inicia o ciclo
}
function pararLuzAuto() {
  cicloAtivo = false; // ciclo falso para desligar a luz
  clearTimeout(timeoutAtual); //recebe null
  desligarTodas();
}

function alternarSemaforo() { //função para verificar se checkbox está ligada ou desligada
  const checkbox = document.getElementById('controleSemaforo');
  if (checkbox.checked) {
    ligarLuzAuto(); // ativa o ciclo de Luz Automática
  } else {
    pararLuzAuto(); // para o ciclo de Luz Automática
  }
}