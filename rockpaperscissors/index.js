// Adds an event listener to each button/
for (let i = 0; i < 3; i++){
    const rock = document.getElementsByTagName('img')[i];
    rock.addEventListener('click', function() {
        if ($('img').hasClass('style')){
            $(this).removeClass('style');
        }else{
        $(this).addClass('style'); 
        }
    });
}

