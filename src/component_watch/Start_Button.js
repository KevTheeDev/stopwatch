import React from 'react';
import ReactDOM from 'react-dom';

class Start_Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          seconds: 0,
          clearId: null,
         };

         this.timer = this.timer.bind(this);
         this.startTimer = this.startTimer.bind(this);
        }

    timer(e){
        e.preventDefault();
        const btnClick = e.target.id;
        if (btnClick === 'start'){
        let id = setInterval(this.startTimer, 1000);
        this.setState({ clearId: id });
        }
    }

    render() { 
        return (
          <div className="App">
            <h1>Count: { this.state.seconds}</h1>
            <form onClick={ this.timer }> 
            <button id='start'>Start</button>
            </form>

            
          </div>
        );
      }
    }

export default Start_Button;