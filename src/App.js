import React, { useState, useEffect, useCallback } from 'react';
import useSound from 'use-sound';
import bassSFX from './sounds/bass.mp3';
import drumSFX from './sounds/360749__therobotizer__vr-909.mp3';
import './App.css';

//const [play] = useSound(bassSFX, {soundEnabled});

function App() {
  const [soundEnabled, setsoundEnabled] = useState(true);
  const [volume, setvolume] = useState(0.5);
  const [interrupt, setinterrupt] = useState(true);
  const [play] = useSound(drumSFX, {
    sprite: {
      bass: [0, 250],
      snare: [500, 250],
      tom1: [1000, 400],
      tom2: [1600, 400],
      tom3: [2200, 400],
      ride: [4100, 1000],
      crash: [5400, 1000],
      open: [6500, 500],
      close: [7300, 300],
    },
    volume,
    soundEnabled,
    interrupt
  });

  var _volume = useCallback(event => {
    document.getElementById('display').innerHTML = "Volume:" + " " + Math.floor(document.getElementById('trackr').value * 100)
  },[]);

  var _listener = useCallback(event => {
    document.getElementById("display").innerHTML = event.target.value;
  },[]);

  useEffect(()=>{
    setvolume(document.getElementById('trackr').value);
  })

if(soundEnabled === true){
   document.querySelectorAll("#b").forEach(item => {
     item.addEventListener("mousedown",_listener, true);
   });
 }

 if(soundEnabled === false){
   document.querySelectorAll("#b").forEach(item => {
     item.removeEventListener("mousedown",_listener, true);
   });
 }

 useEffect(()=>{
   if(soundEnabled === true){
   document.getElementById('trackr').addEventListener("input",_volume, false);
}
  if(soundEnabled === false){
    document.getElementById('trackr').removeEventListener("input",_volume, false);
  }
});

function power(){
  setsoundEnabled(prevsoundEnabled => !prevsoundEnabled);
  document.getElementById('display').innerHTML = "";
}

  return (
    <div>
      <div className="pad">

         <div className="main">
           <button onMouseDown={()=> play({ id: "crash" })} value="Crash" id="b" className="button1">T</button>
           <button onMouseDown={()=> play({ id: "ride" })} value="Ride" id="b" className="button2">Y</button>
           <button onMouseDown={()=> play({ id: "close" })} value="Close Hi Hat" id="b" className="button3">K</button>
           <br/>
           <button onMouseDown={()=> play({ id: "tom3" })} value="Tom 3" id="b" className="button4">G</button>
           <button onMouseDown={()=> play({ id: "tom2" })} value="Tom 2" id="b" className="button5">H</button>
           <button onMouseDown={()=> play({ id: "tom1" })} value="Tom 1" id="b" className="button6">J</button>
           <br/>
           <button onMouseDown={()=> play({ id: "bass" })} value="Bass" id="b" className="button7">B</button>
           <button onMouseDown={()=> play({ id: "snare" })} value="Snare" id="b" className="button8">N</button>
           <button onMouseDown={()=> play({ id: "open" })} value="Open Hi Hat" id="b" className="button9">M</button>

           <div className="controls">
           <h2>Power</h2>
           <label class="rocker">
           <input type="checkbox" onClick={power} defaultChecked/>
           <span class="switch-left">On</span>
           <span class="switch-right">Off</span>
           </label>
           </div>

          <div className="volume">
          <div id="display" className="display">
          </div>
          <br/>
          <input id="trackr" type="range" step="0.01" defaultValue="0.5" min="0" max="1"/>
          </div>

          <div className="bank">
          <h2>Bank</h2>
          <label class="toggle">
          <input type="checkbox"/>
          <div>
        <span></span>
        </div>
        </label>
          </div>

         </div>
      </div>
    </div>
  );
}

export default App;
