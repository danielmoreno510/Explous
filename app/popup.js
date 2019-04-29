const Popup = {};

Popup.init = (
    {
        container,
        id
    }
    ) => {
    if(container && id){
        const pContainer=document.getElementById(container)
        pContainer.style.display="none"
        const cover = document.createElement("div");
        cover.setAttribute("id", container+"_cover");
        cover.style.position="fixed";
        cover.style.top="0";
        cover.style.left="0";
        cover.style.background="black";
        cover.style.opacity="0.43";
        cover.style.zIndex="100";
        cover.style.width="100%";
        cover.style.height="100vh";
        pContainer.appendChild(cover);

        const pId=document.getElementById(id)
        pId.style.zIndex="101"
        pId.style.position="fixed";
        pId.style.top="0";
        pId.style.left="0";

        Popup.open=(id)=>{
            document.getElementById(id).style.display="block"
        }

        Popup.close=(id)=>{
            document.getElementById(id).style.display="none"
        }
    }else{
        var errorExplous="Explous Popup - Error when assigning value to some variable: "
        if(!container){
            console.log(errorExplous+"container")
        }
        if(!id){
            console.log(errorExplous+"id")
        }
    }
}
  
export default Popup