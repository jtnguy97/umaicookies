const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        //showing
        if(entry.isIntersecting){
            entry.target.classList.replace('fade_to_left', 'show');
            entry.target.classList.replace('fade_to_right', 'show');
        }
        //fading out
        else{
            entry.target.classList.replace('show', 'fade_to_left');
            entry.target.classList.replace('show', 'fade_to_right');
        }
    });
})

const hiddenElements = document.querySelectorAll('.fade');
hiddenElements.forEach((e1) => observer.observe(e1));
