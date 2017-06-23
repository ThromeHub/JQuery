//圈的运动效果
var span1 = document.getElementById("circle").children[0];
var timer = null;
timer = setInterval(function () {
    var date = new Date();
    var sec = date.getSeconds() + date.getMilliseconds() / 1000;
    span1.style.transform = "rotate(" + sec * 150 + "deg)"
}, 20);
span1.onmousemove = function () {
    clearInterval(timer)
};
span1.onmouseout = function () {
    timer = setInterval(function () {
        var date = new Date();
        var sec = date.getSeconds() + date.getMilliseconds() / 1000;
        span1.style.transform = "rotate(" + sec * 150 + "deg)"
    }, 20);
};
//----------------------------------------
var config = [
    {
        width: 400,
        top: 20,
        left: 50,
        opacity: 0.2,
        zIndex: 2
    },//0
    {
        width: 600,
        top: 70,
        left: 0,
        opacity: 0.8,
        zIndex: 3
    },//1
    {
        width: 702,
        top: 100,
        henght: 400,
        left: 200,
        opacity: 1,
        zIndex: 4
    },//2
    {
        width: 600,
        top: 70,
        left: 600,
        opacity: 0.8,
        zIndex: 3
    },//3
    {
        width: 400,
        top: 20,
        left: 750,
        opacity: 0.2,
        zIndex: 2
    }//4

];

//页面加载事件=====页面中所有的内容加载完毕后触发
var xuanzhuan = document.getElementById("xuanzhuan")
//设置所有的图片全部散开(li散开,每个li标签都应该设置对应的json格式中的数据)
//获取所有的li标签
var flag = true;
var list = xuanzhuan.children[0].children;
//散开图片
function assign() {
    for (var i = 0; i < list.length; i++) {
        animate(list[i], config[i], function () {
            flag = true;//打开锁
        });
    }
}
assign();

//右边按钮点击事件
my$("arrRight").onclick = function () {
    if (flag) {
        flag = false;
        //调换数组中元素的位置
        $(".xuanul li:first").clone().appendTo($(".xuanul"));
        $(".xuanul li:first").remove();
        assign();
    }

};

//左边按钮点击事件
my$("arrLeft").onclick = function () {
    if (flag) {
        flag = false;
        //调换数组中元素的位置
        $(".xuanul li:last").clone().prependTo($(".xuanul"));
        $(".xuanul li:last").remove();

        assign();
    }


};
//------------------------------------------------------------------------------


//福利模块 鼠标覆盖特效
var lis = document.getElementById("xinfu1").children;
var chungzhi = document.getElementsByClassName("chungzhi");

for (var i = 0; i < lis.length; i++) {
    lis[i].index = i;
    lis[i].onmouseover = function () {

        animate(chungzhi[this.index], {"bottom": 0})
    };
    lis[i].onmouseout = function () {

        animate(chungzhi[this.index], {"bottom": -130})
    };
}
;

// $(function () {
//     var $li=$("#xinfu1>li");
//    $li.mouseenter(function () {
//        console.log(1);
//        $(this).children("div").slideDown(500);
//    });
//     $li.mouseleave(function () {
//         console.log(1);
//         $(this).children("div").slideUp(500);
//     });
// });
//---------------------------------------------------------------------
//征兵模块 字的淡入淡出效果
$(function () {
$(".p2").mouseenter(function () {
    $(this).stop().fadeOut()
}).mouseleave(function () {
    $(this).stop().fadeIn()
})
})


//------------------------------------------
// 战争模块 图片高亮
$(function () {
    $("#wartu>div").mouseenter(function () {

        $(this).css({opacity:1}).siblings().css("opacity", "0.4");
    });

    $("#wartu").mouseleave(function () {
        //让所有的li都变亮
        //$("li");
        //$(".wrap li");
        //$(".wrap>ul>li")

        //$(this).children().children("li");
        $(this).find('div').css("opacity", 1);
    });




});









//------------------------------------------------------------------------
function animate(element, json, fn) {
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        var flag = true;//假设都达到了目标
        for (var attr in json) {
            if (attr == "opacity") {//判断属性是不是opacity
                var current = getAttrValue(element, attr) * 100;
                //每次移动多少步
                var target = json[attr] * 100;//直接赋值给一个变量,后面的代码都不用改
                var step = (target - current) / 10;//(目标-当前)/10
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current = current + step;
                element.style[attr] = current / 100;
            } else if (attr == "zIndex") {//判断属性是不是zIndex
                element.style[attr] = json[attr];
            } else {//普通的属性

                //获取当前的位置----getAttrValue(element,attr)获取的是字符串类型
                var current = parseInt(getAttrValue(element, attr)) || 0;
                //每次移动多少步
                var target = json[attr];//直接赋值给一个变量,后面的代码都不用改
                var step = (target - current) / 10;//(目标-当前)/10
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current = current + step;
                element.style[attr] = current + "px";
            }
            if (current != target) {
                flag = false;//如果没到目标结果就为false
            }
        }
        if (flag) {//结果为true
            clearInterval(element.timeId);
            if (fn) {//如果用户传入了回调的函数
                fn(); //就直接的调用,
            }
        }
    }, 10);
}
function getAttrValue(element, attr) {
    return element.currentStyle ? element.currentStyle[attr] : window.getComputedStyle(element, null)[attr] || 0;
}
function my$(id) {
    return document.getElementById(id);
}