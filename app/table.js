const Table = {};

const ids=[]
const containers=[]
const types=[]
const showResults=[]
const loadResults=[]
const loadResultsInit=[]

const fontFamily="-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif"
const fontStyle="normal"
const color="#333333"

Table.init = (
  {
    container,
    id,
    type,
    showResult,
    loadResult,
    head=[],
    colorHead,
    backgroundHead,
    colorBody,
    body=[],
    backgroundBody,
    textAlignBody=[],
    iconOrderBy=false,
    orderByNumber=[],
    pipe,
    pipeType,
    headFixed
  }
) => {
  if(container && id && type && showResult, head, colorHead, body, textAlignBody){
    ids.push(id)
    containers.push(container)
    types.push(type)
    showResults.push(showResult)
    loadResults.push(loadResult)
    loadResultsInit.push(loadResult)
    var page=1
    var pageNext=false
    var pagePrev=false
    var pagePrevOrderBy=false
    var css = '.'+container+'_inputs_div{margin-bottom: 0px;position:relative} tr:nth-child(odd) {background-color: #f2f2f2} th a.sort-by { padding-right: 18px;position: relative;}a.sort-by:before,a.sort-by:after {border: 5px solid transparent;content: "";display: block;height: 0;right: 5px;top: 50%;position: absolute;width: 0;}a.sort-by:before {border-bottom-color: '+colorHead+';margin-top: -12px;}a.sort-by:after {border-top-color: '+colorHead+';margin-top: 1px;}::-webkit-scrollbar {width: 6px;height: 6px;}::-webkit-scrollbar-track {background: #f2f2f2;}::-webkit-scrollbar-thumb {background: #cccccc; border-radius:6px}::-webkit-scrollbar-thumb:hover {background: #888888; }   @media screen and (max-width: 768px){.'+container+'_inputs_div{margin-bottom: 10px;}}';
    var style = document.createElement('style');
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
    document.getElementsByTagName('head')[0].appendChild(style);

    let tableContainer = document.getElementById(container);

    if(pipe){
      for(var x in pipe){
        var filter=pipe[x]
        const divPipe = document.createElement("div");
        divPipe.setAttribute("id", container+"_"+pipe[x]+"_div");
        const inputPipe = document.createElement("input");
        inputPipe.setAttribute("id", container+"_"+pipe[x]);
        inputPipe.onkeyup=function() { inputChange(inputPipe.id); };
        //inputPipe.onkeypress=function() { inputChange(inputPipe.id); };
        //inputPipe.onkeydown=function() { inputChange(inputPipe.id); };
        inputPipe.onpaste=function() { inputChange(inputPipe.id); };
        inputPipe.style.zIndex="1"
        inputPipe.style.fontSize="16px"
        inputPipe.style.position="relative"
        inputPipe.style.transition="all 0.1s ease 0.1s"
        inputPipe.style.width="140px"
        inputPipe.style.outline="none"
        inputPipe.style.border="0px"
        inputPipe.style.background="transparent";
        divPipe.style.float="left"
        inputPipe.onfocus = function() { focusInput(this.id); };
        inputPipe.onblur = function() { focusoutInput(this.id); };
        if(pipeType=="traditional"){
          inputPipe.style.marginTop="2px"
          inputPipe.style.marginBottom="8px"
          inputPipe.style.paddingBottom="2px"
          inputPipe.style.paddingTop="2px"
          inputPipe.style.paddingLeft="2px"
          inputPipe.style.marginRight="20px"
          inputPipe.placeholder=pipe[x]
          inputPipe.style.height="22px";
          inputPipe.style.border="1px solid #6d6d6d"
        }
        const titleInput = document.createElement("div");
        if(pipeType=="material"){
          divPipe.setAttribute("class", container+"_inputs_div");
          inputPipe.style.border="0px"
          inputPipe.style.borderBottom="1px solid #6d6d6d"
          inputPipe.style.marginBottom="8px"
          inputPipe.style.marginRight="20px"
          titleInput.style.zIndex="1"
          titleInput.style.fontSize="18px"
          titleInput.style.transition="all 0.15s ease 0.15s"
          titleInput.style.color="#6d6d6d"
          titleInput.setAttribute("id", container+"_"+pipe[x]+"_title");
          titleInput.style.position="absolute"
          titleInput.style.marginTop="-2px"
          let text = document.createTextNode(pipe[x]);
          titleInput.appendChild(text);
        }
        tableContainer.appendChild(divPipe);
        divPipe.appendChild(titleInput);
        divPipe.appendChild(inputPipe);
      }
    }
    
    tableContainer.style.width="100%";
    tableContainer.style.paddingTop="18px";
    tableContainer.style.overflowX="auto";
    if(tableContainer){
      const table = document.createElement("table");
      const tableHead = document.createElement("thead");
      const tableHeadIndex = document.createElement("thead");
      const tableHeadTr = document.createElement("tr");
      const tableHeadTrIndex = document.createElement("tr");
      const tableBody = document.createElement("tbody");
      document.body.onresize = function() { onResize(); };
      table.setAttribute("id", id);
      table.style.position="relative";
      tableContainer.appendChild(table);
      tableHead.setAttribute("id", "head_"+id);
      table.appendChild(tableHead)
      tableHeadIndex.setAttribute("id", "head-new_"+id);
      if(!headFixed){
        tableHeadIndex.style.display="none"
      }
      table.appendChild(tableHeadIndex)
      tableHead.appendChild(tableHeadTr);
      tableHeadIndex.style.position="absolute";
      tableHeadIndex.style.display="none";
      tableBody.setAttribute("id", "body_"+id);
      table.appendChild(tableBody)

      for(var x in head){
        const tableHeadTh = document.createElement("th");
        const tableHeadThDiv = document.createElement("div");
        const tableHeadThDiv1 = document.createElement("div");
        const tableHeadThDiv2 = document.createElement("div");
        const tableHeadThDiv2Img = document.createElement("a");
        let text = document.createTextNode(head[x]);
        tableHeadTh.style.cursor="pointer";
        tableHeadTh.style.textAlign="left";
        tableHeadTh.style.padding="10px";
        tableHeadTh.style.borderLeft="1px solid #cccccc";
        tableHeadTh.setAttribute("id", x);
        tableHeadTh.onclick = function() { sortTable(this.id); };
        tableHeadTh.appendChild(tableHeadThDiv);
        tableHeadThDiv.style.display="flex";
        tableHeadThDiv.appendChild(tableHeadThDiv1);
        tableHeadThDiv1.style.fontWeight="600";
        tableHeadThDiv1.style.flex="auto";
        tableHeadThDiv1.appendChild(text);
        tableHeadThDiv.appendChild(tableHeadThDiv2);
        if(iconOrderBy){
          tableHeadThDiv2Img.classList.add("sort-by");
        }
        tableHeadThDiv2.appendChild(tableHeadThDiv2Img);
        tableHeadTrIndex.style.fontSize="16px";
        tableHeadTrIndex.style.color=colorHead;
        tableHeadTrIndex.style.background=backgroundHead;
        tableHeadTrIndex.appendChild(tableHeadTh);
      }
      
      for(var x in head){
        const tableHeadTh = document.createElement("th");
        const tableHeadThDiv = document.createElement("div");
        const tableHeadThDiv1 = document.createElement("div");
        const tableHeadThDiv2 = document.createElement("div");
        const tableHeadThDiv2Img = document.createElement("a");
        let text = document.createTextNode(head[x]);
        tableHeadTh.style.cursor="pointer";
        tableHeadTh.style.textAlign="left";
        tableHeadTh.style.padding="10px";
        tableHeadTh.style.borderLeft="1px solid #cccccc";
        tableHeadTh.setAttribute("id", x);
        tableHeadTh.onclick = function() { sortTable(this.id); };
        tableHeadTh.appendChild(tableHeadThDiv);
        tableHeadThDiv.style.display="flex";
        tableHeadThDiv.appendChild(tableHeadThDiv1);
        tableHeadThDiv1.style.fontWeight="600";
        tableHeadThDiv1.style.flex="auto";
        tableHeadThDiv1.appendChild(text);
        tableHeadThDiv.appendChild(tableHeadThDiv2);
        if(iconOrderBy){
          tableHeadThDiv2Img.classList.add("sort-by");
        }
        tableHeadThDiv2.appendChild(tableHeadThDiv2Img);
        tableHeadTr.style.fontSize="16px";
        tableHeadTr.style.color=colorHead;
        tableHeadTr.style.background=backgroundHead;
        tableHeadTr.appendChild(tableHeadTh);
      }

      for(var x in body){    
        const tableBodyTr = document.createElement("tr");
        tableBody.appendChild(tableBodyTr);
        for(var y in body[x]){
          const tableBodyTd = document.createElement("td");
          const tableBodyTdDiv = document.createElement("div");
          let text = document.createTextNode(body[x][y]);
          tableBodyTd.style.padding="20px 10px";
          tableBodyTd.style.borderLeft="1px solid #cccccc";
          if(textAlignBody[y]){
            tableBodyTd.style.textAlign=textAlignBody[y];
          }
          tableBodyTd.appendChild(tableBodyTdDiv);
          tableBodyTdDiv.style.fontWeight="400";
          tableBodyTr.style.fontSize="16px";
          tableBodyTdDiv.appendChild(text);
          tableBodyTr.style.color=colorBody;
          tableBodyTr.style.background=backgroundBody;
          tableBodyTr.setAttribute("id", "tr_"+id+"_"+x);
          tableBodyTr.appendChild(tableBodyTd);
        }
      }


      table.style.borderSpacing=0;
      table.style.border="1px solid #ddd";
      table.style.borderLeft="0px solid #fff";
      table.style.width="calc(100%)";
      tableContainer.style.fontFamily=fontFamily;
      tableContainer.style.fontStyle=fontStyle;
      tableContainer.style.color=color;
      table.appendChild(tableBody);


      tableHeadIndex.style.width=tableHead.offsetWidth+"px";
      tableHeadIndex.appendChild(tableHeadTrIndex);

      if(type=="pagination"){
        const paginator = document.createElement("div");
        tableContainer.appendChild(paginator);
        const paginatorDiv1 = document.createElement("div");
        paginatorDiv1.style.padding="2px";
        paginatorDiv1.style.marginTop="6px";
        paginatorDiv1.style.color="#333333";
        paginatorDiv1.style.fontSize="16px";
        paginatorDiv1.style.float="left";
        var pages=Math.ceil(body.length/showResult)
        paginatorDiv1.setAttribute("id", "pages_"+id);
        var text=document.createTextNode("Page: "+page+" of "+pages);
        paginatorDiv1.appendChild(text);
        paginator.appendChild(paginatorDiv1);
        const paginatorDiv2 = document.createElement("div");
        paginatorDiv2.style.padding="2px";
        paginatorDiv2.style.marginTop="6px";
        paginatorDiv2.style.color="#333333";
        paginatorDiv2.style.fontSize="16px";
        paginatorDiv2.style.float="right";
        paginatorDiv2.style.display="flex";
        paginator.appendChild(paginatorDiv2);
        const paginatorDiv2_1 = document.createElement("div");
        paginatorDiv2_1.style.marginTop="4px";
        paginatorDiv2_1.style.paddingLeft="4px";
        paginatorDiv2_1.style.paddingRight="4px";
        paginatorDiv2_1.setAttribute("id", "results_"+id);
        var text=document.createTextNode(page+"-"+showResult);
        paginatorDiv2_1.appendChild(text);
        paginatorDiv2.appendChild(paginatorDiv2_1);
        const paginatorDiv2_2 = document.createElement("div");
        paginatorDiv2_2.style.marginTop="4px";
        paginatorDiv2_2.style.paddingLeft="4px";
        paginatorDiv2_2.style.paddingRight="4px";
        paginatorDiv2_2.setAttribute("id", "total_"+id);
        var text=document.createTextNode(" of "+body.length);
        paginatorDiv2_2.appendChild(text);
        paginatorDiv2.appendChild(paginatorDiv2_2);
        const paginatorDiv2_3 = document.createElement("div");
        paginatorDiv2_3.style.marginRight="8px";
        paginatorDiv2_3.style.marginLeft="8px";
        paginatorDiv2_3.style.cursor="pointer";
        paginatorDiv2_3.style.border="1px solid #cccccc";
        paginatorDiv2_3.style.padding="1px";
        paginatorDiv2_3.style.width="24px";
        paginatorDiv2_3.style.height="24px";
        paginatorDiv2_3.style.color="#cccccc";
        paginatorDiv2_3.style.textAlign="center";
        paginatorDiv2.appendChild(paginatorDiv2_3);
        const paginatorDiv2_3_1 = document.createElement("div");
        paginatorDiv2_3_1.style.fontSize="24px";
        paginatorDiv2_3_1.style.marginTop="-4px";
        var text=document.createTextNode("<");
        paginatorDiv2_3_1.appendChild(text);
        paginatorDiv2_3.onclick = function() { changePage("prev"); };
        paginatorDiv2_3.appendChild(paginatorDiv2_3_1);
        const paginatorDiv2_4 = document.createElement("div");
        paginatorDiv2_4.style.marginRight="8px";
        paginatorDiv2_4.style.marginLeft="8px";
        paginatorDiv2_4.style.cursor="pointer";
        paginatorDiv2_4.style.border="1px solid #cccccc";
        paginatorDiv2_4.style.padding="1px";
        paginatorDiv2_4.style.width="24px";
        paginatorDiv2_4.style.height="24px";
        paginatorDiv2_4.style.color="#cccccc";
        paginatorDiv2_4.style.textAlign="center";
        paginatorDiv2.appendChild(paginatorDiv2_4);
        const paginatorDiv2_3_2 = document.createElement("div");
        paginatorDiv2_3_2.style.fontSize="24px";
        paginatorDiv2_3_2.style.marginTop="-4px";
        var text=document.createTextNode(">");
        paginatorDiv2_3_2.appendChild(text);
        paginatorDiv2_4.onclick = function() { changePage("next"); };
        paginatorDiv2_4.appendChild(paginatorDiv2_3_2);

        for(var x in body){
          if(x>=showResult){
            document.getElementById("tr_"+id+"_"+x).style.display="none"
          }
        }
      }

      if(type=="scrolling"){
        for(var x in body){
          document.getElementById("tr_"+id+"_"+x).style.display="none"
        }
        for(var x=0;x<showResult;x++){
          document.getElementById("tr_"+id+"_"+x).style.display="table-row"
        }
      }

      for(var x=0; x<document.getElementById("head_"+id).getElementsByTagName("th").length; x++){
        document.getElementById("head-new_"+id).getElementsByTagName("th")[x].style.width=document.getElementById("head_"+id).getElementsByTagName("th")[x].offsetWidth-21+"px"
      }
      
    }else{
      console.log("Undefined table container")
    }

    function provisionalShowTablePagination(){
      var table = document.getElementById(id);
      var tr = table.getElementsByTagName("tbody")[0];
      tr=tr.getElementsByTagName("tr")
      for(var x in tr){
        if(document.getElementById("tr_"+id+"_"+x)){
          document.getElementById("tr_"+id+"_"+x).style.display="table-row"
        }
      }
      setTimeout(() => {
        for(var x=2; x<=(tr.length+1); x++){
          if(document.getElementById(id).getElementsByTagName("tr")[x]){
            document.getElementById(id).getElementsByTagName("tr")[x].setAttribute("id", "tr_"+id+"_"+(x-2));
          }
        }
        for(var x in tr){
          if(document.getElementById("tr_"+id+"_"+x)){
            document.getElementById("tr_"+id+"_"+x).style.display="none"
          }
        }
        var x
        var y
        if(pagePrevOrderBy){
          x=page*showResult
          y=(page+1)*showResult-1
        }else{
          x=(page-1)*showResult
          y=page*showResult-1
        }
        while(x<=y){
          if(document.getElementById("tr_"+id+"_"+x)){
            document.getElementById("tr_"+id+"_"+x).style.display="table-row"
          }
          x++
        }
        onResize()
      }, 10);
    }

    function provisionalShowTableScrolling(){
      for(var x in body){
        if(document.getElementById("tr_"+id+"_"+x)){
          document.getElementById("tr_"+id+"_"+x).style.display="table-row"
        }
      }
      setTimeout(() => {
        for(var x=2; x<=(body.length+1); x++){
          if(document.getElementById(id).getElementsByTagName("tr")[x]){
            document.getElementById(id).getElementsByTagName("tr")[x].setAttribute("id", "tr_"+id+"_"+(x-2));
          }
        }
        for(var x in body){
          if(document.getElementById("tr_"+id+"_"+x)){
            document.getElementById("tr_"+id+"_"+x).style.display="none"
          }
        }
        for(x in types){
          if(types[x]=="scrolling"){
            for(var y=0;y<showResults[x];y++){
              if(document.getElementById("tr_"+ids[x]+"_"+y)){
                document.getElementById("tr_"+ids[x]+"_"+y).style.display="table-row"
              }
            }
          }
        }
        onResize()
      }, 10);
    }

    function sortTable(n) {
      if(orderByNumber.length>0){
        if(type=="pagination"){
          provisionalShowTablePagination()
        }
        if(type=="scrolling"){
          provisionalShowTableScrolling()
        }
        var found = orderByNumber.find(function(element) {
          return element > (n);
        });

        var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        table=document.getElementById(id).getElementsByTagName("tbody")[0]
        //table = $("#"+id).find("tbody");
        switching = true;
        //Set the sorting direction to ascending:
        dir = "asc"; 
        /*Make a loop that will continue until
        no switching has been done:*/
        while (switching) {
          //start by saying: no switching is done:
          switching = false;
          rows = table.getElementsByTagName("TR");
          /*Loop through all table rows (except the
          first, which contains table headers):*/
          for (i = 0; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /*check if the two rows should switch place,
            based on the direction, asc or desc:*/
            if (dir == "asc") {
              if(found==(n+1)){
                if (Number(x.innerHTML) > Number(y.innerHTML)) {
                  //if so, mark as a switch and break the loop:
                  shouldSwitch = true;
                  break;
                }
              }else{
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                  //if so, mark as a switch and break the loop:
                  shouldSwitch= true;
                  break;
                }
              }
            } else if (dir == "desc") {
              if(found==(n+1)){
                if (Number(x.innerHTML) < Number(y.innerHTML)) {
                  //if so, mark as a switch and break the loop:
                  shouldSwitch = true;
                  break;
                }
              }else{
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                  //if so, mark as a switch and break the loop:
                  shouldSwitch= true;
                  break;
                }
              }
            }
          }
          if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            //Each time a switch is done, increase this count by 1:
            switchcount ++;      
          } else {
            /*If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again.*/
            if (switchcount == 0 && dir == "asc") {
              dir = "desc";
              switching = true;
            }
          }
        }
      }
    }

    function changePage(data){
      var table = document.getElementById(id);
      var tr = table.getElementsByTagName("tbody")[0];
      tr=tr.getElementsByTagName("tr")
      var pages=Math.ceil(tr.length/showResult)
      if(data=="next" && page<pages && tr.length>showResult){
        if(pagePrev){
          pagePrevOrderBy=false
          page++
          pagePrev=false
        }
        for(var x in tr){
          if(document.getElementById("tr_"+id+"_"+x)){
            document.getElementById("tr_"+id+"_"+x).style.display="none"
          }
        }
        var x=page*showResult
        var x2=x
        page++
        pageNext=true
        var y=page*showResult-1
        while(x<=y){
          if(document.getElementById("tr_"+id+"_"+x)){
            document.getElementById("tr_"+id+"_"+x).style.display="table-row"
          }else{
            y=x
          }
          x++
        }
        if(y<tr.length){
          y++
        }
        var text=document.createTextNode("Page: "+page+" of "+pages);
        document.getElementById("pages_"+id).innerHTML=""
        document.getElementById("pages_"+id).appendChild(text);

        var text=document.createTextNode((x2+1)+"-"+y);
        document.getElementById("results_"+id).innerHTML=""
        document.getElementById("results_"+id).appendChild(text);
      }
      if(data=="prev" && page>0){
        if(pageNext){
          page--
          pageNext=false
        }
        for(var x in tr){
          if(document.getElementById("tr_"+id+"_"+x)){
            document.getElementById("tr_"+id+"_"+x).style.display="none"
          }
        }
        var x=page*showResult-1
        page--
        pagePrev=true
        pagePrevOrderBy=true
        var y=page*showResult
        var y2=y
        while(y<=x){
          if(document.getElementById("tr_"+id+"_"+y)){
            document.getElementById("tr_"+id+"_"+y).style.display="table-row"
          }
          y++
        }
        var text=document.createTextNode("Page: "+(page+1)+" of "+pages);
        document.getElementById("pages_"+id).innerHTML=""
        document.getElementById("pages_"+id).appendChild(text);

        var text=document.createTextNode((y2+1)+"-"+(x+1));
        document.getElementById("results_"+id).innerHTML=""
        document.getElementById("results_"+id).appendChild(text);
      }
      onResize()
    }
    
    window.onscroll = function(event) {
      for(x in ids){
        if(document.scrollingElement.scrollTop>document.getElementById(ids[x]).offsetTop){
          if(headFixed){
            document.getElementById("head-new_"+ids[x]).style.display="block";
          }
          var scrollBody=document.scrollingElement.scrollTop
          var scrollHead=document.getElementById("head-new_"+ids[x]).offsetHeight
          var scrollPosition=document.getElementById(ids[x]).offsetTop+1
          var parent=0
          if(document.getElementById(containers[x]).offsetParent){
            parent=document.getElementById(containers[x]).offsetParent.offsetTop
          }
          var detectEnd=scrollBody-document.getElementById(ids[x]).offsetTop+document.getElementById("head_"+ids[x]).offsetHeight
          if(document.getElementById(ids[x]).offsetHeight+parent>=detectEnd){
              document.getElementById("head-new_"+ids[x]).style.marginTop=scrollBody-scrollHead-scrollPosition-parent+"px";
              if((-scrollHead)>scrollBody-scrollHead-scrollPosition-parent){
                document.getElementById("head-new_"+ids[x]).style.marginTop=-scrollHead+"px";
              }
          }
        }else{
          document.getElementById("head-new_"+ids[x]).style.display="none";
        }
      }

      var totalTrs2=[]
      for(x in types){
        var totalTrs1=0
        totalTrs2.push(0)
        if(types[x]=="scrolling"){
          var scrollBody=document.scrollingElement.scrollTop
          var scrollPosition=document.getElementById(ids[x]).offsetTop+1
          for(var y=0; y<loadResults[x];y++){
            if(document.getElementById("tr_"+ids[x]+"_"+y)){
              totalTrs1=totalTrs1+document.getElementById("tr_"+ids[x]+"_"+y).offsetHeight 
            }
          }
          for(var y=0; y<showResults[x]-loadResults[x];y++){
            if(document.getElementById("tr_"+ids[x]+"_"+y)){
              totalTrs2[x]=totalTrs2[x]+document.getElementById("tr_"+ids[x]+"_"+y).offsetHeight
            }
          }
          if(totalTrs1+scrollBody>totalTrs2[x]+scrollPosition){
            showResults[x]=showResults[x]+loadResultsInit[x]
            for(var y=0; y<showResults[x];y++){
              if(document.getElementById("tr_"+ids[x]+"_"+y)){
                document.getElementById("tr_"+ids[x]+"_"+y).style.display="table-row"
              }
            }
          }
        }
      }
    };

    function onResize(){
      for(y in ids){
        document.getElementById("head-new_"+ids[y]).style.width=document.getElementById("head_"+ids[y]).offsetWidth+"px";
        for(var x=0; x<document.getElementById("head_"+ids[y]).getElementsByTagName("th").length; x++){
          document.getElementById("head-new_"+ids[y]).getElementsByTagName("th")[x].style.width=document.getElementById("head_"+ids[y]).getElementsByTagName("th")[x].offsetWidth-21+"px"
        }
      }
    }

    function inputChange(filter){
      if(type=="pagination"){
        while(page>0){
          changePage("prev")
        }
      }
      var position, table, tr, td, i, txtValue;
      var word=filter
      filter=filter.replace(container+"_",'');
      table = document.getElementById(id);
      for(var x in head){
        if(head[x]==filter){
          position=x
        }
      }
      tr = table.getElementsByTagName("tbody")[0];
      while(tr.hasChildNodes())
      {
        tr.removeChild(tr.firstChild);
      }
      
      word=document.getElementById(word).value.toUpperCase();

      for (i = 0; i < body.length; i++) {
        td = body[i][position];
        if (td) {
          txtValue = td;
          if (txtValue.toUpperCase().indexOf(word) > -1) {
            const tableBodyTr = document.createElement("tr");
            tableBodyTr.style.fontSize="16px";
            tableBodyTr.style.color=colorBody;
            tableBodyTr.style.background=backgroundBody;
            tableBodyTr.setAttribute("id", "tr_"+id+"_"+x);
            document.getElementById("body_"+id).appendChild(tableBodyTr);
            for(var x in body[i]){
              const tableBodyTd = document.createElement("td");
              const tableBodyTdDiv = document.createElement("div");
              let text = document.createTextNode(body[i][x]);
              tableBodyTd.style.padding="20px 10px";
              tableBodyTd.style.borderLeft="1px solid #cccccc";
              if(textAlignBody[x]){
                tableBodyTd.style.textAlign=textAlignBody[x];
              }
              tableBodyTd.appendChild(tableBodyTdDiv);
              tableBodyTdDiv.style.fontWeight="400";
              tableBodyTdDiv.appendChild(text);
              tableBodyTr.appendChild(tableBodyTd);
            }
          }
        }       
      }
      tr = table.getElementsByTagName("tbody")[0]
      tr = tr.getElementsByTagName("tr");
      if(type=="pagination"){
        var pages=Math.ceil(tr.length/showResult)
        var text=document.createTextNode("Page: "+page+" of "+pages);
        document.getElementById("pages_"+id).innerHTML=""
        document.getElementById("pages_"+id).appendChild(text);
        document.getElementById("total_"+id).innerHTML=""
        if(showResult>tr.length){
          var text=document.createTextNode(page+"-"+tr.length);
          document.getElementById("results_"+id).innerHTML=""
          document.getElementById("results_"+id).appendChild(text);
        }else{
          var text=document.createTextNode(page+"-"+showResult);
          document.getElementById("results_"+id).innerHTML=""
          document.getElementById("results_"+id).appendChild(text);
        }
        document.getElementById("total_"+id).appendChild(document.createTextNode(" of "+tr.length));
      }
      
      setTimeout(() => {
        provisionalShowTablePagination()
      }, 10);
    }

    function focusInput(input){
      if(pipeType=="material"){
        document.getElementById(input+"_title").style.marginTop="-14px"
        document.getElementById(input+"_title").style.fontSize="12px"
        document.getElementById(input+"_title").style.color=backgroundHead
        document.getElementById(input).style.borderBottom="2px solid "+backgroundHead
      }
      if(pipeType=="traditional"){
          document.getElementById(input).style.border="2px solid "+backgroundHead
          document.getElementById(input).style.height="20px"
      }
    }

    function focusoutInput(input){
      if(pipeType=="traditional"){
        document.getElementById(input).style.border="1px solid #6d6d6d"
        document.getElementById(input).style.height="22px"
      }
      if(pipeType=="material"){
        if(document.getElementById(input).value==""){
          document.getElementById(input+"_title").style.marginTop="-2px"
          document.getElementById(input+"_title").style.fontSize="18px"
        }
        document.getElementById(input+"_title").style.color="#6d6d6d"
        document.getElementById(input).style.borderBottom="1px solid #6d6d6d"
      }
    }
  }else{
    container && id && type && showResult, head, colorHead, body, textAlignBody, headFixed
    var errorExplous="Explous Button - Error when assigning value to some variable: "
    if(!container){
      console.log(errorExplous+"container")
    }
    if(!id){
      console.log(errorExplous+"id")
    }
    if(!type){
      console.log(errorExplous+"type")
    }
    if(!showResult){
      console.log(errorExplous+"showResult")
    }
    if(!head){
      console.log(errorExplous+"head")
    }
    if(!colorHead){
      console.log(errorExplous+"colorHead")
    }
    if(!body){
      console.log(errorExplous+"body")
    }
    if(!textAlignBody){
      console.log(errorExplous+"textAlignBody")
    }
  }
}

export default Table

