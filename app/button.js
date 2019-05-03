const Button = {};

Button.init = (
    {
        container,
        changeColor
    }
) => {
    if(container && changeColor){
        var css = '#'+container+'{border: 1px solid;}#'+container+':active{ background-color: '+changeColor+' !important;}';
        var style = document.createElement('style');
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        document.getElementsByTagName('head')[0].appendChild(style);

        var button=document.getElementById(container)
        button.style.textDecoration="none"
        button.style.borderRadius="4px";
        button.style.padding="10px";
        button.style.fontSize="16px";
        button.style.cursor="pointer";
        button.style.width="max-content";
        button.style.outline="none";
    }else{
        var errorExplous="Explous Button - Error when assigning value to some variable: "
        if(!container){
            console.log(errorExplous+"container")
        }
        if(!changeColor){
            console.log(errorExplous+"changeColor")
        }
    }
    
  }
  
export default Button