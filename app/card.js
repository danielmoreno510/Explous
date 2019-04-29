const Card = {};

Card.init = (
    {
        container,
        content,
        drop,
        dropContent,
        colorIcon,
        border
    }
    ) => {
    if(container && content && drop && dropContent && colorIcon && border){
        var css = '.arrow{border: solid '+colorIcon+';border-width: 0 2px 2px 0;display: inline-block;padding: 4px;float: right;margin-right: 0px;margin-top: -10px;transition: all 0.1s ease-in-out 0s;}';
        var style = document.createElement('style');
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        document.getElementsByTagName('head')[0].appendChild(style);
        
        var card=document.getElementById(container)
        var cardContent=document.getElementById(content)
        card.style.border=border
        cardContent.style.cursor="pointer"
        const cardContentArrow = document.createElement("div");
        cardContent.appendChild(cardContentArrow);
        cardContentArrow.setAttribute("id", content+"_arrow");
        cardContentArrow.setAttribute("class", "arrow");
        cardContentArrow.style.webkitTransform="rotate(45deg)"
        cardContentArrow.style.transform="rotate(45deg)"
        cardContent.onclick = function() { dropD(content, drop, dropContent); };
        var cardDrop=document.getElementById(drop)
        cardDrop.style.borderTop="0px solid #cccccc"
        cardDrop.style.height="0px"
        cardDrop.style.transition="0.2s ease-in-out";
        cardDrop.style.overflow="hidden";
        cardDrop.style.position="relative"

        function dropD(content, drop, dropContent){
            document.getElementById(content+"_arrow").style.webkitTransform="rotate(-135deg)"
            document.getElementById(content+"_arrow").style.transform="rotate(-135deg)"
            document.getElementById(drop).style.height=document.getElementById(dropContent).offsetHeight+"px"
            document.getElementById(drop).style.borderTop=border
            document.getElementById(content).onclick = function() { dropU(content, drop, dropContent); };
            setTimeout(() => {
                document.getElementById(drop).style.height="auto"
            }, 200);
        }

        function dropU(content, drop, dropContent){
            document.getElementById(content+"_arrow").style.webkitTransform="rotate(45deg)"
            document.getElementById(content+"_arrow").style.transform="rotate(45deg)"
            document.getElementById(drop).style.height=document.getElementById(dropContent).offsetHeight+"px"
            setTimeout(() => {
                document.getElementById(drop).style.height="0px"
            }, 50);
            document.getElementById(drop).style.borderTop="0px solid #cccccc"
            document.getElementById(content).onclick = function() { dropD(content, drop, dropContent); };
        }
    }else{
        var errorExplous="Explous Card - Error when assigning value to some variable: "
        if(!container){
            console.log(errorExplous+"container")
        }
        if(!content){
            console.log(errorExplous+"content")
        }
        if(!drop){
            console.log(errorExplous+"drop")
        }
        if(!dropContent){
            console.log(errorExplous+"dropContent")
        }
        if(!colorIcon){
            console.log(errorExplous+"colorIcon")
        }
        if(!border){
            console.log(errorExplous+"border")
        }
    }
}
  
export default Card