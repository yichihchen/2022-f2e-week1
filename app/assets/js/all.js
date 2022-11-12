gsap.registerPlugin(ScrollTrigger, TextPlugin);
/*進入動畫*/
gsap.from(".banner-container", { y: 1000, duration: 1.5 }); //banner滑入
/*分鏡動畫*/


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
        visibility:"visible",
        repeat:-1,
        yoyo:true,
        repeatDelay:0.3,
    }
)