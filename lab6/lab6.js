/*
1.
背景：
    每隔五秒运行一次函数直到某一整分钟停止，比如从20:55:45运行到20:56:00停止；
    或者运行10次，先到的为准。从1开始每过五秒，输入框内数值翻倍。初始值为1。
注意：
    你可以在函数 timeTest内部 和 timeTest外部 写代码使得该功能实现。
要求：
    ①要求使用JS闭包的方式使得计数实现局部私有，不可以在全局区域声明计数变量。
    ②使用console.log打印计数即可，到达一分钟提前停止也需要console.log相应的提示语句。
*/

function testTime(){
    let k = 0;
    let mul = 1;
    console.log(mul);
    let a = new Date().getMinutes();
    let b = new Date().getSeconds();
    const interval = window.setInterval(function () {
        mul *= 2;
        console.log(mul);
        k++;
        if(60 - b < 50){
            if(a === 59){
                while(new Date().getMinutes() === 0) {
                    window.clearInterval(interval);
                    console.log("在下一分钟停止");
                }
            }
            else{
                while(new Date().getMinutes() > a) {
                    window.clearInterval(interval);
                    console.log("在下一分钟停止");
                }
            }

        }
        else{
            while(k === 10){
                window.clearInterval(interval);
                console.log("10次后停止");
            }
        }

    },5000)

}
testTime();

/*
2.
要求：
    ①能够对传入的、移动手机电话（11位）、邮箱字符串（上网查找其要求）进行正则判定。
    ②使用console.log打印即可，例如，电话不符合要求但是邮箱符合要求，则console.log("The telephone is right and the mail is wrong!")。
    ③邮箱字符串的正则匹配的理解需写入lab文档。
    ④telephone与mail均是字符串。
*/
function testMail(telephone,mail) {
    let test = "";
    if(/^1[3456789]\d{9}$/.test(telephone)){
        test += "The telephone is right and ";
    }
    else{
        test += "The telephone is wrong and ";
    }
    if(/^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/.test(mail)){
        test += "mail is right.";
    }
    else{
        test += "mail is wrong."
    }
    return test;
}


/*
3.
要求：
    ①输入一段全英文语句，要求使用正则表达式找到相邻的重复单词放入一个Set，如果集合中元素超过10个，则按照首字母顺序取前10个于集合。
    ②使用console.log打印即可，将该集合打印出来。
    ③例如：输入"Is is the iS is cost of of gasoline going up up"，输出：Set { 'Is is', 'iS is', 'of of', 'up up' }。
    ④对该函数中用的正则匹配的理解需写入lab文档。
    ⑤str为字符串。
*/
function testRedundancy(str) {
    const array = str.split(" ");
    const set = new Set();
    for(let i=0;i<array.length-1;i++){
        if(array[i].length===array[i+1].length){
            if(array[i].toUpperCase().search(array[i+1].toUpperCase())===0){
                set.add(array[i] + " " + array[i+1]);
            }
        }
    }
    if(set.size>10){
        const set1 = new Set();
        const arraySort = Array.from(set).sort(function (set, t) {
            return set.localeCompare(t);
        });
        for(let i=0; i<10;i++){
            set1.add(arraySort[i]);
        }
        console.log(set1);
    }
    else {
        console.log(set);
    }
}


/*
4.
背景：
    旧键盘上坏了几个键，于是在敲一段文字的时候，对应的字符就不会出现。
    现在给出应该输入的一段文字、以及实际被输入的文字，请你使用Set列出肯定坏掉的那些键。
    例如：输入7_This_is_a_test和_hs_s_a_es    输出：Set { '7', 'T', 'I' }
要求：
    ①需要使用Set。
    ②只能使用一次循环。
    ③使用console.log打印即可，将该集合打印出来。
    ④wantInput和actualInput为字符串。
注意：
    ①注意联系生活，并注意观察我给的上述例子。
*/
function testKeyBoard(wantInput, actualInput) {
    const wantInputSet = new Set(wantInput);
    const actualInputSet = new Set(actualInput);
    let a = new Set();
    for(const item of wantInputSet) {
        if(!actualInputSet.has(item)){
            a.add(item.toUpperCase());
        }
    }
    console.log(a);
}

