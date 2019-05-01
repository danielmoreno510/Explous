const Carousel = {};

Carousel.init = (
    {
        container,
        size,
        data,
        arrow,
        color,
        background,
        time,
        full,
    }
) => {
    var activeCarousel=true
    if(container && size && data && color && time && background){
        var css = '.carousel_point{transition:background 0.2s;margin: 6px;width: 21px;height: 21px;border-radius: 11px;background: '+background+';cursor: pointer;border: 1px solid '+color+';}.carousel_point:active{opacity:0.8}.carousel_points{display: flex;position: absolute;z-index: 1;}.carousel_arrow{cursor:pointer;position: absolute;font-size: 29px;z-index: 1;background: '+background+';color:'+color+';padding: 9px;padding-left: 18px;padding-right: 18px;padding-bottom: 11px;border-radius: 26px;}.carousel_arrow:active{opacity:0.8}.carousel_div_inactive{-webkit-transition: transform 0s !important;transition: transform 0s !important;}.carousel_div{-webkit-transition: transform 0.5s;transition: transform 0.5s;}.carousel_images{width:100%}';
        var style = document.createElement('style');
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        document.getElementsByTagName('head')[0].appendChild(style);

        var img1=new Image();
        img1.src=data[0];
        var image1=data[0]
        var index=0
        var img2=new Image();
        img2.src=data[1];
        var image2=data[1]
        var cContainer=document.getElementById(container)
        cContainer.style.display="-webkit-box"
        cContainer.style.borderRadius="6px"
        cContainer.style.overflow="hidden";
        const points = document.createElement("div");
        cContainer.appendChild(points);
        points.setAttribute("id", container+"_points");
        points.setAttribute("class", "carousel_points");
        for(var x in data){
            const point = document.createElement("div");
            points.appendChild(point);
            point.setAttribute("id", container+"_point_"+x);
            point.setAttribute("class", "carousel_point");
            point.onclick = function() { carouselPoint(this); };
        }
        document.getElementById(container+"_point_0").style.background=color;
        const left = document.createElement("div");
        cContainer.appendChild(left);
        left.setAttribute("id", container+"_left");
        left.setAttribute("class", "carousel_arrow");
        left.innerHTML="<"
        left.onclick = function() { carouselMove("left"); };
        if(!arrow){
            left.style.display="none"
        }
        const right = document.createElement("div");
        cContainer.appendChild(right);
        right.setAttribute("id", container+"_right");
        right.setAttribute("class", "carousel_arrow");
        right.innerHTML=">"
        right.onclick = function() { carouselMove("right"); };
        if(!arrow){
            right.style.display="none"
        }
        const div1 = document.createElement("div");
        cContainer.appendChild(div1);
        div1.setAttribute("id", container+"_div1");
        div1.setAttribute("class", "carousel_div");
        div1.appendChild(img1);
        img1.setAttribute("class", "carousel_images");
        img1.setAttribute("id", container+"_image_1");
        const div2 = document.createElement("div");
        cContainer.appendChild(div2);
        div2.setAttribute("id", container+"_div2");
        div2.setAttribute("class", "carousel_div");
        div2.appendChild(img2);
        img2.setAttribute("class", "carousel_images");
        img2.setAttribute("id", container+"_image_2");
        div1.style.width="100%";
        div2.style.width="100%";
        if(full){
            div1.style.display="flex"
            div2.style.display="flex"
        }
        setTimeout(() => {
            calcCarousel(cContainer)
        }, 100);
        carouselActive()
        function carouselMove(move){
            if(activeCarousel){
                activeCarousel=false
                if(move=="left"){
                    var transition=cContainer.offsetWidth
                    for(var x=data.length;x>=0;x--){
                        if(x>0){
                            document.getElementById(container+"_point_"+(x-1)).style.background=background;
                        }
                        if(data[x]==image1){
                            img2=new Image();
                            img2.src=data[x];
                            image2=data[x]
                            if(x-1==-1){
                                img1=new Image();
                                img1.src=data[data.length-1];
                                image1=data[data.length-1]
                                index=data.length-1
                                document.getElementById(container+"_point_"+(data.length-1)).style.background=color;
                            }else{
                                img1=new Image();
                                img1.src=data[x-1];
                                image1=data[x-1]
                                index=x-1
                                document.getElementById(container+"_point_"+(x-1)).style.background=color;
                            }
                            x=-1
                        }
                    }
                    document.getElementById(container+"_div1").innerHTML=""
                    document.getElementById(container+"_div2").innerHTML=""
                    document.getElementById(container+"_div1").appendChild(img1);
                    document.getElementById(container+"_div2").appendChild(img2);
                    img1.setAttribute("class", "carousel_images");
                    img2.setAttribute("class", "carousel_images");
                    document.getElementById(container+"_div1").classList.add("carousel_div_inactive");
                    document.getElementById(container+"_div2").classList.add("carousel_div_inactive");
                    document.getElementById(container+"_div1").style.transform="translate3d(-"+transition+"px,0,0)"
                    document.getElementById(container+"_div2").style.transform="translate3d(-"+transition+"px,0,0)"
                    setTimeout(() => {
                        document.getElementById(container+"_div1").classList.remove("carousel_div_inactive");
                        document.getElementById(container+"_div2").classList.remove("carousel_div_inactive");
                        document.getElementById(container+"_div1").style.transform="translate3d(0,0,0)"
                        document.getElementById(container+"_div2").style.transform="translate3d(0,0,0)"
                        setTimeout(() => {
                            activeCarousel=true
                        }, 400);
                    }, 50);
                }else{
                    var transition=cContainer.offsetWidth
                    document.getElementById(container+"_div1").style.transform="translate3d(-"+transition+"px,0,0)"
                    document.getElementById(container+"_div2").style.transform="translate3d(-"+transition+"px,0,0)"
                    setTimeout(() => {
                        for(var x=0;x<data.length;x++){
                            document.getElementById(container+"_point_"+x).style.background=background;
                            if(data[x]==image2){
                                if(x==0){
                                    document.getElementById(container+"_point_"+(data.length-1)).style.background=background;
                                }
                                document.getElementById(container+"_point_"+x).style.background=color;
                                img1=new Image();
                                img1.src=data[x];
                                image1=data[x]
                                index=x
                                if(x+1==data.length){
                                    img2=new Image();
                                    img2.src=data[0];
                                    image2=data[0]
                                }else{
                                    img2=new Image();
                                    img2.src=data[x+1];
                                    image2=data[x+1]
                                }
                                x=data.length
                            }
                        }
                        document.getElementById(container+"_div1").innerHTML=""
                        document.getElementById(container+"_div2").innerHTML=""
                        document.getElementById(container+"_div1").appendChild(img1);
                        document.getElementById(container+"_div2").appendChild(img2);
                        img1.setAttribute("class", "carousel_images");
                        img2.setAttribute("class", "carousel_images");
                        document.getElementById(container+"_div1").classList.add("carousel_div_inactive");
                        document.getElementById(container+"_div2").classList.add("carousel_div_inactive");
                        document.getElementById(container+"_div1").style.transform="translate3d(0,0,0)"
                        document.getElementById(container+"_div2").style.transform="translate3d(0,0,0)"
                        setTimeout(() => {
                            document.getElementById(container+"_div1").classList.remove("carousel_div_inactive");
                            document.getElementById(container+"_div2").classList.remove("carousel_div_inactive");
                            activeCarousel=true
                        }, 50);
                    }, 400);
                }
            }
        }
        function carouselPoint(image){
            image = image.id.replace(container+"_point_", "");
            if(image>index){
                img2.src=data[image];
                image2=data[image]
                document.getElementById(container+"_div2").innerHTML=""
                document.getElementById(container+"_div2").appendChild(img2);
                setTimeout(() => {
                    carouselMove("right")
                }, 100);
            }
            if(image<index){
                activeCarousel=false
                for(var x in data){
                    document.getElementById(container+"_point_"+x).style.background=background;
                }
                document.getElementById(container+"_point_"+image).style.background=color;
                var transition=cContainer.offsetWidth
                image=Number(image)
                img1.src=data[(image)];
                image1=data[image]
                img2.src=data[index];
                image2=data[index]
                document.getElementById(container+"_div2").innerHTML=""
                document.getElementById(container+"_div2").appendChild(img1);
                document.getElementById(container+"_div1").innerHTML=""
                document.getElementById(container+"_div2").innerHTML=""
                document.getElementById(container+"_div1").appendChild(img1);
                document.getElementById(container+"_div2").appendChild(img2);
                img1.setAttribute("class", "carousel_images");
                img2.setAttribute("class", "carousel_images");
                document.getElementById(container+"_div1").classList.add("carousel_div_inactive");
                document.getElementById(container+"_div2").classList.add("carousel_div_inactive");
                document.getElementById(container+"_div1").style.transform="translate3d(-"+transition+"px,0,0)"
                document.getElementById(container+"_div2").style.transform="translate3d(-"+transition+"px,0,0)"
                setTimeout(() => {
                    document.getElementById(container+"_div1").classList.remove("carousel_div_inactive");
                    document.getElementById(container+"_div2").classList.remove("carousel_div_inactive");
                    document.getElementById(container+"_div1").style.transform="translate3d(0,0,0)"
                    document.getElementById(container+"_div2").style.transform="translate3d(0,0,0)"
                    setTimeout(() => {
                        img2.src=data[image+1];
                        image2=data[image+1]
                        activeCarousel=true
                    }, 50);
                }, 50);
            }
        }
    }else{
        var errorExplous="Explous Carousel - Error when assigning value to some variable: "
        if(!container){
            console.log(errorExplous+"container")
        }
        if(!size){
            console.log(errorExplous+"size")
        }
        if(!data){
            console.log(errorExplous+"data")
        }
        if(!color){
            console.log(errorExplous+"color")
        }
        if(!time){
            console.log(errorExplous+"time")
        }
        if(!background){
            console.log(errorExplous+"background")
        }
    }
    window.addEventListener("resize", onResizeCarousel);
    function onResizeCarousel(){
        calcCarousel(cContainer)
    }
    function calcCarousel(cContainer){
        cContainer.style.width=size
        cContainer.style.height=cContainer.offsetWidth/2+"px"
        document.getElementById(container+"_left").style.marginTop=((cContainer.offsetWidth/2)/2)-40+"px"
        document.getElementById(container+"_left").style.marginLeft="6px"
        document.getElementById(container+"_right").style.marginTop=((cContainer.offsetWidth/2)/2)-40+"px"
        document.getElementById(container+"_right").style.marginLeft=cContainer.offsetWidth-59+"px"
        document.getElementById(container+"_points").style.marginTop=(cContainer.offsetWidth/2)-40+"px"
        document.getElementById(container+"_points").style.marginLeft=((cContainer.offsetHeight)-(document.getElementById(container+"_points").offsetWidth/2))+"px"
    }
    function carouselActive(){
        setTimeout(() => {
            if(activeCarousel){
                var transition=cContainer.offsetWidth
                document.getElementById(container+"_div1").style.transform="translate3d(-"+transition+"px,0,0)"
                document.getElementById(container+"_div2").style.transform="translate3d(-"+transition+"px,0,0)"
                setTimeout(() => {
                    if(activeCarousel){
                        for(var x=0;x<data.length;x++){
                            document.getElementById(container+"_point_"+x).style.background=background;
                            if(data[x]==image2){
                                if(x==0){
                                    document.getElementById(container+"_point_"+(data.length-1)).style.background=background;
                                }
                                document.getElementById(container+"_point_"+x).style.background=color;
                                img1=new Image();
                                img1.src=data[x];
                                image1=data[x]
                                index=x
                                if(x+1==data.length){
                                    img2=new Image();
                                    img2.src=data[0];
                                    image2=data[0]
                                }else{
                                    img2=new Image();
                                    img2.src=data[x+1];
                                    image2=data[x+1]
                                }
                                x=data.length
                            }
                        }
                        document.getElementById(container+"_div1").innerHTML=""
                        document.getElementById(container+"_div2").innerHTML=""
                        document.getElementById(container+"_div1").appendChild(img1);
                        document.getElementById(container+"_div2").appendChild(img2);
                        img1.setAttribute("class", "carousel_images");
                        img2.setAttribute("class", "carousel_images");
                        document.getElementById(container+"_div1").classList.add("carousel_div_inactive");
                        document.getElementById(container+"_div2").classList.add("carousel_div_inactive");
                        document.getElementById(container+"_div1").style.transform="translate3d(0,0,0)"
                        document.getElementById(container+"_div2").style.transform="translate3d(0,0,0)"
                        setTimeout(() => {
                            document.getElementById(container+"_div1").classList.remove("carousel_div_inactive");
                            document.getElementById(container+"_div2").classList.remove("carousel_div_inactive");
                            carouselActive()
                        }, 50);
                    }else{
                        carouselActive()
                    }
                }, 400);
            }else{
                carouselActive()
            }
        }, time);
    }
}
  
export default Carousel