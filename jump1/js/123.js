function my$(id) {
    return document.getElementById(id);
}

setTimer(my$("right-Bar").children[1],my$("right-Bar"),3000);


function setTimer(a,b,c) {
    var timer = null;
    timer = setInterval(function () {
        a.click();
    },4000);

    b.onmouseover = function () {
        //鼠标移入停止自动播放事件 清除定时器
        clearInterval(timer);
    }
    b.onmouseout = function () {
        //鼠标移出时 自动播放开启
        timer = setInterval(function () {
            a.click();
        },c);
    }
}













    
