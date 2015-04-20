var my_media = ''

var arrayDeConteudos = [
	'Ela tem o sorriso mais perfeito do mundo!',
	'Ela dá os melhores abraços, que fazem com que o pior dos dias se torne o melhor em uma fração de segundo!',
	'Ela se dedica aos estudos e é esforçada, ela que me motiva a ser melhor a cada dia.',
	'Ela gosta de música boa!',
	'Ela tem olhos que quando cruzam com os meus fazem minha respiração parar por um momento.',
	'Ela faz onigiris como ninguém!',
	'Ela se preocupa comigo e sabe quando eu preciso de um onigiri gostosinho pra ficar bem.',
	'Ela me respeita acima de tudo, e as vezes eu machuco ela sem querer e ela me perdoa mesmo assim.',
	'Ela cuida de mim quando eu estou doente e me dá carinho mesmo quando eu estou sendo só um doentezinho mimado.',
	'Ela me ajuda sempre que eu preciso, no que for preciso. Ela nunca me deixou na mão.',
	'Ela fez uma caixinha de sapatos se tornar uma caixinha de tesouros.',
	'Ela é tão perfeitinha que eu dei minha palheta favorita como se estivesse dando parte de mim nas mãos dela!',
	'Ela tem uma carreira brilhante pela frente, e eu quero estar aqui pra ver ela crescer assim. =)',
	'Ela se formou numa faculdade excelente e já foi bem além dela.',
	'Ela tem um amor incondicional pelas pessoas e quer muito fazer o bem por elas, mesmo quando não merecem.',
	'Ela tem saudade e admiração pelo pai, e quer seguir os planos dele de sempre fazer o bem para quem está em volta.',
	'Ela tem respeito e admiração pela mãe que trabalha muito, mesmo que as vezes não se entendam ou saibam expressar direitinho o que sentem.',
	'Ela cuida do irmão mais novo com dedicação e se preocupa com o irmão mais velho, mesmo quando não se dão muito bem.',
	'Ela se preocupa e cuida dos seus amigos (e dos filhinhos ou filhinhas), e sente a falta deles quando não estão presentes.',
	'Ela puxa o ar do jeito mais fofinho do mundo quando precisa prender a respiração!',
	'Ela me ensinou várias coisinhas sobre o japão e a cultura japonesa, que me ajudam a entender mais a minha própria família.',
	'Ela sempre presta atenção aos detalhes e é caprichosa.',
	'Ela me traz confiança quando eu estou com medo de tomar decisões difíceis.',
	'Ela briga comigo quando precisa brigar pra que eu entenda o que é preciso ser feito.',
	'Ela é linda, eu não consigo olhar para ela e não pensar no quanto eu sou um homem de sorte.',
	'Ela é a melhor jogadora de joguinhos de celular entre todos que eu conheço. Por mais que eu me faça de durão, eu sempre sou derrotado nesse quesito!',
	'Ela é a companhia com quem eu conheci um monte de lugares gostosinhos como o Espaço Kazu, o Bolo do Frei e o Pastel de Bertioga!',
	'Ela faz com que uma viagem de trem de 1h40 pra outra cidade valha a pena só por poder ver o sorriso dela!',
	'Ela me apresentou o paço municipal de Ribeirão e a felicidade de passar um dia juntinhos naquele lugar como se nada mais importasse no mundo.',
	'Ela me fez crescer muito e aprender a aguentar a vida com minha própria força.',
	'Ela me faz feliz como ninguém mais no mundo, e me faz ter esperanças mesmo quando tudo parece ruim.',
	'Ela tem muito talento pra tirar fotografias bonitas, muito mais do que eu, e eu admiro muito esse talento!',
	'Ela joga futebol, me dribla de cair no chão e me encanta de cair o queixo.',
	'Ela é e sempre será minha peixinha!',
	'Ela é contestadora e bem informada, sabe ouvir e pensar por si mesma.',
	'Ela sempre quis o melhor para si e por isso sempre trabalhou nos melhores lugares, por mais difíceis que fossem os processos seletivos.',
	'Ela tem tanto carinho pelas pessoas que sempre levava um presentinho pra mãe quando saia de casa.',
	'Ela se diverte comigo e sempre sabe o que eu penso por trás das palavras.',
	'Ela faz uma expressão única de chinesinha inconformada!',
	'Ela sabe cavar bem fundo pra me puxar quando eu me enterro em preocupações e tristezas.',
	'Ela foi comigo no melhor show da minha vida e me viu chorar feito uma criancinha.',
	'Ela se preocupa com a minha saúde e quer que a gente passe muito tempo junto nessa vida!',
	'Ela me apresentou o festival do chocolate, aonde eu posso ser um gordinho feliz!',
	'Ela tem tantas certificações que eu nem sei o nome de todas.',
	'Ela fazia cursos de férias enquanto eu só queria jogar pokémon.',
	'Ela não se conforma com como as coisas são e tenta sempre mudar pra melhor.',
	'Ela entende que eu gosto de miniaturinhas e respeita o que é importante pra mim.',
	'Ela tem um Ford Falcon que eu dei pra que quando ela quisesse me ver sempre tivesse um caminho. =)',
	'Ela canta supermassive black hole como se não houvesse amanhã!',
	'Ela me conheceu vendo que eu não sabia tomar um sorvete sem sujar toda a Avenida Paulista e ainda assim quis me ver de novo.',
	'Ela é tão esforçada que saia de casa de madrugada pra pegar o trem e vir pra São Paulo estudar no cursinho, na primeira fileira.',
	'Ela não é uma menina cheia de frescuras nem fútil, é uma pessoa muito especial!',
	'Ela sabe respeitar minhas amizades e abraçou meus amigos quase como parte da família ou um pacotinho do qual eu faço parte.',
	'Ela sempre pensa muito quando vai dar um presente pra ver a outra pessoa feliz.',
	'Ela gosta muito de cachorrinhos!',
	'Ela é a bíblia do Kurt Cobain e do Nirvana.',
	'Ela gosta de mim mesmo eu sendo pobrinho. ><',
	'Ela tem um lado nerds jogador de tetris que eu amo muito.',
	'Ela conhece mais séries que os donos do Netflix.',
	'Ela se preocupa em estar bonita sem se esquecer de ser linda por dentro.',
	'Ela se esforça muito por nós dois, e se entrega de verdade pelo nosso amor.',
	'Ela é uma expert em entrevistas e sempre ensina quem tem mais dificuldade com isso.',
	'Ela é a mãe do Spike, o cachorro mais legal do mundo!',
	'Ela sempre cuida das coisas que tem, tipo o ipad que ela cuida como se fosse um filho.',
	'Ela gosta de ler e se enriquecer de cultura.',
	'Ela é uma médica informal melhor que muita médica com CRM por aí!',
	'Ela luta boxe e derruba as dificuldades com um uppercut no queixo.',
	'Ela me fez ir pra academia depois de 25 anos!',
	'Ela tem um beijo capaz de fazer parar o tempo e curar qualquer ferida.',
	'Ela é compacta, da quase pra guardar no bolso, mas eu amo tanto que mal cabe no meu coração!',
	'Ela é decidida e tem opiniões fortes. Não fica em cima do muro só pra agradar os outros.',
	'Ela é super cheirosinha, o perfume dela por si só me faz abrir um sorriso!',
	'Ela me deu o Rhino, que morre de saudade dela quando ela passa muito tempo sem nos visitar.',
	'Ela respeita minha família mesmo que tenha coisas que ela não gosta.',
	'Ela é independente e sabe se cuidar sozinha, enquanto eu mal sei fritar um bife.',
	'Ela sabe respeitar a minha privacidade e não ser super possessiva.',
	'Ela é a melhor companhia do mundo pra ficar dando voltas de carro pela cidade.',
	'Ela sabe da importância da família, e eu ainda quero construir a minha com ela! =)',
	'Ela tem o nome mais bonito do mundo, mesmo que ele não exista nas latinhas da coca-cola. =D',
	'Ela apostou no nosso amor mesmo sabendo que seria complicado por eu ser uma misturinha.',
	'Ela sabe ouvir e ser compreensiva quando precisa.',
	'Ela não tem preconceitos e gosta das pessoas pelo que elas são de verdade.',
	'Ela é muito muito inteligente e eu sempre aprendo com ela!',
	'Ela quer fazer várias faculdades e pós graduações, tem muita vontade de estar sempre aprendendo.',
	'Ela virou várias noites em claro se esforçando para fazer trabalhos para a faculdade com qualidade e dedicação, como eu nunca vi na vida outra pessoa fazer.',
	'Ela me completa e me faz completamente feliz!',
	'Ela faz dashboards e malabarismos no excel que impressionam até mesmo a própria Microsoft!',
	'Ela gosta das pessoas simples e rejeita atitudes arrogantes e prepotentes.',
	'Ela se importa com o sentimento da pessoas!',
	'Ela se encanta com crianças, e algum dia tenho certeza que vamos ter as nossas próprias! =)',
	'Ela me faz massagem quando eu estou com dores, mesmo quando está cansada, só pra me ver bem.',
	'Ela quer viver a vida intensamente e não se acomoda por qualquer coisa.',
	'Ela é corajosa enquanto eu morro de medo de altura =S.',
	'Ela me deixa morrendo de saudade se eu passo mais de um dia longe.',
	'Ela me entende mesmo quando eu digo coisas aparentemente absurdas e nunca me julga pelo que eu penso.',
	'Ela é a melhor companhia pra viajar para Riviera e sentar na areia!',
	'Ela é a pessoa que eu quero comigo quando eu estiver bem velhinho!',
	'Ela faz um biquinho todo especial quando quer um beijinho. =)',
	'Ela sempre me pergunta como eu prefiro o cabelo dela, mesmo eu achando lindo de todas as formas.',
	'Ela é tudo pra mim, é o que me mantém em pé e me da forças pra passar até mesmo pelos piores dias. ^^'
]

