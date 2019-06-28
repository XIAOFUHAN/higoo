
// function verifyPhoneFormat($(#dom_el_53a1780).val()) {
//   var myreg = /^[1]([3458][0-9]|6[56]|7[01345678]|9[89])[0-9]{8}$/;
//   if (!myreg.test($(#dom_el_53a1780).val())) {
//     return false;
//   } else {
//     return true;
//   }
// }
$(function(){
	//手机号
	$("#dom_el_53a1780").blur(function () {
		var reg = /^1(3|4|5|7|8|9)\d{9}$/;
		var tt = reg.test($("#dom_el_53a1780").val());
		$("#dom_el_53a1780").blur(function(){
			if ($("#dom_el_53a1780").val().length == 0) {
				$("#_build_tips_inline_error_323").css({ "display": "block" })
		// 	}else($("#dom_el_53a1780").val().length != 0)
		// 		{
		// 			$("#_build_tips_inline_error_323").css({ "display": "none" })	
		// 			
		// 		
		// 			if (tt) {
		// 			$("#_build_tips_inline_error_323").hide()
		// 			$("#_build_tips_inline_error_323").show().css({ "display": "none", "color": "red" })
		// 			//$(".text-phone").hide();
		// 		// } else {
		// 		// 	$("#J_mobile_name").val("");
		// 		// 	$(".u-input-warning:first").show().css({ "color": "red" })
		// 		// 	$(".text-phone").text("请输入正确的手机号！").css({ "color": "red" })
		// 		// }
		// 			}	
		// 		
		// 
		// 	//$(".text-phone").text("手机号不能为空！").css({ "color": "red" })
		// // } else {
			}
		
		})
	})
	//随机生成验证码
	$(".auto-change-verify-handle").click(function () {       
	    var verifyCode = parseInt((Math.random() * 9 + 1) * 1000);
	    $(".number").val(verifyCode);
	})
	$(".clicknum").click(function () {       
	    var verifyCode1 = parseInt((Math.random() * 9 + 1) * 1000);
	    $(".numinput").val(verifyCode1);
	})
	//密码强度判断
	$(".fpassword").keyup(function(){
		
		 var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
		 var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
		 var enoughRegex = new RegExp("(?=.{6,}).*", "g");
		  
		 //$("#checkbox").removeClass().addClass("password-check password-good")
		 if (false == enoughRegex.test($(this).val())) {
		 $("#checkbox").removeClass().addClass("password-check password-poor")
		 } else if (strongRegex.test($(this).val())) {
			 //密码强度strong的很难写出来
			 console.log(strongRegex.test($(this).val()))
		 $("#checkbox").removeClass()
		 .addClass("password-check password-strong")
		 } else if (mediumRegex.test($(this).val())) {
		 $("#checkbox").removeClass().addClass("password-check password-good")
		 } else {
		 $("#checkbox").removeClass().addClass("password-check password-weak")
		 }
		// return true;
		
	})
	//确认密码，看两次输入的密码是否一致
		
	$("#dom_el_53a1782").keyup(function () {
	
	    if ($("#dom_el_53a1782").val() != $(".fpassword").val()) {
	        $("#_build_tips_inline_error_352").css({"display":""}).css({ "display": "block" })
	    }
	    else {
	         $("#_build_tips_inline_error_352").css({"display":""}).css({ "display": "none" })
	    }
	})
	
	//判断姓名不能为空
	$("#username").blur(function(){
			$.get("http://47.104.244.134:8080/username.do",{username:"$(#username).val"}).done(data=>{
				console.log(data);
				if (data.code==0){
					console.log(data.code);
					$("#_build_tips_inline_error_358").css({"display":""}).css({ "display": "block" })
				}else{
					 $("#_build_tips_inline_error_358").css({"display":""}).css({ "display": "none" })
				}
			})		
	})
	//判断验证码是否一致
	
	$("#dom_el_53a1783").keyup(function () {
	
	    if ($("#dom_el_53a1783").val() != $(".number").val()) {
	        $("#_build_tips_inline_error_19").css({"display":""}).css({ "display": "block" })
	    }
	    else {
	         $("#_build_tips_inline_error_19").css({"display":""}).css({ "display": "none" })
	    }
	})
	//注册成功跳转登录页面
	 $("#jumpindex").on("click", function(event) {
	    event.preventDefault();
	
	    $.post("http://47.104.244.134:8080/usersave.do", {
	        username: $("#username").val(),
	        password: $(".fpassword").val(),
	        email: "f_"+$("#username").val()+"@163.com",
	        sex: 1
	    }).done(data => {
	        console.log(data)
	        if (data.msg === "成功") {
	
	            alert("注册成功")
	            var timer = setTimeout(function() {
	                $(window).attr('location', 'login.html');
	            }, 3000)
	        } else {
	            alert("注册失败 请重新填写")
	        }
	    })
	})	
	
	
	
	
	
	
})




// $.post("http://47.104.244.134:8080/usersave.do",{
// 	username:"aaaa_xxxz",
// 	password:"111111",
// 	email:"aaaa_xxxz@163.com",
// 	sex:"男"
// }).done(data=>{
// 	console.log(data);
// })