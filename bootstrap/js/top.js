/**
 * Created by wenxiu on 2017/6/13.
 */
//ҳ��ͷ��js����
//���������Ϸ��Ϸ���ܰ�ť����ʾp��ǩ
//��ں���

window.onload = function () {
    //��Ϸ�Ͻ��ܵ���ʾ
    var headGameBtn = document.getElementsByClassName("head-game")[0];
    headGameBtn.onmouseover = function () {//������������ʾ
        var introduce = document.getElementsByClassName("introduce")[0];
        introduce.style.display = "block";
    }
    headGameBtn.onmouseout = function () {//������������ʾ
        var introduce = document.getElementsByClassName("introduce")[0];
        introduce.style.display = "none";
    }

//��������������ʱ����ʾspan
//            var headIconSpan = document.getElementsByClassName("head-icon");
    var headA = document.getElementsByClassName("headtop-nav-ul")[0].children;//��ȡ�����е�a��ǩ
    console.log(headA);
    for (var i = 0; i < headA.length-1; i++) {
        //Ϊÿһ��a�����������¼�
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
    //���һ��a��ǩ�е�span��ǩ�е�΢�Ǻ����ŵ�����
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
//΢�ź�������������¼�





}

