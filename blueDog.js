function $(Nid){
			return document.getElementById(Nid);
		}
        //导航栏
        myHide = function(myElemnt,show_div,style_div){
        	myElemnt.onmouseover = function(){
        		show_div.className = style_div;
            show_div.onmouseover = function(){
            	show_div.className = style_div;
            }
        }
            myElemnt.onmouseout = function(){
            		show_div.className = "hide";
            }
            show_div.onmouseout = function(){
            		show_div.className = "hide";
            }
	    };
     	!function(){
            for(var i = 1; i<6; i++){
                for(var j = 1; j<6; j++){
                    if(i=j){
                       myHide($("li1_bar1_span"+i),$("li_bar1_div"+i),"s_d"+i);
                    }
            }
           }}();
           //搜索框
           $("search_but").onclick = function(){
            alert("搜索失败");
            $("search_txt").value = "";
           };
           //背景图片变换
           $("push1").onmouseover = function(){
            setTimeout(function(){
            $("active").className = "active-1"
           },200);};
           $("push2").onmouseover = function(){
            setTimeout(function(){
            $("active").className = "active-2"
           },200);};
            $("push3").onmouseover = function(){
            setTimeout(function(){
            $("active").className = "active-3"
           },200);};
            $("push4").onmouseover = function(){
            setTimeout(function(){
            $("active").className = "active-4"
           },200);};
            $("push5").onmouseover = function(){
            setTimeout(function(){
            $("active").className = "active-5"
           },200);};
            $("push6").onmouseover = function(){
            setTimeout(function(){
            $("active").className = "active-6"
           },200);};
            //商品类别选择
            $("selects1").onmouseover = function(){
                $("select_1").className = "selects_1"
            }
            !function(){
            for(var i = 1; i<16; i++){
                for(var j = 1; j<16; j++){
                    if(i=j){
                      myHide($("selects"+i),$("select_"+i),"selects_1");
                    }
            }
           }}();
