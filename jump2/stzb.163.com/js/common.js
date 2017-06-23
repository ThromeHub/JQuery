
/*
 * 该函数是返回的是指定格式的日期,是字符串类型
 * 参数:date ----日期
 * 返回值: 字符串类型的日期
 * */
function getDatetoString(date) {
    var strDate;//存储日期的字符串
    //获取年
    var year=date.getFullYear();
    //获取月
    var month=date.getMonth()+1;
    //获取日
    var day=date.getDate();
    //获取小时
    var hour=date.getHours();
    //获取分钟
    var minute=date.getMinutes();
    //获取秒
    var second=date.getSeconds();
    hour=hour<10?"0"+hour:hour;
    minute=minute<10?"0"+minute:minute;
    second=second<10?"0"+second:second;
    //拼接
    strDate=year+"-"+month+"-"+day+" "+hour+":"+minute+":"+second;//隐藏问题,关于变量声明的位置
    return strDate;
}

//根据id获取元素对象
function my$(id) {
    return document.getElementById(id);
}


/*
 *
 * innerText属性IE中支持
 * textContent火狐中支持
 * dvObj.innerText="您好";设置innerText的值
 * console.log(dvObj.innerText);获取innerText的值
 * 因为上述原因,inerText有时候需要设置值，有时候需要获取值
 * 所以,需要写一个兼容的代码能在火狐中使用,也可以在IE中使用
 *
 *
 * */

/*
 *设置innerText属性的值
 * element-----为某个元素设置属性值
 * content-----设置的值
 * */
function setInnerText(element,content) {
    if(typeof element.textContent==="undefined"){
        //IE浏览器
        element.innerText=content;
    }else{
        element.textContent=content;
    }
}
/*
 * 获取innerText属性的值
 * element 要获取的元素
 * 返回的是该元素的innerText值
 * */
function getInnerText(element) {
    if(typeof element.textContent==="undefined"){
        //IE浏览器
        return element.innerText;
    }else{
        return element.textContent;
    }
}


//获取当前元素前一个元素
function getPreviousElement(element) {
    if(element.previousElementSibling){
        return element.previousElementSibling;
    }else{
        var ele=element.previousSibling;
        while (ele&&ele.nodeType!==1){
            ele=ele.previousSibling;
        }
        return ele;
    }
}
//获取当前元素的后一个元素
function getNextElement(element) {
    if(element.nextElementSibling){
        return element.nextElementSibling;
    }else{
        var ele=element.nextSibling;
        while(ele&&ele.nodeType!==1){
            ele=ele.nextSibling;
        }
        return ele;
    }
}

//获取父元素中的第一个元素
function getFirstElementByParent(parent) {
    if(parent.firstElementChild){
        return parent.firstElementChild;
    }else{
        var ele=parent.firstChild;
        while (ele&&ele.nodeType!==1){
            ele=ele.nextSibling;
        }
        return ele;
    }
}
//获取父元素中的最后一个元素
function getLastElementByParent(parent) {
    if(parent.lastElementChild){
        return parent.lastElementChild;
    }else{
        var ele=parent.lastChild;
        while(ele&&ele.nodeType!==1){
            ele=ele.previousSibling;
        }
        return ele;
    }
}

//获取兄弟元素
function getsiblings(ele) {
    if(!ele)return;//判断当前的ele这个元素是否存在
    var elements=[];//定义数组的目的就是存储当前这个元素的所有的兄弟元素
    var el=ele.previousSibling;//当前元素的前一个节点
    while (el){
        if (el.nodeType===1){//元素
            elements.push(el);//加到数组中
        }
        el=el.previousSibling;
    }
    el=ele.nextSibling;
    while(el){
        if(el.nodeType===1){
            elements.push(el);
        }
        el=el.nextSibling;
    }
    return elements;
}
//    //能力检测多个浏览器为同一个对象注册多个事件
var eventTools={
    getEvt:function (e) {//返回事件参数对象
        return window.event?window.event:e;
    },
    getClientX:function (e) {//返回的是可视区域的横坐标
        return this.getEvt(e).clientX;
    },
    getClientY:function (e) {//返回的是可视区域的纵坐标
        return this.getEvt(e).clientY;
    },
    getScrollLeft:function () {//卷曲出去的横坐标
        return window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;
    },
    getScrollTop:function () {//卷曲出去的纵坐标
        return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;
    },
    getPageX:function (e) {//文档的横坐标:可视区域的横坐标+卷曲出去的横坐标
        return this.getEvt(e).pageX?this.getEvt(e).pageX:this.getClientX(e)+this.getScrollLeft();
    },
    getPageY:function (e) {//文档的纵坐标:可视区域的纵坐标+卷曲出去的纵坐标
        return this.getEvt(e).pageY?this.getEvt(e).pageY:this.getClientY(e)+this.getScrollTop();
    }
};


