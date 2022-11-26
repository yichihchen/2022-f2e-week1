gsap.registerPlugin(ScrollTrigger, TextPlugin);
/*進入動畫*/
gsap.from(".banner-container", { y: 1000, duration: 1.5 }); //banner滑入

/*阿兵高冒出來-分鏡動畫*/
/*滑鼠滑到才冒出來*/
const tl = gsap.timeline();
tl.from(".red-duke", { xPercent: 50, yPercent: 50, duration: 1.5 });
tl.from(".dialogue2", {xPercent:20,scale:0.5,duration: 1});/*對話框縮小到放大,並從右下角開始變大*/

/*打字動畫*/
gsap.to(".typing1", {
    text: "羨慕別人的酷酷網頁動畫...",
    duration: 1.5,
    scrollTrigger: {
        trigger: ".typing1",
        toggleActions: "play pause resume reset",
    },
});

gsap.to(".typing2", {
    text: " 滿足不了同事的許願...",
    duration: 1.5,
    scrollTrigger: {
        trigger: ".typing2",
        toggleActions: "play pause resume reset",
    },
});

gsap.to(".typing3", {
    text: "動畫技能樹太雜無從下手...",
    duration: 1.5,
    scrollTrigger: {
        trigger: ".typing3",
        toggleActions: "play pause resume reset",
    },
});

gsap.fromTo(".cursor", 0, {
    visibility: "hidden",
},
    {
        visibility: "visible",
        repeat: -1,
        yoyo: true,
        repeatDelay: 0.3,
    }
)