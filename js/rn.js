let text = document.getElementById("textcontent");
let h3 = document.getElementById("h3");
let img = document.getElementById("img")


const textsrn = ["Realismo e Naturalismo são movimentos literários surgidos na Europa, em meados de 1800, como negação do Romantismo. São citadas duas obras principais como as primeiras destes estilos de escrita, respectivamente: Madame Bovary (1857), de Gustave Flaubert e Thérèse Raquin (1867), de Émile Zola.", 
"Esses movimentos eram o oposto do Romantismo, que produzia histórias ambientadas em mundos idealizados, com personagens heroicos e inspiradores. Portanto, Realismo e Naturalismo se caracterizam por personagens realistas, com problemas do cotidiano e também pela busca de uma representação fiel da sociedade.", 
"Foram movimentos que começaram na Europa (França) e rapidamente se espalharam por boa parte do mundo. Após a turbulência social vivida durante as revoluções do século anterior (como a Revolução Francesa), a sociedade burguesa estava estabelecida e as tradições monárquicas e a influência da igreja sobre o Estado haviam sido reduzidas, modificando as estruturas sociais.",
"Principalmente pelo estabelecimento de uma visão científica sobre as formas de organização social e sobre a humanidade em si.A ideia era encontrar a verdade por trás de tudo, entender e descrever a realidade da melhor forma possível. Por isso, ao longo daquele século, a literatura se tornou uma forma de tentar representar a sociedade realísticamente.",
"Em oposição ao Romantismo, negam a fuga da realidade; Maior objetivismo e descrições detalhadas; Representação da realidade; Mostram as falhas das instituições e humanas; Os protagonistas são as pessoas comuns.", 
"Presença da linguagem direta e o uso de adjetivos realistas; Os heróis são pessoas comuns com defeitos e inseguranças e com uma elaboração psicológica trabalhada. Também há demonstração dos defeitos da mulher pois ela já não é mais uma figura incansável e perfeita. Há presença de influências, como: o cientificismo e o materialismo;",
"A narrativa é lenta e tem a presença de descrições de ambientes e personagens; Presença de Temas como: a vida cotidiana, subordinação do amor e críticas aos valores burgueses.",
"A linguagem é simples e é presente o uso de regionalismos; O ser humano é mostrado como animal e não há impessoalidade; Há presença de influências, como o determinismo; Na narrativa é visto com clareza a harmonia, clareza, composição e demonstração de detalhes; Presença de Temas como: o sensualismo, temas sombrios e engajamento social.",
"O Realismo e Naturalismo de Portugal é importante pois lá esse estilo foi adotado rapidamente, servindo de influência para autores brasileiros. Eça de Queiroz foi um importante literário nesses movimentos, cujas principais obras são: O Crime do Padre Amaro (1875); O Primo Basílio (1878); Os Maias (1888).",
"Os principais Autores do Realismo no Brasil foram: → Machado de Assis  (1839-1908). Entre suas obras destacam-se: Memórias Póstumas de Brás Cubas; Dom Casmurro; Esaú e Jacó; Memorial de Aires.→ Raul Pompéia (1863-1895): O Ateneu.",
"Aluísio Azevedo  (1857-1913):A publicação de O Mulato, em 1881, do autor Aluísio Azevedo, foi o que marcou o início do Naturalismo no Brasil; O Cortiço também é uma publicação famosa do autor. → Adolfo Ferreira Caminha (1857-1913): A Normalista (1893) é uma de suas obras com grande destaque."]

const texth3 = ["O que é?", "Contexto Histórico","Semelhanças", "Principais divergências (Realismo):", "Principais divergências (Naturalismo):", "Principais obras do Realismo e Naturalismo em Portugal:", "Principais obras do Realismo no Brasil:", "Principais obras do Naturalismo no Brasil:"]

const imgs = ['img/Madame.jpeg',
'img/Raquin.jpeg',
'img/Romantismo.jpg',
'img/ObraNaturalista.jpeg',
'img/Eça.jpeg',
'img/Machado.jpeg',
'img/OMulato.jpg']

const innersh3 = [
    [0,1],
    [2,3],
    [4],
    [5,6],
    [7],
    [8],
    [9],
    [10]
]

const innerimg = [
    [0],
    [1],
    [2,3,4,5],
    [6,7],
    [8],
    [9],
    [10]
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