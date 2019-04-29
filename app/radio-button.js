const RadioButton = {};


RadioButton.init = (
    {
        container,
        radioButton,
        text,
        color
    }
    ) => {
    if(container && radioButton && text && color){
        var css = '[type="radio"]:checked,[type="radio"]:not(:checked) {position: absolute;display: none;}[type="radio"]:checked + label,[type="radio"]:not(:checked) + label{position: relative;padding-left: 28px;cursor: pointer;}[type="radio"]:checked + label:before,[type="radio"]:not(:checked) + label:before {content: "";position: absolute;left: 0;top: -3px;width: 20px;height: 20px;border: 1px solid #535760;border-radius: 100%;background: #fff;}[type="radio"]:checked + label:after,[type="radio"]:not(:checked) + label:after {content: "";width: 10px;height: 10px;background: #ffffff;position: absolute;top: 3px;left: 6px;border-radius: 100%;-webkit-transition: all 0.3s ease;transition: all 0.3s ease;}[type="radio"]:not(:checked) + label:after {opacity: 0;-webkit-transform: scale(0);transform: scale(0);}[type="radio"]:checked + label:after {opacity: 1;-webkit-transform: scale(1);transform: scale(1);}.radio-buttons{font-size: 13px;}@media screen and (max-width: 768px) {.radio-buttons{display: table;margin-top: 10px;}}';
        var style = document.createElement('style');
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        document.getElementsByTagName('head')[0].appendChild(style);

        var rContainer=document.getElementById(container)
        rContainer.style.height="22px"
        var rRadioButton=document.getElementById(radioButton)
        rRadioButton.setAttribute("type", "radio");
        rRadioButton.onchange = function() { radioButtonChange(); };

        const inputLabel = document.createElement("label");
        inputLabel.setAttribute("class", "radio-buttons");
        inputLabel.setAttribute("id", radioButton+"_label");

        rContainer.appendChild(inputLabel);
        inputLabel.innerHTML=text
        inputLabel.htmlFor = radioButton;

        function radioButtonChange(){
            rRadioButton.innerHTML='<style>[type="radio"]:checked + label:before,[type="radio"]:not(:checked) + label:after{background:'+color+' !important;border: 1px solid '+color+';}</style>';
            rRadioButton.innerHTML='<style>[type="radio"]:checked + label:before,[type="radio"]:checked + label:before{background:'+color+' !important;border: 1px solid '+color+' !important;}</style>';
        }
    }else{
        var errorExplous="Explous Radio Button - Error when assigning value to some variable: "
        if(!container){
            console.log(errorExplous+"container")
        }
        if(!radioButton){
            console.log(errorExplous+"radioButton")
        }
        if(!text){
            console.log(errorExplous+"text")
        }
        if(!color){
            console.log(errorExplous+"color")
        }
    }
}
  
export default RadioButton