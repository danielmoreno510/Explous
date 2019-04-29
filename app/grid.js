const Grid = {};

Grid.init = (
    {
        container,
        grids,
        gridSize,
        responsiveOneColumn=true
    }
    ) => {
    if(container && grids){
        var selectDataArray
        var gridChildren=document.querySelectorAll("#"+container)[0].children
        document.getElementById(container).style.display="flow-root"
        setTimeout(() => {
            detectCol()
        }, 10);
        

        function detectCol(){
            selectDataArray=null
            var x=grids.length-1
            var position=0
            for(x; x>=0; x--){
                if(grids[x].screen>window.innerWidth){
                    selectDataArray=grids[x];
                    position=x
                    x=0
                }
            }
            if(selectDataArray==undefined){
                selectDataArray=grids[0]
            }
            var gridsSize=(100/selectDataArray.cols)
            var gridHeight=0
            for(var x=0; x<gridChildren.length;x++){
                gridChildren[x].style.height="auto"
            }
            for(var x=0; x<gridChildren.length;x++){
                if(gridSize){
                    gridChildren[x].style.width=gridSize[position][x]+"%"
                }else{
                    gridChildren[x].style.width=gridsSize+"%"
                }
                gridChildren[x].style.float="left"
                gridChildren[x].style.margin="0px"
                gridChildren[x].style.padding="0px"
                if(gridChildren[x].clientHeight>gridHeight){
                    gridHeight=gridChildren[x].clientHeight
                }
            }
            for(var x=0; x<gridChildren.length;x++){
                if(selectDataArray.cols>1 || !responsiveOneColumn){
                    gridChildren[x].style.height=gridHeight+"px"
                }
            }
            document.getElementById(container).style.visibility="visible"
        }
        window.addEventListener("resize", onResizeGrid);
        function onResizeGrid(){
            detectCol()
        }
    }else{
        var errorExplous="Explous Grid - Error when assigning value to some variable: "
        if(!container){
            console.log(errorExplous+"container")
        }
        if(!grids){
            console.log(errorExplous+"grids")
        }
    }
}
  
export default Grid