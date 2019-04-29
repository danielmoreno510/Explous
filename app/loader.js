const Loader = {};

Loader.init = (
  {
    container,
    type,
    color,
    size,
    border
  }
  ) => {
    if(type=="spinner"){
        var sizeSpinner
        size=size.replace("px", "");
        if(size<=10){
            sizeSpinner=-0.8
        }
        if(size>10){
            sizeSpinner=-0
        }
        if(size>20){
            sizeSpinner=0.6
        }
        if(size>30){
            sizeSpinner=0.8
        }
        if(size>40){
            sizeSpinner=1
        }
        if(size>50){
            sizeSpinner=1.2
        }
        if(size>60){
            sizeSpinner=1.4
        }
        if(size>70){
            sizeSpinner=1.6
        }
        if(size>80){
            sizeSpinner=1.8
        }
        if(size>90){
            sizeSpinner=2
        }
        if(size>100){
            sizeSpinner=2.2
        }
        if(size>110){
            sizeSpinner=2.5
        }
        if(size>120){
            sizeSpinner=2.6
        }
        if(size>130){
            sizeSpinner=2.8
        }
        if(size>140){
            sizeSpinner=3
        }
    }
    if(container && type && color && size, border){
        var css = '.show {display: block;} .ring {display: inline-block;position: relative;width: '+size+';height: '+size+';}.ring div {box-sizing: border-box;display: block;position: absolute;width:'+size+';height: '+size+';margin: 6px;border: '+border+' solid '+color+';border-radius: 50%;animation: ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;border-color: '+color+' transparent transparent transparent;}.ring div:nth-child(1) {animation-delay: -0.45s;}.ring div:nth-child(2) {animation-delay: -0.3s;}.ring div:nth-child(3) {animation-delay: -0.15s;}@keyframes ring {0% {transform: rotate(0deg);}100% {transform: rotate(360deg);}}.dual-ring {display: inline-block;width: '+size+';height: '+size+';}.dual-ring:after {content: " ";display: block;width: '+size+';height: '+size+';margin: 1px;border-radius: 50%;border: '+border+' solid '+color+';border-color: '+color+' transparent '+color+' transparent;animation: dual-ring 1.2s linear infinite;}@keyframes dual-ring {0% {transform: rotate(0deg);}100% {transform: rotate(360deg);}}.spinner {color: official;display: inline-block;position: relative;width: '+(size*3)+'px;height: '+(size*3)+'px;}.spinner div {margin-top:'+((size*1.4)-24)+'px;margin-left:'+size*0.8+'px;transform-origin: 32px 32px;animation: spinner 1.2s linear infinite;}.spinner div:after {content: " ";display: block;position: absolute;top: '+(-size*sizeSpinner)+'px;left: 28px;width: '+size/3+'px;height: '+size+'px;border-radius: 20%;background: '+color+';}.spinner div:nth-child(1) {transform: rotate(0deg);animation-delay: -1.1s;}.spinner div:nth-child(2) {transform: rotate(30deg);animation-delay: -1s;}.spinner div:nth-child(3) {transform: rotate(60deg);animation-delay: -0.9s;}.spinner div:nth-child(4) {transform: rotate(90deg);animation-delay: -0.8s;}.spinner div:nth-child(5) {transform: rotate(120deg);animation-delay: -0.7s;}.spinner div:nth-child(6) {transform: rotate(150deg);animation-delay: -0.6s;}.spinner div:nth-child(7) {transform: rotate(180deg);animation-delay: -0.5s;}.spinner div:nth-child(8) {transform: rotate(210deg);animation-delay: -0.4s;}.spinner div:nth-child(9) {transform: rotate(240deg);animation-delay: -0.3s;}.spinner div:nth-child(10) {transform: rotate(270deg);animation-delay: -0.2s;}.spinner div:nth-child(11) {transform: rotate(300deg);animation-delay: -0.1s;}.spinner div:nth-child(12) {transform: rotate(330deg);animation-delay: 0s;}@keyframes spinner {0% {opacity: 1;}100% {opacity: 0;}}';
        var style = document.createElement('style');
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        document.getElementsByTagName('head')[0].appendChild(style);

        const lContainer=document.getElementById(container)
        if(type=="ring"){
            lContainer.setAttribute("class", "ring");
            const div1 = document.createElement("div");
            lContainer.appendChild(div1);
            const div2 = document.createElement("div");
            lContainer.appendChild(div2);
            const div3 = document.createElement("div");
            lContainer.appendChild(div3);
            const div4 = document.createElement("div");
            lContainer.appendChild(div4);
        }
        
        if(type=="dual-ring"){
            lContainer.setAttribute("class", "dual-ring");
        }

        if(type=="spinner"){
            lContainer.setAttribute("class", "spinner");
            const div1 = document.createElement("div");
            lContainer.appendChild(div1);
            const div2 = document.createElement("div");
            lContainer.appendChild(div2);
            const div3 = document.createElement("div");
            lContainer.appendChild(div3);
            const div4 = document.createElement("div");
            lContainer.appendChild(div4);
            const div5 = document.createElement("div");
            lContainer.appendChild(div5);
            const div6 = document.createElement("div");
            lContainer.appendChild(div6);
            const div7 = document.createElement("div");
            lContainer.appendChild(div7);
            const div8 = document.createElement("div");
            lContainer.appendChild(div8);
            const div9 = document.createElement("div");
            lContainer.appendChild(div9);
            const div10 = document.createElement("div");
            lContainer.appendChild(div10);
            const div11 = document.createElement("div");
            lContainer.appendChild(div11);
            const div12 = document.createElement("div");
            lContainer.appendChild(div12);
            
        }

    }else{
        var errorExplous="Explous Loader - Error when assigning value to some variable: "
        if(!container){
        console.log(errorExplous+"container")
        }
        if(!type){
        console.log(errorExplous+"type")
        }
        if(!color){
        console.log(errorExplous+"color")
        }
        if(!size){
        console.log(errorExplous+"size")
        }
        if(!border){
            console.log(errorExplous+"border")
        }
    }
}
  
export default Loader