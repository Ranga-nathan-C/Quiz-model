
document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', function() {
        const isCorrect = this.getAttribute('data-correct') === 'true';
        this.classList.add(isCorrect ? 'correct' : 'incorrect');


        if(!isCorrect){
            this.closest('.options').querySelectorAll('.option').forEach(opt1=>{
                if(opt1.getAttribute('data-correct')==='true'){
                    opt1.classList.add('correct'); 
                    
                }
                opt1.style.pointerEvents = 'none'; 
            
            })  

        }   
        else{
            this.closest('.options').querySelectorAll('.option').forEach(opt2=>{
                opt2.style.pointerEvents = 'none'; 
            })

        }


        const currentOptions = this.closest('.options').querySelector('.option');
        
        currentOptions.forEach(opt => {
            opt.classList.add(opt.getAttribute('data-correct') === 'true' ? 'correct' : 'incorrect');
        });
    });
});
