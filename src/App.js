import React, { useState, useEffect, useCallback } from 'react';
import useSound from 'use-sound';
import bassSFX from './sounds/bass.mp3';
import drumSFX from './sounds/360749__therobotizer__vr-909.mp3';
import trapSFX from './sounds/909set.mp3'
import './App.css';
import useKeyboardBindings from './useKeyboardBindings.js';


function App() {
  var el = document.querySelectorAll('#b');
  const [soundEnabled, setsoundEnabled] = useState(true);
  const [volume, setvolume] = useState(0.5);
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
    soundEnabled
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

  //EVENT LISTENERS FOR VOLUME CHANGE AND ON MOUSEDOWN
  var _volume = useCallback(event => {
    document.getElementById('display').innerHTML = "Volume:" + " " + Math.floor(document.getElementById('trackr').value * 100)
  },[]);

  var _listener = useCallback(event => {
    document.getElementById("display").innerHTML = event.target.value;
  },[]);

//KEYBOARD BINDING
  useKeyboardBindings({
   "t": function(){
     if(soundEnabled){
     bank ? play({ id: "crash" }) : play2({id: "ride4"})
     document.getElementById('display').innerHTML = el[0].value;
     el[0].style.backgroundImage = "linear-gradient(65deg, #9D3907, #F2BB05)";
     el[0].style.transform = "translateY(10px)";
     setTimeout(()=>{el[0].style.backgroundImage = "linear-gradient(85deg, #838386, #C6C6C6)"; el[0].style.transform = "none";},60)
   }
   },
   "y": function(){
     if(soundEnabled){
     bank ? play({ id: "ride" }) : play2({id: "matic"})
     document.getElementById('display').innerHTML = el[1].value;
     el[1].style.backgroundImage = "linear-gradient(65deg, #9D3907, #F2BB05)";
     el[1].style.transform = "translateY(10px)";
     setTimeout(()=>{el[1].style.backgroundImage = "linear-gradient(85deg, #838386, #C6C6C6)"; el[1].style.transform = "none";},60)
   }
   },
   "k": function(){
     if(soundEnabled){
     bank ? play({ id: "close" }) : play2({id: "ohh"})
     document.getElementById('display').innerHTML = el[2].value;
     el[2].style.backgroundImage = "linear-gradient(65deg, #9D3907, #F2BB05)";
     el[2].style.transform = "translateY(10px)";
     setTimeout(()=>{el[2].style.backgroundImage = "linear-gradient(85deg, #838386, #C6C6C6)"; el[2].style.transform = "none";},60)
   }
   },
   "g": function(){
     if(soundEnabled){
     bank ? play({ id: "tom3" }) : play2({id: "tome"})
     document.getElementById('display').innerHTML = el[3].value;
     el[3].style.backgroundImage = "linear-gradient(65deg, #9D3907, #F2BB05)";
     el[3].style.transform = "translateY(10px)";
     setTimeout(()=>{el[3].style.backgroundImage = "linear-gradient(85deg, #838386, #C6C6C6)"; el[3].style.transform = "none";},60)
   }
   },
   "h": function(){
     if(soundEnabled){
     bank ? play({ id: "tom2" }) : play2({id: "ramen"})
     document.getElementById('display').innerHTML = el[4].value;
     el[4].style.backgroundImage = "linear-gradient(65deg, #9D3907, #F2BB05)";
     el[4].style.transform = "translateY(10px)";
     setTimeout(()=>{el[4].style.backgroundImage = "linear-gradient(85deg, #838386, #C6C6C6)"; el[4].style.transform = "none";},60)
   }
   },
   "j": function(){
     if(soundEnabled){
     bank ? play({ id: "tom1" }) : play2({id: "clap"})
     document.getElementById('display').innerHTML = el[5].value;
     el[5].style.backgroundImage = "linear-gradient(65deg, #9D3907, #F2BB05)";
     el[5].style.transform = "translateY(10px)";
     setTimeout(()=>{el[5].style.backgroundImage = "linear-gradient(85deg, #838386, #C6C6C6)"; el[5].style.transform = "none";},60)
   }
   },
   "b": function(){
     if(soundEnabled){
     bank ? play({ id: "bass" }) : play2({id: "weird"})
     document.getElementById('display').innerHTML = el[6].value;
     el[6].style.backgroundImage = "linear-gradient(65deg, #9D3907, #F2BB05)";
     el[6].style.transform = "translateY(10px)";
     setTimeout(()=>{el[6].style.backgroundImage = "linear-gradient(85deg, #838386, #C6C6C6)"; el[6].style.transform = "none";},60)
   }
   },
   "n": function(){
     if(soundEnabled){
     bank ? play({ id: "snare" }) : play2({id: "snare5"})
     document.getElementById('display').innerHTML = el[7].value;
     el[7].style.backgroundImage = "linear-gradient(65deg, #9D3907, #F2BB05)";
     el[7].style.transform = "translateY(10px)";
     setTimeout(()=>{el[7].style.backgroundImage = "linear-gradient(85deg, #838386, #C6C6C6)"; el[7].style.transform = "none";},60)
   }
   },
   "m": function(){
     if(soundEnabled){
     bank ? play({ id: "open" }) : play2({id: "hihats5"})
     document.getElementById('display').innerHTML = el[8].value;
     el[8].style.backgroundImage = "linear-gradient(65deg, #9D3907, #F2BB05)";
     el[8].style.transform = "translateY(10px)";
     setTimeout(()=>{el[8].style.backgroundImage = "linear-gradient(85deg, #838386, #C6C6C6)"; el[8].style.transform = "none";},60)
   }
   },
 });


 //CHANGES VOLUME WHEN RANGE SLIDER VALUE IS CHANGED






//  console.log(document.getElementById('trackr').value)

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

//ADDS EVENT LISTENER TO RANGE SLIDER (DISPLAY);
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
           <button onMouseDown={()=> bank ? play({ id: "crash" }) : play2({id: "ride4"})} value={bank? "Crash" : "Weird 808"} id="b" className="button1">T</button>
           <button onMouseDown={()=> bank ? play({ id: "ride" }) : play2({id: "matic"})} value={bank? "Ride" : "Matic 808"} id="b" className="button2">Y</button>
           <button onMouseDown={()=> bank ? play({ id: "close" }) : play2({id: "ohh"})} value={bank? "Close Hi Hat" : "Ramen 808"} id="b" className="button3">K</button>
           <br/>
           <button onMouseDown={()=> bank ? play({ id: "tom3" }) : play2({id: "tome"})} value={bank? "Tom 3" : "Tom 808"} id="b" className="button4">G</button>
           <button onMouseDown={()=> bank ? play({ id: "tom2" }) : play2({id: "ramen"})} value={bank? "Tom 2" : "Close HH 808"} id="b" className="button5">H</button>
           <button onMouseDown={()=> bank ? play({ id: "tom1" }) : play2({id: "clap"})} value={bank? "Tom 1" : "Clap 808"} id="b" className="button6">J</button>
           <br/>
           <button onMouseDown={()=> bank ? play({ id: "bass" }) : play2({id: "weird"})} value={bank ? "Bass" : "Open HH 808"} id="b" className="button7">B</button>
           <button onMouseDown={()=> bank ? play({ id: "snare" }) : play2({id: "snare5"})} value={bank ? "Snare" : "Ride 808"} id="b" className="button8">N</button>
           <button onMouseDown={()=> bank ? play({ id: "open" }) : play2({id: "hihats5"})} value={bank ? "Open Hi Hat" : "Snare 808"} id="b" className="button9">M</button>

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
