$(function(){
	//我的账户   鼠标滑过展开效果
	 var url= window.location.search;
	// console.log(url);
	// console.log(url.split("=")[1]);
	var Token = url.split("=")[1];
	 $(".shopmax-keys").mouseover(function(){
		$(".maxService").addClass("maxsHover");
	  });
	  $(".shopmax-keys").mouseout(function(){
		$(".maxService").removeClass("maxsHover");
	  });
	  
	  
	  //全部商品分类，一级列表
	 $.get("http://47.104.244.134:8080/goodstypelist.do",{l:1}).done(data=>{
	 	console.log(data);
	 	var str="";
	 	for(let i=0;i<data.length ; i++){
	 		str+=`<li class="cat-item lv1">
	 				<div class="cat-root-box">
	 					<a class="depth-1" href="list.html?token=${Token}" target="_blank">${data[i].name}</a>
	 				</div>
	 				<div class="cat-children-box " style="width: 380px;">
	 				<div class="cat-children">
	 						<dl class="cat-item lv2 noborder">
	 						<dt> <a href="list.html?token=${Token}" target="_blank"><span>${data[i].name}</span></a> </dt>
	 					</dl>
	 					<div class="cat-brand-logo" style="float:right;">
	 						<img src="http://www.higoo.com/themes/higoo/images/catbg/pic-4.jpg" style="width:280px;height:398px;">
	 					</div>
	 				</div>
	 				</div>
	 				
	 			</li>
	 		`
	 	}
	 	$(".cat-shopmax-vertical").html(str);
	 	//给全部商品分类添加鼠标经过事件
	 	$("#maxDropbox").mouseover(function(){
	 		$(".cat-shopmax-vertical").css({"display":"block"})
	 		
	 		//二级标题隐藏，鼠标经过显示效果		
	 		$("li.1v1").mouseover(function(){
	 			$(".cat-shopmax-vertical").css({"overflow":""})
	 		})
	 		//没有出来	
	 	})
	 	$("#maxDropbox").mouseout(function(){
	 		$(".cat-shopmax-vertical").css({"display":"none"})
	 	})
	 	
	 }) 
	 // MenuwList 
	 
	  // var str1 = ""
	  
	  
	  
	  
	  
})