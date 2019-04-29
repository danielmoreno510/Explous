const Datepicker = {};

Datepicker.init = (
    {
        container,
        type,
        color,
        month,
        deleteTo,
        closeClic,
        typeInput,
        title1,
        title2,
        datepickerColor
    }
    ) => {
    if(container && type && color && month && typeInput && title1 && datepickerColor){
        var calendarRange=[]
        var dateInit
        var actualInput

        var css = '#'+container+'{width: 100%;max-width: 554px;} .left{left: -34px; position: absolute;cursor: pointer;width: 0;height: 0;border-top: 20px solid transparent;border-bottom: 20px solid transparent;} .left:hover{opacity: 0.8;} .right{right: -34px;position: absolute;cursor: pointer;width: 0;height: 0;border-top: 20px solid transparent;border-bottom: 20px solid transparent;} .right:hover{opacity: 0.8;} .calendar-actual{    border-top-left-radius: 7px;border-top-right-radius: 7px;color: #ffffff;position: absolute;width: 230px;} .calendar-number-day-disable{background: #cccccc;opacity: 0.5;cursor: auto;}.calendar-number-day-disable:hover{background: #bbbbbb;opacity: 0.5;cursor: auto;} .calendar-number-day-selected{background: #b1b1b1;color: white;} .calendar-container{left: 34px;position:relative;top: 10px;} .calendar-actual-content{display: flex;padding-top: 8px;padding-bottom: 8px;} .calendar-display{border-bottom-left-radius: 8px;border-bottom-right-radius: 8px;border-top-left-radius: 8px;border-top-right-radius: 8px;border: solid 1px #cccccc;width: 230px;float: left;margin-left: 5px;margin-right: 5px;background: #ffffff;}.calendar-display table {table-layout: fixed;width:220px;height:180px;margin-left:6px;margin-top: 38px;} .calendar-month-number{font-size: 14px;width: auto;margin-left: 8px;padding-right: 8px;border-style: solid;border-width: 0px 2px 0px 0px;border-color: #ffffff;}.calendar-month-name {font-size: 14px;font-weight: bold;width: 50%;margin-left: 8px;}.calendar-year-number{font-size: 14px;width: auto;margin: auto;margin-right: 8px;} .calendar-number-day{color: #828D98;text-align: center;font: small-caption;display: table-footer-group;}.calendar-number-day td{height: 16px;}.calendar-number-day-hover{cursor: pointer;}.calendar-number-day-hover:hover{background: #cccccc !important;} .calendar-days{font: small-caption;color: #535760;text-align: center;} .calendar-day-selected{background: #cccccc;} .calendar-flex{display: flex} .calendar-cover{position: fixed;top: 0;left: 0;background: black;opacity: 0.43;z-index: 102;width: 100%;height: 100%;display: none} @media screen and (min-width: 769px) {#'+container+'{background: transparent !important} .'+container+'_br{display:none}} @media screen and (max-width: 768px) { .calendar-number-day-hover:hover{background: '+color+' !important;} #'+container+'_calendar{visibility: visible;height: auto;opacity: 1;position: absolute;transition: 0.2s ease-in-out;z-index: 1001;} #'+container+'_calendar_container{border-radius: 8px;position: fixed;left: 20px;max-width: 256px !important;height: auto !important;margin-left: calc(50% - 142px);margin-top: 14vh;padding-top: 38px;background:'+color+'} .left{left: 10px;margin-top: -30px !important;border-right: 12px solid #ffffff !important;border-top: 12px solid transparent;border-bottom: 12px solid transparent;}.right{right: 150px;margin-top: -30px !important;border-left: 12px solid #ffffff !important;border-top: 12px solid transparent;border-bottom: 12px solid transparent;} .calendar-close{color: #ffffff;float: right;margin-left: -22px;margin-right: 10px;margin-top: -36px;font-size: 24px;cursor: pointer;display: block !important} .calendar-display{border-top-left-radius: 0px;border-top-right-radius: 0px;border-bottom-left-radius: 8px;border-bottom-right-radius: 8px;margin-left: 0px;margin-right: 0px;width: 252px;} .calendar-display table {width: 242px;} .calendar-actual{width: 252px;    border-top-left-radius: 0px;border-top-right-radius: 0px;} .calendar-actual-content{display: inline;} .calendar-month-number{float: left;margin-left: 0px;padding-right: 0px;margin-top: 8px;margin-bottom: 8px;text-align: center;font-size: 34px;width: 50%;}.calendar-month-name{float: left;width: calc(50% - 2px);padding-top: 8px;font-size: 16px;text-align: center;margin: auto;margin-left: 0px}.calendar-year-number{float: right;width: calc(50% - 2px);padding-top: 4px;text-align: center;margin: auto;margin-left: 0px} .calendar-table{margin-top: 60px !important;} .calendar-number-day{font-size: 14px;} #'+container+'_calendar_datepicker_1{display:none} .calendar-flex {display: block;} .'+container+'_br{display:block;height: 28px;}}';
        var style = document.createElement('style');
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        document.getElementsByTagName('head')[0].appendChild(style);
        
        var datepicker=document.getElementById(container)
        const div = document.createElement("div");
        datepicker.appendChild(div);
        const div1 = document.createElement("div");
        div1.classList.add("calendar-flex");
        div.appendChild(div1);
        const divPrincipal1 = document.createElement("div");
        div1.appendChild(divPrincipal1);
        const icon1 = document.createElement("div");
        icon1.setAttribute("id", container+"_icon1");
        icon1.style.float="left"
        icon1.style.marginRight="4px";
        divPrincipal1.appendChild(icon1);
        var icon='<svg color='+datepickerColor+' class="mat-datepicker-toggle-default-icon ng-star-inserted" fill="currentColor" focusable="false" height="28px" viewBox="0 0 24 24" width="28px"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path></svg>'
        icon1.innerHTML=icon
        const input1 = document.createElement("input");
        input1.setAttribute("id", container+"_input1");
        input1.setAttribute("readonly",true);
        
        input1.style.outline="none"
        input1.style.fontSize="16px"
        input1.style.marginRight="14px"
        input1.style.height="22px"

        if(typeInput=="traditional"){
            input1.style.border="1px solid "+datepickerColor
            input1.style.transition="all 0.1s ease 0.1s;"
        }

        if(typeInput=="material"){
            input1.style.position="relative"
            input1.style.zIndex="1"
            input1.style.transition="all 0.1s ease 0.1s"
            input1.style.border="0px"
            input1.style.background="transparent";
            input1.style.borderBottom="1px solid "+datepickerColor

            if(title1!=""){
                const titleInput = document.createElement("div");
                titleInput.style.zIndex="1"
                titleInput.style.fontSize="18px"
                titleInput.style.transition="all 0.10s ease 0.10s"
                titleInput.style.color=datepickerColor
                titleInput.setAttribute("id", container+"_title-1");
                titleInput.style.position="absolute"
                titleInput.style.marginTop="0px"
                titleInput.style.marginLeft="32px"
                divPrincipal1.insertBefore(titleInput, divPrincipal1.childNodes[0]);
                titleInput.innerHTML=title1;
            }
        }
        
        divPrincipal1.appendChild(input1);
        document.getElementById(container+"_input1").onfocus = function() { focusInput(this.id); };
        const br1 = document.createElement("div");
        br1.setAttribute("class", container+"_br");
        div1.appendChild(br1);
        const divPrincipal2 = document.createElement("div");
        div1.appendChild(divPrincipal2);
        if(type=="range"){
            const icon2 = document.createElement("div");
            icon2.setAttribute("id", container+"_icon2");
            icon2.style.float="left"
            icon2.style.marginRight="4px";
            divPrincipal2.appendChild(icon2);
            var icon='<svg color="'+datepickerColor+'" class="mat-datepicker-toggle-default-icon ng-star-inserted" fill="currentColor" focusable="false" height="28px" viewBox="0 0 24 24" width="28px"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path></svg>'
            icon2.innerHTML=icon
            const input2 = document.createElement("input");
            input2.setAttribute("id", container+"_input2");
            input2.setAttribute("readonly",true);
            input2.style.outline="none"
            input2.style.height="22px"
            input2.style.fontSize="16px"

            if(typeInput=="traditional"){
                input2.style.border="1px solid "+datepickerColor
                input2.style.transition="all 0.1s ease 0.1s;"
            }
        
            if(typeInput=="material"){
                input2.style.position="relative"
                input2.style.zIndex="1"
                input2.style.transition="all 0.1s ease 0.1s"
                input2.style.border="0px"
                input2.style.background="transparent";
                input2.style.borderBottom="1px solid "+datepickerColor

                if(title2!=""){
                    const titleInput = document.createElement("div");
                    titleInput.style.zIndex="1"
                    titleInput.style.fontSize="18px"
                    titleInput.style.transition="all 0.15s ease 0.15s"
                    titleInput.style.color=datepickerColor
                    titleInput.setAttribute("id", container+"_title-2");
                    titleInput.style.position="absolute"
                    titleInput.style.marginTop="0px"
                    titleInput.style.marginLeft="32px"
                    divPrincipal2.insertBefore(titleInput, divPrincipal2.childNodes[0]);
                    titleInput.innerHTML=title2;
                }
            }

            divPrincipal2.appendChild(input2);
            document.getElementById(container+"_input2").onfocus = function() { focusInputTo(this.id); };
        }
        const div2 = document.createElement("div");
        div2.setAttribute("id", container+"_calendar");
        div2.style.visibility="collapse"
        div2.style.marginTop="-10px"
        div2.style.height="30px"
        div2.style.opacity="0"
        div2.style.display="flex";
        div.appendChild(div2);

        const div2Container = document.createElement("div");
        div2Container.setAttribute("id", container+"_calendar_container");
        if(month==2){
            div2Container.style.maxWidth="484px"
        }
        if(month==1){
            div2Container.style.maxWidth="242px"
        }
        div2Container.style.height="210px"
        div2.appendChild(div2Container);
        div2Container.classList.add("calendar-container");
        
        const div2ContainerLeft = document.createElement("div");
        div2ContainerLeft.setAttribute("id", container+"_calendar_container");
        div2ContainerLeft.style.marginTop="70px"
        div2ContainerLeft.style.borderRight="19px solid "+color
        div2ContainerLeft.setAttribute("id", container+"_left");
        div2Container.appendChild(div2ContainerLeft);
        div2ContainerLeft.classList.add("left");

        const div2ContainerRight = document.createElement("div");
        div2ContainerRight.setAttribute("id", container+"_calendar_container");
        div2ContainerRight.style.marginTop="70px"
        div2ContainerRight.style.borderLeft="19px solid "+color
        div2ContainerRight.setAttribute("id", container+"_right");
        div2Container.appendChild(div2ContainerRight);
        div2ContainerRight.classList.add("right");

        const div2ContainerClose = document.createElement("div");
        div2Container.appendChild(div2ContainerClose);
        div2ContainerClose.style.display="none"
        div2ContainerClose.classList.add("calendar-close");
        div2ContainerClose.onclick = function() { closeCalendar(container); };
        div2ContainerClose.innerHTML="x"

        for(var i=0; i<month;i++){
            const div2ContainerDatepicker= document.createElement("div");
            div2ContainerDatepicker.setAttribute("id", container+"_calendar_datepicker_"+i);
            div2Container.appendChild(div2ContainerDatepicker);
            div2ContainerDatepicker.classList.add("calendar-display");

            const div2ContainerMonth = document.createElement("div");
            div2ContainerMonth.setAttribute("id", container+"_calendar_month_"+i);
            div2ContainerMonth.style.background=color
            div2ContainerDatepicker.appendChild(div2ContainerMonth);
            div2ContainerMonth.classList.add("calendar-actual");

            const div2ContainerMonthActual = document.createElement("div");
            div2ContainerMonthActual.setAttribute("id", container+"_calendar_month_"+i);
            div2ContainerMonth.appendChild(div2ContainerMonthActual);
            div2ContainerMonthActual.classList.add("calendar-actual-content");


            const div2ContainerMonthActualNumber = document.createElement("div");
            div2ContainerMonthActualNumber.setAttribute("id", container+"_calendar_month_number_"+i);
            div2ContainerMonthActual.appendChild(div2ContainerMonthActualNumber);
            div2ContainerMonthActualNumber.classList.add("calendar-month-number");
            
            const div2ContainerMonthActualMonth = document.createElement("div");
            div2ContainerMonthActualMonth.setAttribute("id", container+"_calendar_month_name_"+i);
            div2ContainerMonthActual.appendChild(div2ContainerMonthActualMonth);
            div2ContainerMonthActualMonth.classList.add("calendar-month-name");
            
            const div2ContainerMonthActualYear = document.createElement("div");
            div2ContainerMonthActualYear.setAttribute("id", container+"_calendar_month_year_"+i);
            div2ContainerMonthActual.appendChild(div2ContainerMonthActualYear);
            div2ContainerMonthActualYear.classList.add("calendar-year-number");


            const div2ContainerTable = document.createElement("table");
            div2ContainerDatepicker.appendChild(div2ContainerTable);
            div2ContainerTable.classList.add("calendar-table");

            div2ContainerTable.innerHTML='<thead><tr style="background-color: #ffffff" class="calendar-days"><td>Sun</td><td>Mon</td><td>Tue</td><td>Wed</td><td>Thu</td><td>Fri</td><td>Sat</td></tr></thead><tbody class="calendar-number-day"><tr style="background-color: #ffffff" class="r0"><td class="col0"><td class="col1"><td class="col2"><td class="col3"><td class="col4"><td class="col5"><td class="col6"></td></tr><tr style="background-color: #ffffff" class="r1"><td class="col0"><td class="col1"><td class="col2"><td class="col3"><td class="col4"><td class="col5"><td class="col6"></td></tr><tr style="background-color: #ffffff" class="r2"><td class="col0"><td class="col1"><td class="col2"><td class="col3"><td class="col4"><td class="col5"><td class="col6"></td></tr><tr style="background-color: #ffffff" class="r3"><td class="col0"><td class="col1"><td class="col2"><td class="col3"><td class="col4"><td class="col5"><td class="col6"></td></tr><tr style="background-color: #ffffff" class="r4"><td class="col0"><td class="col1"><td class="col2"><td class="col3"><td class="col4"><td class="col5"><td class="col6"></td></tr><tr style="background-color: #ffffff" class="r5"><td class="col0"><td class="col1"><td class="col2"><td class="col3"><td class="col4"><td class="col5"><td class="col6"></td></tr></tbody>'

        }

        const div3 = document.createElement("div");
        div3.setAttribute("id", "calendar-cover");
        div3.classList.add("calendar-cover")
        div.appendChild(div3);
        

        function focusInput(id){
            document.getElementById(container+"_calendar").style.visibility="visible"
            document.getElementById(container+"_calendar").style.opacity="1"
            document.getElementById(container+"_calendar").style.height="auto"
            actualInput="from"
            if(typeInput=="traditional"){
                document.getElementById(container+"_input1").style.border="2px solid "+color
                document.getElementById(container+"_input1").style.height="20px"
                if(type=="range"){
                    document.getElementById(container+"_input2").style.border="1px solid "+datepickerColor
                    document.getElementById(container+"_input2").style.height="22px"
                }
            }
            if(typeInput=="material"){
                document.getElementById(container+"_title-1").style.marginTop="-16px"
                document.getElementById(container+"_title-1").style.fontSize="12px"
                document.getElementById(container+"_title-1").style.color=color
                document.getElementById(container+"_title-2").style.color=datepickerColor
                if(document.getElementById(container+"_input2").value==""){
                    document.getElementById(container+"_title-2").style.marginTop="0px"
                    document.getElementById(container+"_title-2").style.fontSize="18px"
                }
                document.getElementById(container+"_input1").style.borderBottom="2px solid "+color
                if(type=="range"){
                    document.getElementById(container+"_input2").style.borderBottom="1px solid "+datepickerColor
                }
            }

            if(document.documentElement.offsetWidth<768){
                if(document.getElementById("calendar-cover")){
                    document.getElementById("calendar-cover").style.display="block"
                }
            }else{
                document.getElementById("calendar-cover").style.display="none"
            }
            changeClassTd(container,"from")
        }

        function focusInputTo(id){
            actualInput="to"
            document.getElementById(container+"_calendar").style.visibility="visible"
            document.getElementById(container+"_calendar").style.opacity="1"
            document.getElementById(container+"_calendar").style.height="auto"
            if(typeInput=="traditional"){
                document.getElementById(container+"_input2").style.border="2px solid "+color
                document.getElementById(container+"_input2").style.height="20px"
                document.getElementById(container+"_input1").style.border="1px solid "+datepickerColor
                document.getElementById(container+"_input1").style.height="22px"
            }
            if(typeInput=="material"){
                document.getElementById(container+"_title-2").style.marginTop="-16px"
                document.getElementById(container+"_title-2").style.fontSize="12px"
                document.getElementById(container+"_title-2").style.color=color
                document.getElementById(container+"_title-1").style.color=datepickerColor
                if(document.getElementById(container+"_input1").value==""){
                    document.getElementById(container+"_title-1").style.marginTop="0px"
                    document.getElementById(container+"_title-1").style.fontSize="18px"
                }
                document.getElementById(container+"_input1").style.borderBottom="1px solid "+datepickerColor
                document.getElementById(container+"_input2").style.borderBottom="2px solid "+color
            }
            if(document.documentElement.offsetWidth<768){
                if(document.getElementById("calendar-cover")){
                    document.getElementById("calendar-cover").style.display="block"
                }
            }else{
                document.getElementById("calendar-cover").style.display="none"
            }
            changeClassTd(container,"to")
        }

        function generateCalendar(d, newGetId, calendar) {
            var days = howManyDays(d);
            var shift = getDayFirstDate(d);
            clear(newGetId, calendar);

            for(var i=0; i<days;i++) {
                var newDay = validateNumber(i+1)
                var newMonth = validateNumber(d.getMonth()+1)
                var posi_row = Math.floor((i+shift)/7);
                var posi_col = Math.floor((i+shift)%7);

                var calendars= document.getElementById(newGetId+"_calendar_datepicker_"+calendar)
                var class1=calendars.querySelectorAll(".r"+posi_row)
                for(var x=0; x<class1.length;x++){
                    class1[x].querySelectorAll('.col'+posi_col)[0].innerHTML=i+1
                    class1[x].querySelectorAll('.col'+posi_col)[0].classList.add("calendar-number-day-hover")
                    class1[x].querySelectorAll('.col'+posi_col)[0].setAttribute('id', ((newDay)+'-'+(newMonth)+'-'+d.getFullYear()));
                }
            }
            selectDate(calendarSelected, newGetId)
        }

        function clear(newGetId, calendar){
            var calendars= document.getElementById(newGetId+"_calendar_datepicker_"+calendar).querySelectorAll("tbody")
            var class1=calendars[0].querySelectorAll("td")
            for(var x=0; x<class1.length;x++){
                class1[x].innerHTML=""
                class1[x].classList.remove("calendar-number-day-hover")
                class1[x].setAttribute('id', "");
            }
        }

        function getDayFirstDate(d) {
        var tempd = new Date();
            tempd.setFullYear(d.getFullYear());
            tempd.setMonth(d.getMonth());
            tempd.setDate(1);
            tempd.setHours(0);
            tempd.setMinutes(0);
            tempd.setSeconds(0);
            return tempd.getDay();
        }

        function howManyDays(d) {
            var m = d.getMonth()+1 ;
            if(m==1||m==3||m==5||m==7||m==8||m==10||m==12) return 31;
            if(m==2) {
                if(isLeapYear(d.getFullYear())){
                return 29
                }else{
                return 28
                }
            }
            return 30;
        }

        function isLeapYear(year){
            if(year%400==0) {
                return true;
            }else if(year%100==0){
                return false;
            }else if(year%4==0){
                return true;
            }else{
                return false;
            }
        }

        function updateDate(d, sign) {
            var m = d.getMonth();
            if(sign){
            if(m+1>11) {
                d.setFullYear(d.getFullYear()+1);
                d.setMonth(0);
            } else {
                d.setMonth(m+1);
            }
            }else{
            if(m-1<0) {
                d.setFullYear(d.getFullYear()-1);
                d.setMonth(11);
            }else{
                d.setMonth(m-1);
            }
            }
        }

        function months(month){
            switch (month) {
                case 0:
                month = "JANUARY";
                break;
                case 1:
                month = "FEBRUARY";
                break;
                case 2:
                month = "MARCH";
                break;
                case 3:
                month = "APRIL";
                break;
                case 4:
                month = "MAY";
                break;
                case 5:
                month = "JUNE";
                break;
                case 6:
                month = "JULY";
                break;
                case 7:
                month = "AUGUST";
                break;
                case 8:
                month = "SEPTEMBER";
                break;
                case 9:
                month = "OCTOBER";
                break;
                case 10:
                month = "NOVEMBER";
                break;
                case 11:
                month = "DECEMBER";
            }
            return month;
        }

        function validateNumber(month){
            if(month<10){
                month="0"+month
            }
            return month
        }

        function changeDefectRangeFrom(newGetId){
            if(document.getElementById(newGetId+"_input2").getAttribute("name")!=null){
                var dayNew=document.getElementById(newGetId+"_input2").getAttribute("name").substring(0, 2);
                var monthNew=document.getElementById(newGetId+"_input2").getAttribute("name").substring(3, 5);
                var yearNew=document.getElementById(newGetId+"_input2").getAttribute("name").substring(6, 10);
                d=new Date(monthNew+"/"+dayNew+"/"+yearNew)
            }else{
                d=new Date()
            }
            if(document.getElementById(newGetId+"_input1").getAttribute("name")!=null){
                var dayNew=document.getElementById(newGetId+"_input1").getAttribute("name").substring(0, 2);
                var monthNew=document.getElementById(newGetId+"_input1").getAttribute("name").substring(3, 5);
                var yearNew=document.getElementById(newGetId+"_input1").getAttribute("name").substring(6, 10);
                d=new Date(monthNew+"/"+dayNew+"/"+yearNew)
            }
            var monthInit=false
            for (var i = 0; i < month; i++) {
                d.setMonth(d.getMonth() + i);
                if(d.getMonth()==0){
                    monthInit=true
                }
                if(i==2 && d.getMonth()==2 && monthInit){
                    d.setMonth(d.getMonth() -1);
                }
                document.getElementById(container+'_calendar_month_number_'+i).innerHTML=d.getMonth()+1;
                document.getElementById(container+'_calendar_month_name_'+i).innerHTML=months(d.getMonth());
                document.getElementById(container+'_calendar_month_year_'+i).innerHTML=d.getFullYear();
                generateCalendarRange(d, newGetId, i, "from");
            }
        }

        function changeDefectRangeTo(newGetId){
            if(document.getElementById(newGetId+"_input1").getAttribute("name")!=null){
                var dayNew=document.getElementById(newGetId+"_input1").getAttribute("name").substring(0, 2);
                var monthNew=document.getElementById(newGetId+"_input1").getAttribute("name").substring(3, 5);
                var yearNew=document.getElementById(newGetId+"_input1").getAttribute("name").substring(6, 10);
                d=new Date(monthNew+"/"+dayNew+"/"+yearNew)
            }else{
                d=new Date()
            }
            if(document.getElementById(newGetId+"_input2").getAttribute("name")!=null){
                var dayNew=document.getElementById(newGetId+"_input2").getAttribute("name").substring(0, 2);
                var monthNew=document.getElementById(newGetId+"_input2").getAttribute("name").substring(3, 5);
                var yearNew=document.getElementById(newGetId+"_input2").getAttribute("name").substring(6, 10);
                if(monthNew>1){
                    monthNew=monthNew-1
                }
                //d=new Date(monthNew+"/"+dayNew+"/"+yearNew)
            }
            
            var monthInit=false
            for (var i = 0; i < month; i++) {
                d.setMonth(d.getMonth() + i);
                if(d.getMonth()==0){
                    monthInit=true
                }
                if(i==2 && d.getMonth()==2 && monthInit){
                    d.setMonth(d.getMonth() -1);
                }
                document.getElementById(container+'_calendar_month_number_'+i).innerHTML=d.getMonth()+1;
                document.getElementById(container+'_calendar_month_name_'+i).innerHTML=months(d.getMonth());
                document.getElementById(container+'_calendar_month_year_'+i).innerHTML=d.getFullYear();
                generateCalendarRange(d, newGetId, i, "to");
            }
        }

        function selectDateRangeSelection(newGetId, selection){
            for (var i = 0; i < month; i++) {
                var containerSelect = document.getElementById(container+"_calendar_datepicker_"+i);

                for(var x=0; x<containerSelect.querySelectorAll("td").length;x++){
                    containerSelect.querySelectorAll("td")[x].style.color=""
                    containerSelect.querySelectorAll("td")[x].style.background=""
                    containerSelect.querySelectorAll("td")[x].classList.remove("calendar-day-selected")
                }
                if(selection=="from"){
                    var id=document.getElementById(newGetId+"_input1").getAttribute("name");
                    var id2=document.getElementById(newGetId+"_input2").getAttribute("name");
                }

                if(selection=="to"){
                    var id=document.getElementById(newGetId+"_input2").getAttribute("name");
                    var id2=document.getElementById(newGetId+"_input1").getAttribute("name");
                }
                if(containerSelect.querySelectorAll("[id^='"+id+"']")[0]!=undefined){
                    containerSelect.querySelectorAll("[id^='"+id+"']")[0].classList.add("calendar-day-selected");
                    containerSelect.querySelectorAll("[id^='"+id+"']")[0].style.background=color
                    containerSelect.querySelectorAll("[id^='"+id+"']")[0].style.color="#ffffff"
                }
                if(containerSelect.querySelectorAll("[id^='"+id2+"']")[0]){
                    containerSelect.querySelectorAll("[id^='"+id2+"']")[0].style.background=color
                    containerSelect.querySelectorAll("[id^='"+id2+"']")[0].style.color="#ffffff"
                }
            }
        }

        function generateCalendarRange(d, newGetId, calendar, selection) {
            var days = howManyDays(d);
            var shift = getDayFirstDate(d);
            clearRange(newGetId, calendar);
            if(selection=="from"){
                if(document.getElementById(newGetId+"_input2").getAttribute("name")!=null){
                    var dayNew=document.getElementById(newGetId+"_input2").getAttribute("name").substring(0, 2);
                    var monthNew=document.getElementById(newGetId+"_input2").getAttribute("name").substring(3, 5);
                    var yearNew=document.getElementById(newGetId+"_input2").getAttribute("name").substring(6, 10);
                    var dateFinalTo=new Date(monthNew+"/"+dayNew+"/"+yearNew)
                }
                if(document.getElementById(newGetId+"_input1").getAttribute("name")!=null){
                    var dayNew=document.getElementById(newGetId+"_input1").getAttribute("name").substring(0, 2);
                    var monthNew=document.getElementById(newGetId+"_input1").getAttribute("name").substring(3, 5);
                    var yearNew=document.getElementById(newGetId+"_input1").getAttribute("name").substring(6, 10);
                    var dateFinalFrom=new Date(monthNew+"/"+dayNew+"/"+yearNew)
                }
            }
            if(selection=="to"){
                if(document.getElementById(newGetId+"_input1").getAttribute("name")!=null){
                    var dayNew=document.getElementById(newGetId+"_input1").getAttribute("name").substring(0, 2);
                    var monthNew=document.getElementById(newGetId+"_input1").getAttribute("name").substring(3, 5);
                    var yearNew=document.getElementById(newGetId+"_input1").getAttribute("name").substring(6, 10);
                    var dateFinalFrom=new Date(monthNew+"/"+dayNew+"/"+yearNew)
                }
                if(document.getElementById(newGetId+"_input2").getAttribute("name")!=null){
                    var dayNew=document.getElementById(newGetId+"_input2").getAttribute("name").substring(0, 2);
                    var monthNew=document.getElementById(newGetId+"_input2").getAttribute("name").substring(3, 5);
                    var yearNew=document.getElementById(newGetId+"_input2").getAttribute("name").substring(6, 10);
                    var dateFinalTo=new Date(monthNew+"/"+dayNew+"/"+yearNew)
                }
            }
            for(var i=0; i<days;i++) {
                var newDay = validateNumber(i+1)
                var newMonth = validateNumber(d.getMonth()+1)
                var posi_row = Math.floor((i+shift)/7);
                var posi_col = Math.floor((i+shift)%7);
                var dateActual=new Date(newMonth+'/'+newDay+'/'+d.getFullYear())
                var calendars= document.getElementById(newGetId+"_calendar_datepicker_"+calendar)
                var class1=calendars.querySelectorAll(".r"+posi_row)

                if(selection=="from"){
                    if(dateFinalTo!=null){
                        let resta1 = dateActual.getTime() - dateFinalTo.getTime()
                        var calcular1=resta1/ (1000*60*60*24)
                        if(dateFinalFrom!=null){
                            let resta2 = dateActual.getTime() - dateFinalFrom.getTime()
                            var calcular2=resta2/ (1000*60*60*24)
                            let resta3 = dateActual.getTime() - dateFinalTo.getTime()
                            var calcular3=resta3/ (1000*60*60*24)
                        }
                        
                        for(var x=0; x<class1.length;x++){ 
                            if(calcular2>0 && calcular3<0){
                                class1[x].querySelectorAll('.col'+posi_col)[0].innerHTML=i+1
                                class1[x].querySelectorAll('.col'+posi_col)[0].classList.add("calendar-number-day-selected");
                            }
                            if(calcular1>0){
                                class1[x].querySelectorAll('.col'+posi_col)[0].innerHTML=i+1
                                class1[x].querySelectorAll('.col'+posi_col)[0].classList.add("calendar-number-day-disable");
                                class1[x].querySelectorAll('.col'+posi_col)[0].setAttribute('id', ((newDay)+'-'+(newMonth)+'-'+d.getFullYear()));
                            }else{
                                class1[x].querySelectorAll('.col'+posi_col)[0].innerHTML=i+1
                                class1[x].querySelectorAll('.col'+posi_col)[0].classList.add("calendar-number-day-hover");
                                class1[x].querySelectorAll('.col'+posi_col)[0].setAttribute('id', ((newDay)+'-'+(newMonth)+'-'+d.getFullYear()));
                            }
                        }
                    }else{
                        for(var x=0; x<class1.length;x++){
                            class1[x].querySelectorAll('.col'+posi_col)[0].innerHTML=i+1
                            class1[x].querySelectorAll('.col'+posi_col)[0].classList.add("calendar-number-day-hover");
                            class1[x].querySelectorAll('.col'+posi_col)[0].setAttribute('id', ((newDay)+'-'+(newMonth)+'-'+d.getFullYear()));
                        }
                    }
                }

                if(selection=="to"){
                    if(dateFinalFrom!=null){
                        let resta = dateActual.getTime() - dateFinalFrom.getTime()
                        var calcular1=resta/ (1000*60*60*24)
                        if(dateFinalTo!=null){
                            let resta2 = dateActual.getTime() - dateFinalFrom.getTime()
                            var calcular2=resta2/ (1000*60*60*24)
                            let resta3 = dateActual.getTime() - dateFinalTo.getTime()
                            var calcular3=resta3/ (1000*60*60*24)
                        }
                        for(var x=0; x<class1.length;x++){ 
                            if(calcular2>0 && calcular3<0){
                                class1[x].querySelectorAll('.col'+posi_col)[0].innerHTML=i+1
                                class1[x].querySelectorAll('.col'+posi_col)[0].classList.add("calendar-number-day-selected");
                            }
                            if(calcular1<0){
                                class1[x].querySelectorAll('.col'+posi_col)[0].innerHTML=i+1
                                class1[x].querySelectorAll('.col'+posi_col)[0].classList.add("calendar-number-day-disable");
                            }else{
                                class1[x].querySelectorAll('.col'+posi_col)[0].innerHTML=i+1
                                class1[x].querySelectorAll('.col'+posi_col)[0].classList.add("calendar-number-day-hover");
                                class1[x].querySelectorAll('.col'+posi_col)[0].setAttribute('id', ((newDay)+'-'+(newMonth)+'-'+d.getFullYear()));
                            }
                        }
                    }else{
                        for(var x=0; x<class1.length;x++){
                            class1[x].querySelectorAll('.col'+posi_col)[0].innerHTML=i+1
                            class1[x].querySelectorAll('.col'+posi_col)[0].classList.add("calendar-number-day-hover");
                            class1[x].querySelectorAll('.col'+posi_col)[0].setAttribute('id', ((newDay)+'-'+(newMonth)+'-'+d.getFullYear()));
                        }
                    }
                }
            }
            if(selection=="from"){
                selectDateRangeSelection(newGetId, selection)
            }

            if(selection=="to"){
                selectDateRangeSelection(newGetId, selection)
            }
        }

        function clearRange(newGetId, calendar){
            var calendars= document.getElementById(newGetId+"_calendar_datepicker_"+calendar)
            var class1=calendars.querySelectorAll("td")
            for(var x=7; x<class1.length;x++){
                class1[x].classList.remove("calendar-number-day-disable");
                class1[x].classList.remove("calendar-number-day-hover");
                class1[x].classList.remove("calendar-number-day-selected");
                class1[x].setAttribute("id", "");
                class1[x].innerHTML=""
            }
        }

        var calendarSelected

        function selectDate(id, newGetId){
            if(newGetId!=null && id!=null){
            for (var i = 0; i < month; i++) {
                var containerSelect = document.getElementById(container+"_calendar_datepicker_"+i);
                
                for(var x=0; x<containerSelect.querySelectorAll("td").length;x++){
                    containerSelect.querySelectorAll("td")[x].style.color=""
                    containerSelect.querySelectorAll("td")[x].classList.remove("calendar-day-selected")
                }

                if(containerSelect.querySelectorAll("[id^='"+id+"']")[0]!=undefined){
                    containerSelect.querySelectorAll("[id^='"+id+"']")[0].classList.add("calendar-day-selected");
                    containerSelect.querySelectorAll("[id^='"+id+"']")[0].style.color=color
                }

            }
            }
            if(id!=null){
            if(type=="simple"){
                document.getElementById(newGetId+"_input1").value=replaceDate(id);
            }
            if(type=="range"){
                if(calendarRange[newGetId+"_to"]!=null){
                    document.getElementById(newGetId+"_input2").value=(replaceDate(calendarRange[newGetId+"_to"]));
                    document.getElementById(newGetId+"_input2").setAttribute("name", calendarRange[newGetId+"_to"])
                }
                if(calendarRange[newGetId+"_from"]!=null){
                if(deleteTo){
                    if(calendarRange[newGetId+"_from"]!=dateInit){
                    dateInit=calendarRange[newGetId+"_from"]
                    document.getElementById(newGetId+"_input1").value=replaceDate("00-00-0000");
                    document.getElementById(newGetId+"_input1").setAttribute("name", "00-00-0000")
                    document.getElementById(newGetId+"_input1").value=null
                    document.getElementById(newGetId+"_input1").setAttribute("name", null)
                    document.getElementById(newGetId+"_input2").value=replaceDate("00-00-0000");
                    document.getElementById(newGetId+"_input2").setAttribute("name", "00-00-0000")
                    document.getElementById(newGetId+"_input2").value=null
                    document.getElementById(newGetId+"_input2").setAttribute("name", null)
                    calendarRange[newGetId+"_to"] = "";
                    }
                }
                document.getElementById(newGetId+"_input1").value=(replaceDate(calendarRange[newGetId+"_from"]));
                document.getElementById(newGetId+"_input1").setAttribute("name", calendarRange[newGetId+"_from"])
                }
            }
            }
        }

        for (var i = 0; i < month; i++) {
            var clicDay = document.getElementById(container+"_calendar_datepicker_"+i);

            clicDay.onclick = function(e) {
                calendarSelected=e.target.id
                if(calendarSelected!="" && (calendarSelected.indexOf("calendar")<0)){
                    //range
                    if(type=="range"){
                    if(e.target.className.indexOf("from")>-1){
                        calendarRange[container+"_from"] = calendarSelected;
                    }
                    if(e.target.className.indexOf("to")>-1){
                        calendarRange[container+"_to"] = calendarSelected;      
                    }
                    }
                    // close range
                    selectDate(calendarSelected, container)
                    document.body.click();
                    //range
                    if(type=="range"){
                    if(e.target.className.indexOf("to")>-1){    
                        document.body.click();
                        if(!closeClic){
                            document.getElementById(container+"_input2").focus()
                        }
                    }
                    if(e.target.className.indexOf("from")>-1){
                        document.getElementById(container+"_input2").focus()
                    }
                    }
                    // close range
                    
                }
            }
        }

        var d = new Date();
        var monthInit=false
        for (var i = 0; i < month; i++) {
            d.setMonth(d.getMonth() + i);
            if(d.getMonth()==0){
                monthInit=true
            }
            if((i+1)==2 && d.getMonth()==2 && monthInit){
                d.setMonth(d.getMonth() -1);
            }
            document.getElementById(container+'_calendar_month_number_'+i).appendChild(document.createTextNode(validateNumber(d.getMonth()+1)));
            document.getElementById(container+'_calendar_month_name_'+i).appendChild(document.createTextNode(months(d.getMonth())));
            document.getElementById(container+'_calendar_month_year_'+i).appendChild(document.createTextNode(d.getFullYear()));
            generateCalendar(d, container, i);
        
        }

        var left = document.getElementById(container+"_left");
        var right = document.getElementById(container+"_right");
        var solution=0

        left.onclick = function() {
            if(solution==0 && month==2){
                d.setMonth(d.getMonth() - 1);
                solution=1;
            }
            for (var i = (month-1); i >= 0; i--) {
                d.setMonth(d.getMonth() + i);
                updateDate(d, 0);

                document.getElementById(container+'_calendar_month_number_'+i).innerHTML=validateNumber(d.getMonth()+1);
                document.getElementById(container+'_calendar_month_name_'+i).innerHTML=months(d.getMonth());
                document.getElementById(container+'_calendar_month_year_'+i).innerHTML=d.getFullYear();
                if(type=="simple"){
                    generateCalendar(d, container, i);
                }
                if(type=="range"){
                    generateCalendarRange(d, container, i, actualInput);
                }
            }
            return false;
        };

        right.onclick = function() {
            if(solution==1 && month==2){
                d.setMonth(d.getMonth() + 1);
                solution=0;
            }
            for (var i = 0; i < month; i++) {
                d.setMonth(d.getMonth() + i - 1);
                updateDate(d, 1);
                if(month==1){
                    d.setMonth(d.getMonth());
                    updateDate(d, 1);
                }

                document.getElementById(container+'_calendar_month_number_'+i).innerHTML=validateNumber(d.getMonth()+1);
                document.getElementById(container+'_calendar_month_name_'+i).innerHTML=months(d.getMonth());
                document.getElementById(container+'_calendar_month_year_'+i).innerHTML=d.getFullYear();
                if(type=="simple"){
                    generateCalendar(d, container, i);
                }
                if(type=="range"){
                    generateCalendarRange(d, container, i, actualInput);
                }
            }
            return false;
        };

        function replaceDate(replaceDates){
        replaceDates=replaceDates.replace("-","/")
        replaceDates=replaceDates.replace("-","/")
        return replaceDates
        }
        
        var body = document.body;
        body.onclick = function(e) {
            var show=false
            for(var x=0;x<e.composedPath().length;x++){
                if(e.composedPath()[x].id==container){
                    show=true
                }
            }
            if(!show){
                closeCalendar(container)
            }
        }

        function closeCalendar(id){
            document.getElementById(id+"_calendar").style.opacity="0"
            document.getElementById(id+"_calendar").style.visibility="collapse"
            document.getElementById(id+"_calendar").style.height="30px"
            if(typeInput=="traditional"){
                document.getElementById(id+"_input1").style.border="1px solid "+datepickerColor
                document.getElementById(id+"_input1").style.height="22px"
                if(type=="range"){
                    document.getElementById(id+"_input2").style.border="1px solid "+datepickerColor
                    d
                    ocument.getElementById(id+"_input2").style.height="22px"
                }
            }
            document.getElementById("calendar-cover").style.display="none"
            if(typeInput=="material"){
                document.getElementById(id+"_title-1").style.color=datepickerColor
                document.getElementById(id+"_title-2").style.color=datepickerColor
                if(document.getElementById(id+"_input1").value==""){
                    document.getElementById(id+"_title-1").style.marginTop="0px"
                    document.getElementById(id+"_title-1").style.fontSize="18px"
                }
                if(document.getElementById(id+"_input2").value==""){
                    document.getElementById(id+"_title-2").style.marginTop="0px"
                    document.getElementById(id+"_title-2").style.fontSize="18px"
                }
                document.getElementById(id+"_input1").style.borderBottom="1px solid "+datepickerColor
                if(type=="range"){
                    document.getElementById(id+"_input2").style.borderBottom="1px solid "+datepickerColor
                }
            }
        }

        window.addEventListener("resize", onResizeDatepicker);
        function onResizeDatepicker(){
            if(document.documentElement.offsetWidth<768 && document.getElementById(container+"_calendar").style.visibility=="visible"){
                if(document.getElementById("calendar-cover")){
                document.getElementById("calendar-cover").style.display="block"
                }
            }else{
                document.getElementById("calendar-cover").style.display="none"
            }
        }

        function changeClassTd(datepickerId, fromOrTo){
            for (var i = 0; i < month; i++) {
                var calendars= document.getElementById(datepickerId+"_calendar_datepicker_"+i).querySelectorAll("tbody")
                var class1=calendars[0].querySelectorAll("td")
                for(var x=0; x<class1.length;x++){
                    class1[x].classList.remove("from")
                    class1[x].classList.remove("to")
                    class1[x].classList.add(fromOrTo)
                }
            }
            if(type=="range"){
                if(fromOrTo=="from"){
                    changeDefectRangeFrom(datepickerId)
                }
                if(fromOrTo=="to"){
                    changeDefectRangeTo(datepickerId)
                }
            }
        }
    }else{
        var errorExplous="Explous Datepicker - Error when assigning value to some variable: "
        if(!container){
            console.log(errorExplous+"container")
        }
        if(!type){
            console.log(errorExplous+"type")
        }
        if(!color){
            console.log(errorExplous+"color")
        }
        if(!month){
            console.log(errorExplous+"month")
        }
        if(!typeInput){
            console.log(errorExplous+"typeInput")
        }
        if(!title1){
            console.log(errorExplous+"title1")
        }
        if(!datepickerColor){
            console.log(errorExplous+"datepickerColor")
        }
    }
}
  
export default Datepicker