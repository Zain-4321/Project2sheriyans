
// Shery.mouseFollower()
// Shery.makeMagnet(".magnet")
// Shery.hoverWithMediaCircle(".hvr",{videos:['./0.mp4','./2.mp4','./3.mp4']})

// gsap.to(".fleftelm",{
//     scrollTrigerr:{
//         trigger:"#fimages",
//         pin:true,
//         start:"top top",
//         end:"bottom bottom",
//         endTrigger:".last",
//         scrub:1
//     },
//     y:"-300%",
//     ease:Power1
// })
// let sections=document.querySelectorAll(".fleftelm")

// Shery.imageEffect(".images",{
//     style:4,
//   config: { onMouse: { value: 1 } },
//     slideStyle:(setScroll)=>{
//         sections.forEach(function(section,index){
//             scrollTrigerr.create({

//                 trigger:section,
//                 start:"top top",
//                 scrub:1,
//                 onUpdate:function(prog){
//                     setScroll(prog.progress+index)
//                 }
//             })
//         })
//     }
// })








// Pehle plugin register karo
gsap.registerPlugin(ScrollTrigger);

Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr", {
    videos: ['./0.mp4', './2.mp4', './3.mp4']
});

// GSAP scroll animation
gsap.to(".fleftelm", {
    scrollTrigger: { // ✅ spelling correct
        trigger: "#fimages",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub: 1
    },
    y: "-300%",
    ease: Power1.easeInOut
});

let sections = document.querySelectorAll(".fleftelm");

// Shery image effect
Shery.imageEffect(".images", {
    style: 4,
    config: { onMouse: { value: 1 } },
    slideStyle: (setScroll) => {
        sections.forEach(function (section, index) {
            ScrollTrigger.create({ // ✅ spelling correct
                trigger: section,
                start: "top top",
                scrub: 1,
                onUpdate: function (prog) {
                    setScroll(prog.progress + index);
                }
            });
        });
    }
});
