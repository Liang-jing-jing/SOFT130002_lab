
/*请在该区域内声明或者获取所要使用的全局变量*/
/********************************************begin************************************/

/*Global Variable Area */
//根据html中的tag来获取这些量
const div1 = document.getElementsByTagName("div")[1];//轮播区域
const button1 = document.getElementsByTagName("a")[0];
const button2 = document.getElementsByTagName("a")[1];
const span1 = document.getElementsByTagName("span")[0];
const span2 = document.getElementsByTagName("span")[1];
const span3 = document.getElementsByTagName("span")[2];
const span4 = document.getElementsByTagName("span")[3];
const span5 = document.getElementsByTagName("span")[4];
//当前图片所在位置
let index = 0;
//图片库，方便后面设置图片
const imgList = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
//时间间隔
let interval;

/*********************************************end*************************************/



/* 任务一
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击左箭头prev和右箭头next的时候，可以切换到前一张图片和下一张图片。（左右箭头为html中的a标签）
 * ②每切换一张图片，右下角的数字标记对应变化。
 *      如：一开始，第1张图片显示出来，右下角的1-5的数值中，数值1位红色，2-4为绿色，表示当前显示第1张图片。
 *      点击next箭头，图片切换到第2张，同时，右下角红色数值从1切换为2，数值1,3,4,5为绿色。
 * ③当当前图片为第1张时，点击prev箭头，切换到第5张图片，且数值5置为红色。
 * 当当前图片为第5张时，点击next箭头，切换到第1张图片，且数值1置为红色。
 * ④切换图片的过程不要求，可直接切换，也可动画切换，但要求保证一定的切换动画合理性，不能出去明显的衔接不当。
 * ⑤本部分只能使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/
//为两个按钮添加事件
button1.addEventListener('click',previous);
button2.addEventListener('click',next);
//向前移动一张图片
function previous() {
    //初始化，将右下角按钮的class属性删除，方便后面为所在照片添加属性"on"
    document.getElementsByTagName("span")[0].removeAttribute("class");
    index--;//向前一张，所以当前所在照片数-1
    //如果index小于零应该由第一张变换为第五张
    if(index<0)
    {
        index=imgList.length-1;
    }
    //将当前展示的照片的src变为index对应的照片
    document.getElementsByTagName("img")[1].src=imgList[index];
    //将当前右下方按钮对应的数字的class设置为on，从而改变样式
    document.getElementsByTagName("span")[index].setAttribute("class","on");
    //将右下方先前的按钮的class属性删除，变回正常样式
    document.getElementsByTagName("span")[index+1].removeAttribute("class");
}
function next() {
    //初始化删除class
    document.getElementsByTagName("span")[4].removeAttribute("class");
    index++;//向后一张图片，所以当前照片对应的数字+1
    //如果index>4，说明应该由最后一张照片变为第一张
    if(index>4)
    {
        index=0;
    }
    //将当前展示的照片的src变为index对应的照片
    document.getElementsByTagName("img")[1].src=imgList[index];
    //将当前右下方按钮对应的数字的class设置为on，从而改变样式
    document.getElementsByTagName("span")[index].setAttribute("class","on");
    //将右下方先前的按钮的class属性删除，变回正常样式
    document.getElementsByTagName("span")[index-1].removeAttribute("class");
}

/*********************************************end*************************************/



/* 任务二
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①轮播可以自动播放，切换图片间隔为2s，每一次切换的效果与点击next箭头的效果一致。
 * ②当鼠标移入轮播区域内时，停止自动播放。
 * ③当鼠标不在轮播区域内时，开始自动播放。
 * ④页面刚加载完成时，如果鼠标不在轮播区域内，自动开始自动播放；否则，等待直到鼠标移出轮播区域，再进行自动播放。
 * ⑤本部分只能使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/
//页面刚刚加载完
window.onload=function () {
    //鼠标不在轮播区域内开始自动播放(onmouseout)
    div1.onmouseout=function(){
        interval=window.setInterval("next()",2000);
    };
    //鼠标在轮播区域内停止自动播放(onmouseover)
    div1.onmouseover=function(){
        window.clearInterval(interval);
    }
};

/*********************************************end*************************************/



/* 任务三
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击右下角的任意一个数值，能够切换到对应图片，且相应数值变为红色。
 * ②进行①操作过后，是否自动播放，其规则与上一个任务一致。
 * ③本部分只能使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/


span1.onclick=function () {
    //设置当前所在的图片对应的数字
    index=0;
    //将当前所在的图片的src设置为index对应的图片
    document.getElementsByTagName("img")[1].src=imgList[0];
    //先删除所有右下角图标对应的class属性
    for (let j=0; j<5; j++){
        document.getElementsByTagName("span")[j].removeAttribute("class");
    }
    //将当前对应数字的class设置为on从而改变样式
    document.getElementsByTagName("span")[0].setAttribute("class","on");
};
span2.onclick=function () {
    index=1;
    document.getElementsByTagName("img")[1].src=imgList[1];
    for (let j=0; j<5; j++){
        document.getElementsByTagName("span")[j].removeAttribute("class");
    }
    document.getElementsByTagName("span")[1].setAttribute("class","on");
};
span3.onclick=function () {
    index=2;
    document.getElementsByTagName("img")[1].src=imgList[2];
    for (let j=0; j<5; j++){
        document.getElementsByTagName("span")[j].removeAttribute("class");
    }
    document.getElementsByTagName("span")[2].setAttribute("class","on");

};
span4.onclick=function () {
    index=3;
    document.getElementsByTagName("img")[1].src=imgList[3];
    for (let j=0; j<5; j++){
        document.getElementsByTagName("span")[j].removeAttribute("class");
    }
    document.getElementsByTagName("span")[3].setAttribute("class","on");

};
span5.onclick=function () {
    index=4;
    document.getElementsByTagName("img")[1].src=imgList[4];
    for (let j=0; j<5; j++){
        document.getElementsByTagName("span")[j].removeAttribute("class");
    }
    document.getElementsByTagName("span")[4].setAttribute("class","on");

};

/*********************************************end*************************************/


/*任务四
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击某一非表头的单元格，可以编辑其内容，编辑完毕后点击其他部位，可以在界面上显示修改后的内容。
 * ②点击单元格后，光标自动定位于单元格的首个字符或者汉字前。
 * ③本部分可以使用jQuery，也可以使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/
for (let j=0; j<12; j++){
    let t=$(".table");
    //on代表在被选元素及子元素上添加一个或多个事件处理程序
    //click代表有焦点
    //.active代表当前选中状态
    t.on("click", "td:not(.active)", function () {
        //表格元素有焦点时保留原来的内容
        if ( $(this).find('input').length !== 0 ) {
            return ;
        }
        $(this).addClass('input').html('<input type="text" value="'+ $(this).text() +'" />').find('input').focus();
    });
    //blur代表失去焦点
    //removeClass()方法从被选元素移除active类
    //text()方法设置并返回被选元素的文本内容
    //val()方法返回或设置被选元素的值
    t.on("blur", "input:text", function () {
        $(this).parent().removeClass("active").text($(this).val()
        );
    });
}
/*********************************************end*************************************/