import { initQuizz } from './quizz.js';
import './style.css';

document.querySelector('#app').innerHTML = `
        <div class="header">
          <h1>My Quizz</h1>
          Pour accéder a la page /about <a href="about/">click ici</a>
        </div>


        <div class="topnav">
          <a href="#" alt="logo de facebook" class="fa fa-facebook"></a>
          <a href="#" alt="logo de twitter" class="fa fa-twitter"></a>
          <a href="#" alt="logo de google" class="fa fa-google"></a>
          <a href="#" alt="logo de linkedin" class="fa fa-linkedin"></a>
          <a href="#" alt="logo de youtube" class="fa fa-youtube"></a>
          <a href="#" alt="logo de insta" class="fa fa-instagram"></a>
        </div>

        <div class="row">
          <div class="leftcolumn">
            <div class="card">
              <h1>Nom étudiant</h1>
              <h5>description</h5>
              <div id="quiz">
                <h1>A TOI DE JOUER</h1>
                <div id="question"></div>
                <div id="proposals"></div>
              </div>
            </div>
          </div>
          <div class="rightcolumn">
            <div class="card">
              <img src="/question.webp" alt="question mark" width="300" height="350">
            </div>
        </div>

        <div class="footer">
          <h2>@2024</h2>
        </div>
`

initQuizz();