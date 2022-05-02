//Mapeamento de variáveis.

var jogador, vencedor = null; //Pode ser jogador 1 ou 2

var jogadorSelecionado = document.getElementById('jogador-selecionado');

var vencedorSelecionado = document.getElementById('vencedor-selecionado');

//var quadrados = document.getElementsByClassName('quadrado');

mudarJogador('X'); //perceba que o primeiro valor foi colocado no JS e não no HTML. Vai começar com o X.

function escolherQuadrado(id) { //Referente ao this.id. Ele vai apontar para o quadrado clicadoa tualmente.
    //console.log(id);

    var quadrado = document.getElementById(id); //Com isso, estaremos recuperando o id de cada quadrado referente ao this.id colocado na tag.
    
    if(vencedor !== null) { //Se o jogo tiver um vencedor, não queremos que ninguém mais jogue. Essa condição é essencial para finalizar.
        return;            
    }
    
    if(quadrado.innerHTML !== '-') { //Aqui, estamos dizendo que se o valor já for diferente do traço(essa foi uma das funções do traço lá no HTML), ele não vai retornar mais nada, ou seja, o valor 'X' ou 'O' não poderão ser modificados depois do primeiro clique.
        return;
    } 
   
    quadrado.innerHTML = jogador; //O inerHTML vai modificar o texto atual da classe em questão. Olhar a variável null lá em cima.
    quadrado.style.color = '#000'; //Esses ponteiros mudam a cor, ou seja, você também pode manipular o css no js.

    if(jogador === 'X') {
        jogador = 'O';
    } else {
        jogador = 'X';
    }
    mudarJogador(jogador); //Chamando a função novamente para que a condição se conclua certinho.
    checarVencedor(); //Chamando a função para verificar os quadrados escolhidos.
}       

function mudarJogador(valor) {
    jogador = valor; 
    jogadorSelecionado.innerHTML = jogador; //O valor vai ser a string passada lá em cima.
}

function mudarVencedor(quadrado) { //O conteúdo dos quadrados é o vencedor da vez. Aqui não passamos valor porque o que vai definir não é um valor inicial e sim, o valor do vencedor.
    vencedor = quadrado.innerHTML; //Vai receber o conteúdo
    vencedorSelecionado.innerHTML = vencedor; //Mudando o texto no html e no id de fato, na variável mapeada.
}


function checarVencedor() { //Checar se tem um vencedor. Ela vai verificar se entre eles teve algum valor igual
    var quadrado1 = document.getElementById('1');
    var quadrado2 = document.getElementById('2');
    var quadrado3 = document.getElementById('3');
    var quadrado4 = document.getElementById('4');
    var quadrado5 = document.getElementById('5');
    var quadrado6 = document.getElementById('6');
    var quadrado7 = document.getElementById('7');
    var quadrado8 = document.getElementById('8');
    var quadrado9 = document.getElementById('9');

    //Condições apra chegar a sequência do vencedor e fazer os acabamentos.
    if(checarSequencia(quadrado1, quadrado2, quadrado3)) {
        mudarCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1); //Como todos os três terão o mesmo conteúdo, só precisamos passar um oparâmetro, aqui.
        return; //Precisamos adicionar um return para no caso dessa condição ser verdadeira, ele não precise verificar a próxima. Só não precisamos fazer isso na última.
    }

    if(checarSequencia(quadrado4, quadrado5, quadrado6)) {
        mudarCorQuadrado(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
        return;
    }

    if(checarSequencia(quadrado7, quadrado8, quadrado9)) {
        mudarCorQuadrado(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7);
        return;
    }

    if(checarSequencia(quadrado1, quadrado4, quadrado7)) {
        mudarCorQuadrado(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado1);
        return;
    }

    if(checarSequencia(quadrado2, quadrado5, quadrado8)) {
        mudarCorQuadrado(quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2);
        return;
    }

    if(checarSequencia(quadrado3, quadrado6, quadrado9)) {
        mudarCorQuadrado(quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3);
        return;
    }

    if(checarSequencia(quadrado1, quadrado5, quadrado9)) {
        mudarCorQuadrado(quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1);
        return;
    }

    if(checarSequencia(quadrado3, quadrado5, quadrado7)) {
        mudarCorQuadrado(quadrado3, quadrado5, quadrado7);
        mudarVencedor(quadrado3);
    }
}

function mudarCorQuadrado(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';
}

function checarSequencia(quadrado1, quadrado2, quadrado3) {
    var eigual = false; //Vai começar com o false

    if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) { //Precisamos chegar se ele for diferente do '-' porque senão todos serão false de cara.
        eigual = true; //A mudança dessa variável nessa condição vai checar que todos esses são iguais.
    }
    return eigual;
}

function reiniciar() {
    vencedor = null; 
    vencedorSelecionado.innerHTML = ''; 

    for(var i = 1; i <= 9; i++) {
        //Código
        var quadrado = document.getElementById(i); 
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }

    mudarJogador('X'); //Voltar o jogador para o primeiro valor depois do '-'
}