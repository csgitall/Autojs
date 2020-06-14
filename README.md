https://www.autojs.org/

https://github.com/hyb1996/Auto.js

文档：https://hyb1996.github.io/AutoJs-Docs/#/?id=%e7%bb%bc%e8%bf%b0

JavaScript 简介：https://www.runoob.com/js/js-intro.html

Step 1
按 Ctrl+Shift+P 或点击"查看"->"命令面板"可调出命令面板，输入 Auto.js 可以看到几个命令，移动光标到命令Auto.js: Start Server，按回车键执行该命令。
此时VS Code会在右上角显示"Auto.js server running"，即开启服务成功。
Step 2
将手机连接到电脑启用的Wifi或者同一局域网中。通过命令行ipconfig(或者其他操作系统的相同功能命令)查看电脑的IP地址。在Auto.js的侧拉菜单中启用调试服务，并输入IP地址，等待连接成功。
Step 3
通过菜单“查看”->“命令面板”->"Auto.js: Run On Device "来运行。

作者：面向未来41319
链接：https://www.jianshu.com/p/d2ad3ce9cf87
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

【免root脚本制作教程】Auto.js使用教程 （20200603）
https://www.bilibili.com/read/cv1373672
 Auto.js是一款写脚本UI界面，运行脚本，制作简单安卓app的全开源的免费APP，类似于按键精灵，本软件除了有全部按键精灵的功能，还有其他例如控件操作等。本软件写脚本基于javascript所以在写脚本方面代码难度较大。
作者：Henry浩然
click(500,500); 这个坐标是已手机左上角为坐标系原点，一直延伸像右下角，大小等于你手机分辨率的一个坐标系。
sleep(t);
press(x,y,t); 其中前两个和click一样，设置点击坐标，第三个设置点击时常，单位是毫秒，
swipe(x1,y1,x2,y2,t); 前两个为设置滑动开始的点的坐标，第三四个为设置滑动终止的点的坐标，第五个为滑动总消耗的时间长短。
click，press，swipe是只有安卓7.0及以上才可以使用
需要无障碍服务权限，不然运行会报错：无障碍服务权限未打开。然后程序直接运行结束，为了防止这种事情发生我们可以在代码开头加一行auto.waitFor();这句话的功能是，获取无障碍服务权限，如果已经有了，那就继续运行下面的代码，如果没有，就跳转到给无障碍服务权限的界面，并且等待给了权限，再继续运行下面的代码。在代码之前申请好运行的权限是一个好习惯。
基本if语句，if else语句，if-else if-else语句，
switch语句
device.width 手机屏幕分辨率宽度，单位像素
device.height手机屏幕分辨率高度，单位像素
console.show(); 显示控制台。这会显示一个控制台的悬浮窗（需要悬浮窗权限），打印到日志的内容也会在控制台上显示，控制台还可以输入信息，调整大小等，非常适合调试代码。
console.hide; 隐藏之前显示出来的控制台。
console.rawlnput(data); 运行这段代码时，程序会进入等待状态，控制台内的输入框，可以打印信息内容，直到点击确定，可以把输入框内的信息返回。
dialogs.confirm(title,content); 这个功能会弹出个选择对话框，下面有确定和取消两个按钮，点击确定会返回true，点击取消会返回false。title和content都为字符串类型。分别设置为对话框的标题和内容的文字。
engines.execScriptFile(path); 通过脚本文件路径，用一个脚本，启动另一个脚本，path是字符串是文件保存的路径 可以用绝对路径或者相对路径
engines.stopAll()；停止所有在运行的脚本文件，包括脚本自身。
exit(); 停止当前脚本，关闭前记得释放需要释放资源，该功能对悬浮窗等无效。
app.launchApp(appName); appName要打开的app名
通过应用名称启动应用。如果该名称对应的应用不存在，则返回false；否则返回true，如果该名称对应多个应用，则只启动其中某一个。
app.launch(packageName); 通过包名启动app。包名可以在悬浮窗设置中查看到，也可以用app.getPackageName（appName）；通过输入应用名获取到。
app.uninstal(packageName); 通过包名卸载app，会有确认提示框。
app.openUrl(url); 打开浏览器，并打开指定网址的网站，如果没浏览器，会抛出ActivityNotException报错信息。
back(); 返回。模仿手机返回键效果。
home(); 桌面。模仿手机主屏幕键效果。
random(min,max); 随机数，随机生成min和max之间的一个整数。
toastLog(message); 相当于toast（message）；log（message），显示信息message并在控制台中输出。把气泡输出和打印输出结合，提高代码简洁度。message输入要打印的信息。
device.vibrate(millis); 让手机振动输入millis为要振动的时间，单位是毫秒，比如振动一秒的代码为：device.vibrate（1000）；
device.keepScreenOn(time); 让手机屏幕保持常亮，输入要保持常亮的时间time单位是毫秒，不输入则为永远。
setClip(text); 设置手机剪贴板的内容，输入要设置的文字字符串。
getClipo(); 获取手机剪贴板内容，返回手机剪贴板上的文字字符串。

