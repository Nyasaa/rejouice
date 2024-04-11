var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    // delay: 1000,
    disableOnInteraction: false,
  },
  speed: 1500,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});

let mySplittext1 = new SplitType("#page1 #content h1", {type: "chars", display: "relative"});
let chars1 = mySplittext1.chars1;

gsap.to('.char',{
  y: 0,
  stagger: 0.05,
  delay: 0.2,
  duration: .1
});

let tl = gsap.timeline({defaults: {ease: "SlowMo.easeOut"}});

tl.to(".first h4", {
  y: 0,
  duration: 0.7,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "#main",
    scrub: 2
  }
});

let tl1 = gsap.timeline({defaults: {ease: "SlowMo.easeOut"}});

tl1.to(".second h3", {
  y: 0,
  duration: 0.7,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "#main",
    scrub: 2
  }
});

function locomotiveAnimation (){
  gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
el: document.querySelector("#main"),
smooth: true,

// for tablet smooth
tablet: { smooth: true },

// for mobile
smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
scrollTop(value) {
  return arguments.length
    ? locoScroll.scrollTo(value, 0, 0)
    : locoScroll.scroll.instance.scroll.y;
},
getBoundingClientRect() {
  return {
    top: 0,
    left: 0,
    width: window.innerWidth,
    height: window.innerHeight
  };
}
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}
locomotiveAnimation();
function cursorAnimation() {
    document.addEventListener("mousemove", function (dets) {
      gsap.to("#cursor", {
        left: dets.x,
        top: dets.y,
      });
    });
    document.querySelectorAll("#page1").forEach(function (elem) {
      elem.addEventListener("mouseenter", function () {
        gsap.to(cursor, {
          transform: "translate(-70%,-71%) scale(1)",
        });
      });
      elem.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
          transform: "translate(-50%,-50%) scale(0)",
        });
      });
    });
  }
  cursorAnimation();

