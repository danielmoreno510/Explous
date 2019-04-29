const SlideToggle = {};

SlideToggle.init = (
    {
        container,
        slideToggle,
        color,
        background
    }
    ) => {
    if(container && slideToggle && color && background){
        var css = '.slide-toggle-switch {position: relative;display: inline-block;width: 54px;height: 28px;}.slide-toggle-switch input {display:none;}.slide-toggle-slider {position: absolute;cursor: pointer;top: 0;left: 0;right: 0;bottom: 0;background-color: #bfbfbf4f;border: 1px solid #E6E6E6;-webkit-transition: .4s;transition: .4s;}.slide-toggle-slider:before {position: absolute;content: "";height: 24px;width: 24px;left: 1px;bottom: 1px;background-color: white;-webkit-transition: .4s;transition: .4s;}input:checked + .slide-toggle-slider {background-color: '+background+';border: 1px solid '+color+';}input:checked + .slide-toggle-slider:before {-webkit-transform: translateX(26px);-ms-transform: translateX(26px);transform: translateX(26px);background-color: '+color+';} .slide-toggle-slider.slide-toggle-round {border-radius: 28px;}.slide-toggle-slider.slide-toggle-round:before {border-radius: 50%;}';
        var style = document.createElement('style');
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        document.getElementsByTagName('head')[0].appendChild(style);

        const sContainer=document.getElementById(container)
        const sSlideToggle=document.getElementById(slideToggle)
        sContainer.setAttribute("class", "slide-toggle-switch");
        sSlideToggle.setAttribute("type", "checkbox");

        const slideToggleLabel = document.createElement("span");
        slideToggleLabel.setAttribute("class", "slide-toggle-slider slide-toggle-round");
        slideToggleLabel.setAttribute("id", slideToggle+"_span");
        sContainer.appendChild(slideToggleLabel);
    }else{
        var errorExplous="Explous Slide Toggle - Error when assigning value to some variable: "
        if(!container){
            console.log(errorExplous+"container")
        }
        if(!slideToggle){
            console.log(errorExplous+"slideToggle")
        }
        if(!color){
            console.log(errorExplous+"color")
        }
        if(!background){
            console.log(errorExplous+"background")
        }
    }
}
  
export default SlideToggle