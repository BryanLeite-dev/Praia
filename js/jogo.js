var desenhador = document.getElementById("canvas").getContext("2d");
	var fundo = new Image();
	var personagem = new Image();
	var posicaoX = 0;
	var direcao = "nenhuma";
			
function IniciaJogo (){
	fundo.src = "Fundo.png";
	personagem.src = "Garoto.png";
	window.addEventListener("keydown",ApertouTeclado);
	window.addEventListener("keyup", SoltouTeclado);
	DesenhaJogo();
}
				
	function DesenhaJogo (){
	requestAnimationFrame(DesenhaJogo);
	desenhador.drawImage(fundo,0,0,800,600);
	if(direcao=="direita"){
	posicaoX = posicaoX + 10;	
	}
	if(direcao=="esquerda"){
	posicaoX = posicaoX - 10;	
	}
	desenhador.drawImage(personagem,posicaoX,340,100,100);
	}
		
	function ApertouTeclado(teclaApertada){
	if(teclaApertada.keyCode==39){
	direcao = "direita";
	}
	if(teclaApertada.keyCode==37){
	direcao = "esquerda";
	}
	}
			
	function SoltouTeclado(){
	direcao = "nenhuma";					
	}
				
	IniciaJogo();