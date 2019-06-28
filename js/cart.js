var Token = location.search.substring(1).split("&")[0].split("=")[1];

// if(Token!=undefined){
// 	var user=JSON.parse(localStorage.getItem("user"));	
// 	$("#ydl").text("欢迎"+user.uname).click(function(){
// 		alert("您已登录")
// 		$(this).attr("href","#")        
// 	});
// 	$(".login-before").hide();
// }
$.get("http://47.104.244.134:8080/cartlist.do",{
				token:Token
	}).done(data=>{
	console.log(data);
	var cart=new Cart(data);
	cart.show("cart-item","all");
	cart.getzj()
})



class Cart {

	constructor(data) {
		this.data = data;
		console.log(data);
	}
	//更新购物车数据
	updata(uid, ugid, unum) {
		$.get("http://47.104.244.134:8080/cartupdate.do", { id: uid, gid: ugid, num: unum, token: Token })
			.done((data) => {
				console.log(data)

			})
	}

	show(objid, allid) {
		this.oul = document.getElementById(objid);

		var str = "";
		for (let i = 0; i < this.data.length; i++) {
			//<li   data-id="${this.data[i].id}" data-gid="${this.data[i].gid}">
			str += `
		
			<tr  class="cart-product last caidan" data-id="${this.data[i].id}" data-gid="${this.data[i].gid}">
		
			<td>
				<div class="p-pic">
					<a href="detial.html?id=${this.data[i].goods.gid}"><img src='${this.data[i].goods.picurl}'	
						 alt="${this.data[i].goods.name}"></a>
				</div>
			</td>
			<td class="p-info">
				<div class="p-title title"><a target="_blank" href="detial.html?id=${this.data[i].goods.gid}">${this.data[i].goods.name}</a></div>
			</td>
			<td class="p-price dj">${this.data[i].goods.price}</td>
			<td>
				<div class="p-quantity js">
					<a  class="btn-decrease jian">-</a>
					<input type="text"  class="num"  value="${this.data[i].count}">
					<a  class="btn-increase jia">+</a>
				</div>
			</td>
			<td class="p-discount">￥0.00</td>
			<td class="p-integral">
				<input type="checkbox" class="chk" checked="checked">  
			</td>
			<td class="p-subtotal"><span class="jg">${this.data[i].goods.price * this.data[i].count}</span></td>
			<td class="p-action">
				<a  class="btn-delete del" data-id="${this.data[i].id}" data-gid="${this.data[i].gid}">移除</a>
			</td>
			</tr>
        `
			// <td>
			// 	<div class="p-quantity">
			// 		<a href="javascript:void(0);" class="btn-decrease">-</a>
			// 		<input type="text" name="modify_quantity[goods_1896_4618][quantity]" value="4">
			// 		<a href="javascript:void(0);" class="btn-increase">+</a>
			// 	</div>
			// 	<span class="warn-message">余量有限</span>
			// </td>
			// <td class="p-discount">￥0.00</td>
			// <td class="p-integral">
			// 	-
			// </td>
			// <td class="p-subtotal">￥476.00</td>
			// <td class="p-action">
			// 	<a href="javascript:void(0);" class="btn-delete">移除</a>
			// </td>
		;
		}
		
		this.oul.innerHTML = str;
		this.ali = document.getElementsByClassName("caidan")
		this.ajian = document.getElementsByClassName("jian")
		this.ajia = document.getElementsByClassName("jia")
		this.anum = document.getElementsByClassName("num")
		this.ajg = document.getElementsByClassName("jg")
		this.adelbtn = document.getElementsByClassName("del")
		this.achk = document.getElementsByClassName("chk")
		this.zj = document.getElementById("zj")
		this.all = document.getElementById(allid);
		this.clean=document.getElementsByClassName("action-clean");
		this.all.checked = true;
		this.nnn()
		console.log(this.ajian);
		console.log(this.ajia.length);
		this.all.onclick = () => {
			if (this.all.checked) {
				for (let j = 0; j < this.achk.length; j++) {
					this.achk[j].checked = true
					//this.achk[j].setAttribute("checked","true")
				}
			} else {
				for (let k = 0; k < this.achk.length; k++) {
					this.achk[k].checked = false;
					//this.achk[j].removeAttribute("checked")
					//this.achk[j].setAttribute("checked","false")
				}
			}
			this.getzj();
			this.nnn()
		}
		var _this = this;
		
		
		for (let i = 0; i < this.ajian.length; i++) {
			console.log(this.ali[i]);
			console.log(this.ajian.length);
			this.ajia[i].onclick = () => {
				this.anum[i].value = parseInt(this.anum[i].value) + 1;
				var id = this.ali[i].getAttribute("data-id");
				var gid = this.ali[i].getAttribute("data-gid");
				this.updata(id, gid, 1);
				this.getzj();
				this.nnn()
			}
			this.ajian[i].onclick = () => {
				var id = this.ali[i].getAttribute("data-id");
				var gid = this.ali[i].getAttribute("data-gid");
				this.anum[i].value -= 1;
				if (this.anum[i].value <= 1) {
					this.anum[i].value = 1
				}
				this.updata(id, gid, -1);
				this.getzj();
				this.nnn()

			}
			this.anum[i].onchange = () => {
				if (this.anum[i].value <= 1) {
					this.anum[i].value = 1
				}
				var id = this.ali[i].getAttribute("data-id");
				var gid = this.ali[i].getAttribute("data-gid");
				this.updata(id, gid, 0);
				this.updata(id, gid, this.anum[i].value);
				this.getzj();
				this.nnn()
			}
			//存this的方法
			this.adelbtn[i].onclick = function () {
				//console.log(this, _this)//_this存的是对象实例
				var id = this.getAttribute("data-id");
				var gid = this.getAttribute("data-gid");
				_this.oul.removeChild(this.parentNode.parentNode);
				delete _this.data[id]
				_this.updata(id, gid, 0);
				_this.getzj();
				_this.nnn()
			}
			//清空购物车
			// this.clean.onclick =function(){
			// 	
			// }
			
			
			
			// console.log(parseInt((this.data[i].goods.price )* (this.data[i].count)))
			// console.log(this.data[i].count);
			// console.log(this.data[i].count*this.data[i].goods.price);
			//委托
			//			this.ali[i].onclick = (e) => {
			//				var evt = e || event;
			//				var _target = evt.target || evt.srcElement;
			//				if(_target.className==="del") {
			//					var id=_target.getAttribute("data-id");
			//					this.oul.removeChild(_target.parentNode)
			//					delete this.data[id]
			//					setCookie("cart", JSON.stringify(this.data))										
			//					this.getzj();
			//				}
			//			}
			this.achk[i].onclick = () => {

				this.getzj();
				this.nnn()
			}

		}

	}
	getzj() {
		var total = 0;
		this.adj = document.getElementsByClassName("dj")
		for (let i = 0; i < this.ajg.length; i++) {
			this.ajg[i].innerText = this.anum[i].value * this.adj[i].innerText
		}
		var flag = true;
		for (let i = 0; i < this.achk.length; i++) {
			if (this.achk[i].checked) {
				total += parseInt(this.ajg[i].innerText)
			} else {
				flag = false;
			}
		}
		this.all.checked = flag;
		this.zj.innerText = total;
	}
	nnn() {
		var s = this.oul.children;
		console.log(s)
		if (s.length == 0) {
			this.zj.style.display = "none";
			this.all.checked = false;
		}
	}
}
$(function(){
	$(".action-settle").click(function(event){
		event.preventDefault();
		window.open('list.html?token='+Token);
	})
	
	
	
})




