const InputFile = {};
window.ExplousInputFileData=[]

InputFile.init = (
    {
        container,
        input,
        type,
        color,
        error,
        inputFileColor
    }
    ) => {
    if(container && input && type && color && error && inputFileColor){
        ExplousInputFileData.push({container})
        var css = '.color-text{margin-top: -34px;margin-bottom: 34px;margin-left: 86px;color: #909090;}.color-new{background:'+color+' !important} .color-new:after{background:'+color+' !important} .color-new:before{background:'+color+' !important} .input-file-icon-arrow{pointer-events: none;margin-top: 48px;z-index: 1;width: 0; height: 0; border-left: 14px solid transparent;border-right: 14px solid transparent;border-bottom: 14px solid rgb(250, 250, 250);} .input-file-icon-arrow::before{content: "";position: absolute;width: 11px;height: 14px;background: rgb(250, 250, 250);margin-left: -5px;margin-top: 14px;}.input-file-uploader input {display: none;}.input-file-uploader {background-color: #efefef;background-color: rgba(0, 0, 0, 0.02);cursor: pointer;display: -webkit-flex;display: flex;height: 131px;-webkit-justify-content: center;justify-content: center;outline: 2px dashed '+inputFileColor+';outline-offset: 4px;position: relative;width: 238px;margin-left: 6px;z-index: 10;}.input-file-uploader img,.input-file-uploader .input-file-icon {pointer-events: none;}.input-file-uploader,.input-file-uploader .input-file-icon {-webkit-transition: all 100ms ease-in;-moz-transition: all 100ms ease-in;-ms-transition: all 100ms ease-in;-o-transition: all 100ms ease-in;transition: all 100ms ease-in;}.input-file-uploader img {left: 50%;max-height: 100%;max-width: 100%;position: absolute;top: 50%;-webkit-transition: all 300ms ease-in;-moz-transition: all 300ms ease-in;-ms-transition: all 300ms ease-in;-o-transition: all 300ms ease-in;transition: all 300ms ease-in;-webkit-transform: translate(-50%, -50%);-moz-transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);-o-transform: translate(-50%, -50%);transform: translate(-50%, -50%);z-index: 1;}.input-file-uploader img.loaded {opacity: 1;}.input-file-icon {background-color: '+inputFileColor+';border-radius: 1em;box-shadow: inset 0 0 0 1px hsla(0,0%,100%,.5);display: inline-block;height: 2em;left: 50%;margin-left: -3em;position: absolute;top: 40%;width: 6em;}.input-file-icon:after,.input-file-icon:before {transition: all 100ms ease-in;background-color: '+inputFileColor+';content: "";border-radius: 100%;position: absolute;}.input-file-icon:after {transition: all 100ms ease-in;height: 2em;right: .8em;top: -.8em;width: 2em;}.input-file-icon:before {height: 2.8em;left: 1em;top: -1.5em;width: 2.8em;}​.input-file-uploader img {left: 50%;max-height: 100%;max-width: 100%;position: absolute;top: 50%;-webkit-transition: all 300ms ease-in;-moz-transition: all 300ms ease-in;-ms-transition: all 300ms ease-in;-o-transition: all 300ms ease-in;transition: all 300ms ease-in;-webkit-transform: translate(-50%, -50%);-moz-transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);-o-transform: translate(-50%, -50%);transform: translate(-50%, -50%);z-index: 1}.'+input+'-image {opacity: 0;background:rgb(250, 250, 250)}';
        var style = document.createElement('style');
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        document.getElementsByTagName('head')[0].appendChild(style);

        var imageData=""
        var imageSrc= ""
        var inputFileData= ""
        var nameFile

        var iContainer=document.getElementById(container)
        var contContainer=iContainer.innerHTML
        iContainer.innerHTML=""
        const inputLabel = document.createElement("label");
        inputLabel.setAttribute("class", "input-file-uploader");
        inputLabel.setAttribute("id", input+"_label");
        inputLabel.ondragover = function() { return false; };
        inputLabel.ondragenter = function() { handleDragEnter(); };
        inputLabel.ondragleave = function() { handleDragLeave(); };
        inputLabel.ondrop = function() { handleDrop(event); };
        iContainer.appendChild(inputLabel);
        inputLabel.innerHTML=contContainer

        var iInput=document.getElementById(input)
        iInput.setAttribute("type", "file");
        iInput.setAttribute("name", "file");
        iInput.setAttribute("accept", type);
        iInput.onchange= function() { handleInputChange(event); };
        
        const inputIcon = document.createElement("icon");
        inputIcon.setAttribute("class", "input-file-icon");
        inputIcon.setAttribute("id", input+"_icon");
        inputLabel.insertBefore(inputIcon, inputLabel.childNodes[0]);
        const inputIconArrow = document.createElement("div");
        inputIconArrow.setAttribute("class", "input-file-icon-arrow");
        inputIconArrow.setAttribute("id", input+"_arrow");
        inputLabel.appendChild(inputIconArrow);

        const inputIconImage = document.createElement("img");
        inputIconImage.setAttribute("id", input+"_image");
        inputIconImage.setAttribute("class", input+"_image");
        inputLabel.appendChild(inputIconImage);

        const inputText = document.createElement("div");
        iContainer.appendChild(inputText);
        inputText.setAttribute("id", input+"_text");
        inputText.setAttribute("class", "color-text");
        inputText.innerHTML="Upload File"

        function handleDragEnter() {
            document.getElementById(input+"_label").style.outline="2px dashed "+color
            document.getElementById(input+"_text").style.color=color
            document.getElementById(input+"_icon").classList.add('color-new');
        }
        
        function handleDragLeave() {
            document.getElementById(input+"_label").style.outline="2px dashed "+inputFileColor
            document.getElementById(input+"_text").style.color="#909090"
            document.getElementById(input+"_icon").classList.remove('color-new');
        }
        
        function handleDrop(e) {
            e.preventDefault();
            document.getElementById(input+"_label").style.outline="2px dashed "+inputFileColor
            document.getElementById(input+"_text").style.color="#909090"
            document.getElementById(input+"_icon").classList.remove('color-new');
            handleInputChange(e);
        }

        function handleInputChange(e) {
            imageData=e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
            var dataInfo=true
            for(var x in ExplousInputFileData){
                if(container==ExplousInputFileData[x].container){
                    ExplousInputFileData[x].imageData=imageData
                    dataInfo=false
                }
            }
            if(dataInfo){
                ExplousInputFileData.push({container,imageData})
            }
            var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
            var pattern = type;
            var reader = new FileReader();
            nameFile = imageData.name;
            if (!file.type.match(pattern)) {
                alert(error);
                return;
            }
            reader.onload = _handleReaderLoaded.bind(this);
            reader.readAsDataURL(file);
        }

        function _handleReaderLoaded(e) {
            var reader = e.target;
            for(var x in ExplousInputFileData){
                if(container==ExplousInputFileData[x].container){
                    ExplousInputFileData[x].reader=reader.result
                }
            }
            imageSrc = reader.result;
            inputFileData = reader.result;
            if(type=="pdf/*"){
            imageSrc = "https://www.codot.gov/business/civilrights/ada/assets/adobe-pdf-icon.png/image_preview";
            }
            inputFileData = inputFileData +","+nameFile
            document.getElementById(input+"_image").src=imageSrc;
            document.getElementById(input+"_image").style.opacity="1";
        }
    }else{
        var errorExplous="Explous Input File - Error when assigning value to some variable: "
        if(!container){
            console.log(errorExplous+"container")
        }
        if(!input){
            console.log(errorExplous+"input")
        }
        if(!type){
            console.log(errorExplous+"type")
        }
        if(!color){
            console.log(errorExplous+"color")
        }
        if(!error){
            console.log(errorExplous+"error")
        }
        if(!inputFileColor){
            console.log(errorExplous+"inputFileColor")
        }
    }
}

export default InputFile