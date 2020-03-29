import React from 'react';
import './App.css';
import Start_Button from './component_watch/Start_Button';


class App extends React.Component {
  // the REACT code just really need the constructor(props) and the super (props)
  constructor(props) {
    super(props);
    // class component requires .this keyword 
    this.state = { 
      seconds: 0,
      clearId: null,
     };

     // include a bind
     // binds are needed to reference the ".this" keyword --> to reference what's in the component
     // particularly they bind the ".this" keyword to the rest of the code
       this.timer = this.timer.bind(this);
       this.startTimer = this.startTimer.bind(this);
  }
  
  timer(e){
    // '.e' keep clock from starting without a button press
    // '.e' keeps page from refreshing
    e.preventDefault();
    // target the id whether it equals start/pause/reset in e.target.id
    // .target is a real keyword
    const btnClick = e.target.id;
    if (btnClick === 'start') {
      //set Interval goes to a place on the computer
      // look up setInterval??????????????????????????
      let id = setInterval(this.startTimer, 1000);
      //clears the id --> is actual keyword
      this.setState({ clearId: id });
      // /* try this instead later */ (this.setState({seconds: +1})) /* didn't work */
    } else if (btnClick === 'reset') {
        this.setState({ seconds: 0 });
        // this.setState({  })
    } else if (btnClick === 'pause') {
      clearInterval(this.state.clearId);
    }
  }

  startTimer(){
    //add one to second every time
    this.setState({ seconds: this.state.seconds + 1 })
  }

  render() { 
    return (
      <div className="App">
        <h1>Count: { this.state.seconds }</h1>
        <form onClick={ this.timer }>        
          <button id="reset">Reset</button>
          <button id='start'>Start</button>
          <button id="pause">Pause</button>
        </form>
        
      </div>
    );
  }
}

export default App;






/* CountUp Code that works (reference in psuedo) */
/*
import { useCountUp } from 'react-countup';
const CompleteHook = () => {
  const { countUp, start, pauseResume, reset, update } = useCountUp({
    start: 0,
    end: 1234567,
    delay: 1000,
    duration: 5,
    onReset: () => console.log('Resetted!'),
    onUpdate: () => console.log('Updated!'),
    onPauseResume: () => console.log('Paused or resumed!'),
    onStart: ({ pauseResume }) => console.log(pauseResume),
    onEnd: ({ pauseResume }) => console.log(pauseResume),
  });
  return (
    <div>
      <div>{countUp}</div>
      <button onClick={start}>Start</button>
      <button onClick={reset}>Reset</button>
      <button onClick={pauseResume}>Pause/Resume</button>
      <button onClick={() => update(2000)}>Update to 2000</button>
    </div>
  );
}
export default CompleteHook;
-----------------------------------------------------------  */











/* ------------------------- Dead Codes This One Didn't Work -------  
------------------ App.js ---------------------

mport React from 'react';
import './App.css';
import Start_Button from './component_watch/Start_Button';

function App() {
    return (
      <div className="App">
        <h1>Count: 0</h1>
        <button >Reset</button>
        <button onClick={Start_Button}>Start</button>
        <button>Pause</button>
      </div>
    );
  }
export default App;
-------------------------------------------------------   */








/*
---------------------------   Start Button.js -----------------------------

import React from 'react';
import ReactDOM from 'react-dom';

class Start_Button extends React.Component {
    state = { 
        seconds: 0,
     }

     startCountBtn(){
        // why are there so many paranthesis??
        // setInterval will make the seconds increase by one+ than the second before it
        //setInterval set to this.start interval
         this.startInterval = setInterval(() => {
             this.setState(({seconds}) => ({
                 //calls the {seconds} in parenthesis
                 seconds: seconds + 1
             }))
             //I want it to only be able to go up to 80 sec.
         }, 80 )
     }

     render() { 
         //call the state above using this.state
         //make seconds a variable --> wrap seconds in{}
         //set state to variable second(s)        
         const {seconds} = this.state
        return ( 
            <div>
                <h1>Count: {seconds}</h1>
                ternary "if" statement makes the clock display the seconds 
                    <h2>{ seconds < 80 ? `${ seconds }`: seconds}</h2>
            </div>
         );
    }
}
 ReactDom.render(<Start_Button />, document.getElementById('App'));
 */
