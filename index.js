const words = ['FORMIGA', 'PLANETA', 'TERRA'];
const forca = document.getElementById('forca');
var number = parseInt(Math.random() * words.length );
let teclasPresionadas = [];
let clicou = false;
let tentatias = 5;


function writeWord(){
  
    if(!clicou){
        for(let i = 0; i< words[number].length; i++){
            forca.innerHTML += `_ `;
        }

    }
    

    console.log(words[number]);
    clicou = true;
    teclasPresionadas = []
    forca.innerHTML = ''
}
function addleter(key){
    if(words[number].includes(key)){
        console.log('tem')
    }
}
window.addEventListener('keydown', (keyPressed) => {
    let pressedKey = keyPressed.key.toUpperCase();

    addleter(pressedKey);
    if(!teclasPresionadas.includes(pressedKey)){
        //check for special keys
        if(pressedKey == 'META' || pressedKey == 'SHIFT' || pressedKey == 'CONTROL' || pressedKey == 'ALT'){
            return
        }

        teclasPresionadas.push(pressedKey);

        console.log( words[number].indexOf(pressedKey))
        for(let i = 0; i < words[number].length; i++){
            console.log(words[number].indexOf(pressedKey))
            
        }

        forca.innerHTML = '';

        
    }else{
        console.log('Tecla já pressionada!')
    }
    console.log(teclasPresionadas);


})



