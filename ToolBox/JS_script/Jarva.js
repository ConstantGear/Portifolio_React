const Descrições = [
     "Criação de um layout para uma ficha de personagem com informaçoes sobre o personagens tal como atributos, habilidades e equipamentos, utilizando o framework React Native e a plataforma Expo Snack. <br><br> O projeto tem como objetivo criar uma interface intuitiva e funcional para os jogadores de RPG, permitindo que eles possam acessar facilmente as informações do personagem durante as sessões de jogo. <br><br> - Layout Simples e Intuitivo <br>  - Utilização de React Native e Expo Snack <br> - Foco na consulta rápida de informações",
     "Criação de um menu de filmes contendo uma lista de filmes, acessiveis atraves de botões, utilizando o framework React Native e a plataforma Expo Snack. <br><br> O projeto tem como objetivo criar uma interface intuitiva e funcional para os usuários, permitindo que eles possam acessar facilmente as informações dos filmes durante a navegação. <br><br> - Layout Simples e Intuitivo <br>  - Utilização de React Native e Expo Snack <br> - Foco na consulta rápida de informações do filme", 
     "Criação de um layout de apresentação pessoal contendo meu nome, minhas soft skills e hard skills, utilizando o framework React Native e a plataforma Expo Snack.<br><br>O projeto tem como objetivo apresentar minhas habilidades de forma simples, prática e visualmente organizada.<br><br>- Layout simples e objetivo<br>- Utilização de React Native e Expo Snack<br>- Foco em praticidade e clareza"]
const HtmlText = document.getElementById("descrições")
const ImgHtml = document.getElementById("Img")
const Imgs = ["./ToolBox/Images/Pg1/Capturar.png", "./ToolBox/Images/Pg2/Capturar.png", "./ToolBox/Images/Pg3/Img.PNG"]
const Links = ["https://snack.expo.dev/@jose_isac1/nova_ficha", "https://snack.expo.dev/@jose_isac1/telas", "https://snack.expo.dev/@jose_isac1/app_aula01"]
const sound = new Audio("./ToolBox/Sounds/Click.mp3");
sound.volume = 0.3;

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

MostrarDescrições();