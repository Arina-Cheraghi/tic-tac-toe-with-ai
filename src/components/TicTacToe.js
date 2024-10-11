import React from 'react';
import "./assets/css/style.css"

function TicTacToe() {
  return (
    <div>
      {/* <div class="turn-container">
        <h3>Turn for</h3>
        <div class="turnbox align">X</div>
        <div class="turnbox align">O</div>
        <div class="bg"></div>
      </div> */}
      <div class="main-grid">
        <div class="box align">0</div>
        <div class="box align">1</div>
        <div class="box align">2</div>
        <div class="box align">3</div>
        <div class="box align">4</div>
        <div class="box align">5</div>
        <div class="box align">6</div>
        <div class="box align">7</div>
        <div class="box align">8</div>
      </div>
      <h2 id="result"></h2>
    </div>
  )
}

export default TicTacToe