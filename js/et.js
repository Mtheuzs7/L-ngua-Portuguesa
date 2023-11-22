let text = document.getElementById("textcontent");
let h3 = document.getElementById("h3");
let img = document.getElementById("img")


const textsrn = ["A entrevista é um gênero textual produzido pela interação entre duas pessoas, o entrevistador (responsável por fazer perguntas), e o entrevistado, (que responde às perguntas).", 
"A entrevista possui uma função social muito importante, porque ela propõe um debate e através dela é possível obter esclarecimentos, formar uma opinião e desenvolver um posicionamento de forma crítica. O texto da entrevista é marcado pela oralidade e tem função informativa.", 
"Textos informativos e/ou opinativos; Presença do entrevistador e do entrevistado; Linguagem dialógica e oral; Marca do discurso direto e da subjetividade; Mescla da linguagem formal e informal. Essas são algumas características da entrevista, mas como podemos desenvolver uma boa entrevista? Confira, a seguir: ",
"Escolha um tema relevante para a entrevista e  garanta que o entrevistado esteja disponível para a entrevista.",
"Decida o tipo de entrevista: estruturada, semiestruturada ou não estruturada; Para entrevistas estruturadas, crie um roteiro para guiar a entrevista; Pesquise e estude sobre o tema, especialmente para entrevistas semiestruturadas e não estruturadas, para formular perguntas relevantes com base nas respostas do entrevistado. ", 
"Dê um título à entrevista que destaque o tema e atraia os leitores.",
"Crie uma introdução breve para informar os leitores sobre o assunto da entrevista, apresentando o tema e o perfil do entrevistado, incluindo sua experiência profissional.",
"Revise o texto da entrevista para garantir coerência e coesão, assegurando que as ideias sejam apresentadas de forma clara e organizada.",
"Existem sete principais tipos de entrevista jornalística. São elas: ",
"- Individual: é realizada apenas com o entrevistador e o entrevistado, previamente agendada.",
"- Rotina: acontece a partir dos acontecimentos factuais e de interesse público, com personagens que estiveram presentes nessas ocorrências (que podem ser acidentes, mortes, assaltos, enchentes, entre outros).",
"- Em grupo: mais conhecida como coletiva de imprensa, é realizada com jornalistas de diversos veículos e cada um faz suas respectivas perguntas ao(s) entrevistado(s).",
"- Exclusiva: é uma entrevista concedida a apenas um jornalista, com um informação ainda desconhecida por todos.",
"- Pesquisa: realizada por especialistas que devem dar uma informação técnica, porém de fácil compreensão sobre determinado assunto.",
"- Personalidade: descreve a vida de uma pessoa famosa como seus hábitos, história de vida e curiosidades.",
"- Opinativa: é realizada com pessoas que possuem experiências e conhecimentos sobre determinados assuntos, como atletas, estudiosos ou profissionais consagrados.",
"- Caracterizada: são os trechos curtos de uma entrevista, inseridos em um texto entre aspas e transcritos exatamente como foram ditos pelo entrevistado.",
"Os alunos Carolina Mascarello, Gislaine Carrão, Julia dos Santos e Matheus Gonçalves do segundo ano de Informática - B, discentes do Instituto Federal Catarinense Campus Videira, realizaram por meio de uma proposta de atividade da docente Giedra Pasqualin, uma entrevista.",
"O tipo de entrevista escolhida é conhecida como entrevista coletiva . Nesse formato, um grupo de entrevistadores faz perguntas a uma figura pública, geralmente com antecedência, e a figura pública responde às perguntas sem interrupções ou comentários dos entrevistadores. O entrevistado foi o prefeito de Videira, Dorival Carlos Borga, no qual o intuito era debater sobre assuntos de interesse público."]

const texth3 = ["O que é?", "Características","Escolha do Tema e Entrevistado", "Tipo de Entrevista", "Título", "Introdução", "Revisão do Texto", "Tipos de Entrevista Jornalística", "Entrevista realizada pelos alunos"]

const imgs = ['img/EInicial.png',
'img/EIndividual.jpeg',
'img/ERotina.jpg',
'img/EColetiva.jpeg',
'img/EExclusiva.jpeg',
'img/EPesquisa.jpeg',
'img/EPersonalidade.jpeg',
'img/EOpinativa.jpeg',
'img/Entrevista.jpg']

const innersh3 = [
    [0,1],
    [2],
    [3],
    [4],
    [5],
    [6],
    [7],
    [8,9,10,11,12,13,14,15,16],
    [17,18]
]

const innerimg = [
    [0,1,2,3,4,5,6,7,8],
    [9],
    [10],
    [11],
    [12],
    [13],
    [14],
    [15,16],
    [17,18]
]

let counter = 0; 

function next(){
    if (counter < textsrn.length - 1) {
        counter++;
    } else {
        counter = 0;
    }

    for (let i = 0; i < innersh3.length; i++) {
        const element = innersh3[i];
        const element2 = innerimg[i];
        
        if (element.includes(counter) == true){
            h3.innerText = texth3[i];
        }

        if (element2.includes(counter) == true){
            img.src = imgs[i];
        }
    }

    text.innerText = textsrn[counter];
}

function back(){
    if (counter > 0) {
        counter--;
    } else {
        counter = textsrn.length - 1;
    }

    for (let i = 0; i < innersh3.length; i++) {
        const element = innersh3[i];
        const element2 = innerimg[i];
        
        if (element.includes(counter) == true){
            h3.innerText = texth3[i];
        }

        if (element2.includes(counter) == true){
            img.src = imgs[i];
        }
    }

    text.innerText = textsrn[counter];
    h3.innerText = texth3[counter2];
}