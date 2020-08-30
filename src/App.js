import React, { useState, useEffect, useCallback } from 'react';
import useSound from 'use-sound';
import bassSFX from './sounds/bass.mp3';
import drumSFX from './sounds/360749__therobotizer__vr-909.mp3';
import trapSFX from './sounds/909set.mp3'
import './App.css';


function App() {
  const [soundEnabled, setsoundEnabled] = useState(true);
  const [volume, setvolume] = useState(0.5);
  const [interrupt, setinterrupt] = useState(true);
  const [bank,setbank] = useState(true);
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
  const [play2] = useSound(trapSFX, {
    sprite: {
      weird: [0, 800],
      matic: [1200, 1500],
      ramen: [3600, 1000],
      hihats5: [6400, 500],
      tome: [5700, 500],
      clap: [7000, 500],
      ohh: [7800, 800],
      ride4: [9100, 1000],
      snare5: [12200, 300],
    },
    volume,
    soundEnabled
  });

 //CUSTOM HOOK (CHANGE)
  const useKeyboardBindings = map => {
    useEffect(() => {
      const handlePress = ev => {
        const handler = map[ev.key];

        if (typeof handler === 'function') {
          handler();
        }
      };

      window.addEventListener('keyup', handlePress);

      return () => {
        window.removeEventListener('keyup', handlePress);
      };
    }, [map]);
  };

  //EVENT LISTENERS FOR VOLUME CHANGE AND ON MOUSEDOWN
  var _volume = useCallback(event => {
    document.getElementById('display').innerHTML = "Volume:" + " " + document.getElementById('trackr').value
  },[]);

  var _listener = useCallback(event => {
    document.getElementById("display").innerHTML = event.target.value;
  },[]);

//(CHANGE)
var el = document.querySelectorAll('#b');
  useKeyboardBindings({
   "t": function(){
     bank ? play({ id: "crash" }) : play2({id: "weird"});
     document.getElementById('display').innerHTML = el[0].value;
   },
   "y": () => play({ id: 'snare' }),
   "k": () => play({ id: 'tom1' }),
   "g": () => play({ id: 'tom2' }),
 });
//(CHANGE)

 //CHANGES VOLUME WHEN RANGE SLIDER VALUE IS CHANGED
  useEffect(()=>{
    setvolume(document.getElementById('trackr').value);
  })

 //ADDS EVENT LISTENERS TO BUTTONS
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

//ADDS EVENT LISTENER TO RANGE SLIDER
 useEffect(()=>{
   if(soundEnabled === true){
   document.getElementById('trackr').addEventListener("input",_volume, false);
}
  if(soundEnabled === false){
    document.getElementById('trackr').removeEventListener("input",_volume, false);
  }
});

//HANDLES DISPLAYING BANK CHANGE
useEffect(()=>{
  if(soundEnabled){
  if(bank === true){
    document.getElementById('display').innerHTML = "909 Set"
  }
  if(bank === false){
    document.getElementById('display').innerHTML = "808 Set"
  }
}
},[bank]);

//ON OFF SWITCH
function power(){
  setsoundEnabled(prevsoundEnabled => !prevsoundEnabled);
  document.getElementById('display').innerHTML = "";
}

//BANK SWITCH
function banks(){
  setbank(prevbank => !prevbank);
}

  return (
    <div>
      <div className="pad">

         <div className="main">
           <button onMouseDown={()=> bank ? play({ id: "crash" }) : play2({id: "weird"})} value={bank? "Crash" : "Weird 808"} id="b" className="button1">T</button>
           <button onMouseDown={()=> bank ? play({ id: "ride" }) : play2({id: "matic"})} value={bank? "Ride" : "Matic 808"} id="b" className="button2">Y</button>
           <button onMouseDown={()=> bank ? play({ id: "close" }) : play2({id: "ramen"})} value={bank? "Close Hi Hat" : "Ramen 808"} id="b" className="button3">K</button>
           <br/>
           <button onMouseDown={()=> bank ? play({ id: "tom3" }) : play2({id: "tome"})} value={bank? "Tom 3" : "Tom 808"} id="b" className="button4">G</button>
           <button onMouseDown={()=> bank ? play({ id: "tom2" }) : play2({id: "hihats5"})} value={bank? "Tom 2" : "Close HH 808"} id="b" className="button5">H</button>
           <button onMouseDown={()=> bank ? play({ id: "tom1" }) : play2({id: "clap"})} value={bank? "Tom 1" : "Clap 808"} id="b" className="button6">J</button>
           <br/>
           <button onMouseDown={()=> bank ? play({ id: "bass" }) : play2({id: "ohh"})} value={bank ? "Bass" : "Open HH 808"} id="b" className="button7">B</button>
           <button onMouseDown={()=> bank ? play({ id: "snare" }) : play2({id: "ride4"})} value={bank ? "Snare" : "Ride 808"} id="b" className="button8">N</button>
           <button onMouseDown={()=> bank ? play({ id: "open" }) : play2({id: "snare5"})} value={bank ? "Open Hi Hat" : "Snare 808"} id="b" className="button9">M</button>

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
          <input onClick={banks} type="checkbox"/>
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
