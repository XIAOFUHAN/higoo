
$(function(){
	
  // $(".shopmax-keys").mouseover(function(){
  //   $(".shopmax-keys dd:last").children().css("display","block");
  // });
  // $(".shopmax-keys").mouseout(function(){
  //   $(".shopmax-keys dd:last").children().css("display","none");
  // });
  
  //导航栏鼠标滑过，颜色变化
	// $(".maxMenu").mouseover(function(){
	//   $(".maxMenu ul:li").css("background-color","#666");
	// });
	// $(".maxMenu").mouseout(function(){
	//   $(".maxMenu ul:li").css("background-color","#fff");
	// });
  //全部商品分类，一级列表
 $.get("http://47.104.244.134:8080/goodstypelist.do",{l:1}).done(data=>{
 	//console.log(data);
	//var data =data.name;
	var str="";
	for(let i=0;i<data.length ; i++){
		str+=`<li class="cat-item lv1">
				<div class="cat-root-box">
					<a class="depth-1" href="/gallery-22.html" target="_blank">${data[i].name}</a>
				</div>
				<div class="cat-children-box " style="width: 380px;">
				<div class="cat-children">
						<dl class="cat-item lv2 noborder">
						<dt> <a href="/gallery-149.html" target="_blank"><span>${data[i].name}</span></a> </dt>
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
			$(".cat-shopmax-vertical").css({"overflow":"visibile"})
		})
		//没有出来	
	})
	$("#maxDropbox").mouseout(function(){
		$(".cat-shopmax-vertical").css({"display":"none"})
	})
	
 })
  
  //调用接口登录网站
 
  $("#jumpindex").on("click", function(event) {
     
	  event.preventDefault();
  console.log($("#mobile-form").val())
  console.log($("#dom_el_e80ddf0").val())
      $.post("http://47.104.244.134:8080/userlogin.do", { 
      	  name: $("#mobile-form").val(),
      	  password: $("#dom_el_e80ddf0").val()
      }).done(function (data) {
       console.log(data)
          if (data.msg === "OK") {
  
              alert("登录成功")
              var timer = setTimeout(function() {
                  window.open('index.html?token='+data.data.token);
              }, 3000)
          } else {
              alert("登录失败 请重新填写")
          }
      })
  })	
  
  
});
//记住账号






//七天免登录
// 用户名：<input type="text"  /></br>
// 密码：<input type="password" /></br>
// <input type="checkbox" />七天免登陆</br>
// <input type="button" value="提交"/> </br>
// <script src="cookie.js" type="text/javascript" charset="utf-8"></script>
// <script type="text/javascript">
// var aInput=document.getElementsByTagName("input");
// //刷新页面时，看cookie里有没有存过用户名和密码
// if(getCookie("username")!==undefined){
// 	aInput[0].value=getCookie("username");
// 	aInput[1].value=getCookie("password");
// 	aInput[2].checked=true;
// 	
// }
// aInput[3].onclick=function(){
// 	if(aInput[2].checked){
// 		var arl1=aInput[0].value;
// 		var arl2=aInput[1].value;
// 		setCookie("username",arl1,7);
// 		setCookie("password",arl2,7);
// 		console.log(getCookie("username"));
// 	}else{
// 		removeCookie("username");
// 		removeCookie("password");
// 	}
// }
// </script>
// var oShopmax=document.getElementsByClassName("shopmax-keys");
// var aDd=document.getElementsByTagName("dd");
// 	oShopmax.appendChild=aDd;
// 	oShopmax.onmouseover=function(){
// 		for(let i=0;i<aDd.length;i++){
// 			aDd[i].style.display="block"
// 		}
// 		oShopmax.style.display="block";
// 	}
// 	oShopmax.onmouseout=function(){
// 		oShopmax.style.display="none";
// 	}		
