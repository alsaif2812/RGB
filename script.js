var rect = document.querySelector("#center");
rect.addEventListener('mousemove', function (details) {
    var rectanglelocation = rect.getBoundingClientRect();
    var rectinsideval = details.clientX - rectanglelocation.left;
    if(rectinsideval<rectanglelocation.width/2){
        var redcolor = gsap.utils.mapRange(0, rectanglelocation.width/2, 255, 0, rectinsideval);
        gsap.to(rect, {
            backgroundColor: `rgb(${redcolor}, 0, 0)`,
            ease: 'power4',
        })
    }
    else{
        var bluecolor = gsap.utils.mapRange(rectanglelocation.width/2, rectanglelocation.width, 0, 255, rectinsideval);
        gsap.to(rect, {
            backgroundColor: `rgb(0, 0, ${bluecolor})`,
            ease: 'power4',

    })
    
    }
})
rect.addEventListener('mouseleave',function(){
    gsap.to(rect,{
        backgroundColor: 'white'
    })
})