var arrayDeMusicas = [
	'Metallica - Nothing else matters',
	'Metallica - Enter Sandman',
	'Incubus - Dig',
	'Incubus - Love hurts',
	'Muse - Bliss',
	'Muse - Supermassive Black Hole',
	'Nirvana - Come as you are',
	'Nirvana - Smells like teen spirit',
	'System of a Down - Question',
	'System of a Down - BYOB',
	'Faith no more - Epic',
	'Faith no more - We care a lot',
	'Silverchair - Freak',
	'Silverchair - Shade',
	'Black Sabbath - Iron man',
	'Black Sabbath - Children of the Grave',
	'Pearl Jam - Spin the black circle',
	'Pearl Jam - Better man',
	'Offspring - Original prankster',
	'Offspring - Pretty fly',
	'Gorillaz - Clint eastwood',
	'Gorillaz - Rhinestone eyes',
	'Jack Johnson - Banana Pancakes',
	'Jack Johnson - Better together'
]

var arrayDePaths = [
	'music/01.mp3',
	'music/02.mp3',
	'music/03.mp3',
	'music/04.mp3',
	'music/05.mp3',
	'music/06.mp3',
	'music/07.mp3',
	'music/08.mp3',
	'music/09.mp3',
	'music/10.mp3',
	'music/11.mp3',
	'music/12.mp3',
	'music/13.mp3',
	'music/14.mp3',
	'music/15.mp3',
	'music/16.mp3',
	'music/17.mp3',
	'music/18.mp3',
	'music/19.mp3',
	'music/20.mp3',
	'music/21.mp3',
	'music/22.mp3',
	'music/23.mp3',
	'music/24.mp3'
]

