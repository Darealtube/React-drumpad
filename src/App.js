import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';
import bassSFX from './sounds/bass.mp3';
import drumSFX from './sounds/360749__therobotizer__vr-909.mp3';
import './App.css';

//const [play] = useSound(bassSFX, {soundEnabled});

function App() {
  const [disp,setdisp] = useState(true);
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

  useEffect(()=>{
    setvolume(document.getElementById('trackr').value);
  })


function call(event){

  document.getElementById('display').innerHTML = this.value;
//  if(soundEnabled === false){
  //  document.querySelectorAll("#b").forEach(function(item){
  //    item.removeEventListener("mouseover", call, true);
  //  });
//  }
}
  //if(soundEnabled === true){
  //var el = document.querySelectorAll("#b");


var el = document.querySelectorAll("#b");


if(disp === true){
   for(var i = 0; i < el.length; i++){
    el[i].addEventListener("mousedown", call);
  }
}





//  useEffect(()=>{

  //  if(soundEnabled === false){
    //  var el = document.querySelectorAll("#b");
    //  el.forEach(function(el) {
    //   el.removeEventListener("mousedown", call);
    //});
    //}
  //},[soundEnabled]);

//useEffect(()=>{

//},[soundEnabled]);

  //Array.prototype.forEach.call(el, function(el) {
//    el.addEventListener("mousedown", call, true);
//});
//}

//  if(soundEnabled === false){
//    Array.prototype.forEach.call(el, function(el) {
  //    el.removeEventListener("mousedown", call);
//  });
  //  document.getElementById('display').innerHTML = "";
 //}
  //ellist.map(x => x.removeEventListener("mousedown",function(){document.getElementById('display').innerHTML = x.value}))
  //ellist[i].removeEventListener("mousedown",function(){document.getElementById('display').innerHTML = ellist[i].value}, true);
    //document.getElementById('display').innerHTML = display;

function power(){
  setsoundEnabled(prevsoundEnabled => !prevsoundEnabled);
  setdisp(prevdisp => !prevdisp);
  for(var i = 0; i < el.length; i++){
    el[i].removeEventListener("mousedown", call);
  }
  //if(soundEnabled === false){
//el.forEach(function(el) {
  //el.removeEventListener("mousedown", call, true);
//});
//}

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
