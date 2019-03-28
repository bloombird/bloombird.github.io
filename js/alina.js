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

    TweenMax.set('.disc', {x: 0, opacity:0.2});
    var bodyToStart = TweenMax.to('.disc', 1, {x: 550, opacity: 1, ease: Linear.easeNone});



    var bodyToStartScene = new ScrollMagic.Scene({
        triggerElement:'.trigger-1',
        triggerHook: 0.5,
        duration: 550
    })

    .setTween(bodyToStart)
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
    // .addIndicators()
    .addTo(controller);

    TweenMax.set('.img1', {x:-40, opacity:0});
    var bodyToStart4 = TweenMax.to('.img1', 1, {x: 0, opacity: 1, ease: Linear.easeNone});

    var bodyToStartScene4 = new ScrollMagic.Scene({
        triggerElement:'.trigger-4',
        triggerHook: 0.5,
    })

    .setTween(bodyToStart4)
    // .addIndicators()
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

    TweenMax.set('.reviews-4', {x:-40, opacity:0});
    var bodyToStart7 = TweenMax.to('.reviews-4', 1, {x: 0, opacity: 1, ease: Linear.easeNone});

    var bodyToStartScene7 = new ScrollMagic.Scene({
        triggerElement:'.trigger-7',
        triggerHook: 0.5,
    })

    .setTween(bodyToStart7)
    //.addIndicators()
    .addTo(controller);

    TweenMax.set('.img2', {x:-40, opacity:0});
    var bodyToStart8 = TweenMax.to('.img2', 1, {x: 0, opacity: 1, ease: Linear.easeNone});

    var bodyToStartScene8 = new ScrollMagic.Scene({
        triggerElement:'.trigger-8',
        triggerHook: 0.5,
    })

    .setTween(bodyToStart8)
    //.addIndicators()
    .addTo(controller);

    TweenMax.set('.img3', {x:-40, opacity:0});
    var bodyToStart8 = TweenMax.to('.img3', 1, {x: 0, opacity: 1, ease: Linear.easeNone});

    var bodyToStartScene8 = new ScrollMagic.Scene({
        triggerElement:'.trigger-9',
        triggerHook: 0.5,
    })

    .setTween(bodyToStart8)
    //.addIndicators()
    .addTo(controller);

    TweenMax.set('.reviews-5', {x:-40, opacity:0});
    var bodyToStart9 = TweenMax.to('.reviews-5', 1, {x: 0, opacity: 1, ease: Linear.easeNone});

    var bodyToStartScene8 = new ScrollMagic.Scene({
        triggerElement:'.trigger-10',
        triggerHook: 0.5,
    })

    .setTween(bodyToStart9)
    //.addIndicators()
    .addTo(controller);

});
