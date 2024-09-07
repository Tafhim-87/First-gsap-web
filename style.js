function page1Animation(){
    var tl = gsap.timeline();

tl.from('nav .logo, .menu ul li a, nav button', {
    y:-30,
    opacity:0,
    duration:.7,
    stagger:0.15
})

tl.from('.center-part1 h1', {
    x:-200,
    opacity:0,
    duration:.5
})

tl.from('.center-part1 p', {
    x:-200,
    opacity:0,
    duration:.4
}) 

tl.from('.center-part1 button', {
    opacity:0,
    duration:.4
})

tl.from('.center-part2 img', {   
    opacity:0,
    duration:.4,
    x:200
}, '-=1')

tl.from('.section1bottom img', {
    y:-30,
    opacity:0,
    duration:.4,
    stagger:0.1,
})
};

function page2Animation(){
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.services',
            scroller:'body',
            start: 'top 50%',
            end: 'top 0%',
            scrub: 2,
        }
    });
    
    tl2.from('.services', {
        x:-200,
        opacity:0,
        duration:.4,
    })
    
    tl2.from('.box.left', {
        x:-200,
        opacity:0,
        duration:.4,
        stagger:0.1,
    },'anim')  
    
    tl2.from('.box.right', {
        x:200,
        opacity:0,
        duration:.4,
        stagger:0.1,
    },'anim')
}

page1Animation();
page2Animation();

let btn = document.querySelector('.opn');
let menu = document.querySelector('.menu');
let close = document.querySelector('.close');
tl3 = gsap.timeline();





tl3.to(menu,{
    width:"100%",
    duration: .5,
})

tl3.from('.menu ul li a',{
    x: 350,
    stagger: .1,
    duration: .5,
})

tl3.from(close,{
    opacity: 0,
})

tl3.pause();

btn.addEventListener('click', (x) => {
    tl3.play();
})

close.addEventListener('click', () => {
    tl3.reverse();
})
