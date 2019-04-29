const Input = {};

const color="#333333"

Input.init = (
    {
      container,
      input,
      type,
      colorBorder,
      title,
      required,
      messageError,
      email,
      messageEmail,
      inputColor
    }
    ) => {
    if(container && input && type && colorBorder){
        var err=false
        var errEmail=false
        var errorShow=false
        var dContainer=document.getElementById(container)
        var dInput=document.getElementById(input)
        dContainer.style.paddingTop="22px"
        dContainer.style.paddingBottom="40px"
        dContainer.style.color=color
        dInput.style.outline="none"
        dInput.style.border="0px"
        dInput.style.position="absolute"
        if(dInput.tagName=="TEXTAREA"){
            dInput.style.position="relative"
            dInput.style.height="20px"
        }
        dInput.style.fontSize="16px"
        dInput.style.zIndex="1";
        dInput.style.background="transparent";
        if(type=="material"){
            dInput.style.borderBottom="1px solid "+inputColor
        }
        if(type=="traditional"){
            dInput.style.height="22px";
            dInput.style.border="1px solid "+inputColor
            var inputHtml=dContainer.innerHTML
        }
        if(dInput.tagName=="INPUT"){
            dInput.style.transition="all 0.1s ease 0.1s"
        }
        dInput.onfocus = function() { focusInput(this.id); };
        //dInput.onfocusout = function() { focusoutInput(); };
        //dInput.addEventListener("focusout", focusoutInput);
        dInput.onblur = function() { focusoutInput(this.id); };
        dInput.oninput = function() { oninputInput(this.id); };

        const titleInput = document.createElement("div");
        titleInput.style.zIndex="1"
        titleInput.style.fontSize="18px"
        titleInput.style.transition="all 0.15s ease 0.15s"
        titleInput.style.color=inputColor
        titleInput.setAttribute("id", input+"_title");
        if(type=="material"){
            titleInput.style.position="absolute"
            titleInput.style.marginTop="-4px"
            dContainer.insertBefore(titleInput, dContainer.childNodes[0]);
            let text = document.createTextNode(title);
            titleInput.appendChild(text);
        }
        if(type=="traditional"){
            titleInput.style.marginTop="2px"
            titleInput.style.cssFloat="left"
            titleInput.style.marginRight="10px"
            dContainer.innerHTML=""
            const containerInput = document.createElement("div");
            containerInput.setAttribute("id", input+"_container");
            containerInput.style.display="flex"
            if(dInput.tagName=="TEXTAREA"){
                containerInput.style.display="flow-root"
            }
            dContainer.appendChild(containerInput);
            containerInput.innerHTML=inputHtml
            dContainer.insertBefore(titleInput, dContainer.childNodes[0]);
            let text = document.createTextNode(title);
            titleInput.appendChild(text);

            document.getElementById(input).onfocus = function() { focusInput(this.id); };
            //dInput.onfocusout = function() { focusoutInput(); };
            //dInput.addEventListener("focusout", focusoutInput);
            document.getElementById(input).onblur = function() { focusoutInput(this.id); };
            document.getElementById(input).oninput = function() { oninputInput(this.id); };
            if(dInput.tagName=="INPUT"){
                document.getElementById(input).style.transition="all 0.1s ease 0.1s"
            }
        }
        

        if(required || email){
            const errInput = document.createElement("div");
            errInput.style.position="absolute"
            errInput.style.opacity="0"
            errInput.style.color="#f44336"
            errInput.style.fontSize="12px"
            errInput.style.marginTop="16px"
            errInput.style.transition="all 0.15s ease 0.15s"
            errInput.setAttribute("id", input+"_err");
            if(type=="material"){
                dContainer.appendChild(errInput);
            }
            if(type=="traditional"){
                document.getElementById(input+"_container").appendChild(errInput);
            }
            let text
            if(messageEmail!=""){
                text = document.createTextNode(messageEmail);
            }
            if(messageError!=""){
                text = document.createTextNode(messageError);
            }
            errInput.appendChild(text);
        }

        function focusInput(rInput){
            if(type=="material"){
                document.getElementById(rInput+"_title").style.marginTop="-16px"
                document.getElementById(rInput+"_title").style.fontSize="12px"
                document.getElementById(rInput+"_title").style.color=colorBorder
                document.getElementById(rInput).style.borderBottom="2px solid "+colorBorder
            }
            if(type=="traditional"){
                document.getElementById(rInput).style.border="2px solid "+colorBorder
            }
            if(required && document.getElementById(rInput).value=="" && err){
                document.getElementById(rInput).style.borderBottom="2px solid #f44336"
                if(type=="traditional"){
                    document.getElementById(rInput).style.border="2px solid #f44336"
                }
                if(type=="material"){
                    document.getElementById(rInput+"_title").style.color="#f44336"
                }
            }
            var emailVerify=validateEmail(document.getElementById(rInput).value)
            if(email && !emailVerify && errEmail && errEmail){
                document.getElementById(rInput).style.borderBottom="2px solid #f44336"
                if(type=="material"){
                    document.getElementById(rInput+"_title").style.color="#f44336"
                }
                if(type=="traditional"){
                    document.getElementById(rInput).style.border="2px solid #f44336"
                }
            }
        }
        function focusoutInput(rInput){
            errorShow=true
            document.getElementById(rInput+"_title").style.color=inputColor
            document.getElementById(rInput).style.borderBottom="1px solid "+inputColor
            if(type=="traditional"){
                document.getElementById(rInput).style.border="1px solid "+inputColor
            }
            if(email && !err){
                var emailVerify=validateEmail(document.getElementById(rInput).value)
                if(!emailVerify){
                    document.getElementById(rInput).style.borderBottom="1px solid #f44336"
                    if(type=="material"){
                        document.getElementById(rInput+"_title").style.color="#f44336"
                    }
                    document.getElementById(rInput+"_err").style.marginTop="22px"
                    if(dInput.tagName=="TEXTAREA"){
                        document.getElementById(rInput+"_err").style.marginTop="0px"
                    }
                    if(type=="traditional"){
                        if(dInput.tagName=="INPUT"){
                            document.getElementById(rInput+"_err").style.marginTop="28px"
                        }
                        document.getElementById(rInput).style.border="1px solid #f44336"
                    }
                    document.getElementById(rInput+"_err").style.opacity="1"
                    document.getElementById(rInput+"_err").innerHTML = messageEmail;
                    errEmail=true
                }else{
                    errEmail=false
                }
            }

            if(document.getElementById(rInput).value==""){
                if(required){
                    document.getElementById(rInput).style.borderBottom="1px solid #f44336"
                    if(type=="material"){
                        document.getElementById(rInput+"_title").style.color="#f44336"
                    }
                    document.getElementById(rInput+"_err").style.marginTop="22px"
                    if(dInput.tagName=="TEXTAREA"){
                        document.getElementById(rInput+"_err").style.marginTop="0px"
                    }
                    if(type=="traditional"){
                        if(dInput.tagName=="INPUT"){
                            document.getElementById(rInput+"_err").style.marginTop="28px"
                        }
                        document.getElementById(rInput).style.border="1px solid #f44336" 
                        document.getElementById(rInput).style.border="1px solid #f44336"
                    }
                    document.getElementById(rInput+"_err").style.opacity="1"
                    document.getElementById(rInput+"_err").innerHTML = messageError;
                    err=true
                }else{
                    if(!errEmail){
                        document.getElementById(rInput+"_title").style.color=inputColor
                        document.getElementById(rInput).style.borderBottom="1px solid "+inputColor
                        if(type=="material"){
                            document.getElementById(rInput).style.color="#1px solid "+inputColor
                        }
                        err=false
                    }
                }
                if(type=="material"){
                    document.getElementById(rInput+"_title").style.marginTop="-4px"
                    document.getElementById(rInput+"_title").style.fontSize="18px"
                }
            }else{
                if(type=="material"){
                    document.getElementById(rInput+"_title").style.fontSize="12px"
                }
            }
        }

        function oninputInput(rInput){
            if(required && document.getElementById(rInput).value=="" && errorShow){
                document.getElementById(rInput).style.borderBottom="2px solid #f44336"
                if(type=="material"){
                    document.getElementById(rInput+"_title").style.color="#f44336"
                }
                document.getElementById(rInput+"_err").style.marginTop="22px"
                if(dInput.tagName=="TEXTAREA"){
                    document.getElementById(rInput+"_err").style.marginTop="0px"
                }
                document.getElementById(rInput+"_err").style.opacity="1"
                document.getElementById(rInput+"_err").innerHTML = messageError;
                if(type=="traditional"){
                    document.getElementById(rInput).style.border="2px solid #f44336"
                    if(dInput.tagName=="INPUT"){
                        document.getElementById(rInput+"_err").style.marginTop="28px"
                    }
                }
                err=true
            }else{
                if(type=="material"){
                    document.getElementById(rInput+"_title").style.color=colorBorder
                }
                document.getElementById(rInput).style.borderBottom="2px solid "+colorBorder
                if(type=="traditional"){
                    document.getElementById(rInput).style.border="2px solid "+colorBorder
                }
                if(document.getElementById(rInput+"_err")){
                    document.getElementById(rInput+"_err").style.marginTop="16px"
                    document.getElementById(rInput+"_err").style.opacity="0"
                }
                err=false
            }
            var emailVerify=validateEmail(document.getElementById(rInput).value)
            if(email && !emailVerify && errorShow){
                document.getElementById(rInput).style.borderBottom="2px solid #f44336"
                if(type=="material"){
                    document.getElementById(rInput+"_title").style.color="#f44336"
                }
                document.getElementById(rInput+"_err").style.marginTop="22px"
                if(dInput.tagName=="TEXTAREA"){
                    document.getElementById(rInput+"_err").style.marginTop="0px"
                }
                if(type=="traditional"){
                    document.getElementById(rInput).style.border="2px solid #f44336"
                    if(dInput.tagName=="INPUT"){
                        document.getElementById(rInput+"_err").style.marginTop="28px"
                    }
                }
                document.getElementById(rInput+"_err").style.opacity="1"
                if(!err){
                    document.getElementById(rInput+"_err").innerHTML = messageEmail;
                }
                errEmail=true
            }else{
                if(!err){
                    if(type=="material"){
                        document.getElementById(rInput+"_title").style.color=colorBorder
                    }
                    document.getElementById(rInput).style.borderBottom="2px solid "+colorBorder
                    if(type=="traditional"){
                        document.getElementById(rInput).style.border="2px solid "+colorBorder
                    }
                    if(document.getElementById(rInput+"_err")){
                        document.getElementById(rInput+"_err").style.marginTop="16px"
                        document.getElementById(rInput+"_err").style.opacity="0"
                    }
                }
                errEmail=false
            }
        }

        function validateEmail(email) {
            var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            return re.test(String(email).toLowerCase());
        }
    }else{
        var errorExplous="Explous Input - Error when assigning value to some variable: "
        if(!container){
            console.log(errorExplous+"container")
        }
        if(!input){
            console.log(errorExplous+"input")
        }
        if(!type){
            console.log(errorExplous+"type")
        }
        if(!colorBorder){
            console.log(errorExplous+"colorBorder")
        }
    }
}
  
export default Input;