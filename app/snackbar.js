const Snackbar = {};

Snackbar.init = (
  {
    container,
    content,
    background,
    color,
    borderColor,
    border
  }
  ) => {
  if(container && content && background && color && borderColor && border){
    var css = '#'+container+'{visibility: hidden;position: fixed;left: 0;bottom: 0;width: 100%;z-index: 102;}.'+container+'-snackbar{width: auto;display: table;margin: 0 auto;}.'+container+'-content{margin-left: 45px;margin-right: 45px;margin-bottom: 6px;margin-top: 6px;font-size: 16px;}#'+container+'.show {visibility: visible;-webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;animation: fadein 0.5s, fadeout 0.5s 2.5s;}@-webkit-keyframes fadein {from {bottom: -70px; opacity: 0;} to {bottom: 0; opacity: 1;}}@keyframes fadein {from {bottom: -70px; opacity: 0;}to {bottom: 0; opacity: 1;}}@-webkit-keyframes fadeout {from {bottom: 0; opacity: 1;} to {bottom: -70px; opacity: 0;}}@keyframes fadeout {from {bottom: 0; opacity: 1;}to {bottom: -70px; opacity: 0;}}';
    var style = document.createElement('style');
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    document.getElementsByTagName('head')[0].appendChild(style);

    const sContainer=document.getElementById(container)
    sContainer.setAttribute("class", container);


    const snackbar = document.createElement("div");
    snackbar.setAttribute("id", "snackbar");
    snackbar.setAttribute("class", container+"_snackbar");
    sContainer.appendChild(snackbar);
    snackbar.style.background=background
    snackbar.style.width="auto"
    snackbar.style.display="table"
    snackbar.style.margin="0 auto"
    snackbar.style.color=color
    snackbar.style.border='1px solid '+borderColor
    snackbar.style.borderTopLeftRadius=border
    snackbar.style.borderTopRightRadius=border

    const snackbarContent = document.createElement("div");
    snackbarContent.setAttribute("id", container+"_content");
    snackbarContent.setAttribute("class", container+"_content");
    snackbarContent.style.padding="4px 14px"
    snackbar.appendChild(snackbarContent);
    snackbarContent.innerHTML=content
  }else{
    var errorExplous="Explous Snackbar - Error when assigning value to some variable: "
    if(!container){
      console.log(errorExplous+"container")
    }
    if(!content){
      console.log(errorExplous+"content")
    }
    if(!background){
      console.log(errorExplous+"background")
    }
    if(!color){
      console.log(errorExplous+"color")
    }
    if(!borderColor){
      console.log(errorExplous+"borderColor")
    }
    if(!border){
      console.log(errorExplous+"border")
    }
  }
}

Snackbar.show = (id, time) => {
    var x = document.getElementById(id)
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, time);
}
  
export default Snackbar