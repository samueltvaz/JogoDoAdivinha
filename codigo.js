var numMaxAleatorio;
var numAleatorio;
var tentativas = 0;

function Init() {
	numMaxAleatorio = pedirNumMaxAleatorio();
    numAleatorio = pedirNumAleatorio();
    document.getElementById('areaMensagens').innerHTML = 'Estou a pensar num número entre 1 e ' + (numMaxAleatorio) +'. Tenta adivinhar qual é?';
    document.getElementById('tentativas').innerHTML = tentativas;
    document.getElementById('areaDica').innerHTML = 'Boa sorte!';
}

function pedirNumMaxAleatorio() {
	var numMaxAleatorio = parseInt(prompt("Escreve o número máximo"));
	console.log("user input: " + numMaxAleatorio);
	return numMaxAleatorio;
}

function pedirNumAleatorio() {	
	var numAleatorio = Math.floor(Math.random() * numMaxAleatorio) + 1;
	console.log("random number: " + numAleatorio);
    return numAleatorio;
}

function jogo(numUsuario) {
    if(numUsuario == numAleatorio) {
         tentativas++;
         document.getElementById('areaMensagens').innerHTML = 'Acertaste em ' + tentativas + ' tentativas! Era o número ' + numAleatorio + '! Clica em Recomeçar para jogar outra vez';
		 document.getElementById('areaDica').innerHTML = 'O número está certoooooooooo!';
		 document.getElementById('tentativas').innerHTML = tentativas;
		 document.jogoAdivinha.input.value = '';
		 setTimeout(recomecar, 1000)
	}
    else  {
		tentativas++;
		document.getElementById('areaMensagens').innerHTML = 'Não, ' + numUsuario + ' não é o número em que estou a pensar!';
		document.getElementById('areaDica').innerHTML = (numAleatorio > numUsuario) ? 'O número é mais alto!' : 'O número é mais baixo!';
		document.getElementById('tentativas').innerHTML = tentativas;
	}
}

function adicionar(numUsuario) {
	jogoAdivinha.input.value += numUsuario;
}

function verificarValores() {
	var regex = /^[0-9]+$/;
	var input = jogoAdivinha.input.value;
	console.log("input: " + input);
	
	jogoAdivinha.input.value = '';
	
    if (!input.match(regex)) {
		document.getElementById('areaMensagens').innerHTML = 'Apenas são permitidos números!'; 
    }
	else if (input > numMaxAleatorio) {
        document.getElementById('areaMensagens').innerHTML = 'Número muito grande!'; 
	}
	else {
		jogo(input);
	}
}

function recomecar() {
	var recomecar = confirm('Recomeçar?');
	if (recomecar){
		Init();
	}
}