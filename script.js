var path = document.querySelector("#dashed-path")

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: 'power1.out' });

var action = gsap
    .timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
            trigger: '.svg-drawing svg',
            scrub: true,
            start: 'top -100px',
            end: 'bottom center',

        },
    })
    .fromTo(path, 3, { strokeDashoffset:0 }, { strokeDashoffset: 1 });