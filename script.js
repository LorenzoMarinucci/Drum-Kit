const A=document.querySelector('#A');
      S=document.querySelector('#S');
      D=document.querySelector('#D');
      F=document.querySelector('#F');
      H=document.querySelector('#H');
      G=document.querySelector('#G');
      L=document.querySelector('#L');
      J=document.querySelector('#J');
      K=document.querySelector('#K');

document.addEventListener('keypress', (e) => {
    const key=e.code;
    let boton;
    switch(key) {
        case "KeyA": {
            let audio = new Audio('sounds/boom.wav');
            audio.play();
            boton=A;
        }
            break;
        case "KeyS": {
            let audio = new Audio('sounds/clap.wav');
            audio.play();
            boton=S;
        }
            break;
        case "KeyD": {
            let audio = new Audio('sounds/hihat.wav');
            audio.play();
            boton=D;
        }
            break;
        case "KeyF": {
            let audio = new Audio('sounds/kick.wav');
            audio.play();
            boton=F;
        }
            break;
        case "KeyG": {
            let audio = new Audio('sounds/openhat.wav');
            audio.play();
            boton=G;
        }  
            break;
        case "KeyH": {
            let audio = new Audio('sounds/ride.wav');
            audio.play();
            boton=H;
        }
            break;
        case "KeyJ": {
            let audio = new Audio('sounds/snare.wav');
            audio.play();
            boton=J;
        }
            break;
        case "KeyK": {
            let audio = new Audio('sounds/tink.wav');
            audio.play();
            boton=K;
        }
            break;
        case "KeyL": {
            let audio = new Audio('sounds/tom.wav');
            audio.play();
            boton=L;
        }
    }
    if (boton) {
        boton.classList.add('presionado');
        setTimeout(function(){boton.classList.remove('presionado')}, 100);
    }
})

      