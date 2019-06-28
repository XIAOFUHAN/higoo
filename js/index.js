//商品分类，以及商品
$(function(){
$.get("http://47.104.244.134:8080/goodstypelist.do",{l:2}).done(data=>{
				
			})
var url= window.location.search;
// console.log(url);
// console.log(url.split("=")[1]);
var Token = url.split("=")[1];
//console.log("list.html?token="+Token);
$.get("http://47.104.244.134:8080/goodsbytid.do",{
	tid:13,
	page:1,
	limit:6
}).done(data=>{
	console.log(data);
	var data=data.data;
	var str="";
	for (let i=1;i<data.length;i++){
		str+=`
		<div class="item item${i}">
			<div class="p"><a id="href" href="list.html?token=${Token}"><img src="${data[i].picurl}"
					 alt="${data[i].name}"></a> </div>
			<div class="i">
		
				<span></span>
				<a   id="href" href="list.html?token=${Token}" title="${data[i].name}">${data[i].name}</a>
				<span class="gel-price"><em>￥${data[i].price}</em></span>
				<span class="gel-mktprice">&nbsp;&nbsp;<del>￥${data[i].price}</del></span>
			</div>
		</div>
		`
	}
	$(".itemWrap1").html(str);
})

 




	//第一个轮播图
	var count = 0;
	var timer1 = null;
	move();
	timer1 = setInterval(function(){
		count++;
		if(count==$(".main li").length){
			count = 0;
		}
		move()
		
	},3000)
	function move(){
			$(".main li").eq(count).fadeIn()
			.animate({"opacity":1,"z-index":2},500)
			.siblings().fadeOut()
			.css({"opacity":0,"z-index":1})
			
			
			$(".main").siblings("ul").children().eq(count).addClass("active").siblings().removeClass("active");
		}
	//鼠标滑过，停止计时器
	$(".mainli").mouseover(function(){
		clearInterval(timer1)
	})
	$(".mainli").mouseout(function(){
		timer1 = setInterval(function(){
			count++;
			if(count==$(".main li").length){
				count = 0;
			}
			move()
			
		},3000)
	})
	//鼠标点击下面小标，跳转对应页面

	for (let i = 0; i < $(".slide-trigger").length; i++) {
	    $(".slide-trigger").children().eq(i).on("mouseover", function() {
	        $(".main li").eq(i).fadeIn()
	        .animate({"opacity":1,"z-index":2},500)
	        .siblings().fadeOut()
			$(".main").siblings("ul").children().eq(i).addClass("active").siblings().removeClass("active")
	        
	    })
	}
	
	

	
	
	//热荐品牌的nav的鼠标滑过触发效果
	$(".movenav li:first").mouseover(function(){
		$(this).addClass("active").siblings("li").removeClass("active");

		$(".movenav").parent().siblings("dd:first").css("display","block").siblings("dd").css("display","none");
		$(".movenav").siblings().animate({"left":"270px"},200);
		
	})
	$(".movenav li").eq(1).mouseover(function(){
		$(this).addClass("active").siblings("li").removeClass("active");

		$(".movenav").parent().siblings("dd").eq(1).css("display","block").siblings("dd").css("display","none");
		$(".movenav").siblings().animate({"left":"342px"},200);
		
	})
	$(".movenav li:last").mouseover(function(){
		$(this).addClass("active").siblings("li").removeClass("active");

		$(".movenav").parent().siblings("dd:last").css("display","block").siblings("dd").css("display","none");
		$(".movenav").siblings().animate({"left":"414px"},200);
		
	})
	//第二个轮播
	var num=0;
	var timer=null;
	timer=setInterval(function(){
		num++;
		if(num=3){
			$(".iWraplist").css("left","0px").animate().stop();
			$(".iWraplist div:first").css({"position":"relative","left":"0px","z-index":"1"})
				//.animate({"left":"0px"},3000)
				num=1;
			}
		// if(num>3){
		// 	$(".iWraplist").css("left","0px").animate().stop();
		// 	$(".iWraplist div:first").css({"position":"relative","left":"1200px","z-index":"1"})
		// 		.animate({"left":"0px"},3000)
		// 		num=1;
		// 	}
		//if(num=4){
		console.log(num*-(1200)+"px");
		$(".iWraplist").animate({"left":num*-(1200)+"px"},2000)
		//n=1;
	//}
	},3000)
	//鼠标滑过，停止计时器
	$(".itemWrap").mouseover(function(){
		clearInterval(timer)
	})
	$(".itemWrap").mouseover(function(){
		timer=setInterval(function(){
			num++;
			if(num=3){
				$(".iWraplist").css("left","0px").animate().stop();
				$(".iWraplist div:first").css({"position":"relative","left":"0px","z-index":"1"})
					//.animate({"left":"0px"},3000)
					num=1;
				}
			// if(num>3){
			// 	$(".iWraplist").css("left","0px").animate().stop();
			// 	$(".iWraplist div:first").css({"position":"relative","left":"1200px","z-index":"1"})
			// 		.animate({"left":"0px"},3000)
			// 		num=1;
			// 	}
			//if(num=4){
			console.log(num*-(1200)+"px");
			$(".iWraplist").animate({"left":num*-(1200)+"px"},2000)
			//n=1;
		//}
		},3000)
	})
	//第三个轮播
	var num1=0;
	var timer=null;
	timer=setInterval(function(){
		if(num1>3){
			$(".iWraplist2").css("left","0px").css({"left":num1*-(1200)+"px"});
				num1=1;
			}
		$(".iWraplist2").css({"left":num1*-(1200)+"px"})
	num1++;
	},3000)
	//鼠标滑过，停止计时器
	$(".itemWrap").mouseover(function(){
		clearInterval(timer)
	})
	$(".itemWrap").mouseout(function(){
		timer=setInterval(function(){
			if(num1>3){
				$(".iWraplist2").css("left","0px").css({"left":num1*-(1200)+"px"});
					num1=1;
				}
			$(".iWraplist2").css({"left":num1*-(1200)+"px"})
		num1++;
		},3000)
	})	
	//点击左右按钮，跳转页面
	//点击右面按钮
	$(".next").click(function(){
		num1 ++;
		if(num1=4){
			//$(".iWraplist2").css("left","0px").css({"left":num1*-(1200)+"px"});
				num1=0;
			}
		$(".iWraplist2").css({"left":num1*-(1200)+"px"})	
	})
	$(".prev").click(function(){
		num1--;
		if(num1<0){
			num1=4;
		}
		$(".iWraplist2").css({"left":num1*-(1200)+"px"})
	})			

//最后一个轮播
	var num2 = 0;
	var timer2 = null;
	move1();
	timer2 = setInterval(function(){
		num2++;
		if(num2==$(".activeli li").length){
			num2 = 0;
		}
		move1()
	},2000)
	function move1(){
		
			$(".activeli li").eq(num2).fadeIn()
			.animate({"opacity":1,"z-index":2},500)
			.siblings().fadeOut()
			.css({"opacity":0,"z-index":1})
			
			
			$(".liactive li").eq(num2).addClass("active").siblings().removeClass("active");
		}
	//鼠标滑过，停止计时器
	$(".activeli").mouseover(function(){
		clearInterval(timer2)
	})
	$(".activeli").mouseout(function(){
		timer2 = setInterval(function(){
			num2++;
			if(num2==$(".activeli li").length){
				num2 = 0;
			}
			move1()
			
		},3000)
	})
	//鼠标点击下面小标，跳转对应页面
	
	for (let i = 0; i < $(".liactive li").length; i++) {
	    $(".liactive li").eq(i).on("mouseover", function() {
	        $(".activeli li").eq(i).fadeIn()
	        .animate({"opacity":1,"z-index":2},500)
	        .siblings().fadeOut()
			$(".liactive li").eq(i).addClass("active").siblings().removeClass("active")
	        
	    })
	}

	//我的账户   鼠标滑过展开效果
	 $(".shopmax-keys").mouseover(function(){
		$(".maxService").addClass("maxsHover");
	  });
	  $(".shopmax-keys").mouseout(function(){
		$(".maxService").removeClass("maxsHover");
	  });
	  
	  
// 	  //全部商品分类，一级列表
// 	 $.get("http://47.104.244.134:8080/goodstypelist.do",{l:1}).done(data=>{
// 	 	console.log(data[0].name);
// 	 	var str="";
// 	 	for(let i=0;i<data.length ; i++){
// 	 		str+=`<li class="cat-item lv1">
// 	 				<div class="cat-root-box">
// 	 					<a class="depth-1" href="/gallery-22.html" target="_blank">${data[i].name}</a>
// 	 				</div>
// 	 				<div class="cat-children-box " style="width: 380px;">
// 	 				<div class="cat-children">
// 	 						<dl class="cat-item lv2 noborder">
// 	 						<dt> <a href="/gallery-149.html" target="_blank"><span>${data[i].name}</span></a> </dt>
// 	 					</dl>
// 	 					<div class="cat-brand-logo" style="float:right;">
// 	 						<img src="http://www.higoo.com/themes/higoo/images/catbg/pic-4.jpg" style="width:280px;height:398px;">
// 	 					</div>
// 	 				</div>
// 	 				</div>
// 	 				
// 	 			</li>
// 	 		`
// 	 	}
// 	 	$(".cat-shopmax-vertical").html(str);
// 	 	//给全部商品分类添加鼠标经过事件
// 	 	$("#maxDropbox").mouseover(function(){
// 	 		$(".cat-shopmax-vertical").css({"display":"block"})
// 	 		
// 	 		//二级标题隐藏，鼠标经过显示效果		
// 	 		$("li.1v1").mouseover(function(){
// 	 			$(".cat-shopmax-vertical").css({"overflow":"visibile"})
// 	 		})
// 	 		//没有出来	
// 	 	})
// 	 	$("#maxDropbox").mouseout(function(){
// 	 		$(".cat-shopmax-vertical").css({"display":"none"})
// 	 	})
// 	 	
// 	 }) 
// 	  
// 
// 









				
				
})
	

	
		
			
			
			
			