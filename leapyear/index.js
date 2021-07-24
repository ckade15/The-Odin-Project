// Returns true if it is a leap year and false if not
function calcLeap(year) {
    if (year % 4 === 0){
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            }
            else{
                return false;
            }
        }
        else {
            return true;
        }
    }
    else{
        return false;
    }
} 

const btn = document.getElementsByTagName('button')[0];


btn.addEventListener('click', function() {
    const inp = document.getElementsByTagName('input')[0].value;
    let yr = parseInt(inp);
    if (calcLeap(yr) == true){
        document.getElementById('year').innerText = yr + ' is a leap year.';
    }else{
        document.getElementById('year').innerText = yr + ' is not a leap year.';
    }
});

window.addEventListener('keydown', function(e){
    if (e.key === 'Enter') {
        const inp = document.getElementsByTagName('input')[0].value;
    let yr = parseInt(inp);
    if (calcLeap(yr) == true){
        document.getElementById('year').innerText = yr + ' is a leap year.';
    }else{
        document.getElementById('year').innerText = yr + ' is not a leap year.';
    }
    }
});