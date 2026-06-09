const Descrições = [
     "Criação de um layout para uma ficha de personagem com informaçoes sobre o personagens tal como atributos, habilidades e equipamentos, utilizando o framework React Native e a plataforma Expo Snack. <br><br> O projeto tem como objetivo criar uma interface intuitiva e funcional para os jogadores de RPG, permitindo que eles possam acessar facilmente as informações do personagem durante as sessões de jogo. <br><br> - Layout Simples e Intuitivo <br>  - Utilização de React Native e Expo Snack <br> - Foco na consulta rápida de informações",
     "Criação de um menu de filmes contendo uma lista de filmes, acessiveis atraves de botões, utilizando o framework React Native e a plataforma Expo Snack. <br><br> O projeto tem como objetivo criar uma interface intuitiva e funcional para os usuários, permitindo que eles possam acessar facilmente as informações dos filmes durante a navegação. <br><br> - Layout Simples e Intuitivo <br>  - Utilização de React Native e Expo Snack <br> - Foco na consulta rápida de informações do filme", 
     "Criação de um layout de apresentação pessoal contendo meu nome, minhas soft skills e hard skills, utilizando o framework React Native e a plataforma Expo Snack.<br><br>O projeto tem como objetivo apresentar minhas habilidades de forma simples, prática e visualmente organizada.<br><br>- Layout simples e objetivo<br>- Utilização de React Native e Expo Snack<br>- Foco em praticidade e clareza",
     "Criação de um layout de calculadora simples contendo dois campos para entrada de números, um botão para selecionar a operação e um botão para realizar o cálculo, utilizando o framework React Native e a plataforma Expo Snack.<br><br>O projeto tem como objetivo permitir a realização de operações matemáticas básicas de forma simples, prática e visualmente organizada.<br><br>- Interface centralizada e objetiva<br>- Dois campos para entrada de números<br>- Botão para selecionar a operação matemática<br>- Botão para calcular o resultado<br>- Exibição da resposta na tela<br>- Utilização de React Native e Expo Snack",
     "Criação de um layout para exibição das seleções participantes da Copa do Mundo 2026, contendo informações como país, ano de fundação, posição no ranking da FIFA e bandeira, utilizando o framework React Native e a plataforma Expo Snack.<br><br>O projeto tem como objetivo apresentar informações das seleções de forma organizada, prática e visualmente atrativa para os usuários.<br><br>- Lista de seleções com rolagem<br>- Exibição de bandeiras e informações detalhadas<br>- Layout simples e intuitivo<br>- Utilização de React Native e Expo Snack<br>- Foco na organização e visualização de dados",
     "Criação de um layout inspirado no jogo Guns and Blackpowder, com navegação entre telas contendo informações e descrições dos inimigos, utilizando React Native e Expo Snack.<br><br>O projeto tem como objetivo apresentar de forma clara e organizada as características e mecânicas dos inimigos do jogo.<br><br>- Interface temática inspirada em jogos<br>- Navegação intuitiva entre telas<br>- Exibição de informações dos inimigos<br>- Utilização de React Native e Expo Snack<br>- Foco em organização e experiência do usuário"
    ]
const HtmlText = document.getElementById("descrições");
const ImgHtml = document.getElementById("Img");
let mybutton = document.getElementById("btn");
const Imgs = ["./ToolBox/Images/Pg1/Projeto1.PNG", "./ToolBox/Images/Pg2/Projeto2.PNG", "./ToolBox/Images/Pg3/Img.PNG", "./ToolBox/Images/Pg4/OioiBaka.PNG", "./ToolBox/Images/Pg5/Yooooooooooo.png", "./ToolBox/Images/Pg6/HAHAHAHA.png"];
const Links = ["https://snack.expo.dev/@jose_isac1/nova_ficha", "https://snack.expo.dev/@jose_isac1/telas", "https://snack.expo.dev/@jose_isac1/app_aula01", "https://snack.expo.dev/@jose_isac1/calculadora_simples", "https://snack.expo.dev/@jose_isac1/aula---flatlist", "https://snack.expo.dev/@jose_isac1/navegacaodetelas-meu"];
const sound = new Audio("./ToolBox/Sounds/Click.mp3");
sound.volume = 0.2;

let index = 0;

function MostrarDescrições() {
    let descriçõesHTML = "";

    HtmlText.style.opacity = 0;
    ImgHtml.style.opacity = 0;
    setTimeout(() => {

        if (index > Descrições.length - 1) {
            index = 0;
        } 

        else if (index < 0) {
            index = Descrições.length - 1;
        }

        descriçõesHTML = Descrições[index];
        ImgHtml.src = Imgs[index]

        HtmlText.innerHTML = descriçõesHTML;

        HtmlText.style.opacity = 1;
        ImgHtml.style.opacity = 1;
    }, 300);
}

function Previous() {
    index--;
    sound.play();
    MostrarDescrições();
}

function Next() {
    index++;
    sound.play();
    MostrarDescrições();
}

function Redirecionar() {
    window.open(Links[index], "_blank");
}

function irPara(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    mybutton.style.opacity = 1;
    mybutton.style.display = "block";
    
  } else {
    mybutton.style.opacity = 0;
    mybutton.style.display = "none";
    
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onscroll = function() {scrollFunction()};
MostrarDescrições();
