const Checkbox = {};

Checkbox.init = (
    {
        container,
        checkbox,
        color,
        required=false,
        text,
        textErr,
        colorText
    }
    ) => {
    if(container && checkbox && color && text && colorText){ 
        var css = '#'+container+'{position: relative;padding-left: 30px;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;color: '+colorText+';line-height: 20px;display: inline-block;height: 22px;} #'+container+' input{position: absolute;opacity: 0;display: none;} #'+checkbox+'_span{position: absolute;top: -1px;left: 0;height: 20px;width: 20px;background-color: #ffffff;border: 1px solid '+colorText+';transition: 0.3s;} #'+checkbox+'_span:after {content: "";position: absolute;width: 0px;height: 0px;margin-top: 9px;transform: rotate(45deg);left: 9px;transition: 0.3s;} #'+container+' input:checked ~ #'+checkbox+'_span:after{width: 4px;height: 9px;margin-top: 3px;transform: rotate(410deg);left: 8px;transition: 0.3s;border-width: 0px 2px 2px 0;} #'+container+' #'+checkbox+'_span:after{border: solid white;border-width: 0 0px 0px 0;}';
        var style = document.createElement('style');
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        document.getElementsByTagName('head')[0].appendChild(style);

        const textCheckbox = document.createElement("div");
        document.getElementById(container).appendChild(textCheckbox);
        let textSpan = document.createTextNode(text);
        textCheckbox.setAttribute("id", checkbox+"_text");
        textCheckbox.appendChild(textSpan);
        document.getElementById(checkbox+"_text").onclick = function() { onclick(this.id); };
        const span = document.createElement("span");
        document.getElementById(container).appendChild(span);
        span.setAttribute("id", checkbox+"_span");
        document.getElementById(checkbox+"_span").onclick = function() { onclick(this.id); };
        if(required){
            const errInput = document.createElement("div");
            errInput.style.position="absolute"
            errInput.style.opacity="0"
            errInput.style.color="#f44336"
            errInput.style.fontSize="12px"
            errInput.style.marginTop="0px"
            errInput.style.transition="all 0.10s ease 0.10s"
            errInput.style.marginLeft="-30px"
            errInput.style.width="max-content"
            errInput.style.marginTop="-6px"
            errInput.setAttribute("id", checkbox+"_err");
            document.getElementById(container).appendChild(errInput);
            text = document.createTextNode(textErr);
            errInput.appendChild(text);
        }

        function change(id){
            if(document.getElementById(id).checked){
                document.getElementById(id+"_span").style.backgroundColor=color
                document.getElementById(id+"_span").style.border="1px solid "+color
                if(required){
                    document.getElementById(checkbox+"_err").style.marginTop="-6px"
                    document.getElementById(checkbox+"_err").style.opacity="0"
                    document.getElementById(id+"_span").style.border="1px solid "+color
                    document.getElementById(id+"_text").style.color=colorText
                }
            }else{
                document.getElementById(id+"_span").style.backgroundColor="#ffffff"
                document.getElementById(id+"_span").style.border="1px solid "+colorText
                if(required){
                    document.getElementById(id+"_span").style.border="1px solid #f44336"
                    document.getElementById(checkbox+"_err").style.marginTop="0px"
                    document.getElementById(checkbox+"_err").style.opacity="1"
                    document.getElementById(id+"_text").style.color="#f44336"
                }
            }
        }

        function onclick(id){
            var stringLenght=String(id).length
            var newId=id.substring(0, stringLenght-5);
            document.getElementById(newId).checked = !document.getElementById(newId).checked
            change(newId)
        }
    }else{
        var errorExplous="Explous Checkbox - Error when assigning value to some variable: "
        if(!container){
            console.log(errorExplous+"container")
        }
        if(!checkbox){
            console.log(errorExplous+"checkbox")
        }
        if(!color){
            console.log(errorExplous+"color")
        }
        if(!text){
            console.log(errorExplous+"text")
        }
        if(!colorText){
            console.log(errorExplous+"colorText")
        }
    }
}
  
export default Checkbox