/*
5.
背景：
    给定一个输入英文语句字符串，反转该语句。例如the sky is blue变成blue is sky the。
要求：
    ①如果输入的字符串前后有空格，输出中应该去除前后空格。如果输入字符串中间出现连续的两个空格，输出应该变为一个。
    比如输入是“  hello  world!  ”，输出应该是“world! hello”。
    ②请使用Array。
    ③使用console.log打印即可，将该数组打印出来。
    ④只能显式使用一次循环。
    ⑤str为字符串。
*/
function testSpecialReverse(str) {
    while(str.startsWith(" ")){
        str = str.substr(1);
    }//只要字符串开头是空格，就删去
    while(str.endsWith(" ")){
        str = str.substr(0,str.length-2);
    }//只要字符串末尾是空格，就删去
    const reverseAll = str.split(' ').reverse();//得到反转后的组合
    let reverse = "";//初始化
    for(let i = 0; i<reverseAll.length; i++){
        if(reverseAll[i] === ''){
            reverseAll[i] = ' ';//把没有值的项变为空格
        }
        reverse += reverseAll[i];//把所有值加到一起
    }
    console.log(reverse);//打印
}


/*
6.
背景：
    给定一个整数数组和一个值，找出相加为该值的两个元素下标并保存在一个数组中。
    例如给定 [2, 7, 11, 15]和9,
    打印结果为[0,1]
要求：
    ①使用Map。
    ②只能显式使用一次循环。
    ③使用console.log打印即可，将满足条件的数组打印出来。
    ④nums为数字数组，如[1,2,3,4],target为数字,如5，那么输出为
    [ 0, 3 ]
    [ 1, 2 ]
*/

function twoSum(nums, target) {
    let a;
    return nums.map(function (item, index) {
        for (let j = index + 1; j < nums.length; j++) {//遍历nums
            if (nums[j] === target - nums[index]) {//如果存在另外一个值与之相加等于target
                a = [index, j];
                console.log(a);
            }
        }
    });
}





/*
7.
背景：
    打印最长的包含不同字符串的子字符串长度。
要求：
    ①使用Map。
    ②例如：输入"abbbbb",输出1，输入"bbbbb",输出2；
    ③只能显式使用一次循环。
    ④使用console.log打印即可。
    ⑤str为字符串。
*/
function lengthOfLongestSubstring(str) {
    let s = "";//存放最长的无重复项的字符串
    let len = 0;//存放长度
    for(let i = 0; i<str.length; i++){
        const char = str.charAt(i);
        const index = s.indexOf(char);
        if(index === -1){
            s += char;
            len = len<s.length?s.length:len;
        }
        else {
            s = s.substr(index+1)+ char;
        }
    }
    return len;
}


/*
8.
背景：
    该部分只是为了让你们自己动动手更好地感受不同继承方式。
要求：
    ①借助构造函数、原型链、和Object.create分别编写DevelopingCountry、PoorCountry、DevelopedCountry以实现对Country的继承，
    并在三者分别添加sayHi、saySad、sayHappy函数分别打印"Hi,i am a developing country."、"I am a sad poor country."、"I am a Happy developed country."
    ②请调用他们并打印相关语句即可。
*/

function Country() {
    this.name = "国家";
}
//构造函数继承
function DevelopingCountry() {
    Country.call(this,"Developing Country");
    this.sayHi = function sayHi(){
        console.log("Hi,i am a developing country.");
    }
}

//原型链继承
function PoorCountry(){
    this.name = "Poor Country";
}

PoorCountry.prototype = new Country();//原型链继承Country
PoorCountry.prototype.saySad = function () {
    console.log("I am a sad poor country");
};


//Object.create
const developedCountry = Object.create(new Country());
developedCountry.name = "Developed Country";
developedCountry.sayHappy = function () {
    console.log("I am a happy developed country.");
};



function test() {
    //1
    //testTime();
    //2
    console.log(testMail(15901984704,"19302010061@"));
    //3
    testRedundancy("Is is the iS is cost of of gasoline going up up down down again again yes yes no no right right false false hey hey");//共11组
    //4
    testKeyBoard("7_This_is_a_test","_hs_s_a_es");
    //5
    testSpecialReverse("  hello  world!  ");
    //6
    twoSum([2,3,4,5,6,7],9);
    //7
    console.log(lengthOfLongestSubstring("abbaaaaachds"));
    //8
    const developingCountry = new DevelopingCountry();
    developingCountry.sayHi();
    const poorCountry = new PoorCountry();
    poorCountry.saySad();
    developedCountry.sayHappy();
}
test();