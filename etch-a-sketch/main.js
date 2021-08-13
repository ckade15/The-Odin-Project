

let main = document.createElement('main');
document.body.appendChild(main);

const btn = document.getElementsByTagName('button')[0];
btn.addEventListener('click', clearSketch);

for (let i = 0; i < 256; i++){
    let div = document.createElement('div');
    document.getElementById('main').appendChild(div);
    const d = document.getElementsByTagName('div')[i];
    d.addEventListener('mouseover', function() {
        let randColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
        d.style.backgroundColor = randColor;
    });

}

function clearSketch(){
    for (let i = 0; i < 256; i++){
        document.getElementsByTagName('div')[i].style.backgroundColor = 'white';
    }
}