document.addEventListener("deviceready", console.log('ready'), false);

$(document).ready(function(){
	
	//Adicionando cliques
	$('#buttonGenerate').on('click touch',gerarConteudo)
	$('#mensagensBtn').on('click touch',function(){mostrarTela('.scene1')})
	$('#playlistBtn').on('click touch',function(){mostrarTela('.scene2')})
	$('#fotosBtn').on('click touch',function(){mostrarTela('.scene3')})
	$('#introBtn').on('click touch',function(){$('.intro').fadeOut(500)})


	//Adicionando itens na playlist
	for (var i = 0 ; i < arrayDeMusicas.length; i++) {
		document.getElementById('minhaPlaylist').innerHTML += '<li class="audioList" id="'+i+'" onclick="playSong('+i+')">'+arrayDeMusicas[i]+'</li>'
	};
	
})

function onDeviceReady() {
    playAudio("http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3");
}

function onSuccess() {
    console.log("playAudio():Audio Success");
}

// onError Callback
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

function playSong(e){
	/*
	$('#audioPlayer').remove();
	$('.playerHolder').append('<audio controls id="audioPlayer"></audio>')
	$('#audioPlayer').append('<source src="'+arrayDePaths[e]+'" type="audio/mpeg" />') 
	*/
	
	var concatenador = "http://stepstudio.com.br/oed/elisa/"+arrayDePaths[e];
	my_media = new Media(concatenador, onSuccess, onError);
	my_media.play();
}

function mostrarTela(e){
	$('.scenes').fadeOut(500);
	$(e).delay(500).fadeIn(500);
}

function gerarConteudo(){

	//desabilitando o botão
	$('#buttonGenerate').css({'pointer-events':'none','opacity':'0.2'})

	//Tirando mensagem anterior
	$('#reason').fadeOut(500);

	//Calculando
	setTimeout(function(){
		var indiceGerador = Math.floor((Math.random() * 100));
		document.getElementById('reason').innerHTML = arrayDeConteudos[indiceGerador];
	},500)

	//Subindo mensagem nova
	$('#reason').fadeIn(500);
	setTimeout(function(){
		$('#buttonGenerate').css({'pointer-events':'auto','opacity':'1'})
	},1000)

}