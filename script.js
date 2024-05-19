// Loading Page
window.addEventListener('load',function(){
    document.querySelector('.loading').style.display = 'none';
    document.querySelector('main').style.display = 'block';
});

// Night Mode
function nightMode(){
    document.body.classList.toggle('nightMode');
    document.querySelector('h4').classList.toggle('nightMode');
    document.querySelector('p').classList.toggle('nightMode');
};

// snow effect
document.addEventListener('DOMContentLoaded', () => {
    const ballContainer = document.querySelector('.ball-container');
    const amount = 20;

    for(let i = 0; i < amount; i++){
        const ball = document.createElement('div');
        ball.textContent = '.';
        ball.classList.add('ball');

        ball.style.left = `${Math.random() * 100}vw`;
        ball.style.animationDuration = `${Math.random() * 3 + 2}s`;
        ball.style.opacity = Math.random();
        ball.style.fontSize = `${Math.random() * 20 + 10}px`;
        ball.style.animationDelay = `${Math.random() * 1}s`;

        if(window.innerWidth <= 700){
            ball.style.fontSize = `${Math.random() * 10 + 10}px`;
        }

        ballContainer.append(ball);
    }
})

// Parallax Scroll Effect
$(window).scroll(function(){
    let wScroll = $(this).scrollTop();

    if(window.innerWidth <= 700){
        $('.atas').css({
            'transform' : `translate(0px,${wScroll/2}%)`
        }); 
    
        $('button').css({
            'transform' : `translate(0px,${wScroll/5}%)`
        });
    
        $('.intro').css({
            'transform' : `translate(0px,${wScroll/9}%)`
        });
        return
    }

    $('.atas').css({
        'transform' : `translate(0px,${wScroll/5}%)`
    }); 

    $('button').css({
        'transform' : `translate(0px,${wScroll/10}%)`
    });

    $('.intro').css({
        'transform' : `translate(0px,${wScroll/15}%)`
    });
    
});
