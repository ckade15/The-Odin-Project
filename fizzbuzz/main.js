function runFizz() {
    const num = document.getElementById('input').value;
    if (!parseInt(num)) {
        alert('Enter a valid input');
    } else {
        for (let i = 1; i <= num; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                console.log(`FizzBuzz`);
            } else if (i % 3 === 0) {
                console.log(`Fizz`);
            } else if (i % 5 === 0) {
                console.log(`Buzz`);
            } else {
                console.log(i);
            }
        }
        const p = document.getElementsByTagName('p');
        p.item(0).style.display = 'block'; 
    }
    
    
}

