            function move(obj, json) {//缓冲效果
   			clearInterval(obj.timer)
    		obj.timer = setInterval(function () {
        	var flag = true;
        	for (var attr in json) {
            if (attr == "opacity") {
                var _curr = parseInt(getStyle(obj, "opacity") * 100); //这里取到的是0-1的值
            } else {
                var _curr = parseInt(getStyle(obj, attr));
            }
            var _speed = (json[attr] - _curr) / 5;
            _speed = _speed > 0 ? Math.ceil(_speed) : Math.floor(_speed)
            if (attr == "opacity") {
                obj.style.opacity = (_curr + _speed) / 100;
                obj.style.filter = "alpha(opacity=" + (_curr + _speed) + ")";
            } else {
                obj.style[attr] = _curr + _speed + "px";
            }
            if (_speed != 0) { //全都为零时才能清定时器
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer)
        }
    }, 20)
}
        function getStyle(obj,attr){
			if(obj.currentStyle){
			return obj.currentStyle[attr];
			}
			return getComputedStyle(obj,null)[attr];
}