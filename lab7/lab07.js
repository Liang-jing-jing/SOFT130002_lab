const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];
for(let i = 0; i < 4; i++){
    //设置一个大的div
    var div = document.createElement('div');
    div.setAttribute("class","item");
    document.body.appendChild(div);

    //添加Genre标题
    var p = document.createElement("h4");
    var txt = document.createTextNode("Genre:" + works[i].tips);
    p.appendChild(txt);

    //在div里添加div
    //添加author、lifetime
    var innerDiv = document.createElement('div');
    innerDiv.appendChild(p);
    var h1 = document.createElement('h3');
    var author = document.createTextNode(works[i].author);
    h1.appendChild(author);
    var h2 = document.createElement('h5');
    var lifetime = document.createTextNode("lifetime:" + works[i].lifetime);
    h2.appendChild(lifetime);
    var inner = document.createElement('div');

    //设置位置
    h2.style.position = 'relative';
    var d;
    //根据字符长设置大小
    if(i===0){
        d = "220px";
    }
    else if(i===1){
        d = "130px";
    }
    else if(i===2){
        d = "200px";
    }
    else{
        d = "90px"
    }
    h2.style.left=d;
    h2.style.bottom = "44px";
    //设置inner的大小
    inner.append(h1,h2);
    inner.setAttribute('class', 'inner-box');
    inner.style.height = "40px";
    var innerDiv1=document.createElement("div");
    innerDiv1.setAttribute("class", "inner-box");
    var h3=document.createElement("h3");
    var popPhotos=document.createTextNode("Popular Photos");

    //添加图片
    var tr = document.createElement('tr');
    for (var j = 0; j < works[i].photos.length; j++) {
        var td = document.createElement('td');//存放图片
        var image=document.createElement("img");
        image.setAttribute("class","photo");
        image.src=works[i].photos[j];
        td.appendChild(image);
        tr.appendChild(td);
    }

    h3.appendChild(popPhotos);
    innerDiv1.appendChild(h3);
    innerDiv1.appendChild(tr);

    //添加一个button
    var btn = document.createElement("button");
    var text = document.createTextNode("visit");
    btn.appendChild(text);

    div.appendChild(innerDiv);
    div.appendChild(inner);
    div.appendChild(innerDiv1);
    div.appendChild(btn);


}