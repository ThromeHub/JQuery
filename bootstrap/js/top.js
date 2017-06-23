/**
 * Created by wenxiu on 2017/6/13.
 */
//页面头部js代码
//鼠标移入游戏游戏介绍按钮。显示p标签
//入口函数

window.onload = function () {
    //游戏上介绍的显示
    var headGameBtn = document.getElementsByClassName("head-game")[0];
    headGameBtn.onmouseover = function () {//鼠标移入的是显示
        var introduce = document.getElementsByClassName("introduce")[0];
        introduce.style.display = "block";
    }
    headGameBtn.onmouseout = function () {//鼠标移入的是显示
        var introduce = document.getElementsByClassName("introduce")[0];
        introduce.style.display = "none";
    }

//导航栏鼠标移入的时候显示span
//            var headIconSpan = document.getElementsByClassName("head-icon");
    var headA = document.getElementsByClassName("headtop-nav-ul")[0].children;//获取到所有的a标签
    console.log(headA);
    for (var i = 0; i < headA.length-1; i++) {
        //为每一个a添加鼠标移入事件
        headA[i].onmouseover = function () {
            var item=this.children[0].children[0].style;
            item.display = "inline-block";
            this.children[0].style.color="#ebd7a5";
        }
        headA[i].onmouseout = function () {
            var item=this.children[0].children[0];
            item.style.display = "none";
            this.children[0].style.color="#b0b0b5";
        }
    }
    //最后一个a标签中的span标签中的微星和易信的设置
    var lastA=headA[headA.length-1].children[0].children;
    console.log(lastA);

    lastA[1].onmouseover=function(){
        this.style.backgroundPosition="-1172px -484px";
        document.getElementsByClassName("reveal")[0].style.display="inline-block";

    }
    lastA[2].onmouseover=function(){
        this.style.backgroundPosition="-1244px -484px";
        document.getElementsByClassName("reveal")[1].style.display="inline-block";
    }
    lastA[1].onmouseout=function(){
        this.style.backgroundPosition="-1207px -486px";
        document.getElementsByClassName("reveal")[0].style.display="none";

    }
    lastA[2].onmouseout=function(){
        this.style.backgroundPosition="-940px -486px";
        document.getElementsByClassName("reveal")[1].style.display="none";
    }
//微信和易信鼠标移入事件





}

