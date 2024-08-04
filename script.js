
document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', function() {
        const isCorrect = this.getAttribute('data-correct') === 'true';
        this.classList.add(isCorrect ? 'correct' : 'incorrect');


        if(this.getAttribute('data-correct')==='false'){
            this.closest('.options').querySelectorAll('.option').forEach(opt1=>{
                if(opt1.getAttribute('data-correct')==='true'){
                    opt1.classList.add('correct')
                }
                
            })      
        }   

        const currentOptions = this.closest('.options').querySelector('.option');
        
        currentOptions.forEach(opt => {
            opt.classList.add(opt.getAttribute('data-correct') === 'true' ? 'correct' : 'incorrect');
            opt.style.pointerEvents = 'none'; 
        });
    });
});
