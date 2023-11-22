let text = document.getElementById("textcontent");
let h3 = document.getElementById("h3");
let img = document.getElementById("img")


const textsrn = ["O Romantismo na literatura floresceu nos séculos XVIII e XIX, deixando uma marca profunda em diversas formas de expressão artística, abrangendo literatura, pintura, música, arquitetura e até mesmo influenciando a política e a filosofia. Este movimento romântico emergiu como uma resposta contrária à ênfase na razão e ao racionalismo predominante durante a Era do Iluminismo, além de desafiar as convenções do neoclassicismo.", 
"Emoção e Subjetividade: O Romantismo destaca-se por priorizar as emoções e a subjetividade, explorando intensamente o mundo interior, sentimentos e paixões humanas.", 
"Natureza: A literatura romântica valorizou a natureza como uma força inspiradora, refletindo estados emocionais humanos, frequentemente usando paisagens naturais como cenários que simbolizavam emoções e conflitos.",
"Imaginação e Fantasia:  A imaginação foi central no Romantismo, com autores como Edgar Allan Poe e Mary Shelley explorando o sobrenatural e o fantástico, frequentemente incorporando contos de fadas e elementos mágicos em suas histórias.",
"Herói Romântico: O herói romântico era rebelde, em constante conflito com as normas sociais, valorizando a liberdade e a busca de desejos e paixões.", 
"Nacionalismo: O Romantismo frequentemente se alinhava com o nacionalismo, com autores usando elementos da história e cultura de seus países para fortalecer o sentimento de identidade nacional.",
"Crítica Social: Muitos escritores românticos usavam suas obras para criticar a sociedade, especialmente as desigualdades sociais, a injustiça e a alienação.",
"Estilo Literário: O estilo literário romântico, em comparação ao neoclassicismo anterior, era mais livre e expressivo. A poesia lírica era popular, mas o romantismo abraçou a prosa, peças de teatro e diversos gêneros.",
"O romantismo em Portugal se dividiu em três fases distintas. A primeira fase (1825-1840) foi marcada pelo nacionalismo. A segunda fase (1840-1860) teve um caráter ultrarromântico, caracterizado por um forte sentimentalismo, melancolia e pessimismo. Por fim, a terceira fase (1860-1870) exibiu características pré-realistas, explorando temas sociais, crítica sociopolítica e uma menor dose de idealização.",
"Os principais Autores do Romantismo em Portugal, foram: → Almeida Garrett (1799-1854), Alexandre Herculano (1810-1877), Camilo Castelo Branco (1825-1890), Soares de Passos (1826-1860), entre outros...",
"A poesia romântica brasileira passa por três fases distintas: a primeira (1836-1853) é indianista e nacionalista; a segunda (1853-1870) é ultrarromântica e marcada pelo pessimismo; a terceira (1870-1881) se caracteriza pela crítica sociopolítica e uma visão menos idealizada da realidade.",
"Na prosa, há três principais tipos de romances no contexto do romantismo brasileiro: o romance indianista, com ênfase em nacionalismo e história; o romance urbano, que retrata a vida burguesa no Rio de Janeiro; e o romance regionalista, explorando personagens e costumes do interior do Brasil.",
"Os principais Autores do Romantismo no Brasil, foram: → Gonçalves de Magalhães (1811-1882), Joaquim Manuel de Macedo (1820-1882), Maria Firmina dos Reis (1822-1917), Gonçalves Dias (1823-1864), José de Alencar (1829-1877), Álvares de Azevedo (1831-1852), entre outros..."]

const texth3 = ["O que foi?", "Características","em Portugal", "Principais Autores (Portugal):", "no Brasil", "Principais Autores (Brasil):"]

const imgs = ['img/Romantismo.jpg',
'img/ORomantismo.jpeg',
'img/ORCritica.jpeg',
'img/CCC.jpeg',
'img/RomBra.jpeg',
'img/AlvaresAzevedo.jpg',]

const innersh3 = [
    [0],
    [1,2,3,4,5,6,7],
    [8],
    [9],
    [10,11],
    [12]
]

const innerimg = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [9],
    [10,11],
    [12]
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