//缓动动画函数
function animate(element,json,fn) {
    clearInterval(element.timeId);
    element.timeId=setInterval(function () {
        var flag=true;//假设都达到了目标
        for(var attr in json){
            if(attr=="opacity"){//判断属性是不是opacity
                var current= getStyle(element,attr)*100;
                //每次移动多少步
                var target=json[attr]*100;//直接赋值给一个变量,后面的代码都不用改
                var step=(target-current)/10;//(目标-当前)/10
                step=step>0?Math.ceil(step):Math.floor(step);
                current=current+step;
                element.style[attr]=current/100;
            }else if(attr=="zIndex"){//判断属性是不是zIndex
                element.style[attr]=json[attr];
            }else{//普通的属性

                //获取当前的位置----getAttrValue(element,attr)获取的是字符串类型
                var current= parseInt(getStyle(element,attr))||0;
                //每次移动多少步
                var target=json[attr];//直接赋值给一个变量,后面的代码都不用改
                var step=(target-current)/10;//(目标-当前)/10
                step=step>0?Math.ceil(step):Math.floor(step);
                current=current+step;
                element.style[attr]=current+"px";
            }
            if(current!=target){
                flag=false;//如果没到目标结果就为false
            }
        }
        if(flag){//结果为true
            clearInterval(element.timeId);
            if(fn){//如果用户传入了回调的函数
                fn(); //就直接的调用,
            }
        }
        console.log("target:"+target+"current:"+current+"step:"+step);
    },20);
}


//获取可视区域的宽和高
function getClient() {
    return{
        width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0,
        height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0
    }
}


//为任意元素绑定事件的兼容代码的封装函数
//addEventListener 谷歌支持
//attachEvent IE支持
function addEventListener(element,type,fn) {
    if(element.addEventListener){
        //判断是否支持
        element.addEventListener(type,fn,false);
    }else if(element.attachEvent){
        element.attachEvent("on"+type,fn);
    }else {
        //说明都不支持
        element["on"+type]=fn;
    }
};



//解绑事件的兼容代码函数封装
function removeEventListener(element,type,fn) {
    if(element.removeEventListener){
        //此时的函数应该为命名函数
        element.removeEventListener(type,fn,false);
    }else if(element.detachEvent){
        element.detachEvent("on"+type,fn);
    }else {
        element["on"+type]=null;
    }
};

function getStyle(element,attr) {
    return window.getComputedStyle? window.getComputedStyle(element,null)[attr]:element.currentStyle[attr];
}

/**
 * 通过类名获取元素
 * @param clsName
 * @param targetElement
 * @returns {*}
 */
function getByClass(clsName, targetElement) {
    //需要先对第二个参数进行处理
    //两种情况，有值，是一个标签，如果没有值，undefined
//    if(!targetElement){
//      targetElement = document.body;
//    }

    targetElement = targetElement || document.body;


    //ie9以下不支持getElementsByClassName这个方法，并且也没有实现对应的获取方式，需要自己书写功能实现根据类名获取元素的方式

    //先进行能力检测，如果浏览器支持，就使用，如果不支持再自己书写
    //if(typeof document.getElementsByClassName == "function"){
    //getElementsByClassName是一个方法或者说是属性，如果支持，是一个函数值，如果不支持，值为undefined
    if (targetElement.getElementsByClassName) {//可以直接利用隐式转换的结果进行判断
        return targetElement.getElementsByClassName(clsName);
    } else {
        var resultArr = [];//用于保存获取到的标签
        //自己书写根据类名获取元素的功能：
        //1 获取所有的标签(由于我们使用的标签只会在body内部，所以可以缩小检索的范围)
        var tags = targetElement.getElementsByTagName("*");//获取所有的标签
        var tempCls, tempArr, j;
        //2 依次检测每个标签的类名属性className
        for (var i = 0; i < tags.length; i++) {
            tempCls = tags[i].className;//保存了一下className的值(本步骤中这一行可选)

            //有类名才进行执行
            if (tempCls) {
                //3 检测时需要考虑一个标签可能具有多个类名，如果其中有某一个部分满足条件，就符合我的需求了，可以取出。
                //将tempCls按照空格分隔
                tempArr = tempCls.split(" ");

                //4 遍历tempArr检测，如果其中的某一个元素值和box相等， 说明是我需要的标签
                for (j = 0; j < tempArr.length; j++) {
                    if (tempArr[j] == clsName) {
                        //5 放入到resultArr中即可
                        resultArr[resultArr.length] = tags[i];
                        //6 找到一个就可以满足条件了，跳出即可
                        break;
                    }
                }
            }
        }

        return resultArr;

    }
}


