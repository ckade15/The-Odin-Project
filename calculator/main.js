let feed = document.getElementById('feed');

for (let i = 0; i < 18; i++){
    const btn = document.getElementsByClassName('btn')[i].addEventListener('click', () => {
        let p = document.createElement('p');
        try{
             const val = parseInt(document.getElementsByClassName('btn')[i].textContent);
             if (val === Nan ) {

             }else{
                 console.log(val);
                 p.textContent = 'Hi';
                 feed.appendChild(p);
            }
        } 
        catch{
            const val = document.getElementsByClassName('btn')[i].textContent;
            console.log(val);
        }
    });
}