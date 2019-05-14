$(document).ready(function(){

    var controller = new ScrollMagic.Controller({vertical: false});

    TweenMax.set('.arrowbig', {x:-40, opacity:1});
    var bodyToStart0 = TweenMax.to('.arrowbig', 0.5, {x: 0, opacity: 0, ease: Linear.easeNone});

    var bodyToStartScene0 = new ScrollMagic.Scene({
        triggerElement: '.trigger-0',
        triggerHook: 0.5
    })
    .setTween(bodyToStart0)
    //.addIndicators()
    .addTo(controller);

    TweenMax.set('.disc', {x: 0});
    var bodyToStart = TweenMax.to('.disc', 1, {x: 800, ease: Linear.easeNone});
    var bodyToStartScene = new ScrollMagic.Scene({
        triggerElement:'.trigger-1',
        triggerHook: 0.5,
        duration: 800
    })

    .setTween(bodyToStart)
    //.addIndicators()
    .addTo(controller);


    TweenMax.set('.ball', {x: 0});
    var bodyToStart11 = TweenMax.to('.ball', 1, {x: 950, ease: Linear.easeNone});
    var bodyToStartScene11= new ScrollMagic.Scene({
        triggerElement:'.trigger-1',
        triggerHook: 0.5,
        duration: 1200
    })
    .setTween(bodyToStart11)
    //.addIndicators()
    .addTo(controller);

    TweenMax.set('.hedgehog', {x: 0});
    var bodyToStart12 = TweenMax.to('.hedgehog', 1, {x: 800, ease: Linear.easeNone});
    var bodyToStartScene12= new ScrollMagic.Scene({
        triggerElement:'.trigger-1',
        triggerHook: 0.5,
        duration: 1000
    })
    .setTween(bodyToStart12)
    //.addIndicators()
    .addTo(controller);

    TweenMax.set('.cone', {x: 0});
    var bodyToStart13 = TweenMax.to('.cone', 1, {x: 750, ease: Linear.easeNone});
    var bodyToStartScene13= new ScrollMagic.Scene({
        triggerElement:'.trigger-1',
        triggerHook: 0.5,
        duration: 1000
    })
    .setTween(bodyToStart13)
    //.addIndicators()
    .addTo(controller);


    TweenMax.set('.content', {x:-40, opacity:0});
    var bodyToStart2 = TweenMax.to('.content', 0.5, {x: 0, opacity: 1, ease: Linear.easeNone});

    var bodyToStartScene2 = new ScrollMagic.Scene({
        triggerElement:'.trigger-2',
        triggerHook: 0.5,
    })

    .setTween(bodyToStart2)
    //.addIndicators()
    .addTo(controller);

    TweenMax.set('.reviews-1', {x:-40, opacity:0});
    var bodyToStart3 = TweenMax.to('.reviews-1', 1, {x: 0, opacity: 1, ease: Linear.easeNone});

    var bodyToStartScene3 = new ScrollMagic.Scene({
        triggerElement:'.trigger-3',
        triggerHook: 0.5,
    })

    .setTween(bodyToStart3)
    //.addIndicators()
    .addTo(controller);


    var yellowanimation = new ScrollMagic.Scene({triggerElement: ".trigger-4"})
                            .setClassToggle(".yellowband01", "longer")
                            //.addIndicators({name: "1 - add a class"})
                            .addTo(controller);
    var yellowanimation02 = new ScrollMagic.Scene({triggerElement: ".trigger-4-2"})
                            .setClassToggle(".yellowband02", "longer02")
                            //.addIndicators({name: "2 - add a class"})
                            .addTo(controller);

    TweenMax.set('.circlequestion', {opacity:0});
    var rotate = TweenMax.to(".circlequestion", 1, {className: "+=rotate", opacity:1});
    var circlequestion = new ScrollMagic.Scene({
                            triggerElement: ".trigger-5",
                            duration: 400,
                            offset: 100
                        })
                            .setTween(rotate)
                            //.addIndicators({name: "rotate"})
                            .addTo(controller);

    var blackline = new ScrollMagic.Scene({triggerElement: ".trigger-6"})
                            .setClassToggle(".line", "longer03")
                            //.addIndicators({name: "2 - add a class"})
                            .addTo(controller);


    TweenMax.set('.ifblack', {x:-40, opacity:0});
    var ifblackScene = TweenMax.to('.ifblack', 0.5, {x: 0, opacity: 1, ease: Linear.easeNone});
    var ifblackStartScene = new ScrollMagic.Scene({
                                triggerElement:'.trigger-6',
                                triggerHook: 0.5,
                                offset: 200
                            })
                            .setTween(ifblackScene)
                            //.addIndicators()
                            .addTo(controller);

    TweenMax.set('.ifwhite', {x:-40, opacity:0});
    var ifwhiteScene = TweenMax.to('.ifwhite', 0.5, {x: 0, opacity: 1, ease: Linear.easeNone});
    var ifwhiteStartScene = new ScrollMagic.Scene({
                                triggerElement:'.trigger-6',
                                triggerHook: 0.5,
                                offset: 300
                            })
                            .setTween(ifwhiteScene)
                            .addTo(controller);
    TweenMax.set('.ifgrey', {x:-40, opacity:0});
    var ifgreyScene = TweenMax.to('.ifgrey', 0.5, {x: 0, opacity: 1, ease: Linear.easeNone});
    var ifgreyStartScene = new ScrollMagic.Scene({
                                triggerElement:'.trigger-6',
                                triggerHook: 0.5,
                                offset: 500
                            })
                            .setTween(ifgreyScene)
                            .addTo(controller);

    var blackline2 = new ScrollMagic.Scene({triggerElement: ".trigger-6", offset: 800})
                            .setClassToggle(".line2", "longer04")
                            .addTo(controller);



    TweenMax.set('.reviews-2', {x:-40, opacity:0});
    var bodyToStart5 = TweenMax.to('.reviews-2', 1, {x: 0, opacity: 1, ease: Linear.easeNone});

    var bodyToStartScene5 = new ScrollMagic.Scene({
        triggerElement:'.trigger-5',
        triggerHook: 0.5,
    })

    .setTween(bodyToStart5)
    // .addIndicators()
    .addTo(controller);

    TweenMax.set('.reviews-3', {x:-40, opacity:0});
    var bodyToStart6 = TweenMax.to('.reviews-3', 1, {x: 0, opacity: 1, ease: Linear.easeNone});

    var bodyToStartScene6 = new ScrollMagic.Scene({
        triggerElement:'.trigger-6',
        triggerHook: 0.5,
    })

    .setTween(bodyToStart6)
    // .addIndicators()
    .addTo(controller);

    TweenMax.set('.reviews-5', {x:-40, opacity:0});
    var bodyToStart7 = TweenMax.to('.reviews-5', 1, {x: 0, opacity: 0.4, ease: Linear.easeNone});

    var bodyToStartScene6 = new ScrollMagic.Scene({
        triggerElement:'.trigger-10',
        triggerHook: 0.5,
    })

    .setTween(bodyToStart7)
    // .addIndicators()
    .addTo(controller);


    TweenMax.set('.reviews-4', {x:-40, opacity:0});
    var bodyToStart7 = TweenMax.to('.reviews-4', 1, {x: 0, opacity: 1, ease: Linear.easeNone});

    var bodyToStartScene7 = new ScrollMagic.Scene({
        triggerElement:'.trigger-7',
        triggerHook: 0.5,
    })

    .setTween(bodyToStart7)
    //.addIndicators()
    .addTo(controller);



    var taiji = new ScrollMagic.Scene({
        triggerElement:'.trigger-9'
    })
    .setClassToggle(".img2", "scaletaiji")
    //.addIndicators({name: "scale"})
    .addTo(controller);



    var tweenplay = TweenMax.staggerFromTo('.animategame', 2, {left: 1200}, {left: 430, ease: Back.easeOut}, 0.15);

    var playscene = new ScrollMagic.Scene({triggerElement: '.trigger-11', duration: 350})
                        .setTween(tweenplay)
                        //.addIndicators()
                        .addTo(controller);


    TweenMax.set('.story9', {x:-40, opacity:0});
    var story9 = TweenMax.to('.story9', 0.5, {x: 0, opacity: 1, ease: Linear.easeNone});
    var story9startscene = new ScrollMagic.Scene({
                                triggerElement:'.trigger-11',
                                triggerHook: 0.5,
                                offset: 500
                            })
                            .setTween(story9)
                            .addTo(controller);

});