for循环的基本使用
基本语法为for（语句1；判断内容语句2）{循环体}
for循环后面括号里的两个分号，必须不能省略
可以使用 break 和 continue
do while循环，是比较少用的一个循环，语法是：do{循环体} while（判断内容）；
setInterval循环，这个循环的功能是定时循环，也就是每运行一次循环体，会等待一段时间。他的语法是setInterval（function() {循环体},延时）；这个循环的问题在于并没有判断内容，也就是说，要停止这个循环只能用上面提到的break功能，后面输入的延时，是每次循环体内容运行后，等待的时间，单位是毫秒，所有程序里的时间，单位一般都是毫秒。这个功能一般比较少用。
数组的创建
var array=[1,2,3,4];
for(var i-0; i<array. length; i++) {
array[i]++;
}

控件是指对数据和方法的封装。控件可以有自己的属性和方法，其中属性是控件数据的简单访问者，方法则是控件的一些简单而可见的功能、控件创建过程包括设计、开发、调试工作，然后是控件的使用。
控件就是页面上的一个个内容。比如说一个图片就是一个图片控件，一个输入框就是一个输入框控件等等，常见的控件有：TextView，EditText，Button，CheckBox，RadioButton，ImageView，ImageButton，ProgressBar等。然后这些控件有着一定的属性，我们可以通过他们的属性用脚本获取到他们，也可以通过控件类的函数对他进行一定的操作，和获取信息等。比如直接通过控件对齐进行点击，设置输入框控件内的文字，获取某控件的位置等等。
在autojs软件中有直接获取到控件信息的功能，在auto.js软件主页面，点击右上角，打开侧拉菜单，大致中间位置的悬浮窗打开。这个auto.js的悬浮窗就含有获取控件信息的功能。
点击悬浮窗我们可以看到有5个功能，中间蓝色的就是用于查看控件信息的功能，点击之后，会让你选择用布局范围分析和布局层次分析
布局范围分析，使用该功能，可以直接看到当前页面上所有控件的边框即控件位置，这样可以清晰的了解各种控件的位置以及大小。但是这种方法也有缺点，就是比如有两个完全相同大小的控件重叠在一起就看不见了，这时候就要用到布局层次分析。布局层次分析，即根据软件当前页面的源码布局层次进行观察，这样可以看到所有控件及其层次等。但是这样子对于比较复杂的布局九很难进行观察，毕竟内容较多，距离远的话难以比较。所以在布局层次和布局范围中进行切换查看是比较好的获取控件信息的方法。
点击选择的控件即可查看控件信息，比较主要的控件信息有id即控件的id属性，text控件的文本属性，bounds控件的边框位置，desc控件的desc值，有些控件会把text控件放空，并把上面的文本写入desc值。clickable/longClickable控件是否可以点击/长按，如果控件的clickable为false那么点击也没用。checked控件是否选中，depth在第几层次，indexinParent在父控件中是第几个，在教程文档的选择器那一栏中有更多属性。这些信息对于以后写脚本都有很大的帮助。
控件的调用方法：
比如：id（"a"）.text（"abc"）.findOne().click()；这里的id()，text(），.findOne(），.click(）分别都是上面那三个类中的函数，比如id(）这个函数是控件选择器的函数，他的返回值还是控件选择器，所以后面接的函数还是控件选择器的函数，text（）这就也是一个控件选择器的函数，他的返回值还是控件选择器，所以后面继续接控件选择器的函数findOne(）然后这个函数的返回值是控件，所以后面接控件的函数click(）。上面那句语句解释一下，就是，选择id属性为a的，text属性为abc的控件，直到找到一个符合以上条件的控件，对其点击。
desc()也就是匹配desc值为传入字符串的控件，用descContains("cd")，desc属性包含传入的字符串的话，那就能匹配出desc值为abcd，abcde，cde，cd的控件，还有的descStartsWith()和descEndsWith()即为分别匹配以传入的字符串开头或者结尾的·desc值的控件，
几乎属性数据类型是字符串的控件都有着五个选择器函数进行选择，例如：text()，textContains()，textStartsWith()，textEndsWith()，textMatches()，id()，idContains()，idStartsWith()，idEndsWith()，idMatches()，还有className，package等就不一举例了。
有的时候真的会碰到一些奇葩的软件，所有属性要么没有，要么都一样，这个时候可以用控件的边框位置来进行筛选，主要有两个比较常用的函数，bounds0和boundslnside0，我们要传入的变量就是控件的位置范围，由四个整数值组成前两个值为控件长方形左上角的坐标，后两个值是控件右下角点的坐标。举个例子，我们要筛选左上角坐标233，233到右下角坐标666，666内部的控件即为boundslnside（233，233，666，66），这样在这个框内部的所有控件会全部筛选出来，与他不同的一个边框选择器是直接的bounds0这个函数相对来说不算很常用，因为他的作用是匹配出边框是传入的四个值的控件，必须完全一样，在很多属性都一样的时候才会用。

最后要介绍的是一个最强的万能选择器函数-过滤函数，他传入的内容是一个返回布尔值的匿名函数，函数的传入值是当前符合的所有控件。他会把会让函数返回值为false的内容全部过滤掉。我们直接用文档中的一个例子来对齐进行解释，假如我们要写的是过滤出text属性有10个字符的控件，他的代码是filter（function（w）{return w.text）.length==10}），我们知道function是新函数的意思，return在函数中即是函数的结束也是函数返回内容的代码，这个函数中先获取了控件w，即传入进来的控件的一个，的text属性（即后面要讲的控件.text（），获取控件信息的函数）这个属性值是字符串，可以用length属性来获取到他的长度，然后用关系运算符==（作用是比较左右两边内容是否相同，相同返回true，不同false）把他和我们要过滤出来的10进行比较，即他最后返回的布尔值数据类型。然后他会过滤出那些所有返回值为true，即符合的控件。

其它选择器的函数
findOne()
findOnce()
find()函数会把选择器转换成合集，他的功能是在当前屏幕上搜索所有符合条件的控件并且都放入控件合集，一起返回，如果没有，那就会返回一个空的控件合集。
untilFind()同样是返回控件合集，但是不同在于，他会循环寻找，至少要找到一个才会返回合集。也就是说不会返回空合集。
还有一些控件选择器函数，返回的是其他数据类型，例如函数选择器.exists0，他返回的就是当前屏幕上是否存在符合条件的控件选择器。
甚至还有一些函数没有返回值，只有一些运行效果，比如选择器.waitFor，他会一直等待符合条件的控件出现。
更多内容查看 https://www.bilibili.com/read/cv1328014



函数的定义和参数的传递
函数还可以传入多个参数，中间用逗号（英文半角）隔开：
addLog（123，456）；
function addLog（n，m）{
log（n+m）
}

