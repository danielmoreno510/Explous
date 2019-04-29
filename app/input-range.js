const InputRange = {};

InputRange.init = (
    {
        container,
        range,
        color,
        background,
        showRange
    }
    ) => {
    if(container && range && color && background){
        var css = '.range{outline: none;-webkit-appearance: none;-moz-apperance: none;border-radius: 6px;height: 4px;transition: .2s;-webkit-transition: .2s;opacity: 0.8;background-image: -webkit-gradient(linear,left top,right top,color-stop(0.50, '+background+'),color-stop(0.50, #efefef));}.range:hover {opacity: 1;}.range::-webkit-slider-thumb {-webkit-appearance: none !important;background-color: '+color+';height: 14px;width: 14px;border-radius: 50%;cursor:grab}';
        var style = document.createElement('style');
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        document.getElementsByTagName('head')[0].appendChild(style);
        const cContainer = document.getElementById(container)
        const cRange = document.getElementById(range)
        const cSpan = document.createElement("span");
        if(showRange){
            cContainer.insertBefore(cSpan, cContainer.childNodes[0]);
            cSpan.style.position="absolute"
            cSpan.style.width="26px"
            cSpan.style.height="21px"
            cSpan.style.background=color
            cSpan.style.borderRadius="20px"
            cSpan.style.marginTop="-20px"
            cSpan.style.color="white"
            cSpan.style.fontSize="12px"
            cSpan.style.opacity="0"
            cSpan.style.transition="opacity 0.5s";
            cSpan.style.textAlign="center"
            cSpan.style.paddingTop="5px"
            var rangeChange=((cRange.clientWidth*cRange.value)/100)-12
            cSpan.textContent=cRange.value
            cSpan.style.marginLeft=rangeChange+"px"
        }
        cRange.setAttribute("class", "range");
        cRange.setAttribute("type", "range");
        cRange.setAttribute("id", range+"_range");
        cRange.onchange= function() { changeRange(this.value); };
        cRange.oninput= function() { changeRange(this.value); };

        function changeRange(val){
            if(showRange){
                cSpan.style.opacity="0.8"
                rangeChange=((cRange.clientWidth*val)/100)-12
                cSpan.textContent=val
                cSpan.style.marginLeft=rangeChange+"px"
                setTimeout(() => {
                    cSpan.style.opacity="0"
                }, 1000);
            }
            var value=val
            if(value<100){
                val=value
                val="0."+val
            }
            if(value<10){
                val=value
                val="0.0"+val
            }
            document.getElementById(range+"_range").style.backgroundImage='-webkit-gradient(linear, left top, right top,'+'color-stop('+val+', '+background+'),'+'color-stop('+val+', #efefef)'+ ')'
        }
    }else{
        var errorExplous="Explous Input Range - Error when assigning value to some variable: "
        if(!container){
            console.log(errorExplous+"container")
        }
        if(!range){
            console.log(errorExplous+"range")
        }
        if(!color){
            console.log(errorExplous+"color")
        }
        if(!background){
            console.log(errorExplous+"background")
        }
    }
}
  
export default InputRange