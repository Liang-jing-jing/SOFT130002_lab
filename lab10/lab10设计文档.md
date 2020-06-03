# lab10设计文档

### exercise7

截图如下：

![sample](screenshots/exe7_pdo_1.png)

![sample](screenshots/exe7_pdo_2.png)

![sample](screenshots/exe7_mysqli.png)


### exercise8

截图如下：

![sample](screenshots/exe8_1.png)

![sample](screenshots/exe8_2.png)


#### outputArtists

1.根据姓氏从第一行开始选出30个artists

2.通过$_GET['id']判断是否被点中，从而赋予不同的class，以此改变样式


#### outputPainting

1.通过$_GET['id']判断被选中的artist从而展示他的照片


#### outputSinglePainting

1.通过参数$row['ImageFileName']、$row['Title']、$row['Excerpt']确定当前艺术家的作品的主要信息并按照相同的样式打印出来


### exercise9

截图同exercise8

#### 执行sql语句的方式

1.PDOStatement::bindValue — 把一个值绑定到一个参数

2.PDOStatement::execute — 执行一条预处理语句

用prepared statements减少了代码量



