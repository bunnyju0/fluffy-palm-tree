const section = document.querySelector('section'),
main = section.querySelector('.main'),
mainBtn = main.querySelector('.main button'),
questions = section.querySelectorAll('.questions');

mainBtn.addEventListener('click', function(){
    main.style.display = "none";
});
 