const Button = {};

Button.init = (
    {
        container,
        color,
        background,
        border,
        changeColor,
        text
    }
    ) => {
    if(container && color && background && border && changeColor && text){
        var css = '#'+container+':active{ background-color: '+changeColor+' !important;border:2px solid '+changeColor+' !important}';
        var style = document.createElement('style');
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        document.getElementsByTagName('head')[0].appendChild(style);

        var button=document.getElementById(container)
        button.style.background=background
        button.style.textDecoration="none"
        button.style.borderRadius="4px";
        button.style.color=color;
        button.style.padding="8px";
        button.style.fontSize="16px";
        button.style.cursor="pointer";
        button.style.width="max-content";
        button.style.border="2px solid "+border;
        button.style.outline="none";
        let textB = document.createTextNode(text);
        button.appendChild(textB);
    }else{
        var errorExplous="Explous Button - Error when assigning value to some variable: "
        if(!container){
            console.log(errorExplous+"container")
        }
        if(!color){
            console.log(errorExplous+"color")
        }
        if(!background){
            console.log(errorExplous+"background")
        }
        if(!border){
            console.log(errorExplous+"border")
        }
        if(!changeColor){
            console.log(errorExplous+"changeColor")
        }
        if(!text){
            console.log(errorExplous+"text")
        }
    }
    
  }
  
export default Button