import React, { Component } from 'react';
import Nav from './components/nav';
import Login from './components/Login';
import SideMenu from './components/sidemenu';
import mySound from './tct.mp3'

class Tct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      timeLeft: 190,
      targetX: 0,
      targetY: 0,
      gameOver: false,
      gameStarted: false
    };

    this.handleTargetClick = this.handleTargetClick.bind(this);
    this.startGame = this.startGame.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleRestartClick = this.handleRestartClick.bind(this);
  }

  componentDidMount() {
    this.timerInterval = null;
  }

  startGame() {
    this.setState({
      score: 0,
      timeLeft: 190,
      gameOver: false,
      gameStarted: true
    });

    this.generateNewTarget();
    this.timerInterval = setInterval(() => {
      if (this.state.timeLeft === 0) {
        clearInterval(this.timerInterval);
        this.setState({
          gameOver: true
        });
      } else {
        this.setState({
          timeLeft: this.state.timeLeft - 1
        });
      }
    }, 1000);
  }

  generateNewTarget() {
    const targetSize = 50;
    const maxX = window.innerWidth - targetSize;
    const maxY = window.innerHeight - targetSize;
    const targetX = Math.floor(Math.random() * maxX);
    const targetY = Math.floor(Math.random() * maxY);

    this.setState({
      targetX,
      targetY
    });
  }

  handleTargetClick() {
    this.setState({
      score: this.state.score + 1
    });

    this.generateNewTarget();
  }

  handleStartClick() {
    this.startGame();
  }

  handleRestartClick() {
    clearInterval(this.timerInterval);
    this.setState({
      score: 0,
      timeLeft: 190,
      targetX: 0,
      targetY: 0,
      gameOver: false,
      gameStarted: false
    });
  }

  render() {
    const { score, timeLeft, targetX, targetY, gameOver, gameStarted } = this.state;

    const date = new Date().toLocaleString();

    return (
        <div className='tct'> 
            <img className='bg' src='https://cdn.discordapp.com/attachments/1077441049024282756/1077702004127834132/Momessito_Training_camp_RPGFantasy_inside_the_castlecastle_trai_7208cfc2-e635-4715-bd4e-9cceac346f1c.png'/>       
            <img className='bg' src='https://www.icegif.com/wp-content/uploads/2023/02/icegif-1172.gif'/>       
        <Nav></Nav>
        <Login></Login>
        <SideMenu></SideMenu>
        <iframe src={mySound} allow="autoplay" id="iframeAudio">
      </iframe>
      <div className="RandomClickGame">

        <div className="header">
          <div className="score">Score: {score}</div>
          <div className="time-left">Time left: {timeLeft}s</div>
          <div className="date">{date}</div>
        </div>
        {gameOver ? (
          <div className="game-over-message">
            Game over! Your score is {score}
            <button className="restart-button" onClick={this.handleRestartClick}>
              Restart Game
            </button>
          </div>
        ) : (
          <div
            className="target"
            style={{
              left: targetX,
              top: targetY
            }}
            onClick={this.handleTargetClick}
          />
        )}
        {!gameStarted && !gameOver && (
          <button className="start-button" onClick={this.handleStartClick}>
            Start Game
          </button>
        )}
      </div>
      </div>
    );
  }
}

export default Tct;
