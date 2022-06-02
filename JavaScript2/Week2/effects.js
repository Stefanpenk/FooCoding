gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.bg',
    start: 'top top',
    end: 'bottom 20%',
    scrub: 2,
  }
});

tl.to('.library', {
    scale: 2,
    transformOrigin: "center bottom",
  }, 0)
  .to('.bg_first', {
    scale: 1.3,
    transformOrigin: "center bottom",
  }, 0)
  .to('.bg_second', {
    scale: 1.1,
    transformOrigin: "center bottom",
  }, 0)

const trigger = document.querySelector('.container')

gsap.fromTo(trigger.children, {
  y: '+=200',
  opacity: 0
}, {
  y: 0,
  opacity: 1,
  stagger: 0.2,
  duration: 2,
  ease: 'easeInOut',
  scrollTrigger: {
    trigger: '.container',
    start: 'top center',
    // markers: true
  }
})