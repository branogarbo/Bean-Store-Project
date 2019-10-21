function show() {
  var input = document.getElementById('input');
  var hidden = document.getElementById('hidden');
  var pricemult = document.getElementById('pricemult');

  if (input.value == 0 || input.value == "") {
    hidden.style = "display:none;";
    
    pricemult.style = "color:yellow;";
    setTimeout(()=>{pricemult.style = "color:red;"}, 60);
    setTimeout(()=>{pricemult.style = "color:yellow;"}, 120);
    setTimeout(()=>{pricemult.style = "color:red;"}, 180);
    setTimeout(()=>{pricemult.style = "color:yellow;"}, 240);
    setTimeout(()=>{pricemult.style = "color:red;"}, 300);
  }
  else {
    hidden.style = "display:flex;";
  }
}
function hide() {
  hidden.style = "display:none;";
}
function ent(event) {
  if (event.key == 'Enter') {show()}
}

//////easteregg//////

function eastereggA() {
  anime({
    targets:'#logo',
    background:[
      'linear-gradient(45deg,#51A3A3 0%,#51A3A3 20%,#75485E 20%,#75485E 40%,#CB904D 40%,#CB904D 60%,#DFCC74 60%,#DFCC74 80%,#C3E991 80%,#C3E991 100%)',
      'linear-gradient(405deg,#51A3A3 0%,#51A3A3 20%,#75485E 20%,#75485E 40%,#CB904D 40%,#CB904D 60%,#DFCC74 60%,#DFCC74 80%,#C3E991 80%,#C3E991 100%)'
    ],
    elasticity:400,
    duration:1250,
  });
}

function easteregg() {
  anime({
    targets:'#logo',
    background:[
      'linear-gradient(45deg,#51A3A3 0%,#51A3A3 20%,#75485E 20%,#75485E 40%,#CB904D 40%,#CB904D 60%,#DFCC74 60%,#DFCC74 80%,#C3E991 80%,#C3E991 100%)',
      'linear-gradient(-45deg,#51A3A3 0%,#51A3A3 20%,#75485E 20%,#75485E 40%,#CB904D 40%,#CB904D 60%,#DFCC74 60%,#DFCC74 80%,#C3E991 80%,#C3E991 100%)'
    ],
    elasticity:300,
    duration:750,
  });
  document.getElementById('logo').onclick = () => {easteregg2()}
}
function easteregg2() {
  anime({
    targets:'#logo',
    background:[
      'linear-gradient(-45deg,#51A3A3 0%,#51A3A3 20%,#75485E 20%,#75485E 40%,#CB904D 40%,#CB904D 60%,#DFCC74 60%,#DFCC74 80%,#C3E991 80%,#C3E991 100%)',
      'linear-gradient(-135deg,#51A3A3 0%,#51A3A3 20%,#75485E 20%,#75485E 40%,#CB904D 40%,#CB904D 60%,#DFCC74 60%,#DFCC74 80%,#C3E991 80%,#C3E991 100%)'
    ],
    elasticity:300,
    duration:500,
  });
  document.getElementById('logo').onclick = () => {easteregg3()}
}
function easteregg3() {
  anime({
    targets:'#logo',
    background:[
      'linear-gradient(-135deg,#51A3A3 0%,#51A3A3 20%,#75485E 20%,#75485E 40%,#CB904D 40%,#CB904D 60%,#DFCC74 60%,#DFCC74 80%,#C3E991 80%,#C3E991 100%)',
      'linear-gradient(-225deg,#51A3A3 0%,#51A3A3 20%,#75485E 20%,#75485E 40%,#CB904D 40%,#CB904D 60%,#DFCC74 60%,#DFCC74 80%,#C3E991 80%,#C3E991 100%)'
    ],
    elasticity:300,
    duration:750,
  });
  document.getElementById('logo').onclick = () => {easteregg4()}
}
function easteregg4() {
  anime({
    targets:'#logo',
    background:[
      'linear-gradient(-225deg,#51A3A3 0%,#51A3A3 20%,#75485E 20%,#75485E 40%,#CB904D 40%,#CB904D 60%,#DFCC74 60%,#DFCC74 80%,#C3E991 80%,#C3E991 100%)',
      'linear-gradient(-315deg,#51A3A3 0%,#51A3A3 20%,#75485E 20%,#75485E 40%,#CB904D 40%,#CB904D 60%,#DFCC74 60%,#DFCC74 80%,#C3E991 80%,#C3E991 100%)'
    ],
    elasticity:300,
    duration:500,
  });
  document.getElementById('logo').onclick = () => {easteregg()}
}