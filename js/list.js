//详情页通过接口引入商品上半部分
var url= window.location.search;
// console.log(url);
// console.log(url.split("=")[1]);
var Token = url.split("=")[1];
$.get("http://47.104.244.134:8080/goodsbytid.do",{
				tid:13,
				page:2,
				limit:6
	}).done(data=>{
	console.log(data);
		var data=data.data;
		var str="";
		for (var i=1 in data){
			str+=`
			<li class="goods-item">
				<div class="goods-pic widthpic${i}"><a target="_blank" href="detail.html?token=${Token}&&id=${data[i].id}"><img src="${data[i].picurl}"
						 alt="${data[i].name}"></a>
				</div>
				<div class="goods-info">
					<div class="goods-name"><a target="_blank" href="detail.html?token=${Token}&&id=${data[i].id}">${data[i].name}</a></div>
					<div class="goods-intro">${data[i].name}</div>
					<div class="goods-brief" style="font-size:16px;"></div>
					<div class="goods-price">
						<ins class="price">￥${data[i].price}</ins>
						<del class="price">市场价：￥${data[i].price}</del>
						<a href="detail.html?token=${Token}&&id=${data[i].id}" class="btn btn btn-import btn-huge" style="float:right;"><span><span>立即购买</span></span></a>
					</div>
				</div>
			</li>
			`
		
			
		}
		$(".goods-grid ").html(str);
				
				
				
	})
//下半部分	
$.get("http://47.104.244.134:8080/goodsbytid.do",{
				tid:13,
				page:1,
				limit:103
	}).done(data=>{
	console.log(data);
		var data=data.data;
		var str1="";
		for (var i=91 in data){
			str1+=`
			<li class="goods-list">
				<div class="goodpic"><a target="_blank" href="detail.html?token=${Token}&&id=${data[i].id}"><img src="${data[i].picurl}"
						 alt="${data[i].name}" width="200" height="220"></a>
				</div>
				<div class="info">
					<h6><a target="_blank" href="detail.html?token=${Token}&&id=${data[i].id}">${data[i].name}</a></h6>
			
					<ul>
						<li class="price${i}">￥${data[i].price}</li>
						<li class="mktprice${i}">￥${data[i].price}</li>
					</ul>
			
					<a class="addcart-btn listact f-addcart btn btn-import" href="detail.html?token=${Token}&&id=${data[i].id}" style="color:white;"><span><span>立即购买</span></span></a>
				</div>
			</li>
			`
	
		}
		$(".goods-column ").html(str1);
				
	//立即购买btn的跳转
		//$(".btn-import").attr('href','http://localhost:8080/cart.html?id='+getid+'&token='+Token); 
				
	})	