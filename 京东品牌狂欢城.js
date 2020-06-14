//by gong56 from zkb
//京东品牌狂欢城js脚本0602
//默认自动进入活动页面，如需手动则把第11行跳转等于 1改为0


auto.waitFor();

var i = 0;
var j = 0;
var k = 1;
var 跳转 = 0; //默认自动进入，如需手动则把1改为0
console.show()
log("等待进入个人中心");

if(跳转){
    sleep(1000);
    log("正在跳转到个人中心");
app.startActivity({ 
  data: "openApp.jdMobile://virtual?params=%7B%22des%22%3A%22m%22%2C%22url%22%3A%22https%3A%2F%2Fh5.m.jd.com%2FbabelDiy%2FZeus%2FQzjyrF2MpMcB5yq9zwaNpwspZWx%2Findex.html%22%2C%22category%22%3A%22jump%22%2C%22sourceType%22%3A%22JSHOP_SOURCE_TYPE%22%2C%22sourceValue%22%3A%22JSHOP_SOURCE_VALUE%22%2C%22M_sourceFrom%22%3A%22lkyl%22%2C%22msf_type%22%3A%22click%22%2C%22m_param%22%3A%7B%22m_source%22%3A%220%22%2C%22event_series%22%3A%7B%7D%2C%22jda%22%3A%22177095863.1664140455.1538579865.1572975960.1572979455.472%22%2C%22usc%22%3A%22androidapp%22%2C%22ucp%22%3A%22t_335139774%22%2C%22umd%22%3A%22appshare%22%2C%22utr%22%3A%22CopyURL%22%2C%22jdv%22%3A%22177095863%7Candroidapp%7Ct_335139774%7Cappshare%7CCopyURL%7C1572882675599%22%2C%22ref%22%3A%22https%3A%2F%2Fh5.m.jd.com%2FbabelDiy%2FZeus%2FQzjyrF2MpMcB5yq9zwaNpwspZWx%2Findex.html%22%2C%22psn%22%3A%221664140455%7C472%22%2C%22psq%22%3A5%2C%22pc_source%22%3A%22%22%2C%22mba_muid%22%3A%221664140455%22%2C%22mba_sid%22%3A%221572979455588510925986537476%22%2C%22std%22%3A%22MO-J2011-1%22%2C%22par%22%3A%22%22%2C%22event_id%22%3A%22Mnpm_ComponentApplied%22%2C%22mt_xid%22%3A%22%22%2C%22mt_subsite%22%3A%22%22%7D%2C%22SE%22%3A%7B%22mt_subsite%22%3A%22%22%2C%22__jdv%22%3A%22177095863%7Candroidapp%7Ct_335139774%7Cappshare%7CCopyURL%7C1572882675599%22%2C%22__jda%22%3A%22177095863.1664140455.1538579865.1572975960.1572979455.472%22%7D%7D",
});
}

sleep(1000);

textContains("逛以下店铺立赚").waitFor();

sleep(2000);
log("已进入个人中心\n准备做任务");
sleep(2000);
log("做第一个任务");
var a = className("android.widget.ListView").indexInParent(2).depth(14).findOne(3000);
if(a != null){
    for (var i = 0; i < a.childCount(); i++) {
    if(textContains("（8/8）").exists()){
         log("貌似第一个任务完成了");
         break;}
    
    a.child(i).child(0).click();
    gong56();
    
    }}

sleep(2000);
log("做第二个任务");
var a = className("android.widget.ListView").indexInParent(0).depth(16).findOne(3000);
if(a != null){
    for (var i = 0; i < 20; i++) {
    if(textContains("（20/20）").exists()){
         log("貌似第二个任务完成了");
         break;}
    
    a.child(i).child(0).click();
    gong56();
    
    }}


sleep(2000);
log("准备进入任务中心");
text("javascript:;").findOnce(2).click();

text("汪币任务中心").waitFor();
sleep(3000);
log("已进入任务中心\n准备做任务");

sleep(1000);
i=0;
while(k){
var a = text("javascript:;").findOnce(3);
if(a != null){

    i++;
    log("开始第"+i+"次任务");
    a.click(); 
   
    gong56();

    
  }
else{break;
    }}


sleep(1000);
   while(1){
       var a = textStartsWith("浏览以下热卖单品").findOne(3000);
if(a != null){
//获取父控件
var b = a.parent();

//获取子控件
var c = b.child(1).text();

if(!(c.search("今日已完成") != -1)){
    
    i++;
    log("开始第"+i+"次任务");
    className("android.view.View").indexInParent(0).depth(21).textStartsWith("¥").click(); 
   
    gong56();  

    }
    else{
    
    log("貌似没有任务了，脚本退出\n如未完成，请重新运行");
  exit();
  } 
  }
 else{
    
    log("貌似没有任务了，脚本退出\n如未完成，请重新运行");
  exit();
  } 
       
  } 
  


//返回
function gong56(){
    
    //做任务随机间隔几秒，感觉时间长就改小点，下同
    sleep(random(2000, 4000));  
    
    if(textContains("分享到").exists())
    {k = 0;}
   
   
    if(!textContains("逛以下店铺立赚").exists())
    {back();sleep(2000);}
    if(!textContains("逛以下店铺立赚").exists())
    {back();sleep(2000);}
    if(!textContains("逛以下店铺立赚").exists())
    {back();}
    log("已完成第"+i+"次！");
    sleep(2000);  
     
  }
  
  