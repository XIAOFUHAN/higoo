$(function(){
	// $(".tags-hd").click(function(){
	// 	$(this).addClass("active")
	// 	.siblings().removeClass("active")
	// 	$(this).parent().css("position:fixed")
	// })
	//var flag = true;
	var navTop=$(".product-tags").offset().top;
	$(window).scroll(function(){
		// if(flag){
		var st = $(this).scrollTop();
		// if(st > 300){
		// 	$("#floorNav").fadeIn();
		// }else{
		// 	$("#floorNav").fadeOut();
		// }
		
		//console.log(st);
		
		if(st>navTop){
			$(".product-tags").css({"position":"fixed","margin":0});
		}else{
			$(".product-tags").css({"position":"","margin-top":"30px"});
		}
		// $(".divpic").each(function(){
		// 	//console.log(this);
		// 	if(st >= $(this).offset().top ){
		// 		//console.log($(this).offset().top );
		// 		//取index的值有问题
		// 		var index = $(this).index();
		// 		$(".product-tags h2").eq(index).addClass("active").siblings().removeClass("active");
		// 	}
		// })
		
		// }
	})
	// 
	$(".product-tags h2").click(function(){
		//flag = false;
		var index = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$("body,html").animate({"scrollTop":$(".divpic").eq(index).offset().top-100},200
		// ,function(){
		// 	flag = true;
		// }
		
		);
	});
	// $("#floorNav li:last").click(function(){
	// 	$("body,html").animate({"scrollTop":0},200);
	// 	
	// })
	
	
	
	
	
// 	//放大镜效果
// 	$.fn.magnifying = function(){		
// 		var that = $(this),		 
// 		$imgCon = that.find('.con-fangDaIMg'),//正常图片容器		 	
// 		$Img = $imgCon.find('img'),//正常图片，还有放大图片集合		   
// 		$Drag = that.find('.magnifyingBegin'),//拖动滑动容器		   
// 		$show = that.find('.magnifyingShow'),//放大镜显示区域		
// 		$showIMg = $show.find('img'),//放大镜图片		
// 		$ImgList = that.find('.con-FangDa-ImgList > li >img'),		
// 		multiple = $show.width()/$Drag.width();//倍数 		
// 		$imgCon.mousemove(function(e){			
// 			$Drag.css('display','block');			
// 			$show.css('display','block');		   
// 			 //获取坐标的方法		   	
// 				   	
// 			var iX = e.pageX - $(this).offset().left - $Drag.width()/2,		   		
// 			iY = e.pageY - $(this).offset().top - $Drag.height()/2,			   		
// 			MaxX = $imgCon.width()-$Drag.width(),		   		
// 			MaxY = $imgCon.height()-$Drag.height();  	   	    
// 				   	
// 			iX = iX > 0 ? iX : 0;		   	
// 			iX = iX < MaxX ? iX : MaxX;		   	
// 			iY = iY > 0 ? iY : 0;		   	
// 			iY = iY < MaxY ? iY : MaxY;			   	
// 			$Drag.css({left:iX+'px',top:iY+'px'});	   				   
// 				$showIMg.css({marginLeft:-multiple*iX+'px',marginTop:-multiple*iY+'px'});		   	
// 				//return false;		
// 				});		
// 			$imgCon.mouseout(function(){		   
// 					$Drag.css('display','none');			
// 					$show.css('display','none');			
// 					//return false;		
// 					}); 		
// 			
// 			$ImgList.click(function(){			
// 				var NowSrc = $(this).attr('src');			
// 				$Img.attr('src',NowSrc);			
// 				$(this).parent().addClass('active').siblings().removeClass('active');		
// 			});		
// 	}	
// 			$("#fangdajing").magnifying();
// 
// 
//加入购物车

	// $(".btn").click(function () {
	//         // if (Token < 0) {
	//         //     alert("请登录")
	//         //     window.open('logn.html')//+data.token,'_blank'); 
	//         // } else {
	//     //         for (var i = 0; i < $(".action-quantity-input").val(); i++) {
	//     //             $.get("http://47.104.244.134:8080/cart.html)
	// 				// //cartsave.do", { gid: Gid, token: Token })
	// 				// .done(function (data) {
	//     //                 
	//     //             })
	//     //         }
	//             if(i== $(".action-quantity-input").val()){
	//                 var msg=confirm("是否跳转至购物车页面")
	//                 if(msg){
	//                     window.open('cart.html?token='+Token);
	//                 }
	// 
	//             }else{
	//                 alert("添加失败")
	//             }
	//         //}
	//     })
	//+-数量
	$(".btn-increase").click(function () {
	        var count = Number($(".action-quantity-input").val())
	        count++;
	        if (count >= 10) {
	            $(".action-quantity-input").val(10)            
	        } else {
	            $(".action-quantity-input").val(count)
	         
	        }
	    })
	    $(".btn-decrease").click(function () {
	        var count = Number($(".action-quantity-input").val())
	        count--;
	        if (count < 1) {
	            $(".action-quantity-input").val(1)
	        } else {
	            $(".action-quantity-input").val(count)
	        }
	    })
	    $(".action-quantity-input").blur(function () {
	        if ($(this).val() <= 10) {
	        } else {
	            $(".action-quantity-input").val(10)
	        }
			})
	
	//扫一扫立即购买效果
	$(".sao").mouseover(function(){
		$(".saoma ").css({"display":"block","position":"absolute"  ,  "left": 0,
    "bottom": "16px"})
	})
	$(".sao").mouseout(function(){
		$(".saoma ").css({"display":"none","position":"absolute"  ,  "left": 0,
    "bottom": "16px"})
	})
	//注册会员效果
	$(".action-handle").mouseover(function(){
		$(".pop-body ").css({"display":"block"})
	})
	$(".action-handle").mouseout(function(){
		$(".pop-body ").css({"display":"none"})
	})
	//点击button按钮跳转到购物车
	// $(".product-buy-action").click(function(){
	// 	window.open('cart.html')
	// })
	


//获取接口商品详情
var Token = location.search.substring(1).split("&")[0].split("=")[1];
var getid = location.search.substring(1).split("&&")[1].split("=")[1];
console.log(getid);

$.get("http://47.104.244.134:8080/goodsbyid.do", { id: getid}).done(function (data) {
        console.log(data)
        $(".product-titles h2").text(data.name);
		$(".product-titles p").text(data.name);
		$(".bed4").text(data.name);
        $(".smallpic").attr("src", data.picurl);
        $(".action-price").text( data.price);
        $(".small-pic").attr("src", data.picurl);
		$(".midpic").attr("src", data.picurl)

    })
   // 加入购物车
//     $(".btn").click(function () {
//         if (Token < 0) {
//             alert("请登录")
//             	window.open('login.html');
//         } else {
//             for (var i = 0; i < $("#input-count").val(); i++) {
//                 $.get("http://47.104.244.134:8080/cartsave.do", { gid: getid, token: Token }).done(function (data) {
// 
//                 })
//             }
//             if (i == $("#input-count").val()) {
//                 var msg = confirm("是否跳转至购物车页面")
//                 if (msg) {
//                    	window.open('cart.html?token='+Token+'&&id='+getid); 
//                 }
// 
//             } else {
//                 alert("添加失败")
//             }
//         }
//     })
	
	
	//商品列表
	console.log(Token);
	$.get("http://47.104.244.134:8080/goodsbytid.do",{
				tid:13,
				page:2,
				limit:6
	}).done(data=>{
	console.log(data);
		var data=data.data;
		var str="";
		for (let i=1;i<data.length;i++){
			str+=`
			<div class="item line-last">
				<div class="p"> <a href="detail.html?token=${Token}&&id=${data[i].id}" alt="${data[i].name}" target="_blank"><img src="${data[i].picurl}"></a></div>
				<div class="i" width-num="-12">
					<h6> <a href="detail.html?token=${Token}&&id=${data[i].id}" target="_blank"><span class="pd3">${i}</span>&nbsp;${data[i].name}
							</a> </h6>			
					<ul>
						<li class="gel-price">
							<label></label><em>￥${data[i].price}</em></li>			
					</ul>
				</div>
			</div>
			
			`
		}
		$(".listbody ").html(str);
})
//botton点击事件进入购物车页面

// 
// 	$.get("http://47.104.244.134:8080/cartsave.do",{
// 				gid:getid,
// 				token:Token
// 	}).done(data=>{
// 	console.log(data);
// 
// 
// 	$(".btn-huge").each(function(){
// 		$(this).on("click", function(event) {
// 			    event.preventDefault();
// 				window.open('cart.html?token='+Token+'&&id='+getid);
// 			
// 			})
// 		})
// 	})
	     //加入购物车
	 $(".action-addtocart").on("click", function(event) {
		  event.preventDefault();
             if (Token != "null") {
				 
                 for (var i = 0; i < $(".action-quantity-input").val(); i++) {
                     $.get("http://47.104.244.134:8080/cartsave.do", {
                         gid: getid,
                         token: Token,
                     }).done(data => {

                     })
                 }
				 console.log(i);
                 if (i == $(".action-quantity-input").val()) {
                     console.log(i)
                     var msg = confirm("你即将添加多件该商品确定吗?")
                     if (msg) {
                         window.open('cart.html?token=' + Token);
                     }
                 }
             } else {
                 alert("请登录 即将调转到登录页面")
                 window.open('login.html');
             }

         })
		$(".action-buynow").on("click", function(event) {
				  event.preventDefault();
		        if (Token != "null") {
						 
		            for (var i = 0; i < $(".action-quantity-input").val(); i++) {
		                $.get("http://47.104.244.134:8080/cartsave.do", {
		                    gid: getid,
		                    token: Token,
		                }).done(data => {
		
		                })
		            }
						 console.log(i);
		            if (i == $(".action-quantity-input").val()) {
		                console.log(i)
		                var msg = confirm("你即将添加多件该商品确定吗?")
		                if (msg) {
		                    window.open('cart.html?token=' + Token);
		                }
		            }
		        } else {
		            alert("请登录 即将调转到登录页面")
		            window.open('login.html');
		        }
		
		    })
		
	


})

